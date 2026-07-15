/**
 * Captures marketing attribution from the URL and sessionStorage.
 * - Reads utm_* and ad click IDs on each load; merges into session (last in-URL values win).
 * - Persists across same-tab navigation until the tab closes.
 *
 * Included in SIOTO CRM lead_notes when a contact form is submitted.
 */

const STORAGE_KEY = "ser_contact_attribution_v1";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
] as const;

export type TrackedParam = (typeof TRACKED_PARAMS)[number];

export type AttributionSnapshot = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
  /** Full URL when attribution params were first stored this session */
  attributionLandingPage?: string;
  /** ISO timestamp when attributionLandingPage was set */
  attributionCapturedAt?: string;
};

type StoredShape = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
  attribution_landing_page?: string;
  attribution_captured_at?: string;
};

const MAX_LEN = 500;
const LANDING_MAX = 2000;

function clip(s: string, max = MAX_LEN): string {
  return s.length > max ? s.slice(0, max) : s;
}

function readStored(): StoredShape {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as StoredShape;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStored(data: StoredShape): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* quota / private mode */
  }
}

/**
 * Call once when the app loads a client page (e.g. contact form mount).
 * Merges any attribution query params into sessionStorage.
 */
export function syncAttributionFromBrowser(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const updates: Partial<StoredShape> = {};

  for (const key of TRACKED_PARAMS) {
    const v = params.get(key)?.trim();
    if (v) updates[key] = clip(v);
  }

  if (Object.keys(updates).length === 0) return;

  const prev = readStored();
  const next: StoredShape = { ...prev, ...updates };

  if (!prev.attribution_landing_page) {
    try {
      next.attribution_landing_page = clip(window.location.href, LANDING_MAX);
      next.attribution_captured_at = new Date().toISOString();
    } catch {
      /* ignore */
    }
  }

  writeStored(next);
}

function storedToSnapshot(stored: StoredShape): AttributionSnapshot {
  const out: AttributionSnapshot = {};
  if (stored.utm_source) out.utmSource = stored.utm_source;
  if (stored.utm_medium) out.utmMedium = stored.utm_medium;
  if (stored.utm_campaign) out.utmCampaign = stored.utm_campaign;
  if (stored.utm_term) out.utmTerm = stored.utm_term;
  if (stored.utm_content) out.utmContent = stored.utm_content;
  if (stored.gclid) out.gclid = stored.gclid;
  if (stored.fbclid) out.fbclid = stored.fbclid;
  if (stored.msclkid) out.msclkid = stored.msclkid;
  if (stored.attribution_landing_page) out.attributionLandingPage = stored.attribution_landing_page;
  if (stored.attribution_captured_at) out.attributionCapturedAt = stored.attribution_captured_at;
  return out;
}

/** Values to send with the contact form (may be empty if no campaign params were seen). */
export function getAttributionSnapshot(): AttributionSnapshot {
  if (typeof window === "undefined") return {};
  return storedToSnapshot(readStored());
}

/** Non-empty snapshot — useful to skip spreading empty keys into Mongo. */
export function hasAttributionData(a: AttributionSnapshot): boolean {
  return Object.values(a).some((v) => v != null && String(v).length > 0);
}

function strField(v: unknown, max: number): string | undefined {
  if (v == null) return undefined;
  const s = String(v).trim();
  if (!s) return undefined;
  return s.length > max ? s.slice(0, max) : s;
}

/** Sanitize JSON `attribution` from the client before DB / email / webhooks. */
export function sanitizeAttributionPayload(raw: unknown): AttributionSnapshot {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const o = raw as Record<string, unknown>;
  return {
    utmSource: strField(o.utmSource, MAX_LEN),
    utmMedium: strField(o.utmMedium, MAX_LEN),
    utmCampaign: strField(o.utmCampaign, MAX_LEN),
    utmTerm: strField(o.utmTerm, MAX_LEN),
    utmContent: strField(o.utmContent, MAX_LEN),
    gclid: strField(o.gclid, MAX_LEN),
    fbclid: strField(o.fbclid, MAX_LEN),
    msclkid: strField(o.msclkid, MAX_LEN),
    attributionLandingPage: strField(o.attributionLandingPage, LANDING_MAX),
    attributionCapturedAt: strField(o.attributionCapturedAt, 64),
  };
}
