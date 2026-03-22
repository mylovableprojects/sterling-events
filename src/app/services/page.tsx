import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Gamepad2,
  LayoutGrid,
  MapPin,
  MonitorSpeaker,
  Receipt,
  ShieldCheck,
  Sparkles,
  Tent,
  Truck,
} from "lucide-react";

const BASE = "https://sterlingeventrentals.com";

export const metadata: Metadata = {
  title: "Event Rental Services Chicago | Tents, Tables, Stages | Sterling Event Rentals",
  description:
    "Professional event rental services for Chicago and Chicagoland — tents, tables, stages, interactive installations, and full delivery and setup. Serving Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and surrounding suburbs. Licensed, SIOTO-certified.",
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: "Event Rental Services Chicago | Tents, Tables, Stages | Sterling Event Rentals",
    description:
      "Professional event rental services for Chicago and Chicagoland — tents, tables, stages, interactive installations, and full delivery and setup. Serving Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and surrounding suburbs. Licensed, SIOTO-certified.",
    url: `${BASE}/services`,
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
    title: "Event Rental Services Chicago | Tents, Tables, Stages | Sterling Event Rentals",
    description:
      "Professional event rental services for Chicago and Chicagoland — tents, tables, stages, interactive installations, and full delivery and setup. Serving Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and surrounding suburbs. Licensed, SIOTO-certified.",
  },
};

const serviceHubSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Event Equipment Rental",
  provider: { "@type": "LocalBusiness", name: "Sterling Event Rentals" },
  areaServed: [
    { "@type": "City", name: "Chicago" },
    { "@type": "AdministrativeArea", name: "Chicagoland" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Rental Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tent & Structure Rentals" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tables & Seating Rentals" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stage & Presentation Rentals" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Games & Entertainment Rentals" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Extras & Specialty Rentals" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Delivery, Setup & Teardown" } },
    ],
  },
};

