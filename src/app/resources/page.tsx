import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const BASE = "https://www.sterlingeventrentals.com";
const title = "Chicago Event Planning Resources | Sterling Event Rentals";
const description =
  "Free guides on tent sizing, Chicago tent permits, outdoor event planning, and corporate event checklists for events in Chicago, Evanston, Oak Park, Naperville, Schaumburg, and across Chicagoland.";
const canonical = `${BASE}/resources`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Sterling Event Rentals — Event rentals in Chicago and Chicagoland" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

// ── Schema ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${BASE}/resources` },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Event Planning Resources — Sterling Event Rentals",
  description:
    "Free guides covering tent sizing, Chicago tent permits, outdoor event planning, and corporate event checklists for Chicagoland events.",
  url: `${BASE}/resources`,
  publisher: {
    "@type": "LocalBusiness",
    name: "Sterling Event Rentals",
    url: BASE,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Tent Sizing Guide",
        url: `${BASE}/resources/tent-sizing-guide`,
        description: "Tent size by guest count — 25 to 300+ guests, with layout factors.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Chicago Tent Permit Guide",
        url: `${BASE}/resources/chicago-tent-permits`,
        description: "When permits are required, who applies, and how long it takes in Chicago.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Outdoor Event Planning in Chicago",
        url: `${BASE}/resources/outdoor-event-planning`,
        description: "Weather, logistics, spacing, and booking timeline for Chicago outdoor events.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Corporate Event Planning Checklist",
        url: `${BASE}/resources/corporate-event-checklist`,
        description: "Week-by-week checklist for corporate outdoor events: credentials, logistics, day-of.",
      },
    ],
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────

const featuredResource = {
  index: "01",
  label: "GUIDE",
  title: "What Size Tent Do I Need?",
  desc: "The most common question before any outdoor event. Use this guide to match your guest count to a tent footprint — plus how layout choices like dance floors and staging affect your size.",
  href: "/resources/tent-sizing-guide",
  readTime: "5 min read",
  topics: ["Guest count", "Tent footprints", "Layout math"],
  image: "/images/outdoor-event-planning/Elegant%20Outdoor%20Event%20Tent.webp",
  imageAlt: "Elegant outdoor event tent setup with banquet tables and string lights",
};

const secondaryResources = [
  {
    index: "02",
    label: "GUIDE",
    title: "Chicago Tent Permit Guide",
    desc: "When permits are required in Chicago, who's responsible for pulling them, which agency handles your venue type, and what the 400 sq ft threshold means for your event.",
    href: "/resources/chicago-tent-permits",
    readTime: "6 min read",
    topics: ["Chicago permits", "Park District", "Dept of Buildings"],
    image: "/images/outdoor-event-planning/preparing-chicago-tent-permit-essentials.webp",
    imageAlt: "Chicago event permit documentation and tent setup preparation",
  },
  {
    index: "03",
    label: "GUIDE",
    title: "Outdoor Event Planning in Chicago",
    desc: "Weather windows by season, vendor lead times, space planning by guest count, and what to ask your rental company before you sign — a first-timer's field guide.",
    href: "/resources/outdoor-event-planning",
    readTime: "7 min read",
    topics: ["Chicago seasons", "Lead times", "Space planning"],
    image: "/images/outdoor-event-planning/Elegant%20Outdoor%20Event%20with%20City%20Views.webp",
    imageAlt: "Outdoor corporate event with city views and professional tent setup",
  },
  {
    index: "04",
    label: "CHECKLIST",
    title: "Corporate Event Planning Checklist",
    desc: "6 weeks out, 3 weeks out, 1 week out, and day-of. Every task, credential check, and handoff point — so nothing falls through the cracks on your company's event.",
    href: "/resources/corporate-event-checklist",
    readTime: "4 min read",
    topics: ["Timeline", "Credentials", "Day-of logistics"],
    image: "/images/outdoor-event-planning/Elegant%20Cityscape%20Event%20Setup.webp",
    imageAlt: "Elegant corporate event setup with cityscape views — Chicago outdoor gala",
  },
];

