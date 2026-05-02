"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { heroHeadlineStagger } from "@/lib/heroHeadlineMotion";

export type PageHeroCTA = { href: string; label: string; download?: boolean };

export type PageHeroSharedProps = {
  eyebrow: string;
  title: string;
  subhead?: string;
  breadcrumbs?: ReactNode;
  /** Pass `false` to hide the primary button */
  primaryCta?: PageHeroCTA | false;
  /** Pass `false` to hide the secondary pill */
  secondaryCta?: PageHeroCTA | false;
  showPhone?: boolean;
  showScroll?: boolean;
  /** Full-bleed photo + same scrim stack as the home `Hero` */
  backgroundImage?: { src: string; alt: string };
  /** Extra content below the phone row (e.g. PDF link) */
  afterPhone?: ReactNode;
  /** Right column on large screens (e.g. contact form); uses a wider row layout */
  trailingSlot?: ReactNode;
};

const defaultPrimary: PageHeroCTA = {
  href: "/contact",
  label: "Check Availability for Your Date",
};

const defaultSecondary: PageHeroCTA = {
  href: "/services",
  label: "Browse Our Services",
};

function PhoneLink() {
  return (
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
  );
}

function HeroBackground({ backgroundImage }: { backgroundImage?: { src: string; alt: string } }) {
  if (!backgroundImage) return null;
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
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
    </>
  );
}

function HeroOrbs() {
  return (
    <>
      <div className="gradient-orb -left-24 top-10 h-64 w-64" />
      <div className="gradient-orb bottom-[-5rem] right-[-3rem] h-80 w-80 opacity-60" />
    </>
  );
}

function HeroScroll() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center">
      <div className="flex flex-col items-center gap-3 text-[0.65rem] tracking-[0.3em] text-[var(--champagne)]/70 uppercase">
        <span>Scroll</span>
        <div className="scroll-indicator" />
      </div>
    </div>
  );
}

function HeroMain({
  eyebrow,
  title,
  subhead,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  showPhone = true,
  afterPhone,
  layout = "default",
}: {
  eyebrow: string;
  title: string;
  subhead?: string;
  breadcrumbs?: ReactNode;
  primaryCta: PageHeroCTA | null;
  secondaryCta: PageHeroCTA | null;
  showPhone?: boolean;
  afterPhone?: ReactNode;
  layout?: "default" | "split-left";
}) {
  const p = primaryCta;
  const s = secondaryCta;
  const hasCtas = !!(p || s);
  const ctaStart = subhead ? 3 : 2;
  const phoneCustom = hasCtas ? (subhead ? 4 : 3) : subhead ? 3 : 2;

  const shellClass =
    layout === "split-left"
      ? "relative z-10 flex w-full min-w-0 flex-1 max-w-2xl flex-col gap-6"
      : "relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-6 px-6";

  return (
    <div className={shellClass}>
      {breadcrumbs}
      <div className="space-y-4 md:space-y-6">
        <motion.div custom={0} initial="hidden" animate="visible" variants={heroHeadlineStagger} className="section-eyebrow">
          {eyebrow}
        </motion.div>
        <motion.h1 custom={1} initial="hidden" animate="visible" variants={heroHeadlineStagger} className="hero-headline text-[var(--cream)]">
          {title}
        </motion.h1>
        {subhead ? (
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={heroHeadlineStagger}
            className="max-w-xl hero-subheadline leading-relaxed text-[var(--champagne)]/80"
          >
            {subhead}
          </motion.p>
        ) : null}
        {hasCtas ? (
          <motion.div
            custom={ctaStart}
            initial="hidden"
            animate="visible"
            variants={heroHeadlineStagger}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {p ? (
              p.download ? (
                <a href={p.href} download className="btn-primary">
                  {p.label}
                </a>
              ) : (
                <Link href={p.href} className="btn-primary">
                  {p.label}
                </Link>
              )
            ) : null}
            {s ? (
              <Link href={s.href} className="btn-outline">
                {s.label}
              </Link>
            ) : null}
          </motion.div>
        ) : null}
        {showPhone ? (
          <motion.div custom={phoneCustom} initial="hidden" animate="visible" variants={heroHeadlineStagger}>
            <PhoneLink />
          </motion.div>
        ) : null}
        {afterPhone ? <div className="pt-1">{afterPhone}</div> : null}
      </div>
    </div>
  );
}

