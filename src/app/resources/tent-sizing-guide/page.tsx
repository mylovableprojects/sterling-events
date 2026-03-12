import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";

const BASE = "https://sterlingeventrentals.com";

const canonical = `${BASE}/resources/tent-sizing-guide`;

export function generateMetadata(): Metadata {
  return {
    title: "What Size Tent Do I Need? Chicago Tent Sizing Guide | Sterling Event Rentals",
    description:
      "Choose the right tent size by guest count: 20x20 for up to 25, 20x40 for up to 100, 30x60 for 150, 40x80+ for 200+. Chicago and Chicagoland. Get a recommendation.",
    alternates: { canonical },
    openGraph: {
      title: "What Size Tent Do I Need? Chicago Tent Sizing Guide | Sterling Event Rentals",
      description:
        "Choose the right tent size by guest count: 20x20 for up to 25, 20x40 for up to 100, 30x60 for 150, 40x80+ for 200+. Chicago and Chicagoland. Get a recommendation.",
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
      title: "What Size Tent Do I Need? Chicago Tent Sizing Guide | Sterling Event Rentals",
      description:
        "Choose the right tent size by guest count for Chicago-area events. Get a recommendation.",
    },
  };
}

const quickAnswerText =
  "For up to 25 guests, a 20x20 tent works. For up to 100 guests with tables and chairs, plan for a 20x40. For 150 guests, a 30x60 is the right fit. For 200 or more, you need a 40x80 or larger. Sterling Event Rentals offers sizes from 20x20 to 40x80+ across Chicago and Chicagoland, with delivery, setup, and teardown included.";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What Size Tent Do I Need? Chicago Event Tent Sizing Guide",
  description: "How to choose the right tent size by guest count and layout for Chicago-area events.",
  step: [
    { "@type": "HowToStep", name: "Count guests", text: "Confirm your expected guest count." },
    { "@type": "HowToStep", name: "Choose layout", text: "Decide on seating style: round tables and chairs, cocktail mix, or a combination." },
    { "@type": "HowToStep", name: "Add space for stage or dance floor", text: "If you need a stage, dance floor, or buffet line, add square footage to your tent size." },
    { "@type": "HowToStep", name: "Select tent size", text: "Match guest count and layout to tent size: 20x20 (up to 25), 20x40 (up to 100), 30x60 (up to 150), 40x80+ (150–300+)." },
    { "@type": "HowToStep", name: "Confirm with Sterling", text: "Call Sterling Event Rentals at (773) 692-7576 or request a quote to confirm sizing and availability for your date." },
  ],
};

const faqItems = [
  {
    question: "Does tent rental include setup?",
    answer:
      "Yes. Every Sterling Event Rentals order includes professional delivery, full setup, and post-event teardown by our crew. This is not a self-service rental. The setup fee is separate from the equipment rental cost and is quoted with your order.",
  },
  {
    question: "Can I add sidewalls to my tent?",
    answer:
      "Yes. Tent sidewalls are available as an add-on. They provide wind and light rain protection during the event and can make a big difference for Chicago weather. Ask for sidewalls when you get your quote.",
  },
  {
    question: "Do I need a permit for a tent in Chicago?",
    answer:
      "In Chicago, tents over a certain size typically require a permit from the city. The permit is the customer's responsibility — Sterling does not pull permits on behalf of clients. See our Chicago tent permit guide for requirements and how to apply.",
  },
  {
    question: "What is the minimum order for a tent rental?",
    answer:
      "Sterling Event Rentals has a $500 minimum order. A 50% deposit holds your date; the balance is due at or before delivery. Get a quote to see how your tent, tables, and add-ons fit within that minimum.",
  },
  {
    question: "Can Sterling help me choose the right size?",
    answer:
      "Yes. When you call (773) 692-7576 or submit a contact form, we'll ask about your guest count, layout, and whether you need space for a stage, dance floor, or buffet. We'll recommend a tent size and confirm availability for your date.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For corporate events, we recommend booking 21–30 days in advance. For weddings, 12–18 months out is ideal. Popular summer and fall weekends fill fast — the sooner you confirm your date with a deposit, the better.",
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
    { "@type": "ListItem", position: 3, name: "Tent Sizing Guide", item: `${BASE}/resources/tent-sizing-guide` },
  ],
};

const articleH2Class =
  "font-[var(--font-display)] text-3xl text-[var(--navy)] md:text-4xl mt-12 mb-4 first:mt-0 border-b border-[var(--gold)]/30 pb-4 mb-6";
const articleBodyClass = "mt-4 text-lg leading-relaxed text-[var(--charcoal)]/85";

