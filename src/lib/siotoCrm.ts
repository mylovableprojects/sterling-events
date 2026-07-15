import type { AttributionSnapshot } from "./attribution";

const DEFAULT_SUPABASE_URL = "https://ttqqwggnqxoktuuhhbyc.supabase.co";
const LEAD_SOURCE = "Sterling Event Rentals - Website form";
const LEAD_BRAND = "Sterling Event Rentals";

export type SiotoContactPayload = {
  name: string;
  email: string;
  phone?: string;
  eventDate?: string;
  eventType?: string;
  guestCount?: string;
  message: string;
  consentTransactional: boolean;
  consentMarketing: boolean;
  attribution?: AttributionSnapshot;
};

function getSiotoConfig(): {
  url: string;
  key: string;
  intakeKey: string;
} | null {
  const url = process.env.SIOTO_SUPABASE_URL?.trim() || DEFAULT_SUPABASE_URL;
  const key = process.env.SIOTO_SUPABASE_PUBLISHABLE_KEY?.trim();
  const intakeKey = process.env.SIOTO_INTAKE_KEY?.trim();
  if (!key || !intakeKey) return null;
  return { url, key, intakeKey };
}

function attributionToNoteLines(a: AttributionSnapshot | undefined): string[] {
  if (!a) return [];
  const lines: string[] = [];
  if (a.utmSource) lines.push(`utm_source: ${a.utmSource}`);
  if (a.utmMedium) lines.push(`utm_medium: ${a.utmMedium}`);
  if (a.utmCampaign) lines.push(`utm_campaign: ${a.utmCampaign}`);
  if (a.utmTerm) lines.push(`utm_term: ${a.utmTerm}`);
  if (a.utmContent) lines.push(`utm_content: ${a.utmContent}`);
  if (a.gclid) lines.push(`gclid: ${a.gclid}`);
  if (a.fbclid) lines.push(`fbclid: ${a.fbclid}`);
  if (a.msclkid) lines.push(`msclkid: ${a.msclkid}`);
  if (a.attributionLandingPage) lines.push(`landing_page: ${a.attributionLandingPage}`);
  if (a.attributionCapturedAt) lines.push(`attribution_captured_at: ${a.attributionCapturedAt}`);
  return lines;
}

function buildLeadNotes(data: SiotoContactPayload): string | null {
  const notes: string[] = [];
  const eventDate = (data.eventDate ?? "").trim();
  const eventType = (data.eventType ?? "").trim();
  const guestCount = (data.guestCount ?? "").trim();
  const message = data.message.trim();

  if (eventDate) notes.push(`Event date: ${eventDate}`);
  if (eventType) notes.push(`Event type: ${eventType}`);
  if (guestCount) notes.push(`Guest count: ${guestCount}`);
  if (message) notes.push(message);

  notes.push(`Consent — transactional contact: ${data.consentTransactional ? "yes" : "no"}`);
  notes.push(`Consent — marketing texts: ${data.consentMarketing ? "yes" : "no"}`);

  const attributionLines = attributionToNoteLines(data.attribution);
  if (attributionLines.length > 0) {
    notes.push("Attribution:");
    notes.push(...attributionLines);
  }

  return notes.length > 0 ? notes.join("\n") : null;
}

/**
 * POSTs a lead to SIOTO CRM via Supabase RPC submit_lead. Returns true on 2xx.
 */
export async function forwardContactToSiotoCrm(data: SiotoContactPayload): Promise<boolean> {
  const config = getSiotoConfig();
  if (!config) {
    console.error("SIOTO CRM: SIOTO_SUPABASE_PUBLISHABLE_KEY or SIOTO_INTAKE_KEY is not set.");
    return false;
  }

  const endpoint = `${config.url.replace(/\/$/, "")}/rest/v1/rpc/submit_lead`;
  const body = {
    intake_key: config.intakeKey,
    lead_name: data.name.trim(),
    lead_phone: (data.phone ?? "").trim() || null,
    lead_email: data.email.trim() || null,
    lead_source: LEAD_SOURCE,
    lead_notes: buildLeadNotes(data),
    lead_brand: LEAD_BRAND,
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("SIOTO CRM submit_lead non-OK:", res.status, text.slice(0, 500));
      return false;
    }
    return true;
  } catch (err) {
    console.error("SIOTO CRM submit_lead request failed:", err);
    return false;
  }
}
