import { Schema, models, model } from "mongoose";

const InquirySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    eventDate: { type: String },
    eventType: { type: String },
    guestCount: { type: String },
    message: { type: String, required: true },
    consentTransactional: { type: Boolean },
    consentMarketing: { type: Boolean },
    utmSource: { type: String },
    utmMedium: { type: String },
    utmCampaign: { type: String },
    utmTerm: { type: String },
    utmContent: { type: String },
    gclid: { type: String },
    fbclid: { type: String },
    msclkid: { type: String },
    attributionLandingPage: { type: String },
    attributionCapturedAt: { type: String },
  },
  {
    timestamps: true,
  },
);

export const Inquiry = models.Inquiry || model("Inquiry", InquirySchema);