function resolvePrimary(primary?: PageHeroCTA | false): PageHeroCTA | null {
  if (primary === false) return null;
  return primary ?? defaultPrimary;
}

function resolveSecondary(secondary?: PageHeroCTA | false): PageHeroCTA | null {
  if (secondary === false) return null;
  if (secondary === undefined) return defaultSecondary;
  return secondary;
}

/** Full-width hero section (home, marketing pages, answers, etc.) */
export function PageHero({
  eyebrow,
  title,
  subhead,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  showPhone = true,
  showScroll = true,
  backgroundImage,
  sectionClassName = "",
  afterPhone,
  trailingSlot,
}: PageHeroSharedProps & { sectionClassName?: string }) {
  const rp = resolvePrimary(primaryCta);
  const rs = resolveSecondary(secondaryCta);

  return (
    <section className={`gradient-hero relative flex min-h-[85vh] flex-col overflow-hidden ${sectionClassName}`.trim()}>
      <HeroBackground backgroundImage={backgroundImage} />
      <HeroOrbs />
      {trailingSlot ? (
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-10 md:flex-row md:items-start md:gap-10">
          <HeroMain
            layout="split-left"
            eyebrow={eyebrow}
            title={title}
            subhead={subhead}
            breadcrumbs={breadcrumbs}
            primaryCta={rp}
            secondaryCta={rs}
            showPhone={showPhone}
            afterPhone={afterPhone}
          />
          <div className="w-full min-w-0 flex-1 md:pt-2">{trailingSlot}</div>
        </div>
      ) : (
        <HeroMain
          layout="default"
          eyebrow={eyebrow}
          title={title}
          subhead={subhead}
          breadcrumbs={breadcrumbs}
          primaryCta={rp}
          secondaryCta={rs}
          showPhone={showPhone}
          afterPhone={afterPhone}
        />
      )}
      {showScroll ? <HeroScroll /> : null}
    </section>
  );
}

/**
 * Inner hero stack for use inside an existing `gradient-hero` section
 * (e.g. `ServicePageLayout` hero slot). Parent must be `relative overflow-hidden min-h-[85vh]`.
 */
export function PageHeroEmbedded({
  eyebrow,
  title,
  subhead,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  showPhone = true,
  showScroll = true,
  backgroundImage,
  afterPhone,
  trailingSlot,
}: PageHeroSharedProps) {
  const rp = resolvePrimary(primaryCta);
  const rs = resolveSecondary(secondaryCta);

  return (
    <>
      <HeroBackground backgroundImage={backgroundImage} />
      <HeroOrbs />
      {trailingSlot ? (
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-10 md:flex-row md:items-start md:gap-10">
          <HeroMain
            layout="split-left"
            eyebrow={eyebrow}
            title={title}
            subhead={subhead}
            breadcrumbs={breadcrumbs}
            primaryCta={rp}
            secondaryCta={rs}
            showPhone={showPhone}
            afterPhone={afterPhone}
          />
          <div className="w-full min-w-0 flex-1 md:pt-2">{trailingSlot}</div>
        </div>
      ) : (
        <HeroMain
          layout="default"
          eyebrow={eyebrow}
          title={title}
          subhead={subhead}
          breadcrumbs={breadcrumbs}
          primaryCta={rp}
          secondaryCta={rs}
          showPhone={showPhone}
          afterPhone={afterPhone}
        />
      )}
      {showScroll ? <HeroScroll /> : null}
    </>
  );
}
