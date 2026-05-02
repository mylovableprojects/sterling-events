import { Resend } from "resend";

const DEFAULT_TO = "info@sterlingeventrentals.com";

export type ContactEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  eventDate?: string;
  eventType?: string;
  guestCount?: string;
  message: string;
  consentTransactional?: boolean;
  consentMarketing: boolean;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildPlainText(data: ContactEmailPayload): string {
  const lines = [
    "New quote request from sterlingeventrentals.com",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone?.trim() || "(not provided)"}`,
    `Event date: ${data.eventDate?.trim() || "(not provided)"}`,
    `Event type: ${data.eventType?.trim() || "(not provided)"}`,
    `Guest count: ${data.guestCount?.trim() || "(not provided)"}`,
    "",
    "Message:",
    data.message,
    "",
    `Consent — call/text about inquiry: ${data.phone?.trim() ? (data.consentTransactional ? "yes" : "no") : "n/a (no phone)"}`,
    `Consent — promotional SMS: ${data.consentMarketing ? "yes" : "no"}`,
  ];
  return lines.join("\n");
}

function buildHtml(data: ContactEmailPayload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top;color:#1a1a1a">${escapeHtml(label)}</td><td style="padding:6px 0;color:#333">${escapeHtml(value)}</td></tr>`;

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#333">
<p style="margin:0 0 16px;font-size:16px">New quote request from the website contact form.</p>
<table style="border-collapse:collapse;margin-bottom:16px">${row("Name", data.name)}${row("Email", data.email)}${row("Phone", data.phone?.trim() || "—")}${row("Event date", data.eventDate?.trim() || "—")}${row("Event type", data.eventType?.trim() || "—")}${row("Guest count", data.guestCount?.trim() || "—")}</table>
<p style="margin:0 0 8px;font-weight:600">Message</p>
<p style="margin:0 0 16px;white-space:pre-wrap">${escapeHtml(data.message)}</p>
<p style="margin:0;font-size:13px;color:#666">Call/text consent (if phone provided): ${data.phone?.trim() ? (data.consentTransactional ? "yes" : "no") : "n/a"}<br/>Promotional SMS: ${data.consentMarketing ? "yes" : "no"}</p>
</body></html>`;
}

/**
 * Sends a notification email when RESEND_API_KEY and CONTACT_EMAIL_FROM are set.
 * @returns `"sent"` if Resend accepted the message, `"skipped"` if email is not configured or incomplete config.
 * @throws If Resend returns an error (invalid key, quota, etc.).
 */
export async function sendContactNotificationEmail(data: ContactEmailPayload): Promise<"sent" | "skipped"> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey?.trim()) {
    return "skipped";
  }

  const from = process.env.CONTACT_EMAIL_FROM?.trim();
  if (!from) {
    console.error(
      "RESEND_API_KEY is set but CONTACT_EMAIL_FROM is missing. Add CONTACT_EMAIL_FROM (verified domain in Resend).",
    );
    return "skipped";
  }

  const toRaw = process.env.CONTACT_EMAIL_TO?.trim();
  const to = toRaw && toRaw.length > 0 ? toRaw : DEFAULT_TO;

  const resend = new Resend(apiKey);
  const subject = `Website quote request — ${data.name}`;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject,
    text: buildPlainText(data),
    html: buildHtml(data),
    tags: [{ name: "source", value: "contact_form" }],
  });

  if (error) {
    throw new Error(error.message);
  }
  return "sent";
}
