import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";

const BASE = "https://sterlingeventrentals.com";
const canonical = `${BASE}/resources/corporate-event-checklist`;

/** Assets in public/images/outdoor-event-planning/ */
const IMG_CORPORATE_TENT_BANQUET =
  "/images/outdoor-event-planning/Elegant%20Outdoor%20Event%20Tent.webp";
const IMG_CORPORATE_PICNIC =
  "/images/outdoor-event-planning/Global%20Corp%20Picnic%20Bash.png";
const IMG_CITYSCAPE_GALA =
  "/images/outdoor-event-planning/Elegant%20Cityscape%20Event%20Setup.webp";

export function generateMetadata(): Metadata {
  return {
    title: "Corporate Event Planning Checklist: Outdoor Events in Chicago | Sterling Event Rentals",
    description:
      "Timeline checklist for corporate outdoor events in Chicago and Chicagoland: 6 weeks, 3 weeks, 1 week, and day-of. Venue, permits, vendor credentials, and logistics so nothing falls through the cracks.",
    alternates: { canonical },
    openGraph: {
      title: "Corporate Event Planning Checklist: Outdoor Events in Chicago | Sterling Event Rentals",
      description:
        "Checklist for corporate outdoor events in Chicago — venue, permits, equipment, credentials, and day-of logistics.",
      url: canonical,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Sterling Event Rentals — Event rentals in Chicago and Chicagoland" }],
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
  {
    question: "Who handles permits — the rental company or us?",
    answer:
      "Permits are the customer's responsibility. Your rental company can tell you whether your tent size and venue type require a permit, and Sterling provides permit-related documentation (COI, SIOTO cert) that your venue or city may request. But the permit application itself is submitted by you or the venue, not the rental company.",
  },
  {
    question: "What is Sterling's weather cancellation policy?",
    answer:
      "Sterling will not set up in forecasted unsafe conditions — high winds, lightning, or severe weather. When weather is marginal, we work with you to reschedule. Know your rental company's policy before the event: full refund 21+ days out, no refund within 21 days or once equipment is set up. Don't leave the weather decision to the morning of.",
  },
  {
    question: "What package tiers does Sterling offer for corporate events?",
    answer:
      "Sterling offers several packages for corporate events, from basic tent and table/chair setups to full turnkey configurations with staging, sidewalls, flooring, and a dedicated day-of contact. See the packages page for a current list, or request a custom quote for larger or complex events.",
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

const timelinePhases = [
  {
    phase: "6 Weeks Out",
    color: "#1a5276",
    items: [
      "Lock the date — confirm with stakeholders before committing to vendors",
      "Confirm venue type — determines whether permits are required (private vs. park)",
      "Get vendor quotes — include date, head count, and full equipment list",
      "Nail down a guest count estimate — drives tent size and table/chair quantities",
      "Book rentals and pay 50% deposit to hold your date",
      "Verify vendor credentials — licensed, insured, SIOTO Safety Seal certified",
    ],
  },
  {
    phase: "3 Weeks Out",
    color: "#1e3a5f",
    items: [
      "Finalize guest count — this drives final tent size, tables, and chairs",
      "Confirm rental order details — tent, tables, chairs, sidewalls, add-ons",
      "Confirm delivery window — when does the crew arrive, when is access needed?",
      "Assign internal point of contact — one person who can answer vendor questions on-site",
      "Share venue access with vendors — gate codes, dock info, on-site contact",
      "Confirm cancellation and weather policy in writing",
    ],
  },
  {
    phase: "1 Week Out",
    color: "#0f2d4a",
    items: [
      "Reconfirm delivery date and time with your rental company",
      "Make sure vendor has your venue contact name and number",
      "Check the weather forecast — Chicago shifts fast",
      "Prepare a backup plan if weather is marginal (sidewalls, indoor space, go/no-go time)",
      "Send event details to attendees — time, location, parking",
    ],
  },
  {
    phase: "Day Of",
    color: "#0b1f3a",
    items: [
      "Rental company: delivery, setup, full teardown after the event",
      "Your team: venue access (make sure the crew can get in)",
      "Your team: permits (if required — rental company doesn't pull them)",
      "Your team: attendee management, catering, run of show",
      "One point of contact on each side — avoid the 'who do I call?' scramble",
    ],
  },
];

export default function CorporateEventChecklistPage() {
  return (
    <>
      <Script id="ld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO ── */}
      <section className="gradient-hero relative min-h-[72vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-16">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/resources", label: "Resources" },
              { href: "/resources/corporate-event-checklist", label: "Corporate Event Checklist" },
            ]}
          />
          <p className="section-eyebrow">Planning Resource</p>
          <h1 className="hero-headline text-[var(--cream)]">
            Corporate Event Planning Checklist
          </h1>
          <div className="quick-answer mt-2 max-w-2xl rounded-xl border border-[var(--gold)]/30 bg-[var(--navy)]/60 p-6">
            <p className="text-lg leading-relaxed text-[var(--champagne)]">{quickAnswerText}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="/contact" className="btn-primary">Get a Corporate Event Quote</a>
            <a href="/packages" className="btn-outline">See packages →</a>
          </div>
        </div>
      </section>

      {/* ── TIMELINE CARDS ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-3 text-center">
            <p className="section-eyebrow">Timeline</p>
          </div>
          <h2
            className="mb-12 text-center font-[var(--font-display)] text-3xl md:text-4xl"
            style={{ color: "#0b1f3a" }}
          >
            What to do — and when
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {timelinePhases.map((phase, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: phase.color, border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "rgba(201,168,76,0.18)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.4)" }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="font-[var(--font-display)] text-lg font-semibold"
                    style={{ color: "#c9a84c" }}
                  >
                    {phase.phase}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span
                        className="mt-[5px] shrink-0 rounded-full"
                        style={{ width: "6px", height: "6px", backgroundColor: "#c9a84c", opacity: 0.75, flexShrink: 0 }}
                      />
                      <span className="text-sm leading-snug" style={{ color: "rgba(245,230,200,0.8)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured image ── */}
      <section className="bg-white pb-16 pt-4">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-[21/7] w-full overflow-hidden rounded-2xl">
            <Image
              src={IMG_CORPORATE_TENT_BANQUET}
              alt="Corporate banquet under a white event tent with long dining tables, formal place settings, and Chicago skyline in the distance."
              fill
              className="object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── AEO H2: CREDENTIALS ── */}
      <section className="bg-[var(--sand)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2
                className="font-[var(--font-display)] text-3xl md:text-4xl"
                style={{ color: "#0b1f3a", borderBottom: "1px solid rgba(201,168,76,0.3)", paddingBottom: "1rem", marginBottom: "1.25rem" }}
              >
                What credentials should I verify before booking an event rental company?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(26,26,26,0.8)" }}>
                Your reputation is on the line if the vendor no-shows or the equipment fails. Verify the company is <strong>licensed and insured</strong> — that's the baseline. A <strong>safety certification</strong> such as the SIOTO Safety Seal goes further: it means equipment and operations have been independently inspected and certified, not just insured after the fact.
              </p>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: "rgba(26,26,26,0.8)" }}>
                That distinction matters to corporate buyers and venue coordinators who need to document vendor due diligence. Check years in business and, if possible, real event photos so you know they've handled events like yours. Finally, confirm cancellation and refund terms in plain language before you sign anything.
              </p>
            </div>

            {/* SIOTO credential card */}
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#0b1f3a", border: "1px solid rgba(201,168,76,0.25)" }}
            >
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(201,168,76,0.7)" }}
              >
                Sterling's credentials
              </p>
              <div className="space-y-4">
                {[
                  { badge: "✓ Licensed", desc: "State of Illinois licensed contractor" },
                  { badge: "✓ Insured", desc: "Full liability insurance — COI available on request" },
                  { badge: "✓ SIOTO Certified", desc: "Safety Seal — independent 3rd-party inspection of equipment and operations" },
                  { badge: "✓ Established", desc: "Years of Chicago and Chicagoland event experience" },
                  { badge: "✓ Transparent pricing", desc: "Setup fee quoted with every order — no surprises" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold"
                      style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}
                    >
                      {item.badge}
                    </span>
                    <span className="text-sm leading-snug" style={{ color: "rgba(245,230,200,0.75)" }}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AEO H2: DAY OF SPLIT ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Vendor questions card */}
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#0b1f3a", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(201,168,76,0.7)" }}
              >
                Questions to ask before signing
              </p>
              <ul className="space-y-3">
                {[
                  "Are you licensed and insured?",
                  "Do you hold a SIOTO Safety Seal or equivalent certification?",
                  "Is setup included or billed separately?",
                  "What is your delivery window and who needs access?",
                  "Do you provide a dedicated day-of contact?",
                  "What is your weather cancellation policy?",
                  "What is the deposit amount and refund policy?",
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="rounded-full"
                      style={{ width: "6px", height: "6px", backgroundColor: "#c9a84c", opacity: 0.75, flexShrink: 0, marginTop: "6px" }}
                    />
                    <span className="text-sm leading-snug" style={{ color: "rgba(245,230,200,0.8)" }}>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className="font-[var(--font-display)] text-3xl md:text-4xl"
                style={{ color: "#0b1f3a", borderBottom: "1px solid rgba(201,168,76,0.3)", paddingBottom: "1rem", marginBottom: "1.25rem" }}
              >
                Day of — what does the rental company handle vs. what do I handle?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(26,26,26,0.8)" }}>
                The rental company handles <strong>delivery, full setup, and post-event teardown</strong>. With the right package, that also includes an on-site crew and a dedicated day-of contact — one number to call instead of chasing the truck.
              </p>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: "rgba(26,26,26,0.8)" }}>
                You handle <strong>venue access</strong> (making sure the crew can get in), <strong>permits</strong> (if required — permits are the customer's responsibility), <strong>attendee management</strong>, catering, and your run of show. The handoff is clear: you provide the site and the point of contact; Sterling provides the tent, tables, chairs, and labor.
              </p>

              {/* Divider row */}
              <div
                className="mt-8 grid grid-cols-2 gap-4 rounded-xl p-5"
                style={{ backgroundColor: "#f7f3eb", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "#0b1f3a" }}>Sterling handles</p>
                  <ul className="space-y-1 text-sm" style={{ color: "rgba(26,26,26,0.75)" }}>
                    <li>Delivery &amp; setup</li>
                    <li>Post-event teardown</li>
                    <li>Day-of crew</li>
                    <li>Equipment COI / SIOTO docs</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "#0b1f3a" }}>You handle</p>
                  <ul className="space-y-1 text-sm" style={{ color: "rgba(26,26,26,0.75)" }}>
                    <li>Venue access &amp; permits</li>
                    <li>Attendee management</li>
                    <li>Catering &amp; signage</li>
                    <li>Run of show</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo pair ── */}
      <section className="bg-[var(--sand)] pb-20 pt-4">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={IMG_CORPORATE_PICNIC}
                alt="Company picnic under a white tent with catering on checkered tables, guests, and the Chicago skyline beyond."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={IMG_CITYSCAPE_GALA}
                alt="Formal company event with banquet tables and podium, floor-to-ceiling windows overlooking the Chicago skyline at dusk."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: "#0b1f3a" }} className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="heading-2 text-[var(--cream)]">Common questions about corporate event rentals</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} withSchema={false} schemaId="ld-faq-page" variant="resourceArticle" />
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS + CTA ── */}
      <section className="bg-[var(--sand)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-4">You might also find helpful</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/packages", label: "Browse corporate-ready rental packages" },
              { href: "/answers/what-is-sioto-safety-seal", label: "What is the SIOTO Safety Seal?" },
              { href: "/resources/outdoor-event-planning", label: "Outdoor event planning guide" },
              { href: "/resources/tent-sizing-guide", label: "Tent sizing guide" },
              { href: "/contact", label: "Get a corporate event quote" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                style={{ color: "#0b1f3a", border: "1px solid rgba(11,31,58,0.25)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[var(--navy)] p-10 text-center">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--cream)] md:text-4xl">
              Ready to lock in your event date?
            </h2>
            <Link href="/contact" className="btn-primary mt-6 inline-block">
              Check Availability
            </Link>
            <p className="mt-4 text-sm" style={{ color: "rgba(245,230,200,0.45)" }}>
              (773) 692-7576
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
