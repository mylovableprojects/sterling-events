"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type FormState = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: string;
  message: string;
  consentTransactional: boolean;
  consentMarketing: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  eventType: "",
  guestCount: "",
  message: "",
  consentTransactional: false,
  consentMarketing: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hasPhone = form.phone.trim().length > 0;
    if (hasPhone && !form.consentTransactional) {
      setStatus("error");
      setSubmitting(false);
      return;
    }
    setSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setForm(initialState);
      setErrorMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/20 bg-white/8 px-4 py-3 text-base text-[var(--cream)] placeholder:text-[var(--champagne)]/40 focus:border-[var(--gold)]/60 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-colors";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-[var(--gold)]";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="First & last name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="phone">
            Phone <span className="font-normal text-[var(--champagne)]/60">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="eventDate">
            Event Date
          </label>
          <input
            id="eventDate"
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="eventType">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer appearance-none`}
          >
            <option value="">Select one</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate">Corporate</option>
            <option value="Social">Social / Private</option>
            <option value="Styled Shoot">Styled Shoot</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="guestCount">
            Guest Count
          </label>
          <input
            id="guestCount"
            name="guestCount"
            value={form.guestCount}
            onChange={handleChange}
            className={inputClass}
            placeholder="Approximate number of guests"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Tell us about your event
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} min-h-[140px] resize-y`}
          placeholder="Venue name or address, what equipment you need, any questions about setup or logistics..."
        />
      </div>

      <div className="space-y-3 rounded-xl border border-white/10 bg-black/20 p-4 text-[0.8rem] text-[var(--champagne)]/90">
        <p className="font-semibold text-[var(--cream)]/95">Contact preferences</p>
        <p className="text-[0.75rem] text-[var(--champagne)]/75">
          If you provide a phone number, we may contact you by call or text about your inquiry and rental. Message and data rates may apply. See our{" "}
          <Link href="/legal/terms-of-service" className="text-[var(--gold-light)] underline hover:no-underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/legal/privacy-policy" className="text-[var(--gold-light)] underline hover:no-underline">
            Privacy Policy
          </Link>.
        </p>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consentTransactional"
            checked={form.consentTransactional}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-black/40 text-[var(--gold)] focus:ring-[var(--gold)]/50"
          />
          <span>
            I agree to be contacted by call or text at the number above about my inquiry and any rental. Message and data rates may apply.
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consentMarketing"
            checked={form.consentMarketing}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-black/40 text-[var(--gold)] focus:ring-[var(--gold)]/50"
          />
          <span>
            I agree to receive promotional text messages (e.g. offers, event tips) from Sterling Event Rentals. Message and data rates may apply. Reply STOP to unsubscribe.
          </span>
        </label>
      </div>

      <div className="flex flex-col gap-2 pt-2 text-[0.8rem]">
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary mt-2 w-full py-4 text-base disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Request a Quote →"}
        </button>
        {status === "success" && (
          <span className="text-[var(--gold-light)]">Thank you—our team will be in touch shortly.</span>
        )}
        {status === "error" && (
          <span className="text-red-300">
            {form.phone.trim() && !form.consentTransactional
              ? "Please agree to be contacted by call or text if you provide a phone number."
              : errorMessage}
          </span>
        )}
      </div>
    </motion.form>
  );
}

