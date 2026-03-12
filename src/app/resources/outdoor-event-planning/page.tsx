import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";

const BASE = "https://sterlingeventrentals.com";

const canonical = `${BASE}/resources/outdoor-event-planning`;

export function generateMetadata(): Metadata {
  return {
    title: "How to Plan an Outdoor Event in Chicago: A Complete Guide | Sterling Event Rentals",
    description:
      "A practical guide to planning outdoor events in Chicago: lead times, equipment, weather, space, permits, and budgeting. For corporate planners, hosts, and couples. Chicago and Chicagoland.",
    alternates: { canonical },
    openGraph: {
      title: "How to Plan an Outdoor Event in Chicago: A Complete Guide | Sterling Event Rentals",
      description:
        "A practical guide to planning outdoor events in Chicago: lead times, equipment, weather, space, permits, and budgeting.",
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
      title: "How to Plan an Outdoor Event in Chicago: A Complete Guide | Sterling Event Rentals",
      description: "A practical guide to planning outdoor events in Chicago. Lead times, equipment, weather, and more.",
    },
  };
}

const quickAnswerText =
  "This guide walks you through planning an outdoor event in Chicago and Chicagoland: how far in advance to book, what equipment you need, how weather and seasons affect your plans, space and permits, and how to budget. It's for anyone planning a first (or next) outdoor event — corporate planners, hosts, and couples — who wants a clear checklist without the overwhelm.";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Plan an Outdoor Event in Chicago: A Complete Guide",
  description: "Steps to plan an outdoor event in Chicago: set your date, estimate guests, choose equipment, confirm permits, book rentals, and prep for weather.",
  step: [
    { "@type": "HowToStep", name: "Set your date", text: "Lock in your event date. Lead times vary: corporate events often book 21–30 days out; weddings 12–18 months." },
    { "@type": "HowToStep", name: "Estimate guest count", text: "Get a solid head count. This drives tent size, tables, chairs, and budget." },
    { "@type": "HowToStep", name: "Choose equipment", text: "Decide what you need: tent, tables and chairs, stage if needed, and any interactive or specialty elements." },
    { "@type": "HowToStep", name: "Confirm permits", text: "Check whether your venue and tent size require a permit. Permits are the customer's responsibility." },
    { "@type": "HowToStep", name: "Book rentals", text: "Reserve your equipment with a rental company. A 50% deposit typically holds your date." },
    { "@type": "HowToStep", name: "Prep for weather", text: "Have a weather contingency. Know the rental company's weather policy and consider tent sidewalls for wind and rain." },
  ],
};

const faqItems = [
  {
    question: "Can I have an outdoor event in Chicago in October?",
    answer:
      "Yes. October events are common in Chicago — fall colors and cooler temps can be ideal. Temperatures can drop sharply, especially later in the month, so plan for possible cold (and consider that your rental company may have policies about unsafe weather). Tent sidewalls help with wind. Book early; fall weekends are popular.",
  },
  {
    question: "Do I need a permit for an outdoor event in Chicago?",
    answer:
      "It depends on your venue and tent size. In Chicago, tents over a certain size typically require a permit from the Department of Buildings (private property) or Chicago Park District (park venues). Permits are the customer's responsibility. See our Chicago tent permit guide for when you need one and how to apply.",
  },
  {
    question: "What is the minimum I should budget for outdoor event rentals?",
    answer:
      "Sterling Event Rentals has a $500 minimum order. You'll typically pay a 50% deposit to hold your date, with the balance due at or before delivery. The setup fee is separate from equipment rental cost — ask for it upfront so your budget reflects the full price.",
  },
  {
    question: "How do I protect my event from rain?",
    answer:
      "A tent is the first line of defense. Adding tent sidewalls (available as an add-on from Sterling) gives you wind and light rain protection. Know your rental company's weather policy: Sterling will not set up in forecasted unsafe conditions and will work with you to reschedule if needed. Once setup is complete, there is no refund, so sidewalls are a practical safeguard.",
  },
  {
    question: "How early should I confirm my event rental booking?",
    answer:
      "For corporate events, 21–30 days in advance is typical. For weddings, 12–18 months out is ideal. Social and private events are more flexible, but popular summer and fall weekends fill fast. The sooner you confirm your date with a deposit, the better.",
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
    { "@type": "ListItem", position: 3, name: "Outdoor Event Planning", item: `${BASE}/resources/outdoor-event-planning` },
  ],
};

const articleH2Class =
  "font-[var(--font-display)] text-3xl text-[var(--navy)] md:text-4xl mt-12 mb-4 first:mt-0 border-b border-[var(--gold)]/30 pb-4 mb-6";
const articleBodyClass = "mt-4 text-lg leading-relaxed text-[var(--charcoal)]/85";
const articleLinkClass = "text-[var(--navy)] underline decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]";