const SERVICE_CARDS = [
  {
    title: "Tents & Structures",
    href: "/services/tents-structures",
    description:
      "Frame tents and pole structures from 20×20 to 40×80+. Anchored, weather-rated, and sized for your guest count. Delivery, setup, and teardown on every order.",
    Icon: Tent,
  },
  {
    title: "Tables & Seating",
    href: "/services/tables-seating",
    description:
      "Round, rectangular, and cocktail tables. Folding, cross-back, and chiavari chair options. Linen upgrades available. Clean, matched, and in place before your first guest arrives.",
    Icon: LayoutGrid,
  },
  {
    title: "Stages & Presentation",
    href: "/services/stages-presentation",
    description:
      "Configurable stage and riser rentals for presentations, ceremonies, and performances. Custom sizing, combinable with tent structures.",
    Icon: MonitorSpeaker,
  },
  {
    title: "Games & Entertainment",
    href: "/services/games-entertainment",
    description:
      "Mechanical bulls, bounce houses, soft play, bubble houses, foam machines, cornhole, photo booths, and more. Built for corporate events that need more than tables — and social events people actually remember.",
    Icon: Gamepad2,
  },
  {
    title: "Event Extras",
    href: "/services/event-extras",
    description:
      "Champagne walls, portable bars, and lounge furniture. The finishing details that make your event look and feel different.",
    Icon: Sparkles,
  },
  {
    title: "Delivery, Setup & Teardown",
    href: "/services/delivery-setup-teardown",
    description:
      "Every order includes professional delivery, full setup, and teardown by our crew. You don't move a single chair. We arrive on time, build it out, and disappear after.",
    Icon: Truck,
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Script
        id="ld-service-hub"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceHubSchema) }}
      />

      {/* SECTION 1 — HERO */}
      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="gradient-orb bottom-[-5rem] right-[-4rem] h-72 w-72 opacity-60" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <div className="space-y-4 md:max-w-2xl">
            <div className="section-eyebrow">Services</div>
            <h1 className="hero-headline text-[var(--cream)]">
              Event Rental Services in Chicago &amp; Chicagoland
            </h1>
            <p className="hero-subheadline max-w-xl text-[var(--champagne)]/85">
              Tents, tables, stages, and specialty installations — delivered, set up, and torn down by our crew.
              You show up and host. We handle everything else.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary">
                Check Availability for Your Date
              </a>
              <a href="/packages" className="btn-outline">
                See Our Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICE CATEGORY CARDS (LIGHT) */}
      <section className="bg-[var(--sand)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal className="max-w-3xl">
            <p className="section-eyebrow text-[var(--charcoal)]/60">What we rent</p>
            <h2 className="heading-2 text-[var(--charcoal)] mt-2">Everything your event needs. One vendor. One call.</h2>
            <p className="mt-4 text-lg text-[var(--charcoal)]/70 max-w-2xl">
              Every rental includes professional delivery, setup, and teardown by our crew. Browse by category or see our packages for bundled pricing.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CARDS.map((card) => (
              <ScrollReveal key={card.href}>
                <Link
                  href={card.href}
                  className="group flex flex-col rounded-2xl bg-white border border-[var(--navy)]/10 p-6 shadow-sm hover:shadow-md hover:border-[var(--gold)]/40 transition-all"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--navy)] text-[var(--gold)]">
                    <card.Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-[var(--font-display)] text-xl text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--charcoal)]/65 flex-1">
                    {card.description}
                  </p>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-[var(--navy)]/50 group-hover:text-[var(--gold)] transition-colors">
                    Explore →
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="/packages"
              className="text-sm font-semibold uppercase tracking-widest text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
            >
              View bundled packages →
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold uppercase tracking-widest text-[var(--charcoal)]/50 hover:text-[var(--gold)] transition-colors"
            >
              Get a custom quote →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS (DARK) */}
      <section className="bg-[var(--navy)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <p className="section-eyebrow text-[var(--gold)]/70">The process</p>
            <h2 className="heading-2 text-[var(--cream)] mt-2">How every rental works</h2>
          </ScrollReveal>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <ScrollReveal className="relative pl-16">
              <div className="absolute left-0 top-0 font-[var(--font-display)] text-6xl font-light leading-none text-[var(--gold)]/20">
                01
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)] mb-3">
                Tell us your event details
              </h3>
              <p className="text-base leading-relaxed text-[var(--champagne)]/75">
                Date, guest count, venue, and what you need. We confirm availability and send a full itemized quote.
              </p>
            </ScrollReveal>
            <ScrollReveal className="relative pl-16">
              <div className="absolute left-0 top-0 font-[var(--font-display)] text-6xl font-light leading-none text-[var(--gold)]/20">
                02
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)] mb-3">
                50% deposit holds your date
              </h3>
              <p className="text-base leading-relaxed text-[var(--champagne)]/75">
                Once you approve the quote, a 50% deposit locks in your equipment and date. Balance due before
                delivery.
              </p>
            </ScrollReveal>
            <ScrollReveal className="relative pl-16">
              <div className="absolute left-0 top-0 font-[var(--font-display)] text-6xl font-light leading-none text-[var(--gold)]/20">
                03
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)] mb-3">
                We deliver, set up, and tear down
              </h3>
              <p className="text-base leading-relaxed text-[var(--champagne)]/75">
                Our crew arrives before your event, installs everything, and returns after for full teardown. You
                don&apos;t lift a thing.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TRUST / WHY STERLING (LIGHT) */}
      <section className="bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
            <ScrollReveal>
              <div className="mb-4 text-[var(--gold)]">
                <ShieldCheck className="h-6 w-6 inline-block" aria-hidden />
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--charcoal)] mb-2">
                SIOTO Safety Seal Certified
              </h3>
              <p className="text-base leading-relaxed text-[var(--charcoal)]/65">
                Independently inspected and certified — not just insured. Credentials you can verify before you book.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="mb-4 text-[var(--gold)]">
                <Receipt className="h-6 w-6 inline-block" aria-hidden />
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--charcoal)] mb-2">
                Full quote before you commit
              </h3>
              <p className="text-base leading-relaxed text-[var(--charcoal)]/65">
                Equipment, setup fee, and delivery costs in one number. No line items added after the fact.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="mb-4 text-[var(--gold)]">
                <MapPin className="h-6 w-6 inline-block" aria-hidden />
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--charcoal)] mb-2">
                Chicago-based crew
              </h3>
              <p className="text-base leading-relaxed text-[var(--charcoal)]/65">
                We deliver and install ourselves — no subcontractors. Same crew, every event.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA CLOSE (DARK) */}
      <section className="bg-[var(--navy)] py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <ScrollReveal className="max-w-2xl">
            <h2 className="heading-2 text-[var(--cream)] max-w-2xl">Ready to get a quote?</h2>
            <p className="mt-4 text-lg text-[var(--champagne)]/75 max-w-xl">
              Tell us your date, guest count, and venue. We&apos;ll confirm availability and send a full quote within one
              business day.
            </p>
          </ScrollReveal>
          <ScrollReveal className="flex flex-wrap justify-center gap-4 md:justify-end">
            <Link href="/contact" className="btn-primary">
              Check Availability
            </Link>
            <Link href="/packages" className="btn-outline">
              See Our Packages
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

