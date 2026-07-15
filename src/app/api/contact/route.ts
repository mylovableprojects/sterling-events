import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { forwardContactToSiotoCrm } from "@/lib/siotoCrm";
import { sanitizeAttributionPayload } from "@/lib/attribution";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      eventDate,
      eventType,
      guestCount,
      message,
      consentTransactional,
      consentMarketing,
      attribution: attributionRaw,
      companyWebsite,
    } = body;

    if (companyWebsite?.trim()) {
      return NextResponse.json({ ok: true, submissionId: randomUUID() });
    }

    const attribution = sanitizeAttributionPayload(attributionRaw);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (phone && phone.trim() && !consentTransactional) {
      return NextResponse.json(
        { error: "Consent to contact by call or text is required when providing a phone number." },
        { status: 400 },
      );
    }

    const siotoOk = await forwardContactToSiotoCrm({
      name,
      email,
      phone,
      eventDate,
      eventType,
      guestCount,
      message,
      consentTransactional: !!consentTransactional,
      consentMarketing: !!consentMarketing,
      attribution,
    });

    if (!siotoOk) {
      return NextResponse.json(
        {
          error:
            "We could not save your message. Please call (773) 692-7576 or email info@sterlingeventrentals.com.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true, submissionId: randomUUID() });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