export default function OutdoorEventPlanningPage() {
  return (
    <>
      <Script id="ld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/resources", label: "Resources" },
              { href: "/resources/outdoor-event-planning", label: "Outdoor Event Planning" },
            ]}
          />
          <p className="section-eyebrow">Resource</p>
          <h1 className="hero-headline text-[var(--cream)]">
            How to Plan an Outdoor Event in Chicago: A Complete Guide
          </h1>
          <div className="quick-answer mt-8 max-w-2xl rounded-xl border border-[var(--gold)]/30 bg-[var(--navy)]/60 p-6">
            <p className="text-lg leading-relaxed text-[var(--champagne)]">{quickAnswerText}</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact" className="btn-primary">
              Check Availability for Your Date
            </a>
            <a href="/packages" className="btn-outline">
              See event packages →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div>
            <h2 className={articleH2Class}>
              How far in advance should I start planning?
            </h2>
            <p className={articleBodyClass}>
              It depends on your event type. For corporate events, Sterling typically sees a 21–30 day lead time — enough to confirm availability, get a quote, and lock in your date with a deposit. For weddings, 12–18 months out is ideal; popular dates go fast. Social and private events are more flexible, but summer and fall weekends fill up, so booking a few weeks ahead is smart. The takeaway: start as soon as you have a date and head count so you're not scrambling.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What equipment do I need for an outdoor event?
            </h2>
            <p className={articleBodyClass}>
              Most outdoor events need a few core categories. A <Link href="/services/tents-structures" className={articleLinkClass}>tent or structure</Link> gives you shade and shelter — sizes run from 20x20 for small gatherings to 40x80+ for large ones. <Link href="/services/tables-seating" className={articleLinkClass}>Tables and chairs</Link> cover seating and dining; you can add linens as an upgrade. If you have speeches, a ceremony, or a band, a <Link href="/services/stages-presentation" className={articleLinkClass}>stage or riser</Link> keeps presenters visible and can be combined with your tent. For corporate picnics or parties, <Link href="/services/games-entertainment" className={articleLinkClass}>games and entertainment</Link> — giant Jenga, cornhole, inflatables, photo activations — are popular add-ons. Every order should include <Link href="/services/delivery-setup-teardown" className={articleLinkClass}>delivery, setup, and teardown</Link> so you're not handling it yourself. Sterling offers all five: tents, tables and seating, stages, games and entertainment, and full-service delivery and teardown.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              How do Chicago&apos;s weather and seasons affect outdoor events?
            </h2>
            <p className={articleBodyClass}>
              Chicago weather is one of the main reasons people rent tents — it's not a luxury here, it's part of the plan. In summer, heat and sun are the issue. A tent gives shade; without it, guests bake. In spring and fall, wind and rain are the wild cards. Tent sidewalls (available as an add-on from Sterling) block wind and light rain and make a big difference when the forecast is borderline. Late in the season — October and beyond — temperatures can drop quickly. Have a backup plan: know whether your rental company will set up in marginal conditions and what happens if the forecast turns.
            </p>
            <p className={articleBodyClass}>
              A weather contingency is non-negotiable. Sterling Event Rentals will not set up in forecasted unsafe weather. If conditions are unsafe before setup begins, we work with you to reschedule. Once delivery and setup are complete, no refund is issued — so the policy is clear up front. Choosing a rental company that states its weather policy plainly (and follows it) is one way to reduce last-minute surprises. Plan for the possibility of wind, rain, or cold, and you'll be in much better shape when the day comes.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              How much space do I need per guest?
            </h2>
            <p className={articleBodyClass}>
              For a seated dinner with round tables and chairs, plan roughly 12–15 square feet per guest so you have room for tables, chairs, and circulation. For a standing or cocktail-style reception, you can go tighter — about 8–10 square feet per person. A mix of seated and standing areas falls in between. These numbers drive your tent size: a 20x40 tent (800 sq ft) fits about 50–65 seated guests or more if you're mostly standing. Use our <Link href="/resources/tent-sizing-guide" className={articleLinkClass}>tent sizing guide</Link> to match your guest count and layout to the right tent dimensions.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What permits might I need for a Chicago outdoor event?
            </h2>
            <p className={articleBodyClass}>
              In Chicago, tents over a certain size often require a permit — from the Department of Buildings for private property or the Chicago Park District for park venues. Permits are the customer's responsibility; Sterling Event Rentals does not pull permits on behalf of clients. We do provide a <Link href="/resources/chicago-tent-permits" className={articleLinkClass}>Chicago tent permit guide</Link> so you know when you need one and where to apply.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What&apos;s the best way to budget for outdoor event rentals?
            </h2>
            <p className={articleBodyClass}>
              Start with the full picture, not just the per-item price. Sterling has a $500 minimum order. You'll pay a 50% deposit to hold your date; the balance is due at or before delivery. The setup fee is separate from the equipment rental cost — it's stated upfront so you're not surprised. Ask for a total quote (tent, tables, chairs, any add-ons, plus setup) before you commit. Transparent pricing means the number you get is the number you pay.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What should I ask my event rental company before booking?
            </h2>
            <p className={articleBodyClass}>
              A short checklist keeps you covered:
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-[var(--charcoal)]/85">
              <li><strong>Are you licensed and insured?</strong> — You want both. Sterling is licensed and insured and holds the SIOTO Safety Seal (an independent safety certification), so credentials are verifiable.</li>
              <li><strong>Do you hold a safety certification?</strong> — Beyond insurance, a certification like SIOTO means equipment and operations have been independently evaluated.</li>
              <li><strong>Is setup included or extra?</strong> — Sterling includes delivery, setup, and teardown; the setup fee is separate from unit cost and quoted with your order.</li>
              <li><strong>What is your weather policy?</strong> — Sterling will not set up in forecasted unsafe conditions and will work with you to reschedule when possible; no refund once setup is complete.</li>
              <li><strong>What is the cancellation policy?</strong> — Full refund if you cancel 21 or more days before the event; no refund within 21 days or once equipment is delivered and set up.</li>
              <li><strong>Is the deposit refundable?</strong> — With Sterling, yes, if you cancel at least 21 days before the event.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="heading-2 text-[var(--cream)]">
            Common questions about outdoor events in Chicago
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
              href="/resources/chicago-tent-permits"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Chicago tent permit guide
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Browse all services
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              See package pricing
            </Link>
          </div>

          <div className="mt-12 rounded-2xl bg-[var(--navy)] p-10 text-center">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--cream)] md:text-4xl">
              Planning an outdoor event in Chicago? Check availability for your date
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