export default function TentSizingGuidePage() {
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
              { href: "/resources/tent-sizing-guide", label: "Tent Sizing Guide" },
            ]}
          />
          <p className="section-eyebrow">Resource</p>
          <h1 className="hero-headline text-[var(--cream)]">
            What Size Tent Do I Need? Chicago Event Tent Sizing Guide
          </h1>
          <div className="quick-answer mt-8 max-w-2xl rounded-xl border border-[var(--gold)]/30 bg-[var(--navy)]/60 p-6">
            <p className="text-lg leading-relaxed text-[var(--champagne)]">{quickAnswerText}</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact" className="btn-primary">
              Get a Tent Recommendation
            </a>
            <a href="/resources/chicago-tent-permits" className="btn-outline">
              Chicago permit guide →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div>
            <h2 className={articleH2Class}>
              What size tent do I need for 50 guests?
            </h2>
            <p className={articleBodyClass}>
              For 50 guests with round tables and chairs, a 20x40 tent is the right fit. That size gives you room for roughly 6–8 round tables, chairs, and space to move. If your layout is mostly cocktail-style or you have fewer than 50, a 20x20 can work for a more intimate setup. Sterling's crew can confirm the best size once they know your exact head count and table mix.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What size tent do I need for 100 guests?
            </h2>
            <p className={articleBodyClass}>
              For 100 guests with seated dining, plan on a 20x40 tent minimum. That accommodates about 12–14 round tables and chairs with room to walk. If you're adding a dance floor, stage, or buffet line, size up to a 30x45 or 30x60 so everything fits under one structure. Sterling's Event Ready package (tent up to 20x40, tables, chairs, delivery, and setup) is built for this range.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What size tent do I need for 150 guests?
            </h2>
            <p className={articleBodyClass}>
              For 150 guests, a 30x60 tent is the standard. You get space for roughly 18–20 round tables, chairs, and circulation. If your event includes a stage, head table, or dedicated dance area, a 30x60 keeps it all covered. Sterling offers large tent and multi-structure configurations up to 40x80+ for this guest count when you need extra room or a specific layout.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What size tent do I need for 200+ guests?
            </h2>
            <p className={articleBodyClass}>
              For 200 or more guests, you need a 40x80 or larger. That's the range for large corporate events, weddings, and milestone celebrations. Sterling's premium package (The Sterling Experience) includes a large or multi-structure tent up to 40x80, tables, chairs, staging, and full delivery and setup. Custom quotes are required for this size — call (773) 692-7576 to confirm availability and layout options.
            </p>
          </div>

          <div className="my-10 overflow-hidden rounded-2xl border border-[var(--navy)]/15 shadow-sm">
            <table className="w-full text-base">
              <thead>
                <tr className="bg-[var(--navy)] text-[var(--cream)]">
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-widest">Guest count</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-widest">Tent size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-widest">Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[var(--navy)]/10 odd:bg-white even:bg-[var(--sand)]/50">
                  <td className="px-6 py-4 text-[var(--charcoal)]">25–50</td>
                  <td className="px-6 py-4 text-[var(--charcoal)]">20x20</td>
                  <td className="px-6 py-4 text-[var(--charcoal)]">Small private parties, backyard events, first-time renters</td>
                </tr>
                <tr className="border-t border-[var(--navy)]/10 odd:bg-white even:bg-[var(--sand)]/50">
                  <td className="px-6 py-4 text-[var(--charcoal)]">50–100</td>
                  <td className="px-6 py-4 text-[var(--charcoal)]">20x40</td>
                  <td className="px-6 py-4 text-[var(--charcoal)]">Corporate picnics, milestone parties, seated dinners</td>
                </tr>
                <tr className="border-t border-[var(--navy)]/10 odd:bg-white even:bg-[var(--sand)]/50">
                  <td className="px-6 py-4 text-[var(--charcoal)]">100–150</td>
                  <td className="px-6 py-4 text-[var(--charcoal)]">30x60</td>
                  <td className="px-6 py-4 text-[var(--charcoal)]">Larger corporate events, weddings, events with stage or dance floor</td>
                </tr>
                <tr className="border-t border-[var(--navy)]/10 odd:bg-white even:bg-[var(--sand)]/50">
                  <td className="px-6 py-4 text-[var(--charcoal)]">150–300+</td>
                  <td className="px-6 py-4 text-[var(--charcoal)]">40x80+</td>
                  <td className="px-6 py-4 text-[var(--charcoal)]">Large weddings, major corporate events, multi-zone layouts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm italic text-[var(--charcoal)]/50">
            Sizing is approximate; layout (stage, dance floor, buffet) affects the tent size you need.
          </p>

          <div>
            <h2 className={articleH2Class}>
              Does the layout change the tent size I need?
            </h2>
            <p className={articleBodyClass}>
              Yes. A stage, dance floor, or long buffet line each take significant square footage. If you need a stage for presentations or a band, add the stage footprint to your tent size — otherwise you'll be short on space for tables and chairs. A dedicated dance floor also eats into seating area. Buffet tables along one side or in the middle need clear walkways. When you talk to Sterling, share your layout (seated dinner only, or dinner plus stage, dance floor, buffet) and we'll recommend the tent size that fits.
            </p>
          </div>

          <div>
            <h2 className={articleH2Class}>
              What if I'm not sure what size I need?
            </h2>
            <p className={articleBodyClass}>
              Call (773) 692-7576 or submit a contact form with your guest count and event type. We'll ask a few questions about layout and recommend a tent size. There's no obligation — we'd rather confirm the right size before you book than have you guess.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="heading-2 text-[var(--cream)]">
            Common questions about tent sizing
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
              href="/services/tents-structures"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Browse tent rental options
            </Link>
            <Link
              href="/answers/do-i-need-permit-tent-chicago"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Do I need a Chicago tent permit?
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center rounded-full border border-[var(--navy)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              See tent packages and pricing
            </Link>
          </div>

          <div className="mt-12 rounded-2xl bg-[var(--navy)] p-10 text-center">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--cream)] md:text-4xl">
              Get a Tent Recommendation for Your Event
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
