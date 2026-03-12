import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";

const BASE = "https://sterlingeventrentals.com";

const canonical = `${BASE}/resources/chicago-tent-permits`;

export function generateMetadata(): Metadata {
  return {
    title: "Do You Need a Tent Permit in Chicago? A Renter's Guide | Sterling Event Rentals",
    description:
      "In Chicago and across Chicagoland, tents over a certain size typically require a permit. Permits are the customer's responsibility — Sterling does not pull permits. Guide to when you need one and how to apply.",
    alternates: { canonical },
    openGraph: {
      title: "Do You Need a Tent Permit in Chicago? A Renter's Guide | Sterling Event Rentals",
      description:
        "In Chicago, tents over a certain size typically require a permit. Permits are the customer's responsibility. Guide to when you need one and how to apply.",
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
      title: "Do You Need a Tent Permit in Chicago? A Renter's Guide | Sterling Event Rentals",
      description: "Chicago tent permit guide for event renters. When you need one and how to apply.",
    },
  };
}

// Note to dev: confirm DOB size threshold and lead time with Steve or city source before publishing. Replace [X] weeks in quick answer once verified.
const quickAnswerText =
  "In Chicago, tents over a certain size typically require a permit from the Department of Buildings or the Chicago Park District, depending on your venue. Permits are the customer's responsibility — Sterling Event Rentals does not pull permits on behalf of clients. Plan for at least a few weeks lead time to apply.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Do You Need a Tent Permit in Chicago? A Renter's Guide",
  description: "When tent permits are required in Chicago, who is responsible for obtaining them, and how to apply. Guide for event renters.",
  author: { "@type": "Organization", name: "Sterling Event Rentals" },
  publisher: {
    "@type": "Organization",
    name: "Sterling Event Rentals",
    logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
  },
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
};

const faqItems = [
  {
    question: "Does Sterling pull permits for customers?",
    answer:
      "No. Permits are the customer's responsibility. Sterling Event Rentals does not pull permits on behalf of clients. We can point you to this guide and to the city resources (Chicago Department of Buildings for private property, Chicago Park District for park venues) so you know where to apply.",
  },
  {
    question: "Do I need a permit for a tent in a public park?",
    answer:
      "Events on Chicago Park District property typically require approval or a permit from the Park District, and tent size may be part of that. Rules differ from private property. Check with the Chicago Park District for your specific venue and event date. [VERIFY BEFORE LAUNCH — source: Chicago Park District]",
  },
  {
    question: "Does a small tent require a permit?",
    answer:
      "In Chicago, permit requirements usually depend on tent size and sometimes on location. Smaller tents may fall below the threshold. Confirm the current size threshold with the Chicago Department of Buildings (private property) or Chicago Park District (park venues). [VERIFY BEFORE LAUNCH — source: Chicago DOB / Park District]",
  },
  {
    question: "How long does permit approval take?",
    answer:
      "Processing time varies by agency and season. Plan for at least a few weeks so you're not rushing. That also lines up with booking your rental — Sterling recommends 21–30 days lead time for corporate events and 12–18 months for weddings. Apply for the permit as soon as your date and venue are set.",
  },
  {
    question: "What if my permit is denied?",
    answer:
      "If your application is denied, the agency should explain why. You may be able to adjust tent size, location, or timing and reapply. If you need to change your event date or venue, contact Sterling as soon as possible — our cancellation policy allows a full refund if you cancel 21 or more days before the event.",
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
    { "@type": "ListItem", position: 2, name: "Resources", item: `${BASE}/resources` },
    { "@type": "ListItem", position: 3, name: "Chicago Tent Permits", item: `${BASE}/resources/chicago-tent-permits` },
  ],
};

const articleH2Class =
  "font-[var(--font-display)] text-3xl text-[var(--navy)] md:text-4xl mt-12 mb-4 first:mt-0 border-b border-[var(--gold)]/30 pb-4 mb-6";
const articleBodyClass = "mt-4 text-lg leading-relaxed text-[var(--charcoal)]/85";

