import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionIntro } from "@/components/SectionIntro";
import { PackageCard } from "@/components/PackageCard";
import { FAQAccordion } from "@/components/FAQAccordion";

const BASE = "https://sterlingeventrentals.com";
const title = "Event Rental Packages in Chicago | Sterling Event Rentals";

const PACKAGE_FAQS = [
  {
    question: "Which package is right for my event?",
    answer:
      "Start with guest count. 25–75 guests fits The Ready Set. 75–150 fits The Event Ready — most corporate picnics and milestone parties land here once they see the stage and linen package included. 150–300+ guests is The Sterling Experience: weddings, large corporate events, galas, and any event where the setup itself needs to reflect the occasion. Not sure? Tell us your guest count and event type and we'll recommend the right fit.",
  },
  {
    question: "How do I book a package? What is the deposit?",
    answer:
      "Call (773) 692-7576 or use the contact form. We confirm availability and send a quote. A 50% deposit holds your date; the balance is due at or before delivery. Setup fee is quoted upfront. No surprises.",
  },
  {
    question: "Can I customize a package with add-ons?",
    answer:
      "Yes. Start with a package and add what you need. Add-ons include linen upgrades, tent sidewalls, stage extensions, games and entertainment (mechanical bull, bounce houses, cornhole, photo booth), chair upgrades, extended rental windows, dance floors, and more. We'll recommend options and quote them with your package so the total is clear before you confirm.",
  },
  {
    question: "What is the minimum order for a package?",
    answer:
      "A $500 minimum rental applies to all packages. Your exact total depends on guest count, date, and add-ons. We quote the full amount before you confirm.",
  },
  {
    question: "Why rent instead of buying tents, tables, and chairs?",
    answer:
      "For most events, buying doesn't make sense: you'd need transport, storage, and a crew to set everything up safely. Renting gets you professional equipment plus delivery, setup, and teardown — without the one-time purchase and the headache of storing it afterward.",
  },
  {
    question: "Is setup included in the package price?",
    answer:
      "Delivery, setup, and teardown are included in every package. The setup fee is separate from the per-item rental cost — we quote it upfront so there are no surprises.",
  },
  {
    question: "What is the deposit to reserve a package?",
    answer:
      "50% deposit holds your date. The balance is due at or before delivery. We confirm the total and deposit amount when you book.",
  },
  {
    question: "Can I cancel or change my package after booking?",
    answer:
      "Full refund if you cancel 21 or more days before the event. No refund if you cancel within 21 days or once equipment has been delivered and set up. We'll work with you on date changes when possible.",
  },
  {
    question: "Is a custom quote available for large events?",
    answer:
      "Yes. The Sterling Experience (150–300+ guests) is quoted per event. Call (773) 692-7576 or submit the contact form with your date, guest count, and event type — we'll send a full itemized quote before you confirm.",
  },
];

const description =
  "Three event rental packages for 25–300+ guests in Chicago and Chicagoland. Tent, tables, chairs, delivery, setup, and teardown included. $500 minimum. Get an itemized quote.";
const canonical = `${BASE}/packages`;

const ADDONS = [
  { name: "Linen upgrade", description: "Tablecloths and napkins in your choice of colors. Strong visual upgrade that photographs well." },
  { name: "Tent sidewalls", description: "Enclose one to four sides for weather, privacy, or décor. Essential in Chicago spring and fall." },
  { name: "Stage extension", description: "Widen or elevate the platform for live music, awards, or larger speaking setups." },
  { name: "Mechanical bull", description: "High-engagement centerpiece for corporate events and private parties. Crew handles setup and safety mats." },
  { name: "Bounce house", description: "White bounce houses for family events and private parties. Delivery and setup included." },
  { name: "Photo booth", description: "Popular for weddings and corporate events. We'll quote placement and setup with your order." },
  { name: "Lawn games", description: "Giant Jenga, cornhole, and similar. Drives engagement and social sharing at corporate picnics." },
  { name: "Champagne wall", description: "Popular focal point for weddings and upscale corporate events. Sets the tone for the cocktail hour." },
  { name: "Portable bar", description: "Anchors the reception or cocktail hour. Available for weddings, corporate events, and private parties." },
  { name: "Lounge furniture", description: "Creates a relaxed seating zone separate from the main dining area. Popular at corporate events and receptions." },
  { name: "Cocktail / high-top tables", description: "Add mingling tables for receptions. Natural complement to seated setups." },
  { name: "Chair upgrade — Chiavari or crossback", description: "Step up from standard folding chairs. Elevates the look of any seated event." },
  { name: "Dance floor", description: "Portable modular dance floor in multiple sizes. Often added for weddings and events with a DJ or live music." },
  { name: "Extended rental window", description: "Add hours beyond the standard 1–6 hour window. Quoted per hour based on crew availability." },
  { name: "Priority scheduling", description: "Confirmed delivery window instead of a general timeframe. Popular with corporate and wedding clients." },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
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
    title,
    description,
  },
};

