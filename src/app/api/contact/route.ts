import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Inquiry } from "@/lib/models/Inquiry";
import { sendContactNotificationEmail } from "@/lib/sendContactEmail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, eventDate, eventType, guestCount, message, consentTransactional, consentMarketing } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (phone && phone.trim() && !consentTransactional) {
      return NextResponse.json({ error: "Consent to contact by call or text is required when providing a phone number." }, { status: 400 });
    }

    const mongoUri = process.env.MONGODB_URI?.trim();
    let savedToDatabase = false;

    if (mongoUri) {
      try {
        await connectToDatabase();
        await Inquiry.create({
          name,
          email,
          phone: phone?.trim() || undefined,
          eventDate,
          eventType,
          guestCount,
          message,
          consentTransactional: phone?.trim() ? !!consentTransactional : undefined,
          consentMarketing: !!consentMarketing,
        });
        savedToDatabase = true;
      } catch (dbErr) {
        console.error("Contact API: failed to save inquiry to MongoDB:", dbErr);
      }
    } else {
      console.warn("Contact API: MONGODB_URI is not set — inquiry not saved to the database.");
    }

    let emailSent: "sent" | "skipped" = "skipped";
    try {
      emailSent = await sendContactNotificationEmail({
        name,
        email,
        phone,
        eventDate,
        eventType,
        guestCount,
        message,
        consentTransactional: !!consentTransactional,
        consentMarketing: !!consentMarketing,
      });
    } catch (emailErr) {
      console.error("Contact API: notification email failed:", emailErr);
      if (!savedToDatabase) {
        return NextResponse.json(
          {
            error:
              "We could not save your message. Please call (773) 692-7576 or email info@sterlingeventrentals.com.",
          },
          { status: 503 },
        );
      }
    }

    if (!savedToDatabase && emailSent === "skipped") {
      return NextResponse.json(
        {
          error:
            "This form is not fully configured yet. Please call (773) 692-7576 or email info@sterlingeventrentals.com.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