export default function ChicagoTentPermitsPage() {
  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/resources", label: "Resources" },
              { href: "/resources/chicago-tent-permits", label: "Chicago Tent Permits" },
            ]}
          />
          <p className="section-eyebrow">Resource</p>
          <h1 className="hero-headline text-[var(--cream)]">
            Do You Need a Tent Permit in Chicago? A Renter&apos;s Guide
          </h1>
          <div className="quick-answer mt-8 max-w-2xl rounded-xl border border-[var(--gold)]/30 bg-[var(--navy)]/60 p-6">
            <p className="text-lg leading-relaxed text-[var(--champagne)]">{quickAnswerText}</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact" className="btn-primary">
              Get a Quote for Your Event
            </a>
            <a href="/resources/tent-sizing-guide" className="btn-outline">
              What size tent do I need? →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div>
            <h2 className={articleH2Class}>
              When is a tent permit required in Chicago?
            </h2>
            <p className={articleBodyClass}>
              In Chicago, tents over a certain size typically require a permit from the city. The exact size threshold (e.g., square footage or dimensions) is set by the Chicago Department of Buildings for private property and by the Chicago Park District for events on park land. Requirements can differ by venue type, so it&apos;s worth confirming before you book your rental.{" "}
              <span className="text-[var(--gold)]/90">
                [VERIFY BEFORE LAUNCH — confirm size threshold with city source: Chicago DOB / Park District]
              </span>
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              Who is responsible for getting the permit — me or the rental company?
            </h2>
            <p className={articleBodyClass}>
              You are. Permits are the customer&apos;s responsibility. Sterling Event Rentals does not pull permits on behalf of clients. We provide this guide so you know where to look and what to plan for. When you contact us for a quote, we can point you here and to the right city agency for your venue.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              How do I apply for a tent permit in Chicago?
            </h2>
            <p className={articleBodyClass}>
              The pathway depends on where your event is. For <strong>private property</strong> (backyard, business lot, private venue), the Chicago Department of Buildings (DOB) is typically the permitting authority. For <strong>public parks or other Chicago Park District property</strong>, you apply through the Chicago Park District. Each has its own process and forms. Check the DOB and Park District websites for current application instructions and any required documents.{" "}
              <span className="text-[var(--gold)]/90">
                [PLACEHOLDER: add direct application URL once verified]
              </span>
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              How far in advance do I need to apply?
            </h2>
            <p className={articleBodyClass}>
              Apply as early as you can. Processing can take several weeks, and peak season can slow things down. Building in a buffer avoids last-minute stress and aligns with booking your tent — Sterling recommends 21–30 days lead time for corporate events and 12–18 months for weddings, so your permit timeline should fit within that same planning window.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What information do I need to apply?
            </h2>
            <p className={articleBodyClass}>
              Agencies often ask for some or all of the following. Confirm with the DOB or Park District for your situation:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-lg leading-relaxed text-[var(--charcoal)]/85">
              <li>Tent size (dimensions and/or square footage)</li>
              <li>Event date and time</li>
              <li>Venue address and site details</li>
              <li>Site plan (layout of tent and other structures)</li>
              <li>Insurance certificate (if required — Sterling is licensed and insured; ask us what we can provide for your application)</li>
            </ul>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What happens if I don&apos;t get a permit?
            </h2>
            <p className={articleBodyClass}>
              Operating without a required permit can mean the city may ask you to take down the tent or halt the event, and it can result in fines. The venue may also face liability. It&apos;s worth confirming whether you need a permit and applying in time — that way you can focus on the event itself.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="heading-2 text-[var(--cream)]">
            Common questions about Chicago tent permits
          </h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} withSchema={false} schemaId="ld-faq-page" variant="resourceArticle" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-4">You might also find helpful</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/resources/tent-sizing-guide"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              What size tent do I need?
            </Link>
            <Link
              href="/services/tents-structures"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Browse tent options
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Have questions? Contact us
            </Link>
          </div>

          <div className="mt-12 rounded-2xl bg-[var(--navy)] p-10 text-center">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--cream)] md:text-4xl">
              Ready to Reserve Your Tent? Check Availability
            </h2>
            <Link href="/contact" className="btn-primary mt-6 inline-block">
              Check Availability
            </Link>
            <p className="mt-4 text-sm text-[var(--champagne)]/50">
              (773) 692-7576
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
