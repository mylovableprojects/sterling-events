import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";

const BASE = "https://sterlingeventrentals.com";

const canonical = `${BASE}/resources/corporate-event-checklist`;

export function generateMetadata(): Metadata {
  return {
    title: "Corporate Event Planning Checklist: Outdoor Events in Chicago | Sterling Event Rentals",
    description:
      "A timeline checklist for corporate outdoor events in Chicago and Chicagoland: 6 weeks, 3 weeks, 1 week, and day-of. Venue, permits, vendor credentials, and logistics so nothing falls through the cracks.",
    alternates: { canonical },
    openGraph: {
      title: "Corporate Event Planning Checklist: Outdoor Events in Chicago | Sterling Event Rentals",
      description:
        "Checklist for corporate outdoor events in Chicago — venue, permits, equipment, credentials, and day-of logistics.",
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
      title: "Corporate Event Planning Checklist: Outdoor Events in Chicago | Sterling Event Rentals",
      description: "Corporate event checklist for outdoor events in Chicago. Timeline, credentials, and logistics.",
    },
  };
}

const quickAnswerText =
  "Planning a corporate outdoor event in Chicago? This checklist covers everything from venue and permits to equipment, vendor credentials, and day-of logistics — so nothing falls through the cracks.";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Corporate Event Planning Checklist: Outdoor Events in Chicago",
  description: "Timeline checklist for corporate outdoor events: 6 weeks out, 3 weeks out, 1 week out, and day-of responsibilities.",
  step: [
    { "@type": "HowToStep", name: "6 weeks out", text: "Lock the date, confirm venue and permits, get vendor quotes, confirm guest count estimate, book rentals and pay deposit, verify vendor credentials (licensed, insured, safety-certified)." },
    { "@type": "HowToStep", name: "3 weeks out", text: "Finalize guest count, confirm rental order details and delivery window, assign internal point of contact, share venue access with vendors, confirm cancellation and weather policy with rental company." },
    { "@type": "HowToStep", name: "1 week out", text: "Reconfirm delivery date and time, confirm vendor has venue contact, check weather forecast, prepare backup plan if weather is marginal, send event details to attendees." },
    { "@type": "HowToStep", name: "Day of", text: "Rental company handles delivery, setup, and teardown; you handle venue access, permits, attendee management, and catering. Clear handoff." },
  ],
};

// Invoicing FAQ: confirm with Steve whether invoicing is offered before publishing. Answer below is phrased to allow confirmation.
const faqItems = [
  {
    question: "How far in advance should I book corporate event rentals?",
    answer:
      "Sterling typically works on a 21–30 day lead time for corporate events. Lock your date and get quotes as soon as you have a venue and head count — summer and fall weekends fill fast. A 50% deposit holds your date; the balance is due at or before delivery.",
  },
  {
    question: "What is a SIOTO Safety Seal and why does it matter?",
    answer:
      "The SIOTO Safety Seal is an independent third-party certification that verifies an event rental company's equipment and operations meet industry safety standards. It goes beyond basic liability insurance — it means the equipment has been inspected and the company has been evaluated for safe operating practices. For corporate buyers and venue coordinators who need to verify vendor credentials, it's a concrete signal. Sterling Event Rentals is licensed, insured, and SIOTO Safety Seal certified.",
  },
  {
    question: "Is setup and teardown included in corporate rental pricing?",
    answer:
      "Every Sterling order includes professional delivery, full setup, and post-event teardown by our crew. The setup fee is separate from the equipment rental cost and is quoted with your order — so you see the full price upfront. There is no self-service option; our team handles installation and removal.",
  },
  {
    question: "What if our headcount changes after we book?",
    answer:
      "Contact your rental company as soon as you know. Changes to guest count may affect tent size, table and chair quantities, and possibly package tier. Sterling's cancellation policy: full refund if you cancel 21 or more days before the event; no refund within 21 days or once equipment has been delivered and set up. The sooner you communicate changes, the more flexibility you have.",
  },
  {
    question: "Do you provide invoicing for corporate orders?",
    answer:
      "Many corporate planners need invoicing for internal approval and payment. Ask when you request a quote or call (773) 692-7576 — confirm invoicing options for your order before you book.",
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
    { "@type": "ListItem", position: 3, name: "Corporate Event Checklist", item: `${BASE}/resources/corporate-event-checklist` },
  ],
};

const articleH2Class =
  "font-[var(--font-display)] text-3xl text-[var(--navy)] md:text-4xl mt-12 mb-4 first:mt-0 border-b border-[var(--gold)]/30 pb-4 mb-6";
const articleBodyClass = "mt-4 text-lg leading-relaxed text-[var(--charcoal)]/85";

