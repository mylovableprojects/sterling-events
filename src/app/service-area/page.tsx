import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SERVICE_AREA_DATA } from "@/lib/serviceAreas";

const BASE = "https://www.sterlingeventrentals.com";
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
  { title: "Corporate Campuses", body: "Office parks, corporate headquarters, and outdoor event spaces across the metro area." },
  { title: "Park District & Forest Preserves", body: "Lakefront parks, forest preserves, and park district sites. Permits are the customer's responsibility." },
  { title: "Hotel Courtyards & Venues", body: "Hotel courtyards, rooftop terraces, and private event spaces throughout the city and suburbs." },
  { title: "University & School Grounds", body: "University quads, school grounds, and institutional outdoor spaces." },
  { title: "Private Residences", body: "Backyard events, private estates, and residential gatherings across Chicagoland." },
  { title: "Lakefront & Outdoor Spaces", body: "Chicago lakefront adjacent venues, outdoor plazas, and public gathering spaces." },
] as const;

const REGION_CARDS = [
  {
    slug: "chicago",
    image: "/images/outdoor-event-planning/Elegant%20Outdoor%20Event%20with%20City%20Views.webp",
    imageAlt: "Elegant outdoor event with Chicago city views",
  },
  {
    slug: "north-suburbs",
    image: "/images/outdoor-event-planning/graduation-class-of-2025.webp",
    imageAlt: "Outdoor graduation celebration under a tent in the Chicago north suburbs",
  },
  {
    slug: "southwest-suburbs",
    image: "/images/outdoor-event-planning/Global%20Corp%20Picnic%20Bash.png",
    imageAlt: "Corporate company picnic under a white event tent in the southwest suburbs",
  },
] as const;

