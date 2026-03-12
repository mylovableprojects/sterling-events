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
  },
  {
    timestamps: true,
  },
);

export const Inquiry = models.Inquiry || model("Inquiry", InquirySchema);

