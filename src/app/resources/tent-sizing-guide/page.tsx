import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TentSizingDiagram } from "@/components/TentSizingDiagram";

const BASE = "https://sterlingeventrentals.com";
const canonical = `${BASE}/resources/tent-sizing-guide`;

const tentSizingTitle = "Tent Sizing Guide for Chicago Events | Sterling Event Rentals";
const tentSizingDescription =
  "Choose the right tent size by guest count: 20×20 for up to 50 guests, 20×40 for up to 100, 30×60 for 150, 40×80+ for 200+ guests. Chicago and Chicagoland. Get a recommendation.";

export function generateMetadata(): Metadata {
  return {
    title: tentSizingTitle,
    description: tentSizingDescription,
    alternates: { canonical },
    openGraph: {
      title: tentSizingTitle,
      description: tentSizingDescription,
      url: canonical,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Sterling Event Rentals — Tent Sizing Guide for Chicago Events" }],
    },
    twitter: {
      card: "summary_large_image",
      title: tentSizingTitle,
      description: tentSizingDescription,
    },
  };
}

const quickAnswer =
  "For 25–50 guests, a 20×20 tent works. For 50–100 guests, plan for a 20×40. For 100–150 guests, a 30×60 is the right fit. For 150–300+ guests, you need a 40×80 or larger. Every size includes delivery, setup, and teardown by Sterling's crew.";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Choose the Right Tent Size for a Chicago Event",
  description: "How to choose the right tent size by guest count and layout for Chicago-area events.",
  step: [
    { "@type": "HowToStep", name: "Count guests", text: "Confirm your expected guest count." },
    { "@type": "HowToStep", name: "Choose layout", text: "Decide on seating style: round tables, cocktail, or a mix." },
    { "@type": "HowToStep", name: "Add space for extras", text: "If you need a stage, dance floor, or buffet, add square footage to your tent size." },
    { "@type": "HowToStep", name: "Match tent size", text: "20×20 (25–50 guests), 20×40 (50–100), 30×60 (100–150), 40×80+ (150–300+)." },
    { "@type": "HowToStep", name: "Confirm with Sterling", text: "Call (773) 692-7576 or request a quote to confirm sizing and availability for your date." },
  ],
};

const faqItems = [
  {
    question: "Does the layout change the tent size I need?",
    answer:
      "Yes. A stage, dance floor, or buffet line each take significant square footage. For a stage or band riser, add the footprint to your tent size estimate — otherwise you'll run short on table space. A dedicated dance floor typically requires an additional 200–400 sq ft depending on guest count. When you talk to Sterling, share your layout so we can recommend the right size.",
  },
  {
    question: "What if I'm not sure what size tent I need?",
    answer:
      "Call (773) 692-7576 or submit the contact form with your guest count and event type. We'll ask a few questions about your layout and recommend a tent size with no obligation.",
  },
  {
    question: "Does tent rental include setup?",
    answer:
      "Yes. Every Sterling Event Rentals order includes professional delivery, full setup, and post-event teardown by our crew. This is not a self-service rental. The setup fee is quoted separately as a named line item with your order.",
  },
  {
    question: "Can I add sidewalls to my tent?",
    answer:
      "Yes. Tent sidewalls are available as an add-on. They provide wind and light rain protection and make a real difference for Chicago weather. Ask for sidewalls when you get your quote.",
  },
  {
    question: "Do I need a permit for a tent in Chicago?",
    answer:
      "In Chicago, tents over a certain size typically require a permit from the city or Chicago Park District. Permits are the customer's responsibility — Sterling does not pull permits on behalf of clients. See our Chicago tent permit guide for requirements and how to apply.",
  },
  {
    question: "What is the minimum order for a tent rental?",
    answer:
      "Sterling Event Rentals has a $500 minimum order. A 50% deposit holds your date; the balance is due at or before delivery.",
  },
  {
    question: "Can Sterling help me choose the right size?",
    answer:
      "Yes. When you call (773) 692-7576 or submit a contact form, we'll ask about your guest count, layout, and whether you need a stage, dance floor, or buffet area. We'll recommend a size and confirm availability for your date.",
  },
  {
    question: "How far in advance should I book a tent rental?",
    answer:
      "For corporate events, 21–30 days in advance. For weddings, 3–6 months out. Peak summer and fall weekends fill fast — the sooner you confirm your date with a deposit, the better.",
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
    { "@type": "ListItem", position: 3, name: "Tent Sizing Guide", item: canonical },
  ],
};

const H2 = "font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl mt-0 mb-3";
const BODY = "text-base leading-relaxed text-[var(--charcoal)]/82";