const metaTitle = "Event Rental Service Area | Chicagoland | Sterling Event Rentals";
const metaDescription =
  "Sterling Event Rentals delivers to Chicago and across Chicagoland — Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and surrounding suburbs. Call (773) 692-7576 to confirm delivery to your zip code or venue.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: canonical,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Sterling Event Rentals — Event rentals in Chicago and Chicagoland" }],
  },
  twitter: { card: "summary_large_image", title: metaTitle, description: metaDescription },
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

      <PageHero
        eyebrow="Service Area"
        title="What suburbs does Sterling Event Rentals serve?"
        subhead="Chicago, Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and throughout Chicagoland — confirm your zip or venue in one call."
        breadcrumbs={
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/service-area", label: "Service Area" }]} />
        }
      />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border border-[var(--gold)]/30 bg-[var(--navy)]/60 p-6">
          <p className="faq-answer text-lg leading-relaxed text-[var(--champagne)]">
            Sterling Event Rentals delivers to Chicago and across the Greater Chicagoland area — including Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and surrounding suburbs. Call (773) 692-7576 with your zip code or venue address and we&apos;ll confirm delivery in one conversation.
          </p>
        </div>
      </BelowHeroQuickAnswer>

      {/* ── COVERAGE + PHOTO ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--sand)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-eyebrow mb-3" style={{ color: "#c9a84c" }}>Coverage</p>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-6" style={{ color: "#1a1a1a" }}>
                Where do you deliver in Chicago and Chicagoland?
              </h2>
              <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(26,26,26,0.85)" }}>
                Sterling delivers throughout the city of Chicago and the Greater Chicagoland area — from lakefront corporate events and park district sites to backyard graduations in the suburbs.
              </p>
              <p className="mb-6 text-base leading-relaxed" style={{ color: "rgba(26,26,26,0.85)" }}>
                In the suburbs, we serve north, south, west, and northwest Chicagoland including Evanston, Oak Park, Naperville, Schaumburg, and Orland Park. Call (773) 692-7576 with your zip code or venue address to confirm.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {["North Suburbs", "South Suburbs", "West Suburbs", "Northwest Suburbs", "Evanston", "Oak Park", "Naperville", "Schaumburg", "Orland Park"].map((label) => (
                  <span
                    key={label}
                    className="rounded-full px-4 py-1.5 text-sm"
                    style={{ border: "1px solid rgba(201,168,76,0.4)", color: "#1a1a1a" }}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-block font-medium underline underline-offset-2"
                style={{ color: "#0b1f3a", textDecorationColor: "#c9a84c" }}
              >
                Confirm your location →
              </Link>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/outdoor-event-planning/%EF%B8%8FChicago-Delivery-Network-Map.webp"
                alt="Chicago and Chicagoland delivery network map — Sterling Event Rentals service area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── REGION CARDS ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow mb-3" style={{ color: "#c9a84c" }}>Explore by Region</p>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-10" style={{ color: "#1a1a1a" }}>
            Select your area for more detail
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {REGION_CARDS.map(({ slug, image, imageAlt }) => {
              const area = SERVICE_AREA_DATA[slug];
              return (
                <Link
                  key={slug}
                  href={`/service-area/${slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                  style={{ border: "1px solid rgba(11,31,58,0.08)", boxShadow: "0 2px 16px rgba(11,31,58,0.07)" }}
                >
                  {/* Gold top accent */}
                  <div className="h-1 w-full" style={{ backgroundColor: "#c9a84c", opacity: 0.65 }} />

                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(11,31,58,0.55) 0%, transparent 55%)" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3
                      className="mb-2 font-[var(--font-display)] text-xl font-semibold transition-colors group-hover:text-[var(--gold)]"
                      style={{ color: "#0b1f3a" }}
                    >
                      {area.name}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed" style={{ color: "rgba(26,26,26,0.68)" }}>
                      {area.tagline}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                      {area.schemaAreaNames.slice(0, 4).map((city) => (
                        <span
                          key={city}
                          className="rounded-full px-2.5 py-1 text-xs"
                          style={{ backgroundColor: "#f0ebe0", color: "rgba(11,31,58,0.6)" }}
                        >
                          {city}
                        </span>
                      ))}
                      <span className="rounded-full px-2.5 py-1 text-xs" style={{ backgroundColor: "#f0ebe0", color: "rgba(11,31,58,0.4)" }}>
                        + more
                      </span>
                    </div>
                    <span
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors group-hover:text-[var(--gold)]"
                      style={{ color: "#0b1f3a" }}
                    >
                      See {area.name} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VENUE TYPES ── */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-10 text-[var(--cream)]">
            What types of venues do you deliver to?
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VENUE_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span
                    className="rounded-full"
                    style={{ width: "8px", height: "8px", backgroundColor: "#c9a84c", opacity: 0.8, flexShrink: 0 }}
                  />
                  <h3 className="font-semibold" style={{ color: "#f5e6c8" }}>{card.title}</h3>
                </div>
                <p className="text-sm leading-relaxed pl-[20px]" style={{ color: "rgba(245,230,200,0.65)" }}>{card.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed" style={{ color: "rgba(245,230,200,0.7)" }}>
            Permits required for public parks and some venues are the customer&apos;s responsibility.{" "}
            <Link href="/resources/chicago-tent-permits" style={{ color: "#c9a84c" }} className="hover:underline">
              See our Chicago tent permit guide →
            </Link>
          </p>
        </div>
      </section>

      {/* ── HOW DELIVERY WORKS ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--sand)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/outdoor-event-planning/delivery-setup.webp"
                alt="Sterling Event Rentals crew delivering and setting up event tent and equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="section-eyebrow mb-2" style={{ color: "#c9a84c" }}>Delivery &amp; Setup</p>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-6" style={{ color: "#1a1a1a" }}>
                What delivery looks like
              </h2>
              <ul className="space-y-5">
                {[
                  { heading: "Full-service, not drop-off.", body: "Our crew delivers, sets up, and tears down. You don't manage logistics — we do." },
                  { heading: "Transparent pricing, no surprises.", body: "Every quote includes equipment, setup fee, and any applicable delivery fees for your location. The number we give you is the number you pay." },
                  { heading: "Access and timing.", body: "We need clear truck access to your venue. We arrive before your event window, set up, and return after for teardown." },
                ].map((item) => (
                  <li key={item.heading} className="flex items-start gap-3">
                    <span
                      className="mt-[7px] rounded-full shrink-0"
                      style={{ width: "7px", height: "7px", backgroundColor: "#c9a84c", opacity: 0.8 }}
                    />
                    <p className="text-base leading-relaxed" style={{ color: "rgba(26,26,26,0.85)" }}>
                      <strong style={{ color: "#0b1f3a" }}>{item.heading}</strong>{" "}{item.body}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(26,26,26,0.65)" }}>
                A surcharge may apply for difficult access or farther locations — always factored into your quote upfront.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block font-medium underline underline-offset-2"
                style={{ color: "#0b1f3a", textDecorationColor: "#c9a84c" }}
              >
                Get a delivery quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="heading-2 mb-4 text-[var(--cream)]">Not sure if we cover your area?</h2>
          <p className="mb-8 text-xl" style={{ color: "rgba(245,230,200,0.85)" }}>
            Call with your zip code or venue address. We&apos;ll confirm in minutes.
          </p>
          <a
            href="tel:+17736927576"
            className="mb-6 inline-block text-4xl font-light tracking-wider hover:opacity-80 transition-opacity"
            style={{ color: "#c9a84c" }}
          >
            (773) 692-7576
          </a>
          <p className="mb-6 text-sm" style={{ color: "rgba(245,230,200,0.5)" }}>or</p>
          <Link
            href="/contact"
            className="btn-outline mb-10 inline-flex border-[var(--cream)]/30 text-[var(--cream)] hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/10"
          >
            Submit your venue via the contact form →
          </Link>
          <p className="text-sm tracking-[0.15em]" style={{ color: "rgba(245,230,200,0.6)" }}>
            Licensed · Insured · SIOTO Safety Seal Certified
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--sand)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="heading-2 mb-6 text-[var(--charcoal)]">
            Common questions about our service area
          </h2>
          <FAQAccordion items={[...SERVICE_AREA_FAQS]} withSchema schemaId="ld-faq-service-area" variant="light" />
          <p className="mt-8 text-center text-base" style={{ color: "rgba(26,26,26,0.8)" }}>
            Ready to confirm?{" "}
            <Link
              href="/contact"
              className="font-medium underline underline-offset-2"
              style={{ color: "#0b1f3a", textDecorationColor: "#c9a84c" }}
            >
              Check availability →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
