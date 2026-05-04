/**
 * Forwards contact form submissions to Go High Level (LeadConnector) inbound webhook.
 * Set HIGHLEVEL_CONTACT_WEBHOOK_URL in env to override the default trigger URL.
 */
const DEFAULT_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/1rucOoZ7U4YprPxXG1g8/webhook-trigger/d76520b5-3ed2-455c-a86a-457ba7c7f89b";

export type HighLevelContactPayload = {
  name: string;
  email: string;
  phone?: string;
  eventDate?: string;
  eventType?: string;
  guestCount?: string;
  message: string;
  consentTransactional: boolean;
  consentMarketing: boolean;
};

function splitName(full: string): { first_name: string; last_name: string } {
  const trimmed = full.trim();
  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { first_name: "", last_name: "" };
  if (parts.length === 1) return { first_name: parts[0], last_name: "" };
  return { first_name: parts[0], last_name: parts.slice(1).join(" ") };
}

/**
 * POSTs JSON to the HighLevel webhook. Returns true if the server accepts (2xx).
 */
export async function forwardContactToHighLevel(data: HighLevelContactPayload): Promise<boolean> {
  const url = process.env.HIGHLEVEL_CONTACT_WEBHOOK_URL?.trim() || DEFAULT_WEBHOOK;
  const { first_name, last_name } = splitName(data.name);

  const body = {
    first_name,
    last_name,
    full_name: data.name.trim(),
    name: data.name.trim(),
    email: data.email.trim(),
    phone: (data.phone ?? "").trim(),
    event_date: (data.eventDate ?? "").trim(),
    event_type: (data.eventType ?? "").trim(),
    guest_count: (data.guestCount ?? "").trim(),
    message: data.message.trim(),
    consent_transactional: data.consentTransactional,
    consent_marketing: data.consentMarketing,
    source: "sterlingeventrentals.com_contact_form",
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("HighLevel webhook non-OK:", res.status, text.slice(0, 500));
      return false;
    }
    return true;
  } catch (err) {
    console.error("HighLevel webhook request failed:", err);
    return false;
  }
}
