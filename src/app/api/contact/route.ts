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

    try {
      await sendContactNotificationEmail({
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
      console.error("Contact notification email failed (inquiry still saved):", emailErr);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

