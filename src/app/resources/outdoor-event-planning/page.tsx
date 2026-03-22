import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";

const BASE = "https://sterlingeventrentals.com";
const canonical = `${BASE}/resources/outdoor-event-planning`;

export function generateMetadata(): Metadata {
  return {
    title: "How to Plan an Outdoor Event in Chicago: A Complete Guide | Sterling Event Rentals",
    description:
      "A practical guide to planning outdoor events in Chicago: lead times by event type, equipment, weather and seasons, space planning, and what to ask your rental vendor.",
    alternates: { canonical },
    openGraph: {
      title: "How to Plan an Outdoor Event in Chicago: A Complete Guide | Sterling Event Rentals",
      description:
        "Lead times, equipment, weather, space, and vendor questions for outdoor events in Chicago and Chicagoland.",
      url: canonical,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Outdoor Event Planning Guide — Sterling Event Rentals" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "How to Plan an Outdoor Event in Chicago: A Complete Guide | Sterling Event Rentals",
      description: "Planning an outdoor event in Chicago. Lead times, equipment, weather, and more.",
    },
  };
}

const quickAnswer =
  "Planning an outdoor event in Chicago means accounting for weather, lead times, permits, and equipment — all before your guests arrive. This guide covers when to start, what you need, how Chicago seasons affect your plans, and what to ask your rental vendor. Whether it's a corporate picnic, wedding, or backyard party, here's what to know.";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Plan an Outdoor Event in Chicago",
  description: "Steps to plan an outdoor event in Chicago: set your date, estimate guests, choose equipment, confirm permits, book rentals, and prep for weather.",
  step: [
    { "@type": "HowToStep", name: "Set your date and headcount", text: "Lock in your event date and get a firm guest estimate. These two numbers drive every other decision." },
    { "@type": "HowToStep", name: "Choose your equipment", text: "Decide what you need: tent, tables and chairs, stage if needed, and entertainment add-ons." },
    { "@type": "HowToStep", name: "Check permit requirements", text: "Confirm whether your venue and tent size require a permit. Permits are the customer's responsibility." },
    { "@type": "HowToStep", name: "Book your rentals", text: "Reserve equipment with a deposit — 21–30 days out for corporate, 3–6 months for weddings." },
    { "@type": "HowToStep", name: "Plan for Chicago weather", text: "Add tent sidewalls for wind and rain protection. Know your rental company's weather policy before the event." },
  ],
};

const faqItems = [
  {
    question: "How much space do I need per guest at an outdoor event?",
    answer:
      "For a seated dinner with round tables, plan 12–15 sq ft per guest — enough for tables, chairs, and circulation. For cocktail or standing-style events, 8–10 sq ft per person works. A mix of seated and standing falls in between. Use our tent sizing guide to match your count to the right tent dimensions.",
  },
  {
    question: "What permits might I need for a Chicago outdoor event?",
    answer:
      "In Chicago, tents over 400 sq ft or 15 ft tall typically require a permit — from the Department of Buildings for private property, or the Chicago Park District for park venues. Permits are the customer's responsibility. See our Chicago tent permit guide for current thresholds and how to apply.",
  },
  {
    question: "What's the best way to budget for outdoor event rentals?",
    answer:
      "Start with a total quote — tent, tables, chairs, any add-ons, plus setup and delivery as named line items. Sterling has a $500 minimum order. You'll pay a 50% deposit to hold your date; the balance is due at or before delivery. The setup fee is separate from equipment cost and stated upfront. Ask for the full number before you commit.",
  },
  {
    question: "Can I have an outdoor event in Chicago in October?",
    answer:
      "Yes. October events are common in Chicago — fall colors and cooler temps can be ideal. Temperatures can drop sharply later in the month, so plan for possible cold. Tent sidewalls help significantly with wind. Book early; fall weekends fill fast.",
  },
  {
    question: "Do I need a permit for an outdoor event in Chicago?",
    answer:
      "It depends on your venue and tent size. Tents over 400 sq ft or 15 ft tall typically require a permit. Permits are the customer's responsibility — Sterling does not pull permits on behalf of clients. See our Chicago tent permit guide for details.",
  },
  {
    question: "How do I protect my event from rain?",
    answer:
      "A tent is your first line of defense. Adding sidewalls (available as a Sterling add-on) gives you wind and light rain protection. Know your rental company's weather policy — Sterling will not set up in forecasted unsafe conditions and will work with you to reschedule if needed. Once setup is complete, no refund is issued, so sidewalls are a practical safeguard.",
  },
  {
    question: "How early should I confirm my event rental booking?",
    answer:
      "Corporate events: 21–30 days in advance. Weddings: 3–6 months out. Social and private events are more flexible, but popular summer and fall weekends fill fast. The sooner you confirm with a deposit, the better your availability.",
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
    { "@type": "ListItem", position: 3, name: "Outdoor Event Planning", item: canonical },
  ],
};

