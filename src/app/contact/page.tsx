import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

const BASE = "https://www.sterlingeventrentals.com";

const contactTitle = "Get a Quote for Chicago Event Rentals | Sterling Event Rentals";
const contactDescription =
  "Request a quote for tent, table, stage, and event rentals in Chicago, Evanston, Oak Park, Naperville, Schaumburg, and across Chicagoland. Share your date, venue, and guest count — full itemized quote within one business day.";

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: { canonical: `${BASE}/contact` },
  openGraph: {
    title: contactTitle,
    description: contactDescription,
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
    title: contactTitle,
    description: contactDescription,
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

const contactBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <Script id="ld-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <Script id="ld-bc-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbSchema) }} />
      <PageHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/contact", label: "Contact" },
            ]}
          />
        }
        eyebrow="Contact"
        title="Get a quote for your Chicago event."
        subhead="Tell us your event date, location, and guest count. We’ll confirm availability and send a full itemized quote — usually within one business day. Summer and fall weekends book fast, so it’s worth reaching out early."
        primaryCta={{ href: "#contact-form", label: "Jump to quote form" }}
        secondaryCta={{ href: "/services", label: "Browse Our Services" }}
        afterPhone={
          <a
            href="mailto:info@sterlingeventrentals.com"
            className="inline-block text-sm text-[var(--champagne)]/70 transition-colors hover:text-[var(--gold-light)]"
          >
            info@sterlingeventrentals.com
          </a>
        }
        trailingSlot={
          <div id="contact-form" className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <ContactForm />
          </div>
        }
      />

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