const beforeYouCallPoints = [
  {
    number: "1",
    heading: "Size first, then quote",
    body: "Knowing your guest count and layout before you call cuts the quote conversation in half. Use the tent sizing guide to arrive with a number.",
  },
  {
    number: "2",
    heading: "Permits are your responsibility",
    body: "Sterling doesn't pull permits on your behalf — but the permit guide tells you exactly when you need one and which agency to contact.",
  },
  {
    number: "3",
    heading: "Chicago weather demands a plan",
    body: "Spring, summer, and fall each have real risks — wind, heat, pop-up storms. The outdoor planning guide covers contingencies before they become surprises.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  return (
    <>
      <Script id="ld-bc-resources" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="ld-collection-resources" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* ── HERO ── */}
      <section className="gradient-hero relative min-h-[72vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="gradient-orb bottom-[-5rem] right-[-4rem] h-72 w-72 opacity-60" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-16">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/resources", label: "Resources" }]} />
          <p className="section-eyebrow">Planning Resources</p>
          <h1 className="hero-headline text-[var(--cream)]">
            Plan your outdoor event in Chicago — the right way.
          </h1>
          <div className="quick-answer mt-2 max-w-2xl rounded-xl border border-[var(--gold)]/30 bg-[var(--navy)]/60 p-6">
            <p className="text-lg leading-relaxed text-[var(--champagne)]">
              These four free guides cover every question a first-time outdoor event host asks before booking rentals in Chicagoland: how to size a tent, when permits are required, how to plan around the weather, and what a corporate event timeline looks like. Read before you call and your quote conversation takes 10 minutes instead of 30.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="/resources/tent-sizing-guide" className="btn-primary">Start With Tent Sizing</a>
            <a href="/contact" className="btn-outline">Skip Ahead — Get a Quote</a>
          </div>
        </div>
      </section>

      {/* ── BEFORE YOU CALL STRIP ── */}
      <section style={{ backgroundColor: "#0b1f3a", borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)" }} className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p
            className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "rgba(201,168,76,0.65)" }}
          >
            Three things to know before you call
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {beforeYouCallPoints.map((pt) => (
              <div
                key={pt.number}
                className="flex items-start gap-5 rounded-xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: "rgba(201,168,76,0.14)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.35)" }}
                >
                  {pt.number}
                </span>
                <div>
                  <p className="mb-1.5 font-semibold" style={{ color: "#f5e6c8" }}>{pt.heading}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,230,200,0.6)" }}>{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED RESOURCE CARD ── */}
      <section className="bg-[var(--sand)] pt-20 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <h2
              className="font-[var(--font-display)] text-3xl md:text-4xl"
              style={{ color: "#0b1f3a" }}
            >
              What do you need to know before booking?
            </h2>
            <p className="mt-3 max-w-2xl text-lg" style={{ color: "rgba(26,26,26,0.65)" }}>
              Each guide answers one essential question. Start with the one most relevant to your event.
            </p>
          </div>

          {/* Featured — Tent Sizing */}
          <Link
            href={featuredResource.href}
            className="group relative flex overflow-hidden rounded-2xl bg-white"
            style={{ boxShadow: "0 2px 24px rgba(11,31,58,0.08)", border: "1px solid rgba(11,31,58,0.07)" }}
          >
            {/* Gold left accent */}
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl" style={{ backgroundColor: "#c9a84c" }} />

            <div className="flex flex-col justify-between p-8 lg:w-[55%]">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="font-[var(--font-display)] text-5xl font-bold leading-none"
                    style={{ color: "rgba(201,168,76,0.25)" }}
                  >
                    {featuredResource.index}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                    style={{ backgroundColor: "rgba(201,168,76,0.12)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    {featuredResource.label}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(11,31,58,0.4)" }}>{featuredResource.readTime}</span>
                </div>
                <h3
                  className="mb-4 font-[var(--font-display)] text-2xl font-semibold transition-colors group-hover:text-[var(--gold)] md:text-3xl"
                  style={{ color: "#0b1f3a" }}
                >
                  {featuredResource.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "rgba(26,26,26,0.7)" }}>
                  {featuredResource.desc}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {featuredResource.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1 text-xs"
                    style={{ backgroundColor: "#f0ebe0", color: "rgba(11,31,58,0.6)" }}
                  >
                    {t}
                  </span>
                ))}
                <span
                  className="ml-auto self-center text-sm font-medium uppercase tracking-wider transition-colors group-hover:text-[var(--gold)]"
                  style={{ color: "#0b1f3a" }}
                >
                  Read the guide →
                </span>
              </div>
            </div>

            <div className="relative hidden lg:block lg:w-[45%]">
              <Image
                src={featuredResource.image}
                alt={featuredResource.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1152px) 45vw, 518px"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.08) 0%, transparent 40%)" }} />
            </div>
          </Link>
        </div>
      </section>

      {/* ── SECONDARY RESOURCE CARDS ── */}
      <section className="bg-[var(--sand)] py-8 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {secondaryResources.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white"
                style={{ boxShadow: "0 2px 16px rgba(11,31,58,0.07)", border: "1px solid rgba(11,31,58,0.07)" }}
              >
                {/* Gold top accent */}
                <div className="h-1 w-full" style={{ backgroundColor: "#c9a84c", opacity: 0.6 }} />

                {/* Card image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(11,31,58,0.5) 0%, transparent 60%)" }}
                  />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest"
                      style={{ backgroundColor: "rgba(201,168,76,0.9)", color: "#0b1f3a" }}
                    >
                      {card.label}
                    </span>
                    <span className="text-[0.65rem]" style={{ color: "rgba(245,230,200,0.75)" }}>{card.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className="font-[var(--font-display)] text-3xl font-bold leading-none"
                      style={{ color: "rgba(201,168,76,0.2)" }}
                    >
                      {card.index}
                    </span>
                  </div>
                  <h3
                    className="mb-3 font-[var(--font-display)] text-xl font-semibold transition-colors group-hover:text-[var(--gold)]"
                    style={{ color: "#0b1f3a" }}
                  >
                    {card.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed" style={{ color: "rgba(26,26,26,0.68)" }}>
                    {card.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {card.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-2.5 py-0.5 text-[0.65rem]"
                        style={{ backgroundColor: "#f0ebe0", color: "rgba(11,31,58,0.55)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors group-hover:text-[var(--gold)]"
                    style={{ color: "#0b1f3a" }}
                  >
                    {card.label === "CHECKLIST" ? "View checklist →" : "Read the guide →"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANSWER HUB + CTA ── */}
      <section style={{ backgroundColor: "#0b1f3a" }} className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: "rgba(201,168,76,0.65)" }}
              >
                Quick answers
              </p>
              <h2 className="font-[var(--font-display)] text-3xl text-[var(--cream)] md:text-4xl">
                Have a specific question?
              </h2>
              <p className="mt-4 max-w-lg text-lg" style={{ color: "rgba(245,230,200,0.7)" }}>
                The Answer Hub covers the most common pre-booking questions — tent costs, permit requirements, booking timelines, and weather policy — in plain, direct language.
              </p>
              <Link
                href="/answers"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-colors hover:text-white"
                style={{ color: "#c9a84c" }}
              >
                Browse the Answer Hub →
              </Link>
            </div>

            <div
              className="rounded-2xl p-8 text-center lg:w-72"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <p
                className="mb-1 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(201,168,76,0.65)" }}
              >
                Ready to book?
              </p>
              <h3 className="mb-2 font-[var(--font-display)] text-xl" style={{ color: "#f5e6c8" }}>
                Get a quote
              </h3>
              <p className="mb-6 text-sm" style={{ color: "rgba(245,230,200,0.55)" }}>
                Use these guides to prepare, then call or submit a request with your date and guest count.
              </p>
              <Link href="/contact" className="btn-primary">
                Check Availability
              </Link>
              <p className="mt-4 text-sm" style={{ color: "rgba(245,230,200,0.4)" }}>
                (773) 692-7576
              </p>
            </div>
          </div>

          {/* Divider + bottom image strip */}
          <div
            className="mt-16 overflow-hidden rounded-2xl"
            style={{ border: "1px solid rgba(201,168,76,0.15)" }}
          >
            <div className="relative h-52 w-full">
              <Image
                src="/images/outdoor-event-planning/Global%20Corp%20Picnic%20Bash.png"
                alt="Corporate company picnic under a white tent with catering tables — Sterling Event Rentals Chicago"
                fill
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                style={{ background: "linear-gradient(135deg, rgba(11,31,58,0.82) 0%, rgba(11,31,58,0.55) 100%)" }}
              >
                <p
                  className="text-center text-xs font-semibold uppercase tracking-[0.3em]"
                  style={{ color: "rgba(201,168,76,0.7)" }}
                >
                  Sterling Event Rentals
                </p>
                <p className="text-center font-[var(--font-display)] text-2xl md:text-3xl" style={{ color: "#f5e6c8" }}>
                  Serving Chicago &amp; all of Chicagoland
                </p>
                <p className="text-center text-sm" style={{ color: "rgba(245,230,200,0.55)" }}>
                  Evanston · Oak Park · Naperville · Schaumburg · Orland Park · and beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
