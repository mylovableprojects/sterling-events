import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionIntro } from "@/components/SectionIntro";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { ServiceImagePlaceholder } from "@/components/ServiceImagePlaceholder";
import { FAQAccordion } from "@/components/FAQAccordion";

const BASE = "https://sterlingeventrentals.com";
const canonical = `${BASE}/service-area`;

const SERVICE_AREA_FAQS = [
  {
    question: "Do you serve my zip code?",
    answer:
      "Sterling serves Chicago and the Greater Chicagoland area. The best way to confirm your zip code is to call (773) 692-7576 or send your address via the contact form. We'll confirm quickly.",
  },
  {
    question: "Can you deliver to a forest preserve or public park?",
    answer:
      "Yes, we deliver to forest preserves, park district sites, and other public venues in our service area. You are responsible for any permits the venue or jurisdiction requires — see our Chicago tent permit guide for more.",
  },
  {
    question: "How far do you deliver from Chicago?",
    answer:
      "We serve Chicago and the Greater Chicagoland area, including Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and surrounding north, south, west, and northwest suburbs. Specific locations are confirmed on a case-by-case basis — call (773) 692-7576 with your venue address or zip code to confirm.",
  },
  {
    question: "What is the easiest way to confirm my location?",
    answer:
      "Call (773) 692-7576 with your event date and venue address or zip code. You can also use the contact form — include your location and we'll confirm delivery availability and send a quote.",
  },
] as const;

const VENUE_CARDS = [
  {
    icon: "🏢",
    title: "Corporate Campuses",
    body: "Office parks, corporate headquarters, and outdoor event spaces across the metro area.",
  },
  {
    icon: "🌳",
    title: "Park District & Forest Preserves",
    body: "Lakefront parks, forest preserves, and park district sites. Permits are the customer's responsibility.",
  },
  {
    icon: "🏨",
    title: "Hotel Courtyards & Venues",
    body: "Hotel courtyards, rooftop terraces, and private event spaces throughout the city and suburbs.",
  },
  {
    icon: "🎓",
    title: "University & School Grounds",
    body: "University quads, school grounds, and institutional outdoor spaces.",
  },
  {
    icon: "🏠",
    title: "Private Residences",
    body: "Backyard events, private estates, and residential gatherings across Chicagoland.",
  },
  {
    icon: "🌊",
    title: "Lakefront & Outdoor Spaces",
    body: "Chicago lakefront adjacent venues, outdoor plazas, and public gathering spaces.",
  },
] as const;

const metaTitle = "Service Area | Event Rentals Chicago, Evanston, Naperville, Oak Park & Chicagoland";
const metaDescription =
  "Sterling Event Rentals delivers to Chicago and across Chicagoland — including Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and surrounding suburbs. Call (773) 692-7576 to confirm delivery to your zip code or venue.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: canonical,
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
    title: metaTitle,
    description: metaDescription,
  },
};