export default function CorporateEventChecklistPage() {
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
              { href: "/resources/corporate-event-checklist", label: "Corporate Event Checklist" },
            ]}
          />
          <p className="section-eyebrow">Resource</p>
          <h1 className="hero-headline text-[var(--cream)]">
            Corporate Event Planning Checklist: Outdoor Events in Chicago
          </h1>
          <div className="quick-answer mt-8 max-w-2xl rounded-xl border border-[var(--gold)]/30 bg-[var(--navy)]/60 p-6">
            <p className="text-lg leading-relaxed text-[var(--champagne)]">{quickAnswerText}</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact" className="btn-primary">
              Get a Corporate Event Quote
            </a>
            <a href="/packages" className="btn-outline">
              See packages →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div>
            <h2 className={articleH2Class}>
              6 weeks out — What should I confirm first?
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg leading-relaxed text-[var(--charcoal)]/85">
              <li><strong>Lock the date</strong> — Confirm with stakeholders so you can commit to vendors. Corporate lead times are often 21–30 days; don't leave it to the last minute.</li>
              <li><strong>Confirm venue and permits required</strong> — Know whether your site (private property vs. park) and tent size require a permit. Permits are your responsibility; the rental company doesn't pull them. Use a permit guide if your vendor offers one.</li>
              <li><strong>Get vendor quotes</strong> — Request quotes from rental companies with your date, head count, and equipment list. Ask for total price including setup so you're not surprised.</li>
              <li><strong>Confirm guest count estimate</strong> — You need a number for tent sizing and table/chair counts. Refine it as you get closer, but have a working estimate now.</li>
              <li><strong>Book rentals and pay deposit</strong> — A 50% deposit typically holds your date. Balance due at or before delivery. Book before your date disappears.</li>
              <li><strong>Verify vendor credentials</strong> — Licensed, insured, and safety-certified (e.g., SIOTO Safety Seal). If your venue or risk team requires proof, get it now.</li>
            </ul>
          </div>

          <div>
            <h2 className={articleH2Class}>
              3 weeks out — What needs to be finalized?
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg leading-relaxed text-[var(--charcoal)]/85">
              <li><strong>Final guest count</strong> — Lock it or get as close as you can. This drives final tent size, tables, and chairs.</li>
              <li><strong>Confirm rental order details</strong> — Tent size, table and chair counts, add-ons (sidewalls, stage, games). One wrong number and you're short on the day.</li>
              <li><strong>Confirm delivery window</strong> — When will the crew arrive? When do they need access? Package tiers that include a dedicated day-of contact make this easier.</li>
              <li><strong>Assign internal point of contact</strong> — One person on your side who can answer vendor questions and be on-site for delivery. Avoid the "no one knew who to call" scenario.</li>
              <li><strong>Share venue access instructions with vendors</strong> — Loading dock, gate codes, contact at the venue. If the crew can't get in, setup doesn't happen.</li>
              <li><strong>Confirm cancellation and weather policy with rental company</strong> — Know the rules: full refund 21+ days out? No refund once equipment is set up? Will they set up in marginal weather? Get it in writing so there are no day-of surprises.</li>
            </ul>
          </div>

          <div>
            <h2 className={articleH2Class}>
              1 week out — What should I double-check?
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg leading-relaxed text-[var(--charcoal)]/85">
              <li><strong>Reconfirm delivery date and time</strong> — A quick call or email. Vendors get busy; confirm you're still on the schedule.</li>
              <li><strong>Confirm vendor has venue contact</strong> — Who will they call if they're early, late, or can't access the site? Make sure they have a name and number.</li>
              <li><strong>Check weather forecast</strong> — Chicago weather shifts. If the forecast is borderline, know your rental company's policy. Sterling will not set up in forecasted unsafe conditions and will work with you to reschedule when possible.</li>
              <li><strong>Prepare backup plan if weather is marginal</strong> — Tent sidewalls, indoor backup, or a clear go/no-go time. Don't decide at 7 a.m. with no plan.</li>
              <li><strong>Send event details to attendees</strong> — Time, location, parking, what to expect. Reduces day-of confusion and last-minute questions.</li>
            </ul>
          </div>

          <div>
            <h2 className={articleH2Class}>
              Day of — What does the rental company handle vs. what do I handle?
            </h2>
            <p className={articleBodyClass}>
              The rental company handles delivery, setup, and teardown — and, with the right package, an on-site crew and a dedicated day-of contact so you have one point of contact instead of chasing the truck. You handle venue access (making sure they can get in), permits (if required), attendee management, and everything else that isn't equipment — catering, signage, run of show. The handoff is simple: you provide the site and the point of contact; they provide the tent, tables, chairs, and labor. Clarify this with your vendor before the day so there's no overlap or gap.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What credentials should I verify before booking an event rental company?
            </h2>
            <p className={articleBodyClass}>
              Your reputation is on the line if the vendor no-shows or the equipment fails. Verify that the company is <strong>licensed and insured</strong> — that's baseline. A <strong>safety certification</strong> such as the SIOTO Safety Seal goes further: it means equipment and operations have been independently inspected and certified, not just insured after the fact. That distinction matters to corporate buyers and venue coordinators who need to document vendor due diligence. Check <strong>years in business</strong> and, if possible, <strong>real event photos</strong> (not stock) so you know they've done events like yours. Finally, confirm <strong>cancellation and refund terms</strong> in plain language — full refund if cancelled 21+ days out, no refund within 21 days or once delivered and set up. Transparency up front avoids disputes later.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What questions should I ask my rental vendor before signing?
            </h2>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-[var(--charcoal)]/85">
              <li>Are you licensed and insured?</li>
              <li>Do you hold a SIOTO Safety Seal or equivalent certification?</li>
              <li>Is setup included or billed separately? (You want a clear answer — the setup fee should be quoted with your order.)</li>
              <li>What is your delivery window? When will the crew arrive and when do they need access?</li>
              <li>Do you provide a dedicated day-of contact? (Package tiers that include this reduce your coordination load.)</li>
              <li>What is your weather cancellation policy? Will you set up in marginal conditions, and what happens if you don't?</li>
              <li>What is the deposit and refund policy? (Full refund 21+ days out? No refund once equipment is delivered and set up?)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="heading-2 text-[var(--cream)]">
            Common questions about corporate event rentals
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
              href="/packages"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Browse corporate-ready rental packages
            </Link>
            <Link
              href="/answers/what-is-sioto-safety-seal"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              What is the SIOTO Safety Seal?
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Get a corporate event quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              All services
            </Link>
          </div>

          <div className="mt-12 rounded-2xl bg-[var(--navy)] p-10 text-center">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--cream)] md:text-4xl">
              Ready to lock in your event date? Check availability
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
