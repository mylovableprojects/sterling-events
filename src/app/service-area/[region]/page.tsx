import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  SERVICE_AREA_SLUGS,
  SERVICE_AREA_DATA,
  type ServiceAreaSlug,
} from "@/lib/serviceAreas";

const REGION_IMAGES: Record<string, { src: string; alt: string }> = {
  "chicago": {
    src: "/images/outdoor-event-planning/Elegant%20Outdoor%20Event%20with%20City%20Views.webp",
    alt: "Elegant outdoor event tent setup with Chicago city views in the background",
  },
  "north-suburbs": {
    src: "/images/outdoor-event-planning/graduation-class-of-2025.webp",
    alt: "Outdoor graduation celebration under a tent in the Chicago north suburbs",
  },
  "southwest-suburbs": {
    src: "/images/outdoor-event-planning/Global%20Corp%20Picnic%20Bash.png",
    alt: "Corporate company picnic under a white event tent in the Chicago southwest suburbs",
  },
};

const BASE = "https://www.sterlingeventrentals.com";

type Props = { params: Promise<{ region: string }> };

export function generateStaticParams() {
  return SERVICE_AREA_SLUGS.map((region) => ({ region }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  const data = SERVICE_AREA_DATA[region as ServiceAreaSlug];
  if (!data) return {};
  const canonical = `${BASE}/service-area/${region}`;
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical },
    openGraph: {
      title: data.title,
      description: data.description,
      url: canonical,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: data.title }],
    },
    twitter: { card: "summary_large_image", title: data.title, description: data.description },
  };
}

