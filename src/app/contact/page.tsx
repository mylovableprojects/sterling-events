import type { Metadata } from "next";
import Script from "next/script";
import { ContactForm } from "@/components/ContactForm";

const BASE = "https://sterlingeventrentals.com";

export const metadata: Metadata = {
  title: "Contact Sterling Event Rentals | Get a Quote",
  description:
    "Get a quote for tent, table, stage, and event rentals in Chicago, Evanston, Oak Park, Naperville, Schaumburg, and across Chicagoland. Share your date, venue, and guest count — full itemized quote within one business day.",
  alternates: { canonical: `${BASE}/contact` },
  openGraph: {
    title: "Contact Sterling Event Rentals | Get a Quote",
    description:
      "Get a quote for tent, table, stage, and event rentals in Chicago, Evanston, Oak Park, Naperville, Schaumburg, and across Chicagoland. Share your date, venue, and guest count — full itemized quote within one business day.",
    url: `${BASE}/contact`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sterling Event Rentals — Event rentals in Chicago and Chicagoland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sterling Event Rentals | Get a Quote",
    description:
      "Get a quote for tent, table, stage, and event rentals in Chicago, Evanston, Oak Park, Naperville, Schaumburg, and across Chicagoland. Share your date, venue, and guest count — full itemized quote within one business day.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Sterling Event Rentals",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Sterling Event Rentals",
    telephone: "+17736927576",
    email: "info@sterlingeventrentals.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+17736927576",
      contactType: "customer service",
      availableLanguage: "English",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <Script id="ld-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-28 top-6 h-56 w-56" />
        <div className="gradient-orb bottom-[-4rem] right-[-3rem] h-72 w-72 opacity-60" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-start">
          <div className="flex-1 space-y-5">
            <div className="section-eyebrow">Contact</div>
            <h1 className="hero-headline text-[var(--cream)]">
              Get a quote for your Chicago event.
            </h1>
            <p className="max-w-md hero-subheadline leading-relaxed text-[var(--champagne)]/80">
              Tell us your event date, location, and guest count. We’ll confirm availability and send a full itemized
              quote — usually within one business day. Summer and fall weekends book fast, so it’s worth reaching out
              early.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-14 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                  Email
                </span>
                <a
                  href="mailto:info@sterlingeventrentals.com"
                  className="text-base text-[var(--champagne)]/80 transition-colors hover:text-[var(--gold)]"
                >
                  info@sterlingeventrentals.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-14 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                  Phone
                </span>
                <a
                  href="tel:+17736927576"
                  className="text-base text-[var(--champagne)]/80 transition-colors hover:text-[var(--gold)]"
                >
                  (773) 692-7576
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 flex-1 md:mt-0">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow mb-10 text-center text-[var(--charcoal)]/60">
            What happens after you submit
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--navy)] font-light text-xl text-[var(--gold)]">
                1
              </div>
              <h3 className="mb-2 font-[var(--font-display)] text-xl text-[var(--navy)]">
                We review your details
              </h3>
              <p className="text-base leading-relaxed text-[var(--charcoal)]/70">
                We check availability for your date and pull together the right equipment for your guest count and event type.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--navy)] font-light text-xl text-[var(--gold)]">
                2
              </div>
              <h3 className="mb-2 font-[var(--font-display)] text-xl text-[var(--navy)]">
                You get a full quote
              </h3>
              <p className="text-base leading-relaxed text-[var(--charcoal)]/70">
                Equipment, setup fee, and any delivery costs — one number, no surprises. Usually within one business day.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--navy)] font-light text-xl text-[var(--gold)]">
                3
              </div>
              <h3 className="mb-2 font-[var(--font-display)] text-xl text-[var(--navy)]">
                50% deposit holds your date
              </h3>
              <p className="text-base leading-relaxed text-[var(--charcoal)]/70">
                Once you’re ready, a 50% deposit locks in your date and equipment. Balance due before delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-[var(--font-display)] text-2xl italic text-[var(--champagne)]/80 md:text-3xl">
            Most quotes go out within one business day. Summer and fall weekends book fast — the sooner you check your date, the better.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest text-[var(--champagne)]/50">
            <span>Licensed</span>
            <span className="text-[var(--gold)]/30">·</span>
            <span>Insured</span>
            <span className="text-[var(--gold)]/30">·</span>
            <span>SIOTO Safety Seal Certified</span>
            <span className="text-[var(--gold)]/30">·</span>
            <span>Serving Chicagoland Since 2021</span>
          </div>
        </div>
      </section>
    </>
  );
}
