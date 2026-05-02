"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HERO_BG =
  "/images/outdoor-event-planning/wedding_tent_rentals_chicago.webp";

const stagger = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.12,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export function Hero() {
  return (
    <section className="gradient-hero relative min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_BG}
          alt="Illuminated event tent at an outdoor evening wedding reception"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-b from-[#050915]/90 via-[#0b1f3a]/75 to-[#02030a]/92"
        aria-hidden
      />
      <div className="gradient-orb -left-24 top-10 h-64 w-64" />
      <div className="gradient-orb bottom-[-5rem] right-[-3rem] h-80 w-80 opacity-60" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
        <div className="space-y-4 md:space-y-6">
          {/* Eyebrow carries the geo-modified keyword so the H1 can lead with the value proposition */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="section-eyebrow"
          >
            Event Rentals · Chicago &amp; Chicagoland
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="hero-headline text-[var(--cream)]"
          >
            Your event reflects on you. Make sure the rental company does too.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-xl hero-subheadline leading-relaxed text-[var(--champagne)]/80"
          >
            Tents, tables, stages, and specialty installations for 25 to 300+
            guests. We handle delivery, setup, and teardown. You show up and
            host.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a href="/contact" className="btn-primary">
              Check Availability for Your Date
            </a>
            <a href="/services" className="btn-outline">
              Browse Our Services
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <a
              href="tel:+17736927576"
              className="inline-flex items-center gap-2 text-sm text-[var(--champagne)]/70 transition-colors hover:text-[var(--gold-light)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.1 11.82a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
  );
}