export default function ServiceAreaPage() {
  return (
    <>
      <Script
        id="ld-service-area"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Sterling Event Rentals — Chicago Service Area",
            areaServed: [
              { "@type": "City", name: "Chicago", containedInPlace: { "@type": "State", name: "Illinois" } },
              { "@type": "AdministrativeArea", name: "Chicagoland" },
              { "@type": "City", name: "Evanston", containedInPlace: { "@type": "State", name: "Illinois" } },
              { "@type": "City", name: "Oak Park", containedInPlace: { "@type": "State", name: "Illinois" } },
              { "@type": "City", name: "Naperville", containedInPlace: { "@type": "State", name: "Illinois" } },
              { "@type": "City", name: "Schaumburg", containedInPlace: { "@type": "State", name: "Illinois" } },
              { "@type": "City", name: "Orland Park", containedInPlace: { "@type": "State", name: "Illinois" } },
            ],
          }),
        }}
      />
      <Script
        id="ld-breadcrumbs-service-area"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name: "Service Area", item: canonical },
            ],
          }),
        }}
      />

      {/* SECTION 1 — HERO (unchanged) */}
      <section className="gradient-hero relative min-h-[75vh] overflow-hidden">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="gradient-orb bottom-[-5rem] right-[-4rem] h-72 w-72 opacity-60" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/service-area", label: "Service Area" },
            ]}
          />
          <SectionIntro
            eyebrow="Service Area"
            title="What suburbs does Sterling Event Rentals serve?"
            quickAnswer={
              <div className="quick-answer">
                <p>
                  Sterling Event Rentals delivers to Chicago and across the Greater Chicagoland area — including Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and surrounding suburbs. Call (773) 692-7576 with your zip code or venue address and we&apos;ll confirm delivery availability in one conversation.
                </p>
              </div>
            }
          />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact" className="btn-primary">
              Confirm Your Location
            </a>
            <a href="/packages" className="btn-outline">
              See Our Packages
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
          <div className="flex flex-col items-center gap-3 text-[0.65rem] tracking-[0.3em] text-[var(--champagne)]/70 uppercase">
            <span>Scroll</span>
            <div className="scroll-indicator" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — MAP (light) */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--sand)] py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-start lg:gap-12">
          <div className="min-w-0 flex-1 lg:max-w-[40%]">
            <h2 className="heading-2 mb-6 text-[var(--charcoal)]">Where do you deliver in Chicago and Chicagoland?</h2>
            <p className="mb-4 text-base leading-relaxed text-[var(--charcoal)]/90">
              Sterling delivers throughout the city of Chicago and the Greater Chicagoland area. In the city, we serve events in neighborhoods and corridors including the Loop, River North, Lincoln Park, Wicker Park, Bronzeville, Hyde Park, Pilsen, Andersonville, Lakeview, and South Loop — and in major event areas such as the Michigan Avenue corridor, McCormick Place area, Navy Pier–adjacent venues, and the Millennium Park area.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[var(--charcoal)]/90">
              In the suburbs, we serve the north, south, west, and northwest Chicagoland area — including Evanston, Oak Park, Naperville, Schaumburg, and Orland Park. Call (773) 692-7576 with your zip code or venue address to confirm delivery to your specific location.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "North Suburbs",
                "South Suburbs",
                "West Suburbs",
                "Northwest Suburbs",
                "Evanston",
                "Oak Park",
                "Naperville",
                "Schaumburg",
                "Orland Park",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[var(--gold)]/40 px-4 py-1.5 text-sm text-[var(--charcoal)]"
                >
                  {label}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2 hover:decoration-[var(--gold-light)]"
            >
              Confirm your location →
            </Link>
          </div>
          <div className="w-full flex-shrink-0 lg:w-[60%]">
            <MapPlaceholder />
          </div>
        </div>
      </section>

      {/* SECTION 3 — VENUE TYPES (dark) */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="heading-2 mb-10 text-[var(--cream)]">What types of venues do you deliver to?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VENUE_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="mb-3 block text-2xl text-[var(--gold)]" aria-hidden>
                  {card.icon}
                </span>
                <h3 className="mb-2 font-medium text-[var(--cream)]">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--champagne)]/75">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-[var(--champagne)]/80">
            Permits required for public parks and some venues are the customer&apos;s responsibility.{" "}
            <Link href="/resources/chicago-tent-permits" className="text-[var(--gold-light)] hover:underline">
              See our Chicago tent permit guide →
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 4 — HOW DELIVERY WORKS (light) */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--sand)] py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2">
            <ServiceImagePlaceholder
              label="Delivery truck setup — outdoor venue"
              aspectRatio="4/3"
              className="rounded-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="section-eyebrow mb-2">Delivery & Setup</p>
            <h2 className="heading-2 mb-6 text-[var(--charcoal)]">What delivery looks like</h2>
            <ul className="space-y-4 text-base leading-relaxed text-[var(--charcoal)]/90">
              <li>
                <strong className="text-[var(--navy)]">Full-service, not drop-off.</strong>{" "}
                Our crew delivers, sets up, and tears down. You don&apos;t manage logistics — we do.
              </li>
              <li>
                <strong className="text-[var(--navy)]">Transparent pricing, no surprises.</strong>{" "}
                Every quote includes equipment, setup fee, and any applicable delivery fees for your location. The number we give you is the number you pay.
              </li>
              <li>
                <strong className="text-[var(--navy)]">Access and timing.</strong>{" "}
                We need clear truck access to your venue. We arrive before your event window, set up, and return after for teardown.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[var(--charcoal)]/85">
              A surcharge may apply for difficult access or farther locations — always factored into your quote upfront.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2 hover:decoration-[var(--gold-light)]"
            >
              Get a delivery quote →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CONFIRMATION CTA (dark) */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="heading-2 mb-4 text-[var(--cream)]">Not sure if we cover your area?</h2>
          <p className="mb-8 font-[var(--font-body)] text-xl text-[var(--champagne)]">
            Call with your zip code or venue address. We&apos;ll confirm in minutes.
          </p>
          <a
            href="tel:+17736927576"
            className="mb-6 inline-block text-4xl font-light tracking-wider text-[var(--gold)] hover:text-[var(--gold-light)]"
          >
            (773) 692-7576
          </a>
          <p className="mb-6 text-sm text-[var(--champagne)]/60">or</p>
          <Link
            href="/contact"
            className="btn-outline mb-10 inline-flex border-[var(--cream)]/30 text-[var(--cream)] hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/10"
          >
            Submit your venue via the contact form →
          </Link>
          <p className="text-sm tracking-[0.15em] text-[var(--champagne)]/70">
            Licensed · Insured · SIOTO Safety Seal Certified
          </p>
        </div>
      </section>

      {/* SECTION 6 — FAQ (light) */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--sand)] py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="heading-2 mb-6 text-[var(--charcoal)]">
            Common questions about our service area
          </h2>
          <FAQAccordion items={[...SERVICE_AREA_FAQS]} schemaId="ld-faq-service-area" variant="light" />
          <p className="mt-8 text-center text-base text-[var(--charcoal)]/90">
            Ready to confirm?{" "}
            <Link href="/contact" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2 hover:decoration-[var(--gold-light)]">
              Check availability →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
