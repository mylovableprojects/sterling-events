"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EVENT_TYPE_DATA, EVENT_TYPE_SLUGS } from "@/lib/eventTypes";
import { heroHeadlineStagger } from "@/lib/heroHeadlineMotion";

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const, amount: 0.12 as const },
    transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  };
}

function CameraIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ImgPlaceholder({
  label,
  gradFrom,
  gradTo,
  className = "",
}: {
  label: string;
  gradFrom: string;
  gradTo: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden flex-shrink-0 ${className}`}
      style={{ background: `linear-gradient(150deg, ${gradFrom}, ${gradTo})` }}
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #c9a84c 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="rounded-full border border-dashed border-[#c9a84c]/30 p-2.5 text-[#c9a84c]/30">
          <CameraIcon />
        </div>
        <span className="px-4 text-center text-[0.55rem] uppercase tracking-[0.3em] text-[#c9a84c]/30">
          {label}
        </span>
      </div>
    </div>
  );
}

const ICONS: Record<string, string> = {
  "corporate-events": "🏢",
  "weddings": "💍",
  "private-parties": "🎉",
};

export function EventsHubContent() {
  return (
    <>
      {/* ── HERO (layout aligned with home `Hero`) ── */}
      <section className="gradient-hero relative flex min-h-[85vh] flex-col overflow-hidden">
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <div className="space-y-4 md:space-y-6">
            <motion.div custom={0} initial="hidden" animate="visible" variants={heroHeadlineStagger} className="section-eyebrow">
              Events We Serve
            </motion.div>
            <motion.h1 custom={1} initial="hidden" animate="visible" variants={heroHeadlineStagger} className="hero-headline text-[var(--cream)]">
              Every event, fully equipped.
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={heroHeadlineStagger}
              className="max-w-xl hero-subheadline leading-relaxed text-[var(--champagne)]/80"
            >
              Sterling Event Rentals provides full-service tent, table, stage, and entertainment rentals for corporate events, weddings, and private parties across the Chicago area. Delivery, setup, and teardown on every order.
            </motion.p>
            <motion.div custom={3} initial="hidden" animate="visible" variants={heroHeadlineStagger} className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/contact" className="btn-primary">
                Check Availability for Your Date
              </Link>
              <Link href="/services" className="btn-outline">
                Browse Our Services
              </Link>
            </motion.div>
            <motion.div custom={4} initial="hidden" animate="visible" variants={heroHeadlineStagger}>
              <a
                href="tel:+17736927576"
                className="inline-flex items-center gap-2 text-sm text-[var(--champagne)]/70 transition-colors hover:text-[var(--gold-light)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.1 11.82a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                (773) 692-7576 — call or text
              </a>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <div className="flex flex-col items-center gap-3 text-[0.65rem] tracking-[0.3em] text-[var(--champagne)]/70 uppercase">
            <span>Scroll</span>
            <div className="scroll-indicator" />
          </div>
        </div>
      </section>

      {/* ── EVENT TYPE CARDS ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div {...reveal(0)}>
            <p className="section-eyebrow mb-3 text-[var(--gold)]">Event Types</p>
            <h2 className="heading-2 mb-12 text-[var(--charcoal)]">
              What type of event are you planning?
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {EVENT_TYPE_SLUGS.map((slug, i) => {
              const d = EVENT_TYPE_DATA[slug];
              return (
                <motion.div key={slug} {...reveal(i * 0.1)}>
                  <Link
                    href={`/events/${slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--navy)]/10 bg-white transition-all duration-200 hover:border-[var(--gold)]/40 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <ImgPlaceholder
                      label={`${d.name} Photo`}
                      gradFrom={d.heroGradient.from}
                      gradTo={d.heroGradient.to}
                      className="h-44"
                    />
                    <div className="flex flex-col gap-3 p-6">
                      <span className="text-2xl" aria-hidden>{ICONS[slug]}</span>
                      <h3 className="font-[var(--font-display)] text-lg text-[var(--navy)]">
                        {d.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--charcoal)]/75">
                        {d.tagline}
                      </p>
                      <span className="mt-1 text-sm font-medium text-[var(--navy)] underline-offset-2 group-hover:underline decoration-[var(--gold)]">
                        Learn more →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY STERLING ── */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div {...reveal(0)}>
              <p className="section-eyebrow mb-3" style={{ color: "#e8c97a" }}>Why Sterling</p>
              <h2 className="heading-2 mb-6" style={{ color: "#f5f0e8" }}>
                One vendor. One call. Everything handled.
              </h2>
              <ul className="space-y-4">
                {[
                  { title: "Full delivery, setup & teardown", body: "Our crew handles everything. You don't move a single chair." },
                  { title: "Upfront itemized pricing", body: "Equipment, delivery, and setup as named line items — before you confirm." },
                  { title: "SIOTO Safety Seal certified", body: "Licensed, insured, and SIOTO Safety Seal certified — SIOTO operator safety training, verifiable at sioto.com." },
                  { title: "Every event type", body: "Corporate picnics to black-tie weddings. Small backyard parties to 400-person events." },
                  { title: "All of Chicago metro", body: "City venues, north shore, Naperville, and throughout the suburbs." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold"
                      style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
                    >
                      ✓
                    </span>
                    <div>
                      <span className="font-medium" style={{ color: "#f5f0e8" }}>{item.title} — </span>
                      <span className="text-sm" style={{ color: "rgba(245,230,200,0.72)" }}>{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...reveal(0.12)}>
              <ImgPlaceholder
                label="Sterling Event Rentals Setup Photo"
                gradFrom="#0b1f3a"
                gradTo="#030d1c"
                className="w-full h-80 rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div {...reveal(0)}>
            <h2 className="heading-2 mb-4 text-[var(--charcoal)]">
              Tell us about your event.
            </h2>
            <p className="mb-8 text-lg text-[var(--charcoal)]/80">
              Date, guest count, venue — that&apos;s all we need to start. We&apos;ll confirm availability and send a quote.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <a
                href="tel:+17736927576"
                className="text-[var(--navy)] font-medium underline decoration-[var(--gold)] underline-offset-4 hover:decoration-[var(--gold-light)]"
              >
                (773) 692-7576
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
