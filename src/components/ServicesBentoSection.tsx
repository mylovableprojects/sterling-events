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

/** Top-of-card photo; falls back to a subtle gradient placeholder when src is null. */
function CardImage({
  src,
  alt,
  placeholderLabel,
  gradFrom,
  gradTo,
  sizes,
}: {
  src: string | null;
  alt: string;
  placeholderLabel: string;
  gradFrom: string;
  gradTo: string;
  sizes?: string;
}) {
  if (!src) {
    return (
      <div
        className="relative h-44 w-full flex-shrink-0 overflow-hidden"
        style={{ background: `linear-gradient(150deg, ${gradFrom}, ${gradTo})` }}
        aria-label={placeholderLabel}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #c9a84c 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="text-[0.55rem] uppercase tracking-[0.3em] text-[#c9a84c]/30">
            {placeholderLabel}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-44 w-full flex-shrink-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      />
    </div>
  );
}

const CARD =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--navy)]/10 bg-white transition-all duration-200 hover:border-[var(--gold)]/40 hover:shadow-lg hover:-translate-y-0.5";

const services = [
  {
    href: "/services/tents-structures",
    title: "Tents & Structures",
    description:
      "Frame tents and pole structures from 20×20 to 40×80+. Anchored, weather-rated, and sized for your guest count.",
    src: "/images/outdoor-event-planning/backyard-chicago-wedding.webp",
    alt: "Backyard event with tent, tables, and seating in the Chicago area",
    gradFrom: "#0b1f3a",
    gradTo: "#040c1c",
    delay: 0.05,
  },
  {
    href: "/services/tables-seating",
    title: "Tables & Seating",
    description:
      "Round, rectangular, and cocktail tables. Folding, cross-back, and chiavari chair options. Linen upgrades available.",
    src: "/images/outdoor-event-planning/Elegant Outdoor Event Tent.webp",
    alt: "Outdoor event under a tent with tables and seating arranged for guests",
    gradFrom: "#2a1e12",
    gradTo: "#130d06",
    delay: 0.12,
  },
  {
    href: "/services/games-entertainment",
    title: "Games & Entertainment",
    description:
      "Mechanical bulls, bounce houses, photo booths, foam machines, and more. Built for events people actually remember.",
    src: "/images/outdoor-event-planning/mini-mila-pink-bounce-house.webp",
    alt: "Pink bounce house rental for parties and events",
    gradFrom: "#3d1800",
    gradTo: "#1b0900",
    delay: 0.19,
  },
  {
    href: "/services/stages-presentation",
    title: "Stages & Presentation",
    description:
      "Configurable stage and riser rentals for presentations, ceremonies, and performances. Custom sizing, combinable with tent structures.",
    src: "/images/outdoor-event-planning/Stage 01.webp",
    alt: "Portable stage and riser setup for presentations and performances",
    gradFrom: "#1a1a2e",
    gradTo: "#0d0d1a",
    delay: 0.26,
  },
  {
    href: "/services/event-extras",
    title: "Event Extras",
    description:
      "Champagne walls, portable bars, and lounge furniture. The finishing details that make your event look and feel different.",
    src: "/images/outdoor-event-planning/champagne-wall.webp",
    alt: "Champagne wall display for receptions and celebrations",
    gradFrom: "#3a2800",
    gradTo: "#1c1200",
    delay: 0.33,
  },
];

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

        {/* ── 5 Service Cards: 6-col grid → top row 3×col-span-2, bottom row 2×col-span-3 ── */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => (
            <motion.div
              key={s.href}
              {...reveal(s.delay)}
              className={
                i < 3
                  ? "sm:col-span-1 lg:col-span-2"
                  : i === 4
                  ? "sm:col-span-2 lg:col-span-3"
                  : "sm:col-span-1 lg:col-span-3"
              }
            >
              <Link href={s.href} className={CARD}>
                <CardImage
                  src={s.src}
                  alt={s.alt}
                  placeholderLabel={`${s.title} Photo`}
                  gradFrom={s.gradFrom}
                  gradTo={s.gradTo}
                />
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-[var(--font-display)] text-lg text-[var(--navy)]">
                    {s.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[var(--charcoal)]/75">
                    {s.description}
                  </p>
                  <span className="mt-1 text-sm font-medium text-[var(--navy)] underline-offset-2 group-hover:underline decoration-[var(--gold)]">
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* ── Delivery — full-width banner ── */}
          <motion.div className="sm:col-span-2 lg:col-span-6" {...reveal(0.4)}>
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
              <div className="relative hidden min-h-[168px] w-56 shrink-0 overflow-hidden md:block lg:min-h-[192px] lg:w-72">
                <Image
                  src="/images/outdoor-event-planning/delivery-setup.webp"
                  alt="Sterling crew delivering and setting up rental equipment at a venue"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 224px, 288px"
                />
              </div>
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
