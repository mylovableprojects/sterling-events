"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const, amount: 0.15 as const },
    transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  };
}

function CameraIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

/**
 * Image placeholder — always a normal flow block element.
 * Pass height via className (e.g. "h-40", "h-36").
 * Never passes absolute/relative positioning — caller controls that.
 */
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
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #c9a84c 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* Camera + label */}
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

/** Top-of-card or banner-side photo; falls back to gradient placeholder when src is null. */
function CardTopImage({
  src,
  alt,
  placeholderLabel,
  gradFrom,
  gradTo,
  className = "h-40 w-full",
  sizes,
}: {
  src: string | null;
  alt: string;
  placeholderLabel: string;
  gradFrom: string;
  gradTo: string;
  className?: string;
  sizes?: string;
}) {
  if (!src) {
    return <ImgPlaceholder label={placeholderLabel} gradFrom={gradFrom} gradTo={gradTo} className={className} />;
  }
  return (
    <div className={`relative flex-shrink-0 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      />
    </div>
  );
}

const CARD =
  "group flex flex-col overflow-hidden rounded-2xl border border-[var(--navy)]/10 bg-white transition-all duration-200 hover:border-[var(--gold)]/40 hover:shadow-lg hover:-translate-y-0.5";

export function ServicesBentoSection() {
  return (
    <section className="bg-[var(--cream)] py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4">

        {/* Heading */}
        <motion.div {...reveal(0)}>
          <div className="section-eyebrow mb-4 text-[var(--gold)]">What We Provide</div>
          <h2 id="services-heading" className="heading-2 text-[var(--charcoal)]">
            Everything your event needs.{" "}
            <span className="italic">One vendor. One call.</span>
          </h2>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {/* ── 1. TENTS — Tall feature card, spans 2 rows on lg ── */}
          <motion.div {...reveal(0.05)}>
            <Link href="/services/tents-structures" className={CARD}>
              <CardTopImage
                src="/images/outdoor-event-planning/backyard-chicago-wedding.webp"
                alt="Backyard event with tent, tables, and seating in the Chicago area"
                placeholderLabel="Tents & Structures Photo"
                gradFrom="#0b1f3a"
                gradTo="#040c1c"
                className="h-40"
              />
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-[var(--font-display)] text-lg text-[var(--navy)]">
                  Tents &amp; Structures
                </h3>
                <p className="text-sm leading-relaxed text-[var(--charcoal)]/75">
                  Frame tents and pole structures from 20×20 to 40×80+. Anchored,
                  weather-rated, and sized for your guest count. Delivery, setup, and
                  teardown included on every order.
                </p>
                <span className="mt-1 text-sm font-medium text-[var(--navy)] underline-offset-2 group-hover:underline decoration-[var(--gold)]">
                  Learn more →
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── 2. TABLES — Image top, text bottom ── */}
          <motion.div {...reveal(0.12)}>
            <Link href="/services/tables-seating" className={CARD}>
              <CardTopImage
                src="/images/outdoor-event-planning/Elegant%20Outdoor%20Event%20Tent.webp"
                alt="Outdoor event under a tent with tables and seating arranged for guests"
                placeholderLabel="Tables & Seating Photo"
                gradFrom="#2a1e12"
                gradTo="#130d06"
                className="h-40"
              />
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-[var(--font-display)] text-lg text-[var(--navy)]">
                  Tables &amp; Seating
                </h3>
                <p className="text-sm leading-relaxed text-[var(--charcoal)]/75">
                  Round, rectangular, and cocktail tables. Folding, cross-back, and
                  chiavari chair options. Linen upgrades available.
                </p>
                <span className="mt-1 text-sm font-medium text-[var(--navy)] underline-offset-2 group-hover:underline decoration-[var(--gold)]">
                  Learn more →
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── 3. GAMES — Image top, text bottom ── */}
          <motion.div {...reveal(0.19)}>
            <Link href="/services/games-entertainment" className={CARD}>
              <CardTopImage
                src="/images/outdoor-event-planning/mini-mila-pink-bounce-house.webp"
                alt="Pink bounce house rental for parties and events"
                placeholderLabel="Games & Entertainment Photo"
                gradFrom="#3d1800"
                gradTo="#1b0900"
                className="h-40"
              />
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-[var(--font-display)] text-lg text-[var(--navy)]">
                  Games &amp; Entertainment
                </h3>
                <p className="text-sm leading-relaxed text-[var(--charcoal)]/75">
                  Mechanical bulls, bounce houses, photo booths, foam machines, and more.
                  Built for corporate events that need more than tables — and social
                  events people actually remember.
                </p>
                <span className="mt-1 text-sm font-medium text-[var(--navy)] underline-offset-2 group-hover:underline decoration-[var(--gold)]">
                  Learn more →
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── 4. STAGES — Image top, text bottom ── */}
          <motion.div {...reveal(0.26)}>
            <Link href="/services/stages-presentation" className={CARD}>
              <CardTopImage
                src="/images/outdoor-event-planning/Stage%2001.webp"
                alt="Portable stage and riser setup for presentations and performances"
                placeholderLabel="Stages & Presentation Photo"
                gradFrom="#1a1a2e"
                gradTo="#0d0d1a"
                className="h-40"
              />
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-[var(--font-display)] text-lg text-[var(--navy)]">
                  Stages &amp; Presentation
                </h3>
                <p className="text-sm leading-relaxed text-[var(--charcoal)]/75">
                  Configurable stage and riser rentals for presentations, ceremonies,
                  and performances. Custom sizing, combinable with tent structures.
                </p>
                <span className="mt-1 text-sm font-medium text-[var(--navy)] underline-offset-2 group-hover:underline decoration-[var(--gold)]">
                  Learn more →
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── 5. EVENT EXTRAS — Image top, text bottom ── */}
          <motion.div {...reveal(0.33)}>
            <Link href="/services/event-extras" className={CARD}>
              <CardTopImage
                src="/images/outdoor-event-planning/champagne-wall.webp"
                alt="Champagne wall display for receptions and celebrations"
                placeholderLabel="Event Extras Photo"
                gradFrom="#3a2800"
                gradTo="#1c1200"
                className="h-40"
              />
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-[var(--font-display)] text-lg text-[var(--navy)]">
                  Event Extras
                </h3>
                <p className="text-sm leading-relaxed text-[var(--charcoal)]/75">
                  Champagne walls, portable bars, and lounge furniture. The finishing
                  details that make your event look and feel different.
                </p>
                <span className="mt-1 text-sm font-medium text-[var(--navy)] underline-offset-2 group-hover:underline decoration-[var(--gold)]">
                  Learn more →
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── 6. DELIVERY — Full-width banner, text left + image right ── */}
          <motion.div className="md:col-span-2 lg:col-span-3" {...reveal(0.4)}>
            <Link
              href="/services/delivery-setup"
              className="group flex overflow-hidden rounded-2xl border border-[var(--navy)]/10 bg-white transition-all duration-200 hover:border-[var(--gold)]/40 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex flex-1 flex-col justify-center px-6 py-7 md:px-8">
                <div className="section-eyebrow mb-2 text-[var(--gold)]">
                  White-Glove Service
                </div>
                <h3 className="font-[var(--font-display)] text-xl text-[var(--navy)]">
                  Delivery, Setup &amp; Teardown
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--charcoal)]/75">
                  Every order includes professional delivery, full setup, and teardown by
                  our crew. You don&apos;t move a single chair. We arrive on time, build
                  it out, and disappear after.
                </p>
                <span className="mt-3 text-sm font-medium text-[var(--navy)] underline-offset-2 group-hover:underline decoration-[var(--gold)]">
                  Learn more →
                </span>
              </div>
              <CardTopImage
                src="/images/outdoor-event-planning/delivery-setup.webp"
                alt="Sterling crew delivering and setting up rental equipment at a venue"
                placeholderLabel="Delivery & Setup Photo"
                gradFrom="#0d2240"
                gradTo="#050f20"
                className="hidden min-h-[168px] w-56 shrink-0 md:block lg:min-h-[192px] lg:w-72"
                sizes="(max-width: 1024px) 224px, 288px"
              />
            </Link>
          </motion.div>

        </div>

        {/* Browse all link */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-block font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-4 hover:decoration-[var(--gold-light)]"
          >
            Browse all services →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
