import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";

const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/packages/pricing`;
const PDF_PATH = "/documents/sterling-event-rentals-price-list.pdf";

const title = "Event Rental Price List & Pricing Guide | Chicago & Chicagoland";
const description =
  "Download the Sterling Event Rentals price list (PDF): tents, tables, chairs, packages, and add-ons for Chicago events. $500 minimum order. Professional delivery, setup, and teardown — quoted line by line.";

const quickAnswer =
  "Sterling publishes a printable price list (PDF) for tents, tables, chairs, entertainment, and popular add-ons serving Chicago and Chicagoland. Final totals depend on guest count, date, and venue — call (773) 692-7576 or request a quote for an itemized number before you book.";

const faqItems = [
  {
    question: "Does the PDF price list include delivery and setup?",
    answer:
      "Equipment line items are listed separately from the setup and delivery fee. Every quote from Sterling names setup/delivery as its own line so you see the full picture before you confirm. Nothing is hidden in a single lump sum.",
  },
  {
    question: "Is the online price list the same as what I will be quoted?",
    answer:
      "The PDF reflects current list pricing for common items and packages. Your formal quote may adjust for inventory, distance, date demand, or custom configurations — you always receive a written quote before you pay a deposit.",
  },
  {
    question: "What is Sterling's minimum order?",
    answer:
      "Sterling Event Rentals has a $500 minimum rental order. Package tiers and add-ons are built to make that threshold easy to hit for real events while keeping quotes transparent.",
  },
  {
    question: "How do I get an exact total for my date?",
    answer:
      "Use the contact form or call (773) 692-7576 with your event date, venue address, and guest count. We send an itemized quote — tent size, tables, chairs, add-ons, and setup — usually within one business day.",
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
    { "@type": "ListItem", position: 2, name: "Packages", item: `${BASE}/packages` },
    { "@type": "ListItem", position: 3, name: "Pricing & price list", item: canonical },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: canonical,
  isPartOf: { "@type": "WebSite", name: "Sterling Event Rentals", url: BASE },
  about: {
    "@type": "Service",
    name: "Event equipment rental pricing",
    areaServed: { "@type": "City", name: "Chicago" },
    provider: { "@type": "LocalBusiness", name: "Sterling Event Rentals", telephone: "+17736927576" },
  },
};

export function generateMetadata(): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Sterling Event Rentals — pricing and price list" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function PackagesPricingPage() {
  return (
    <>
      <Script id="ld-pricing-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-pricing-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="ld-pricing-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <PageHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/packages", label: "Packages" },
              { href: canonical, label: "Pricing" },
            ]}
          />
        }
        eyebrow="Packages"
        title="Event rental pricing & price list"
        subhead={description}
        primaryCta={{ href: PDF_PATH, label: "Download PDF price list", download: true }}
        secondaryCta={{ href: "/contact", label: "Get a custom quote →" }}
      />

      <BelowHeroQuickAnswer>
        <p
          className="quick-answer faq-answer max-w-2xl text-lg leading-relaxed text-[var(--champagne)]/88"
          id="quick-answer"
        >
          {quickAnswer}
        </p>
      </BelowHeroQuickAnswer>

      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
              What you&apos;ll find in the PDF
            </h2>
            <ul className="space-y-3 text-base leading-relaxed text-[var(--charcoal)]/85">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                Tent and canopy sizes, tables, chairs, and staging — aligned with our package tiers.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                Popular add-ons: sidewalls, entertainment, linens, and more (availability varies by season).
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                Reminder: <strong className="font-medium text-[var(--navy)]">$500 minimum</strong> rental order; your quote always includes setup and delivery as named lines.
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-[var(--charcoal)]/60">
              Prefer bundles? Compare named tiers on the{" "}
              <Link href="/packages" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)]/50 underline-offset-2 hover:decoration-[var(--gold)]">
                packages overview
              </Link>
              , then use this list for line-item context.
            </p>
          </div>
          <div
            className="rounded-2xl border border-[var(--navy)]/10 bg-white p-6 shadow-[0_24px_80px_rgba(11,31,58,0.06)]"
            style={{
              backgroundImage:
                "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(250,248,245,0.98) 100%)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">At a glance</p>
            <dl className="mt-4 space-y-4">
              <div className="flex justify-between gap-4 border-b border-[var(--navy)]/8 pb-3">
                <dt className="text-sm text-[var(--charcoal)]/70">Service area</dt>
                <dd className="text-right text-sm font-medium text-[var(--navy)]">Chicago &amp; Chicagoland</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--navy)]/8 pb-3">
                <dt className="text-sm text-[var(--charcoal)]/70">Minimum order</dt>
                <dd className="text-right text-sm font-medium text-[var(--navy)]">$500</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-sm text-[var(--charcoal)]/70">Deposit to hold date</dt>
                <dd className="text-right text-sm font-medium text-[var(--navy)]">50% (typical)</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-eyebrow" style={{ color: "#e8c97a" }}>
                Interactive viewer
              </p>
              <h2 className="font-[var(--font-display)] text-xl text-[var(--cream)] md:text-2xl">
                Browse the price list below
              </h2>
            </div>
            <a
              href={PDF_PATH}
              download
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              Download PDF
            </a>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_32px_100px_rgba(0,0,0,0.45)]">
            <iframe
              title="Sterling Event Rentals — price list PDF"
              src={`${PDF_PATH}#view=FitH`}
              className="h-[min(85vh,900px)] w-full min-h-[520px] border-0 bg-[#1a1a1a]"
            />
          </div>
          <p className="mt-4 text-center text-xs text-[var(--champagne)]/45">
            Trouble viewing? Use the download button — works on all devices.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--navy)]/10 bg-[var(--sand)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
            Pricing questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-[var(--navy)]/10 pb-6 last:border-0">
                <h3 className="font-[var(--font-display)] text-lg text-[var(--navy)]">{item.question}</h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--charcoal)]/82">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
            Ready for a written quote?
          </h2>
          <p className="mt-3 text-[var(--charcoal)]/75">
            Share your date, venue, and guest count — we&apos;ll respond with line-item pricing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request a quote
            </Link>
            <Link href="/packages" className="btn-outline">
              Back to packages
            </Link>
          </div>
          <p className="mt-6 text-sm text-[var(--charcoal)]/50">(773) 692-7576</p>
        </div>
      </section>
    </>
  );
}
