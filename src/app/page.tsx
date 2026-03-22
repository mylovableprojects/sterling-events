import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { ScrollReveal } from "../components/ScrollReveal";
import { TrustBar } from "@/components/TrustBar";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ServicesBentoSection } from "@/components/ServicesBentoSection";

const BASE = "https://sterlingeventrentals.com";

const title = "Event Rentals Chicago | Sterling Event Rentals";
const description =
  "Chicago's full-service event rental company. Tents, tables, stages, and specialty rentals for corporate events, weddings, and parties across Chicagoland. Licensed, SIOTO-certified. Get a quote.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: BASE },
  openGraph: {
    title,
    description,
    url: BASE,
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
    title,
    description,
  },
};


const PACKAGES = [
  {
    href: "/packages",
    name: "The Ready Set",
    tagline: "Private parties for 25–75 guests. Clear pricing, delivery included, no minimum surprises.",
  },
  {
    href: "/packages",
    name: "The Event Ready",
    tagline: "Corporate picnics and milestone events for 75–150 guests. Full setup quoted upfront.",
  },
  {
    href: "/packages",
    name: "The Sterling Experience",
    tagline: "Weddings and large corporate events, 150–300+ guests. Full-service from first tent pole to last chair loaded.",
  },
] as const;

const HOME_FAQS = [
  {
    question: "How far in advance should I book event rentals in Chicago?",
    answer:
      "We recommend booking 2–3 weeks in advance, especially during peak season (May–September). Corporate clients typically book 21–30 days out; wedding couples often book several months ahead. Call (773) 692-7576 to check availability for your date.",
  },
  {
    question: "Is delivery and setup included in the rental price?",
    answer:
      "Delivery and setup are separate named line items on every quote — not hidden in the total. You'll see exactly what each costs before you confirm anything. No surprises at delivery.",
  },
  {
    question: "What is your deposit policy?",
    answer:
      "A 50% deposit holds your date. The remaining balance is due at or before delivery. Call (773) 692-7576 or fill out the contact form to get started.",
  },
  {
    question: "What areas do you serve in Chicagoland?",
    answer:
      "Sterling Event Rentals delivers to Chicago and across the Greater Chicagoland area, including Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and surrounding suburbs. Call us to confirm availability for your specific zip code or venue.",
  },
  {
    question: "How much does it cost to rent a tent in Chicago?",
    answer:
      "Tent rental pricing varies based on tent size, guest count, and accessories. Sterling Event Rentals has a $500 minimum rental. Delivery and setup are quoted as separate line items. Get an exact quote for your event by calling (773) 692-7576 or filling out the contact form.",
  },
];

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
  areaServed: [
    { "@type": "City", name: "Chicago", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "AdministrativeArea", name: "Chicagoland" },
  ],
  sameAs: [
    "https://www.instagram.com/sterlingeventrental",
    "https://www.facebook.com/profile.php?id=61582710860825",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
  ],
};