export default function TentSizingGuidePage() {
  return (
    <>
      <Script id="ld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO ── */}
      <section className="gradient-hero relative min-h-[60vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/resources", label: "Resources" },
              { href: "/resources/tent-sizing-guide", label: "Tent Sizing Guide" },
            ]}
          />
          <p className="section-eyebrow text-[var(--gold-light)]">Resource Guide</p>
          <h1 className="hero-headline text-[var(--cream)]">
            What size tent do I need?
          </h1>
          {/* Speakable passage — marked for voice/AI extraction */}
          <p
            className="max-w-2xl text-lg leading-relaxed text-[var(--champagne)]/85"
            aria-label="Quick answer"
          >
            {quickAnswer}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Tent Recommendation
            </Link>
            <Link href="/resources/chicago-tent-permits" className="btn-outline">
              Chicago permit guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TENT SIZING DIAGRAM ── */}
      <section className="bg-[var(--navy)] py-14">
        <div className="mx-auto max-w-5xl px-4">
          <p className="section-eyebrow mb-3" style={{ color: "#e8c97a" }}>Visual Guide</p>
          <h2 className="mb-8 font-[var(--font-display)] text-2xl md:text-3xl" style={{ color: "#f5f0e8" }}>
            Tent footprints at a glance
          </h2>
          <TentSizingDiagram />
        </div>
      </section>

      {/* ── QUICK REFERENCE TABLE ── */}
      <section className="bg-[var(--cream)] py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-3 text-[var(--gold)]">Quick Reference</p>
          <h2 className="mb-6 font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
            Tent size by guest count
          </h2>
          <div className="overflow-hidden rounded-2xl border border-[var(--navy)]/15 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0b1f3a" }}>
                  <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest" style={{ color: "#e8c97a" }}>Guests</th>
                  <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest" style={{ color: "#e8c97a" }}>Tent size</th>
                  <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest" style={{ color: "#e8c97a" }}>Sq footage</th>
                  <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest hidden sm:table-cell" style={{ color: "#e8c97a" }}>Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { guests: "25–50", size: "20×20", sqft: "400 sq ft", use: "Backyard parties, intimate gatherings" },
                  { guests: "50–100", size: "20×40", sqft: "800 sq ft", use: "Corporate picnics, milestone parties" },
                  { guests: "100–150", size: "30×60", sqft: "1,800 sq ft", use: "Weddings, large corporate events" },
                  { guests: "150–300+", size: "40×80+", sqft: "3,200+ sq ft", use: "Large weddings, major company events" },
                ].map((row, i) => (
                  <tr
                    key={row.size}
                    className="border-t border-[var(--navy)]/10"
                    style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "rgba(245,240,232,0.5)" }}
                  >
                    <td className="px-5 py-3.5 font-medium text-[var(--charcoal)]">{row.guests}</td>
                    <td className="px-5 py-3.5 font-semibold text-[var(--navy)]">{row.size}</td>
                    <td className="px-5 py-3.5 text-[var(--charcoal)]/75">{row.sqft}</td>
                    <td className="px-5 py-3.5 text-[var(--charcoal)]/75 hidden sm:table-cell">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs italic text-[var(--charcoal)]/45">
            Seated dinner layout. Add square footage for dance floor, stage, or buffet area.
          </p>
        </div>
      </section>

      {/* ── AEO: 4 GUEST-COUNT H2 SECTIONS ── */}
      <section className="border-t border-[var(--navy)]/10 bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-10 text-[var(--gold)]">Size by Guest Count</p>

          <div className="flex flex-col gap-12">

            {/* 50 guests */}
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <h2 className={H2}>What size tent do I need for 50 guests?</h2>
                <p className={BODY}>
                  A <strong>20×40 tent</strong> is the right fit for 50 guests with round tables and chairs — it seats roughly 6–8 round tables with room to circulate. For fewer than 40 guests in a cocktail-only format, a 20×20 can work. Sterling&apos;s crew will confirm the best size once they know your exact headcount and table mix.
                </p>
              </div>
              <div className="flex-shrink-0 rounded-xl px-5 py-4 sm:text-right" style={{ backgroundColor: "#f5f0e8", border: "1px solid rgba(11,31,58,0.08)" }}>
                <p className="text-2xl font-bold text-[var(--navy)]">20×40</p>
                <p className="text-xs text-[var(--charcoal)]/60 mt-0.5">800 sq ft</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--navy)]/8" />

            {/* 100 guests */}
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <h2 className={H2}>What size tent do I need for 100 guests?</h2>
                <p className={BODY}>
                  For 100 seated guests, plan on a <strong>20×40 tent</strong> as the minimum — it seats about 12–14 round tables. If your event includes a dance floor, stage, or buffet line, size up to a <strong>30×60</strong> so everything fits under one structure without crowding.
                </p>
              </div>
              <div className="flex-shrink-0 rounded-xl px-5 py-4 sm:text-right" style={{ backgroundColor: "#f5f0e8", border: "1px solid rgba(11,31,58,0.08)" }}>
                <p className="text-2xl font-bold text-[var(--navy)]">20×40</p>
                <p className="text-xs text-[var(--charcoal)]/60 mt-0.5">+ stage → 30×60</p>
              </div>
            </div>

            <div className="border-t border-[var(--navy)]/8" />

            {/* 150 guests */}
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <h2 className={H2}>What size tent do I need for 150 guests?</h2>
                <p className={BODY}>
                  For 150 guests, a <strong>30×60 tent</strong> is standard — it fits roughly 18–20 round tables with circulation and can accommodate a head table or small stage. If you need a full dance floor or separate buffet zone, consider a <strong>40×80</strong> or a two-structure configuration.
                </p>
              </div>
              <div className="flex-shrink-0 rounded-xl px-5 py-4 sm:text-right" style={{ backgroundColor: "#f5f0e8", border: "1px solid rgba(11,31,58,0.08)" }}>
                <p className="text-2xl font-bold text-[var(--navy)]">30×60</p>
                <p className="text-xs text-[var(--charcoal)]/60 mt-0.5">1,800 sq ft</p>
              </div>
            </div>

            <div className="border-t border-[var(--navy)]/8" />

            {/* 200+ guests */}
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <h2 className={H2}>What size tent do I need for 200 or more guests?</h2>
                <p className={BODY}>
                  For 200+ guests, you need a <strong>40×80 or larger</strong>. This range covers large corporate events, weddings, and milestone celebrations with full table seating, a stage, and a dance floor. Custom quotes are required — call <a href="tel:+17736927576" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2">(773) 692-7576</a> to confirm layout options and availability.
                </p>
              </div>
              <div className="flex-shrink-0 rounded-xl px-5 py-4 sm:text-right" style={{ backgroundColor: "#f5f0e8", border: "1px solid rgba(11,31,58,0.08)" }}>
                <p className="text-2xl font-bold text-[var(--navy)]">40×80+</p>
                <p className="text-xs text-[var(--charcoal)]/60 mt-0.5">3,200+ sq ft</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SPACE PLANNING CALLOUT ── */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-12">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="section-eyebrow mb-3" style={{ color: "#e8c97a" }}>Space Planning Rule</p>
            <h2 className="mb-4 font-[var(--font-display)] text-xl md:text-2xl" style={{ color: "#f5f0e8" }}>
              10–12 sq ft per seated guest. 6–8 sq ft cocktail-style.
            </h2>
            <div className="grid gap-4 sm:grid-cols-3 text-sm" style={{ color: "rgba(245,230,200,0.75)" }}>
              <div className="flex flex-col gap-1">
                <span className="font-medium" style={{ color: "#c9a84c" }}>Seated dinner</span>
                <span>10–12 sq ft per guest</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium" style={{ color: "#c9a84c" }}>Cocktail / standing</span>
                <span>6–8 sq ft per guest</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium" style={{ color: "#c9a84c" }}>Dance floor addition</span>
                <span>+200–400 sq ft</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-3 text-[var(--gold)]">FAQ</p>
          <h2 className="mb-8 font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
            Common questions about tent sizing
          </h2>
          <FAQAccordion items={faqItems} withSchema={false} schemaId="ld-faq-inline" variant="light" />
        </div>
      </section>

      {/* ── RELATED + CTA ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--sand)] py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-4 text-[var(--gold)]">You might also find helpful</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/services/tents-structures", label: "Browse tent rental options" },
              { href: "/resources/chicago-tent-permits", label: "Chicago tent permit guide" },
              { href: "/packages", label: "See tent packages & pricing" },
              { href: "/resources/outdoor-event-planning", label: "Outdoor event planning guide" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium transition-colors"
                style={{ color: "#0b1f3a", border: "1px solid rgba(11,31,58,0.25)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[var(--navy)] p-10 text-center">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--cream)] md:text-3xl">
              Not sure which size is right?
            </h2>
            <p className="mt-3 text-sm text-[var(--champagne)]/65">
              Tell us your guest count and event type. We&apos;ll recommend a size and confirm availability.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-block">
              Get a Recommendation
            </Link>
            <p className="mt-4 text-sm text-[var(--champagne)]/45">(773) 692-7576</p>
          </div>
        </div>
      </section>
    </>
  );
}