export default function PackagesPage() {
  return (
    <>
      <Script
        id="ld-packages-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Sterling Event Rental Packages",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Offer",
                  name: "The Ready Set — Entry Package",
                  description: "Tent (up to 20x20), tables, chairs, delivery, setup & teardown. Ideal for 25–75 guests.",
                  offeredBy: { "@type": "LocalBusiness", name: "Sterling Event Rentals" },
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Offer",
                  name: "The Event Ready — Most Popular Package",
                  description: "Large tent (up to 20x40), tables, chairs, linen package, stage, dedicated day-of contact. Ideal for 75–150 guests.",
                  offeredBy: { "@type": "LocalBusiness", name: "Sterling Event Rentals" },
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Offer",
                  name: "The Sterling Experience — Premium Package",
                  description: "Large or multi-structure tent (up to 40x80), full table and chair package, linens, stage, interactive installation, priority scheduling. 150–300+ guests. Custom quote.",
                  offeredBy: { "@type": "LocalBusiness", name: "Sterling Event Rentals" },
                },
              },
            ],
          }),
        }}
      />
      <Script
        id="ld-breadcrumbs-packages"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://sterlingeventrentals.com" },
              { "@type": "ListItem", position: 2, name: "Packages", item: "https://sterlingeventrentals.com/packages" },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="gradient-hero relative min-h-[75vh] overflow-hidden">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="gradient-orb bottom-[-5rem] right-[-4rem] h-72 w-72 opacity-60" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: canonical, label: "Packages" },
            ]}
          />
          <SectionIntro
            eyebrow="Packages"
            title="Which setup is right for your event?"
            quickAnswer={
              <div className="quick-answer">
                <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">
                  Quick answer
                </h2>
                <p>
                  Sterling Event Rentals offers three package tiers for events of 25 to 300+ guests across Chicago and Chicagoland. Each package includes a tent, tables, chairs, and professional delivery, setup, and teardown. A $500 minimum applies. Request a quote to confirm pricing and availability for your date.
                </p>
              </div>
            }
          />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact" className="btn-primary">
              Check Availability for Your Date
            </a>
            <a href="/services" className="btn-outline">
              Browse Individual Services
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-6xl space-y-12 px-4">
          <ScrollReveal className="space-y-3">
            <h2 className="heading-2 text-[var(--charcoal)]">What is included in each package?</h2>
            <p className="text-base text-[var(--charcoal)]/80">
              Three tiers built around guest count and what your event actually needs. The Ready Set covers private parties of 25–75 guests. The Event Ready is the full setup most Chicagoland corporate picnics and milestone events need — tent, tables, linen package, and a stage, all quoted upfront. The Sterling Experience is built for weddings and large corporate events from 150 to 300+ guests. Every package includes delivery, setup, and teardown by our crew.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal>
              <PackageCard
                badge="Entry package"
                title="The Ready Set"
                description="Clean, covered, and seated — everything you need for a private party without the guesswork. Best for backyard gatherings, neighborhood events, and first-time renters. Ideal for 25–75 guests."
                features={[
                  "1 tent or canopy (up to 20x20)",
                  "Up to 10 tables (6-ft or 8-ft folding)",
                  "Up to 80 chairs (standard folding)",
                  "Delivery, setup, and teardown",
                  "1–6 hour rental window",
                ]}
                priceNote="Quote based on guest count and date. Minimum $500 rental."
                ctaLabel="Check Availability"
                ctaHref="/contact"
                secondaryLinks={[
                  { href: "/services/tents-structures", label: "Tents & Structures →" },
                  { href: "/services/tables-seating", label: "Tables & Seating →" },
                ]}
              />
            </ScrollReveal>
            <ScrollReveal>
              <PackageCard
                badge="Most popular"
                title="The Event Ready"
                description="The full setup most Chicagoland events actually need — delivered, built, and ready to impress. Best for corporate picnics, milestone celebrations, and outdoor parties. 75–150 guests."
                features={[
                  "1 large tent (up to 20x40)",
                  "Up to 20 tables, up to 150 chairs",
                  "Full linen package (tablecloths, 1 color)",
                  "1 stage or presentation riser",
                  "Dedicated day-of contact",
                  "Delivery, setup, and teardown · 1–6 hour window",
                ]}
                priceNote="Quote based on guest count and date. Minimum $500 rental."
                ctaLabel="Get a Quote for This Package"
                ctaHref="/contact"
                secondaryLinks={[
                  { href: "/services/tables-seating", label: "Tables & Seating →" },
                  { href: "/services/stages-presentation", label: "Stages & Presentation →" },
                ]}
                highlight
              />
            </ScrollReveal>
            <ScrollReveal>
              <PackageCard
                badge="Premium package"
                title="The Sterling Experience"
                description="Full-service event infrastructure for events where the setup is part of the impression. Best for outdoor weddings, large corporate events, galas. 150–300+ guests."
                features={[
                  "Large or multi-structure tent (up to 40x80)",
                  "Up to 40 tables (round, rectangular, cocktail mix), up to 300 chairs (chiavari, crossback, or standard)",
                  "Full linen package — tablecloths + napkins, multi-color options",
                  "Custom stage · 1 interactive or specialty installation",
                  "Priority scheduling · setup crew on-site · extended window available",
                  "Delivery, full setup, and teardown",
                ]}
                priceNote="Custom quote per event. Full itemized quote before confirmation. Phone call recommended."
                ctaLabel="Request Custom Quote"
                ctaHref="/contact"
                secondaryLinks={[
                  { href: "/services/stages-presentation", label: "Stages & Presentation →" },
                  { href: "/services/event-extras", label: "Event Extras →" },
                ]}
              />
            </ScrollReveal>
          </div>

          <ScrollReveal className="rounded-xl border border-[var(--navy)]/10 bg-white p-4 text-center">
            <p className="font-medium text-[var(--navy)]">Not sure which package?</p>
            <p className="mt-1 text-sm text-[var(--charcoal)]/80">
              Tell us your guest count and event type — we'll recommend the right setup.{" "}
              <a href="tel:+17736927576" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2 hover:decoration-[var(--gold-light)]">
                Call (773) 692-7576
              </a>
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <Link href="/answers/how-much-does-tent-rental-cost-chicago" className="text-sm font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2 hover:decoration-[var(--gold-light)]">
              How much does tent rental cost in Chicago? →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal className="space-y-3 mb-10">
            <h2 className="heading-2 text-[var(--charcoal)]">Can I customize a package with add-ons?</h2>
            <p className="text-base text-[var(--charcoal)]/80">
              Yes. Start with a package and add what you need. Add-ons are quoted with your package so the total is clear before you confirm.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ADDONS.map((addon) => (
                <li key={addon.name} className="rounded-lg border border-[var(--navy)]/10 bg-[var(--cream)] p-4">
                  <span className="font-medium text-[var(--navy)]">{addon.name}</span>
                  <p className="mt-1 text-sm text-[var(--charcoal)]/70">{addon.description}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--navy)] py-20">
        <div className="mx-auto max-w-3xl px-4">
          <ScrollReveal>
            <h2 className="heading-2 text-[var(--cream)] mb-8">Common questions about packages</h2>
            <FAQAccordion items={PACKAGE_FAQS} schemaId="ld-packages-faq" variant="resourceArticle" withSchema={true} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--sand)] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <ScrollReveal>
            <h2 className="heading-2 text-[var(--charcoal)]">Ready to lock in your date?</h2>
            <p className="mt-4 text-base text-[var(--charcoal)]/75">
              50% deposit holds your date. Equipment, setup fee, and delivery all quoted before you confirm anything.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Check Availability
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-[var(--navy)]/40 bg-transparent px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--navy)] transition-colors hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--cream)]">
                Browse Individual Services
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--charcoal)]/50">
              Not sure which package? Call{" "}
              <a href="tel:+17736927576" className="text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2">
                (773) 692-7576
              </a>{" "}
              — we'll recommend the right setup for your guest count and event type.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
