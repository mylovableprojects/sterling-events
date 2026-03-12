import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Ruler, FileText, Sun, ClipboardList } from "lucide-react";

const BASE = "https://sterlingeventrentals.com";
const title = "Event Planning Resources | Tent Sizing, Permits & Outdoor Events in Chicago";
const description =
  "Guides on tent sizing, Chicago tent permits, outdoor event planning, and corporate event checklists — for events in Chicago, Evanston, Oak Park, Naperville, Schaumburg, and across Chicagoland.";
const canonical = `${BASE}/resources`;

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

const resourceCards = [
  {
    title: "What Size Tent Do I Need?",
    desc: "Tent size by guest count — 25 to 300+ guests. Includes a sizing table and layout factors like stages and dance floors.",
    href: "/resources/tent-sizing-guide",
    icon: Ruler,
    label: "GUIDE",
  },
  {
    title: "Chicago Tent Permit Guide",
    desc: "When permits are required, who's responsible, how to apply, and how long it takes — specific to Chicago and the park district.",
    href: "/resources/chicago-tent-permits",
    icon: FileText,
    label: "GUIDE",
  },
  {
    title: "Outdoor Event Planning in Chicago",
    desc: "Weather, logistics, spacing, and timeline — everything a first-time outdoor event host needs to know before booking equipment.",
    href: "/resources/outdoor-event-planning",
    icon: Sun,
    label: "GUIDE",
  },
  {
    title: "Corporate Event Planning Checklist",
    desc: "A week-by-week checklist for corporate event planners — from vendor credentials to day-of logistics and teardown.",
    href: "/resources/corporate-event-checklist",
    icon: ClipboardList,
    label: "CHECKLIST",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Script
        id="ld-breadcrumbs-resources"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://sterlingeventrentals.com" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Resources",
                item: "https://sterlingeventrentals.com/resources",
              },
            ],
          }),
        }}
      />

      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="gradient-orb bottom-[-5rem] right-[-4rem] h-72 w-72 opacity-60" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/resources", label: "Resources" },
            ]}
          />
          <p className="section-eyebrow">Resources</p>
          <h1 className="hero-headline text-[var(--cream)]">
            Planning an outdoor event in Chicago? Start here.
          </h1>
          <div className="quick-answer max-w-2xl rounded-xl bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">
              Quick answer
            </h2>
            <p className="text-lg leading-relaxed text-[var(--champagne)]">
              These guides cover everything you need to plan an outdoor event in Chicago — tent sizing by guest count, permit requirements, weather planning, and corporate event logistics. Read before you call and your quote conversation will take 10 minutes instead of 30.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/resources/tent-sizing-guide" className="btn-primary">
              Start With Tent Sizing
            </a>
            <a href="/contact" className="btn-outline">
              Skip Ahead — Get a Quote
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="heading-2 text-[var(--charcoal)]">
            What do you need to know before booking?
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-[var(--charcoal)]/70">
            Each guide answers a specific question most renters have before they&apos;re ready to book. Start with the one most relevant to your event.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {resourceCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group relative flex flex-col rounded-2xl border border-[var(--navy)]/8 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Icon className="h-5 w-5 text-[var(--gold)]" aria-hidden />
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                      {card.label}
                    </span>
                  </div>
                  <h3 className="mt-2 mb-3 font-[var(--font-display)] text-2xl text-[var(--navy)] transition-colors group-hover:text-[var(--gold)]">
                    {card.title}
                  </h3>
                  <p className="flex-1 text-base leading-relaxed text-[var(--charcoal)]/70">
                    {card.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-[var(--navy)] transition-colors group-hover:text-[var(--gold)]">
                    {card.label === "CHECKLIST" ? "View checklist →" : "Read the guide →"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-start lg:gap-12">
          <div className="lg:w-[60%]">
            <p className="section-eyebrow">Quick answers</p>
            <h2 className="heading-2 text-[var(--cream)]">
              Have a specific question?
            </h2>
            <p className="mt-4 max-w-lg text-lg text-[var(--champagne)]/80">
              Our Answer Hub covers the most common questions — tent costs, permit requirements, booking timelines, and weather policy — in plain language.
            </p>
            <Link
              href="/answers"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[var(--gold)]"
            >
              Browse the Answer Hub →
            </Link>
          </div>
          <div className="lg:w-[40%]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="mb-2 text-xl font-medium text-[var(--cream)]">
                Ready to get a quote?
              </h3>
              <p className="mb-6 text-sm text-[var(--champagne)]/70">
                Use these guides to prepare, then call with your date and guest count.
              </p>
              <Link href="/contact" className="btn-primary">
                Check Availability
              </Link>
              <p className="mt-4 text-sm text-[var(--champagne)]/50">
                (773) 692-7576
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
