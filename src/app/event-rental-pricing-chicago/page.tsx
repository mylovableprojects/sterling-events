import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ImageBreak } from "@/components/ImageBreak";
import { PageHero } from "@/components/PageHero";

const BASE = "https://www.sterlingeventrentals.com";
const title = "Event Rental Pricing Chicago | Sterling Event Rentals";
const description =
  "How event rental pricing works in Chicago and Chicagoland: $500 minimum, deposit structure, and what affects cost for tent, table, stage, and package rentals.";
const canonical = `${BASE}/event-rental-pricing-chicago`;

const quickAnswer =
  "Sterling quotes tents, tables, chairs, stages, and add-ons as clear line items — equipment, setup fee, and delivery — before you pay anything. There is a $500 minimum rental order. A 50% deposit holds your date; the balance is due at or before delivery. Share your date, venue, and guest count for an exact total.";

const faqItems = [
  {
    question: "How does event rental pricing work in Chicago?",
    answer:
      "Pricing depends on what you rent (tents, tables, chairs, staging, entertainment), quantities, your event date, and delivery and setup complexity. Sterling sends a written, itemized quote — equipment, setup fee, and delivery as separate lines — so you see the full number before you confirm.",
  },
  {
    question: "Is there a minimum rental amount?",
    answer:
      "Yes. Sterling Event Rentals has a $500 minimum rental order for Chicago and Chicagoland. Most real events exceed that naturally; if you are planning something small, we will still quote you so you know the total upfront.",
  },
  {
    question: "Is setup and teardown included in the price?",
    answer:
      "Setup and teardown are included as part of professional service, but the setup fee is quoted as its own line item next to equipment — not buried inside a single bundled total. Delivery is also broken out so nothing is hidden.",
  },
  {
    question: "When is payment due for my event?",
    answer:
      "A 50% deposit holds your date once you approve the quote. The remaining balance is due at or before delivery. Payment options and timing are confirmed with your booking.",
  },
  {
    question: "Are there any hidden fees I should know about?",
    answer:
      "Quotes are designed to include delivery, setup, and known access or distance factors before you commit. If something could affect the total (tight urban load-in, extra labor, etc.), we bake it into the quote when you share the venue — not as a surprise at delivery.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: canonical,
    },
  ],
};

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

export default function EventRentalPricingChicagoPage() {
  return (
    <>
      <Script
        id="ld-faq-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ld-breadcrumbs-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/event-rental-pricing-chicago", label: "Pricing" },
            ]}
          />
        }
        eyebrow="Pricing"
        title="Event rental pricing in Chicago and Chicagoland."
        subhead={description}
      />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border border-[var(--gold)]/30 bg-[var(--navy)]/60 p-6">
          <p className="faq-answer text-base leading-relaxed text-[var(--champagne)]">{quickAnswer}</p>
        </div>
      </BelowHeroQuickAnswer>

      <section className="bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4 text-sm text-[var(--charcoal)]/80">
          <ScrollReveal className="space-y-3">
            <h2 className="heading-2 text-[var(--charcoal)]">Key takeaways about pricing</h2>
            <p>
              Every quote starts with a <strong>$500 minimum rental order</strong>. To hold your date, Sterling uses a{" "}
              <strong>50% deposit</strong> once you approve the estimate; the rest is due at or before delivery. Setup,
              delivery, and equipment are <strong>named separately</strong> on the quote so you are not guessing what is
              included.
            </p>
            <p>
              For published list ranges and package tiers, see{" "}
              <Link href="/packages/pricing" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]">
                pricing &amp; price list
              </Link>{" "}
              and{" "}
              <Link href="/packages" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]">
                event packages
              </Link>
              . For a total tailored to your venue and guest count,{" "}
              <Link href="/contact" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]">
                request a quote
              </Link>{" "}
              or call <a href="tel:+17736927576">(773) 692-7576</a>.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal className="space-y-3 rounded-xl border border-white/10 bg-[var(--navy)]/90 p-4 text-[var(--champagne)]/85">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)]">
                What affects the price of your event
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Type and quantity of rentals — tents, tables, chairs, stages, games, and specialty items.</li>
                <li>Event date and season; peak summer and fall weekends may affect availability and scheduling.</li>
                <li>Delivery distance, site access (yard, urban load-in, timing windows), and setup complexity.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal className="space-y-3 rounded-xl border border-white/10 bg-[var(--navy)]/90 p-4 text-[var(--champagne)]/85">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)]">How quotes and deposits work</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>You share date, venue address, guest count, and what you need — we return an itemized quote.</li>
                <li>A 50% deposit locks your equipment and date after you approve the quote.</li>
                <li>The balance is due at or before delivery. Details appear in your booking confirmation.</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ImageBreak
        src="/images/outdoor-event-planning/cocktail_tables.webp"
        alt="Cocktail-height tables set for an outdoor Chicago-area event."
        overlayText="Transparent quotes — equipment, setup, and delivery shown as separate line items."
      />

      <section className="bg-[var(--navy)]/75 py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4 text-sm text-[var(--champagne)]/80">
          <ScrollReveal className="space-y-3">
            <h2 className="heading-2">How pricing differs by event size</h2>
            <p>
              Small backyard gatherings might need a compact tent and basic seating — still subject to the company
              minimum. Mid-size corporate picnics and weddings often combine a larger tent, full seating, and add-ons
              like sidewalls or a stage. Very large or multi-structure jobs get a custom quote. In every case you get the
              same structure: line-item equipment, setup, and delivery before you pay a deposit.
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4">
            <h2 className="heading-2">Frequently asked questions about pricing</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-md border border-white/10 bg-black/20 p-3"
                >
                  <summary className="cursor-pointer text-[var(--cream)]">{item.question}</summary>
                  <p className="mt-2">{item.answer}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <p className="max-w-xl text-[0.85rem] text-[var(--champagne)]/75">
              Tell us your event date, location, and headcount — we will send an itemized quote, usually within one
              business day.
            </p>
            <Link href="/contact" className="btn-primary">
              Get an exact quote
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <ImageBreak
        src="/images/outdoor-event-planning/sterling-event-rentals.webp"
        alt="Sterling Event Rentals equipment set up for an outdoor celebration."
        overlayText="Planning in Chicago or the suburbs? We will size tents and seating with you."
      />
    </>
  );
}