export default function Home() {
  return (
    <>
      <Script id="ld-home-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="ld-home-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Hero />

      {/* 2. Trust bar */}
      <section className="border-y border-[var(--navy)]/10 bg-[var(--cream)] py-4">
        <div className="mx-auto max-w-6xl px-4">
          <TrustBar variant="light" layout="inline" />
        </div>
      </section>

      {/* 3. Services overview */}
      <ServicesBentoSection />

      {/* 4. How it works — kept as AEO question heading */}
      <section className="bg-[var(--navy)]/60 py-20" aria-labelledby="how-heading">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 id="how-heading" className="heading-2 text-[var(--cream)]">
              How does the rental process work?
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <ScrollReveal className="space-y-3">
              <div className="section-eyebrow text-[var(--gold-light)]">Step 1</div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)]">Book</h3>
              <p className="text-sm leading-relaxed text-[var(--champagne)]/85">
                Call (773) 692-7576 or fill out the contact form. We confirm your date, equipment, and delivery details. A 50% deposit secures your rental — balance is due at or before delivery.
              </p>
            </ScrollReveal>
            <ScrollReveal className="space-y-3">
              <div className="section-eyebrow text-[var(--gold-light)]">Step 2</div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)]">
                We Deliver &amp; Set Up
              </h3>
              <p className="text-sm leading-relaxed text-[var(--champagne)]/85">
                Our crew arrives, builds everything, and has it ready before your guests walk in. Setup is a separate named line item on your quote — no surprises at delivery. Standard rental windows run 1–6 hours; extended windows are available.
              </p>
            </ScrollReveal>
            <ScrollReveal className="space-y-3">
              <div className="section-eyebrow text-[var(--gold-light)]">Step 3</div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)]">You Host</h3>
              <p className="text-sm leading-relaxed text-[var(--champagne)]/85">
                Everything is in place when your guests arrive. Everything is gone after they leave. Your only job was to host.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Check Availability for Your Date
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Who we serve */}
      <section className="bg-[var(--cream)] py-20" aria-labelledby="who-heading">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 id="who-heading" className="heading-2 text-[var(--charcoal)]">
              Who we work with — and what we solve for each.
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <ScrollReveal className="space-y-3 rounded-xl border border-[var(--navy)]/10 bg-white p-6">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--navy)]">
                Corporate Events &amp; Company Picnics
              </h3>
              <p className="text-sm leading-relaxed text-[var(--charcoal)]/85">
                Your name is on this event. If the tent is late, the tables don't match, or the vendor goes dark the morning of — that's your problem to explain.
              </p>
              <p className="text-sm leading-relaxed text-[var(--charcoal)]/85">
                We work with corporate planners and HR teams across Chicagoland who can't afford that call. SIOTO-certified, fully insured, transparent pricing, and a day-of contact who picks up the phone. Book 2–3 weeks out; we handle the rest.
              </p>
            </ScrollReveal>
            <ScrollReveal className="space-y-3 rounded-xl border border-[var(--navy)]/10 bg-white p-6">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--navy)]">
                Outdoor Weddings
              </h3>
              <p className="text-sm leading-relaxed text-[var(--charcoal)]/85">
                You've been planning this for months. Chicago weather has been planning nothing.
              </p>
              <p className="text-sm leading-relaxed text-[var(--charcoal)]/85">
                We size tents to your guest count, walk you through weather readiness in plain language, and give you clear contract terms before you sign anything. No guessing what happens if conditions change — you'll know exactly what to expect.
              </p>
            </ScrollReveal>
            <ScrollReveal className="space-y-3 rounded-xl border border-[var(--navy)]/10 bg-white p-6">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--navy)]">
                Private Parties &amp; Social Events
              </h3>
              <p className="text-sm leading-relaxed text-[var(--charcoal)]/85">
                First time renting? You're not sure what you actually need, and you don't want a quote that doubles by the time it's confirmed.
              </p>
              <p className="text-sm leading-relaxed text-[var(--charcoal)]/85">
                Packages start at $500. Every quote includes equipment, setup, and delivery as named line items — before you confirm anything. Tell us your guest count; we'll tell you what fits.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Package teaser */}
      <section className="bg-[var(--navy)]/60 py-20" aria-labelledby="packages-heading">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 id="packages-heading" className="heading-2 text-[var(--cream)]">
              Find the right setup for your event size.
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <ScrollReveal key={pkg.name}>
                <Link
                  href={pkg.href}
                  className="block rounded-2xl border border-white/10 bg-black/25 p-6 transition hover:border-[var(--gold)]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                >
                  <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)]">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--champagne)]/85">
                    {pkg.tagline}
                  </p>
                  <span className="mt-4 inline-block text-sm text-[var(--gold-light)]">
                    See packages →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-8 text-center">
            <Link href="/packages" className="btn-primary">
              View all packages
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Why Sterling */}
      <section className="bg-[var(--navy-light)]/60 py-20" aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal className="text-center">
            <h2 id="why-heading" className="heading-2 text-[var(--cream)]">
              Why event planners and hosts choose Sterling
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: "Full-service — not drop-off",
                body: "We deliver, build, and tear down every order. You never lift a tent pole, stack a chair, or touch a table. When your guests arrive, everything is in place. When they leave, so do we.",
              },
              {
                heading: "Upfront pricing, no surprises",
                body: "Your quote includes equipment cost, setup fee, and delivery — as named line items — before you confirm. No phone call required to find out what it really costs. No bill that looks different at delivery.",
              },
              {
                heading: "SIOTO Safety Seal Certified",
                body: "The SIOTO Safety Seal is a third-party safety certification for tent and structure installations. Most rental companies in Chicagoland don't carry it. We do — and we can document it for your venue.",
              },
              {
                heading: "Licensed & insured in Illinois",
                body: "Fully licensed and insured in Illinois. Many venues require documentation before they'll approve a vendor. We carry it and can provide it — no last-minute surprises with your event space.",
              },
            ].map((item) => (
              <ScrollReveal key={item.heading}>
                <div className="rounded-xl border border-white/10 bg-black/20 p-6">
                  <h3 className="font-[var(--font-display)] text-lg text-[var(--gold-light)]">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--champagne)]/80">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Service area — kept as AEO question heading */}
      <section className="bg-[var(--cream)] py-20" aria-labelledby="area-heading">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 id="area-heading" className="heading-2 text-[var(--charcoal)]">
                What areas do you serve in Chicagoland?
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-[var(--charcoal)]/85">
                Sterling Event Rentals delivers to Chicago and across Chicagoland — including Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and the surrounding suburbs. Not sure if we reach your venue or zip code? Call{" "}
                <a href="tel:+17736927576" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2 hover:decoration-[var(--gold-light)]">
                  (773) 692-7576
                </a>{" "}
                and we'll confirm in one conversation.
              </p>
              <Link href="/service-area" className="btn-primary mt-4 inline-block">
                See full service area &amp; delivery details →
              </Link>
            </div>
            <div className="h-48 w-full max-w-md rounded-xl bg-[var(--navy)]/10 md:h-56" aria-hidden />
          </ScrollReveal>
        </div>
      </section>

      {/* 9. FAQ — FAQPage schema included via FAQAccordion */}
      <section className="bg-[var(--navy)]/60 py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <h2 id="faq-heading" className="heading-2 text-[var(--cream)]">
              Common questions about event rentals in Chicago
            </h2>
          </ScrollReveal>
          <ScrollReveal className="mt-10">
            <FAQAccordion
              items={HOME_FAQS}
              withSchema
              schemaId="ld-home-faq"
            />
          </ScrollReveal>
          <ScrollReveal className="mt-8 text-center">
            <Link
              href="/answers"
              className="inline-block text-sm font-medium text-[var(--gold-light)] underline decoration-[var(--gold)] underline-offset-4 hover:decoration-[var(--gold-light)]"
            >
              Browse all answers →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. Footer CTA */}
      <section className="bg-[var(--navy)]/50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <ScrollReveal>
            <p className="font-[var(--font-display)] text-2xl text-[var(--cream)] md:text-3xl">
              Peak season books weeks out. Check your date before it goes.
            </p>
            <p className="mt-3 text-sm text-[var(--champagne)]/70">
              Call{" "}
              <a href="tel:+17736927576" className="text-[var(--gold-light)] hover:underline">
                (773) 692-7576
              </a>{" "}
              or fill out the form — we respond within one business day.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block btn-primary"
            >
              Check Availability for Your Date
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