const H2 = "font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl mb-3";
const BODY = "text-base leading-relaxed text-[var(--charcoal)]/82";

export default function OutdoorEventPlanningPage() {
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
              { href: "/resources/outdoor-event-planning", label: "Outdoor Event Planning" },
            ]}
          />
          <p className="section-eyebrow text-[var(--gold-light)]">Resource Guide</p>
          <h1 className="hero-headline text-[var(--cream)]">
            How to plan an outdoor event in Chicago
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--champagne)]/85" aria-label="Quick answer">
            {quickAnswer}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">Check Availability for Your Date</Link>
            <Link href="/packages" className="btn-outline">See event packages →</Link>
          </div>
        </div>
      </section>

      {/* ── BOOKING LEAD TIME CARDS ── */}
      <section className="bg-[var(--cream)] py-14">
        <div className="mx-auto max-w-4xl px-4">
          <p className="section-eyebrow mb-3 text-[var(--gold)]">When to Start</p>
          <h2 className="mb-8 font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
            How far in advance to book by event type
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: "🎊",
                type: "Social & Private Parties",
                lead: "2–3 weeks",
                sub: "Graduation parties, backyard events, birthdays",
                note: "Peak summer weekends fill faster — book earlier when possible.",
                accent: "#0b1f3a",
              },
              {
                icon: "🏢",
                type: "Corporate Events",
                lead: "21–30 days",
                sub: "Company picnics, team events, outdoor meetings",
                note: "Peak season (June–August) corporate dates book 4–6 weeks out.",
                accent: "#0b1f3a",
              },
              {
                icon: "💍",
                type: "Weddings",
                lead: "3–6 months",
                sub: "Ceremonies, receptions, rehearsal dinners",
                note: "Summer Saturdays book earliest. Lock in your date with a deposit.",
                accent: "#0b1f3a",
              },
            ].map((card) => (
              <div key={card.type} className="flex flex-col rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(11,31,58,0.1)" }}>
                <div className="p-6 bg-white flex-1">
                  <span className="text-2xl mb-3 block">{card.icon}</span>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#0b1f3a" }}>{card.type}</p>
                  <p className="text-4xl font-bold mb-1" style={{ color: "#c9a84c" }}>{card.lead}</p>
                  <p className="text-xs mb-4" style={{ color: "rgba(30,40,60,0.55)" }}>{card.sub}</p>
                  <div className="border-t pt-3" style={{ borderColor: "rgba(11,31,58,0.08)" }}>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(30,40,60,0.65)" }}>{card.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured image ── */}
      <section className="bg-[var(--cream)] pb-14">
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative h-56 w-full overflow-hidden rounded-2xl md:h-64">
            <Image
              src="/images/outdoor-event-planning/Elegant%20Outdoor%20Event%20with%20City%20Views.webp"
              alt="White event tent with dining tables on a lawn, Chicago skyline and Lake Michigan in the background."
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── 3 CORE AEO H2 SECTIONS ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-10 text-[var(--gold)]">The Essentials</p>
          <div className="flex flex-col gap-12">

            {/* Equipment */}
            <div>
              <h2 className={H2}>What equipment do I need for an outdoor event?</h2>
              <p className={BODY}>
                Most outdoor events need five core categories. A{" "}
                <Link href="/services/tents-structures" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]">tent or structure</Link>{" "}
                gives you shade and shelter — sizes from 20×20 for small gatherings to 40×80+ for large ones.{" "}
                <Link href="/services/tables-seating" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]">Tables and chairs</Link>{" "}
                cover seating and dining, with linen upgrades available. A{" "}
                <Link href="/services/stages-presentation" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]">stage or riser</Link>{" "}
                keeps speakers and performers visible and pairs naturally with tent structures. For corporate picnics and parties,{" "}
                <Link href="/services/games-entertainment" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]">games and entertainment</Link>{" "}
                — inflatables, photo booths, mechanical bulls — are popular additions. Every order should include{" "}
                <Link href="/services/delivery-setup-teardown" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]">delivery, setup, and teardown</Link>{" "}
                so you're not managing logistics on the day.
              </p>
            </div>

            <div className="border-t border-[var(--navy)]/8" />

            {/* Weather */}
            <div>
              <h2 className={H2}>How do Chicago's weather and seasons affect outdoor events?</h2>
              <p className={BODY}>
                Chicago weather is a real planning variable — not an afterthought. In summer, heat and direct sun are the main concern; a tent provides shade that guests actually use. In spring and fall, wind and rain are unpredictable. Tent sidewalls (available as a Sterling add-on) block wind and light rain and make a significant difference when the forecast is borderline. Late October and beyond, temperatures can drop quickly — plan for cold and have a contingency ready.
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(30,40,60,0.62)" }}>
                Sterling Event Rentals will not set up in forecasted unsafe weather. If conditions are unsafe before setup begins, we work with you to reschedule. Once delivery and setup are complete, no refund is issued — so understanding the weather policy before you book is important.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CHICAGO SEASONS GRID ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-14">
        <div className="mx-auto max-w-4xl px-4">
          <p className="section-eyebrow mb-3 text-[var(--gold)]">Chicago Seasons at a Glance</p>
          <h2 className="mb-8 font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
            What to plan for by season
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                season: "Spring",
                months: "April – May",
                icon: "🌧️",
                conditions: "Variable. Wind, rain, and cool temps are common.",
                advice: [
                  "Tent sidewalls recommended",
                  "Have a rain contingency ready",
                  "Mornings can be cold — start time matters",
                ],
                color: "#e8f4ea",
                border: "rgba(34,120,60,0.2)",
                tag: "rgba(34,120,60,0.75)",
              },
              {
                season: "Summer",
                months: "June – August",
                icon: "☀️",
                conditions: "Peak season. Hot, sunny, high humidity on some days.",
                advice: [
                  "Tent shade is essential",
                  "Most popular dates — book early",
                  "Storms can develop quickly",
                ],
                color: "#fff9e6",
                border: "rgba(201,168,76,0.35)",
                tag: "rgba(160,120,0,0.75)",
              },
              {
                season: "Fall",
                months: "September – October",
                icon: "🍂",
                conditions: "Beautiful but cooling. Wind picks up late in the season.",
                advice: [
                  "September is often ideal",
                  "October: plan for cold & wind",
                  "Sidewalls highly recommended",
                ],
                color: "#fdf2e8",
                border: "rgba(180,90,20,0.2)",
                tag: "rgba(160,70,0,0.75)",
              },
            ].map((s) => (
              <div key={s.season} className="rounded-2xl overflow-hidden border" style={{ backgroundColor: s.color, borderColor: s.border }}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{s.icon}</span>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-widest px-2 py-1 rounded-full" style={{ color: s.tag, backgroundColor: `${s.border.replace('0.2', '0.1').replace('0.35', '0.12')}` }}>
                      {s.months}
                    </span>
                  </div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "#0b1f3a" }}>{s.season}</p>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(30,40,60,0.7)" }}>{s.conditions}</p>
                  <ul className="space-y-1.5">
                    {s.advice.map((tip) => (
                      <li key={tip} className="flex gap-2 items-start">
                        <span className="text-[0.55rem] mt-1 flex-shrink-0" style={{ color: s.tag }}>▸</span>
                        <span className="text-xs leading-relaxed" style={{ color: "rgba(30,40,60,0.72)" }}>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPACE + VENDOR QUESTIONS (2-col on navy) ── */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Space planning compact card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="section-eyebrow mb-3" style={{ color: "#e8c97a" }}>Space Planning</p>
              <h2 className="font-[var(--font-display)] text-xl mb-5" style={{ color: "#f5f0e8" }}>
                Square footage per guest
              </h2>
              <div className="space-y-3">
                {[
                  { layout: "Seated dinner", rule: "12–15 sq ft per guest", note: "Tables, chairs, and circulation" },
                  { layout: "Cocktail / standing", rule: "8–10 sq ft per guest", note: "Standing room, high tops" },
                  { layout: "Mix of both", rule: "10–12 sq ft per guest", note: "Seated core + standing perimeter" },
                  { layout: "Add a dance floor", rule: "+200–400 sq ft", note: "On top of seated guest total" },
                ].map((row) => (
                  <div key={row.layout} className="flex justify-between items-start gap-4 py-2.5 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#f5f0e8" }}>{row.layout}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(245,230,200,0.45)" }}>{row.note}</p>
                    </div>
                    <p className="text-sm font-semibold flex-shrink-0" style={{ color: "#c9a84c" }}>{row.rule}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/resources/tent-sizing-guide"
                className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
                style={{ color: "#e8c97a", textDecorationColor: "rgba(201,168,76,0.4)" }}
              >
                Use the full tent sizing guide →
              </Link>
            </div>

            {/* Vendor questions checklist */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="section-eyebrow mb-3" style={{ color: "#e8c97a" }}>Before You Book</p>
              <h2 className="font-[var(--font-display)] text-xl mb-5" style={{ color: "#f5f0e8" }}>
                Questions to ask your rental vendor
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Are you licensed and insured?", note: "Ask for documentation — Sterling provides both." },
                  { q: "Do you hold a safety certification?", note: "Sterling is SIOTO Safety Seal certified." },
                  { q: "Is setup included or extra?", note: "Sterling includes delivery, setup & teardown; quoted as a line item." },
                  { q: "What is your weather policy?", note: "Sterling won't set up in unsafe conditions; will reschedule." },
                  { q: "What is the cancellation policy?", note: "Full refund if cancelled 21+ days before event." },
                  { q: "Is the deposit refundable?", note: "With Sterling: yes, if cancelled 21+ days out." },
                ].map((item) => (
                  <div key={item.q} className="flex gap-3 items-start py-1.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold"
                      style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>?</span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#f5f0e8" }}>{item.q}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(245,230,200,0.45)" }}>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Photo pair ── */}
      <section className="bg-[var(--cream)] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative h-48 w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/outdoor-event-planning/Chicago%20Street%20Fest%20Highlights.webp"
                alt="Outdoor street festival in Chicago with a live band on stage and crowd along the street."
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 448px"
              />
            </div>
            <div className="relative h-48 w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/outdoor-event-planning/Outdoor%20Graduation%20Celebration%202024.webp"
                alt="Outdoor graduation ceremony with Class of 2024 marquee letters and tent on a turf field, Chicago skyline beyond."
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 448px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-3 text-[var(--gold)]">FAQ</p>
          <h2 className="mb-8 font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
            Common questions about outdoor events in Chicago
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
              { href: "/resources/tent-sizing-guide", label: "What size tent do I need?" },
              { href: "/resources/chicago-tent-permits", label: "Chicago tent permit guide" },
              { href: "/services", label: "Browse all services" },
              { href: "/packages", label: "See package pricing" },
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
              Planning an outdoor event in Chicago?
            </h2>
            <p className="mt-3 text-sm text-[var(--champagne)]/65">
              Tell us your date, guest count, and venue. We&apos;ll confirm availability and send a quote.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-block">Check Availability</Link>
            <p className="mt-4 text-sm text-[var(--champagne)]/45">(773) 692-7576</p>
          </div>
        </div>
      </section>
    </>
  );
}