export default async function ServiceAreaRegionPage({ params }: Props) {
  const { region } = await params;
  const data = SERVICE_AREA_DATA[region as ServiceAreaSlug];
  if (!data) notFound();

  const canonical = `${BASE}/service-area/${region}`;

  // ── Enriched LocalBusiness schema ──
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sterling Event Rentals",
    url: BASE,
    telephone: "+17736927576",
    email: "info@sterlingeventrentals.com",
    image: `${BASE}/og-image.jpg`,
    priceRange: "$$",
    foundingDate: "2021",
    hasCredential: "SIOTO Safety Seal",
    description: data.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8781,
      longitude: -87.6298,
    },
    areaServed: data.schemaAreaNames.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Illinois" },
    })),
    sameAs: [
      "https://www.instagram.com/sterlingeventrental",
      "https://www.facebook.com/profile.php?id=61582710860825",
    ],
  };

  // ── Service schema for each rental category ──
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Event Rentals — ${data.name}`,
    serviceType: "Event Rental",
    provider: {
      "@type": "LocalBusiness",
      name: "Sterling Event Rentals",
      telephone: "+17736927576",
    },
    areaServed: data.schemaAreaNames.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Illinois" },
    })),
    description: data.description,
    ...(data.pricingNote && {
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        description: data.pricingNote,
      },
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Service Area", item: `${BASE}/service-area` },
      { "@type": "ListItem", position: 3, name: data.name, item: canonical },
    ],
  };

  return (
    <>
      <Script id="ld-localbusiness-area" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="ld-service-area" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO ── */}
      <section className="gradient-hero relative min-h-[60vh] overflow-hidden">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/service-area", label: "Service Area" },
              { href: `/service-area/${region}`, label: data.name },
            ]}
          />
          <div className="max-w-3xl">
            <p className="section-eyebrow mb-4 text-[var(--gold-light)]">Service Area</p>
            <h1 className="hero-headline text-[var(--cream)]">{data.h1}</h1>
            {/* speakable — marked for voice search extraction */}
            <p
              className="hero-subheadline mt-4 max-w-2xl text-[var(--champagne)]/85"
              aria-label="Quick answer"
            >
              {data.quickAnswer}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Confirm Your Location
            </Link>
            <a href="tel:+17736927576" className="btn-outline">
              Call (773) 692-7576
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

      {/* ── CITIES SERVED ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="section-eyebrow mb-3 text-[var(--gold)]">Coverage</p>
              <h2 className="heading-2 mb-6 text-[var(--charcoal)]">
                Cities and communities we serve
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.cities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-[var(--gold)]/40 px-4 py-1.5 text-sm text-[var(--charcoal)]"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-[var(--charcoal)]/70">
                Not seeing your city?{" "}
                <a
                  href="tel:+17736927576"
                  className="font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2"
                >
                  Call us
                </a>{" "}
                — we serve many locations not listed here.
              </p>
            </div>

            {data.neighborhoods ? (
              <div>
                <p className="section-eyebrow mb-3 text-[var(--gold)]">Chicago Neighborhoods</p>
                <h2 className="heading-2 mb-6 text-[var(--charcoal)]">
                  Neighborhoods we deliver to
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="rounded-full border border-[var(--navy)]/15 px-4 py-1.5 text-sm text-[var(--charcoal)]"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="section-eyebrow mb-1 text-[var(--gold)]">About This Area</p>
                {data.bodyParagraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-[var(--charcoal)]/85">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>

          {data.neighborhoods && (
            <div className="mt-12 flex flex-col gap-4">
              <p className="section-eyebrow text-[var(--gold)]">About This Area</p>
              {data.bodyParagraphs.map((p, i) => (
                <p key={i} className="max-w-3xl text-base leading-relaxed text-[var(--charcoal)]/85">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── REGION PHOTO ── */}
      {REGION_IMAGES[region] && (
        <div className="bg-[var(--cream)] px-4 pb-0 pt-0 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="relative aspect-[21/7] w-full overflow-hidden rounded-2xl">
              <Image
                src={REGION_IMAGES[region].src}
                alt={REGION_IMAGES[region].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── VENUE TYPES ── */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="section-eyebrow mb-3 text-[var(--gold-light)]">Where We Deliver</p>
          <h2 className="heading-2 mb-10 text-[var(--cream)]">
            Types of venues we serve in this area
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.venueTypes.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="mb-3 block text-2xl" aria-hidden>{v.icon}</span>
                <h3 className="mb-2 font-medium text-[var(--cream)]">{v.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--champagne)]/75">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AEO: H2 QUESTION SECTIONS ── */}
      {data.h2Sections && data.h2Sections.length > 0 && (
        <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
          <div className="mx-auto max-w-4xl px-4">
            <p className="section-eyebrow mb-3 text-[var(--gold)]">Common Questions</p>
            <div className="flex flex-col gap-12">
              {data.h2Sections.map((section) => (
                <div key={section.question}>
                  <h2 className="heading-2 mb-4 text-[var(--charcoal)]">
                    {section.question}
                  </h2>
                  <p className="max-w-3xl text-base leading-relaxed text-[var(--charcoal)]/85">
                    {section.answer}
                  </p>
                  {section.resourceLink && (
                    <Link
                      href={section.resourceLink.href}
                      className="mt-3 inline-block font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-4 hover:decoration-[var(--gold-light)]"
                    >
                      {section.resourceLink.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PRICING NOTE ── */}
      {data.pricingNote && (
        <section className="border-t border-white/10 bg-[var(--navy)] py-12">
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:gap-8">
              <div className="flex-1">
                <p className="section-eyebrow mb-2 text-[var(--gold-light)]">Pricing</p>
                <p className="text-base leading-relaxed text-[var(--champagne)]/90">
                  {data.pricingNote}
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-shrink-0">
                <Link href="/event-rental-pricing-chicago" className="btn-primary whitespace-nowrap">
                  See pricing details
                </Link>
                <Link
                  href="/contact"
                  className="text-center text-sm font-medium text-[var(--gold-light)] underline underline-offset-4 hover:text-[var(--champagne)]"
                >
                  Get a quote →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT WE BRING ── */}
      <section className={`border-t border-[var(--navy)]/10 py-16 ${data.pricingNote ? "bg-[var(--cream)]" : "bg-[var(--cream)]"}`}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="section-eyebrow mb-3 text-[var(--gold)]">Full-Service Rentals</p>
              <h2 className="heading-2 mb-6 text-[var(--charcoal)]">
                What we deliver to {data.name}
              </h2>
              <ul className="space-y-3 text-base leading-relaxed text-[var(--charcoal)]/85">
                {[
                  { label: "Tents & Structures", href: "/services/tents-structures" },
                  { label: "Tables & Seating", href: "/services/tables-seating" },
                  { label: "Stages & Presentation", href: "/services/stages-presentation" },
                  { label: "Games & Entertainment", href: "/services/games-entertainment" },
                  { label: "Event Extras", href: "/services/event-extras" },
                  { label: "Delivery, Setup & Teardown", href: "/services/delivery-setup" },
                ].map((s) => (
                  <li key={s.href} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--gold)]" />
                    <Link
                      href={s.href}
                      className="font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2 hover:decoration-[var(--gold-light)]"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-6 inline-block font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-4 hover:decoration-[var(--gold-light)]"
              >
                Browse all services →
              </Link>

              {/* Resource links */}
              {data.resourceLinks && data.resourceLinks.length > 0 && (
                <div
                  className="mt-8 rounded-xl p-5"
                  style={{ backgroundColor: "#0b1f3a", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <p
                    className="section-eyebrow mb-3"
                    style={{ color: "#e8c97a" }}
                  >
                    Helpful resources
                  </p>
                  <ul className="space-y-2.5">
                    {data.resourceLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm font-medium underline underline-offset-2 hover:opacity-80"
                          style={{ color: "#f5e6c8", textDecorationColor: "rgba(201,168,76,0.5)" }}
                        >
                          {link.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-[var(--navy)]/10 bg-white p-8">
              <p className="section-eyebrow mb-3 text-[var(--gold)]">Every Order Includes</p>
              <ul className="space-y-4">
                {[
                  { title: "Professional delivery", body: "On-time delivery to your venue, confirmed in advance." },
                  { title: "Full setup by our crew", body: "We assemble everything before your guests arrive. You don't touch a single chair." },
                  { title: "Teardown after your event", body: "We return after your event window and take everything down. You focus on hosting." },
                  { title: "Upfront pricing", body: "Equipment, setup, and delivery quoted as named line items before you confirm." },
                  { title: "Licensed & SIOTO-certified", body: "Fully licensed and insured in Illinois. SIOTO Safety Seal certified for tent installations." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[0.6rem] font-bold text-[var(--gold)]">✓</span>
                    <div>
                      <span className="font-medium text-[var(--navy)]">{item.title} — </span>
                      <span className="text-sm text-[var(--charcoal)]/80">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="heading-2 mb-4 text-[var(--cream)]">
            Ready to confirm delivery to {data.name.split("&")[0].trim()}?
          </h2>
          <p className="mb-8 text-lg text-[var(--champagne)]/85">
            Call with your zip code or venue address and we&apos;ll confirm in one conversation.
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
            className="btn-outline inline-flex border-[var(--cream)]/30 text-[var(--cream)] hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/10"
          >
            Submit your venue via the contact form →
          </Link>
          <p className="mt-10 text-sm tracking-[0.15em] text-[var(--champagne)]/70">
            Licensed · Insured · SIOTO Safety Seal Certified
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="heading-2 mb-6 text-[var(--charcoal)]">
            Common questions about {data.name}
          </h2>
          <FAQAccordion
            items={data.faqs}
            withSchema
            schemaId={`ld-faq-${region}`}
            variant="light"
          />
          <p className="mt-8 text-sm text-[var(--charcoal)]/70">
            <Link
              href="/service-area"
              className="font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2"
            >
              ← Back to all service areas
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
