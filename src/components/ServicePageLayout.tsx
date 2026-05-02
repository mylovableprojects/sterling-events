"use client";

import { ReactNode } from "react";

export type ServicePageSections = {
  hero: ReactNode;
  whatWeDo: ReactNode;
  sizesAndIncluded: ReactNode;
  whoItsFor: ReactNode;
  trustStrip: ReactNode;
  howItWorks: ReactNode;
  faq: ReactNode;
  ctaClose: ReactNode;
};

type Props = {
  sections: ServicePageSections;
};

/**
 * Wrapper for all 5 service pages. Renders 8 sections with alternating
 * backgrounds (dark/light) and consistent spacing.
 */
export function ServicePageLayout({ sections }: Props) {
  return (
    <>
      {/* Section 1 — Hero (dark) */}
      <section className="gradient-hero relative min-h-[75vh] overflow-hidden">
        {sections.hero}
      </section>

      {/* Section 2 — What we do (light) */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
        {sections.whatWeDo}
      </section>

      {/* Section 3 — Sizes & what's included (dark) */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-16">
        {sections.sizesAndIncluded}
      </section>

      {/* Section 4 — Who this is for (light) */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
        {sections.whoItsFor}
      </section>

      {/* Section 5 — Trust strip (dark) */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-16">
        {sections.trustStrip}
      </section>

      {/* Section 6 — How it works (light) */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
        {sections.howItWorks}
      </section>

      {/* Section 7 — FAQ (dark) */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-16">
        {sections.faq}
      </section>

      {/* Section 8 — CTA close (dark) */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-16">
        {sections.ctaClose}
      </section>
    </>
  );
}
