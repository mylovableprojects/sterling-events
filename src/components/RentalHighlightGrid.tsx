"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  getHighlightsForAudience,
  type CatalogAudience,
} from "@/lib/rentalCatalog";

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const, amount: 0.12 as const },
    transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  };
}

type Props = {
  audience: CatalogAudience;
};

const SECTION_COPY: Record<
  CatalogAudience,
  { eyebrow: string; title: string; intro: string }
> = {
  weddings: {
    eyebrow: "From our catalog",
    title: "Popular wedding add-ons",
    intro:
      "These items appear on our price list and pair naturally with tents, tables, and reception layouts. Line-item pricing is in the PDF — tell us what you want on your quote.",
  },
  "corporate-events": {
    eyebrow: "From our catalog",
    title: "Corporate crowd favorite",
    intro:
      "Featured entertainment from our price list. Full pricing lives in the downloadable list; we’ll bundle it with your tent and seating on a single quote.",
  },
  "games-entertainment": {
    eyebrow: "Featured equipment",
    title: "Spotlight: mechanical bull",
    intro:
      "One of our most-requested interactive rentals across Chicagoland. Details and add-on pairing below — see the full games & entertainment line-up in the price list PDF.",
  },
};

export function RentalHighlightGrid({ audience }: Props) {
  const items = getHighlightsForAudience(audience);
  if (items.length === 0) return null;

  const meta = SECTION_COPY[audience];
  /** Light sections: wedding page + games page (embedded in cream service layout). Corporate uses dark band on event pages. */
  const isLight = audience === "weddings" || audience === "games-entertainment";
  const sectionClass = isLight
    ? "border-t border-[var(--navy)]/10 bg-[var(--sand)] py-20"
    : "border-t border-white/10 bg-[var(--navy)] py-20";
  const headingClass = isLight ? "text-[var(--navy)]" : "text-[var(--cream)]";
  const bodyClass = isLight ? "text-[var(--charcoal)]/85" : "text-[var(--champagne)]/85";
  const cardClass = isLight
    ? "rounded-2xl border border-[var(--navy)]/10 bg-white p-6 shadow-sm"
    : "rounded-2xl border border-white/10 bg-white/5 p-6";
  const eyebrowClass = isLight ? "text-[var(--gold)]" : "text-[#e8c97a]";

  return (
    <section className={sectionClass} aria-labelledby="rental-highlights-heading">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div {...reveal(0)} className="mb-10 max-w-3xl">
          <p className={`section-eyebrow mb-2 ${eyebrowClass}`}>{meta.eyebrow}</p>
          <h2 id="rental-highlights-heading" className={`heading-2 mb-4 ${headingClass}`}>
            {meta.title}
          </h2>
          <p className={`text-base leading-relaxed ${bodyClass}`}>{meta.intro}</p>
        </motion.div>

        <div
          className={`grid gap-5 ${
            items.length === 1 ? "md:max-w-2xl" : "sm:grid-cols-2"
          }`}
        >
          {items.map((item, i) => (
            <motion.article
              key={item.id}
              {...reveal(0.06 + i * 0.05)}
              className={cardClass}
            >
              <div className="mb-3 flex items-start gap-3">
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className={`font-[var(--font-display)] text-xl ${headingClass}`}>
                  {item.title}
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${bodyClass}`}>{item.body}</p>
              <p className={`mt-4 text-xs italic ${isLight ? "text-[var(--charcoal)]/45" : "text-[var(--champagne)]/40"}`}>
                Photos coming soon — ask for this item by name when you request a quote.
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div {...reveal(0.35)} className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className={`flex flex-wrap gap-x-4 gap-y-2 text-sm ${bodyClass}`}>
            <Link
              href="/packages/pricing"
              className={`font-medium underline underline-offset-4 ${
                isLight
                  ? "text-[var(--navy)] decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]"
                  : "text-[#e8c97a] decoration-[#c9a84c]/40 hover:decoration-[#e8c97a]"
              }`}
            >
              View full price list (PDF) →
            </Link>
            <Link
              href="/contact"
              className={`font-medium underline underline-offset-4 ${
                isLight
                  ? "text-[var(--navy)] decoration-[var(--gold)]/50 hover:decoration-[var(--gold)]"
                  : "text-[#e8c97a] decoration-[#c9a84c]/40 hover:decoration-[#e8c97a]"
              }`}
            >
              Add to my quote →
            </Link>
          </div>
          {audience === "corporate-events" && (
            <Link
              href="/services/games-entertainment-chicago"
              className={`text-sm font-medium underline underline-offset-4 ${
                isLight
                  ? "text-[var(--navy)] decoration-[var(--gold)]/50"
                  : "text-[#e8c97a] decoration-[#c9a84c]/40"
              }`}
            >
              More games &amp; entertainment options →
            </Link>
          )}
          {audience === "games-entertainment" && (
            <Link
              href="/events/corporate-events"
              className="text-sm font-medium text-[#e8c97a] underline underline-offset-4 decoration-[#c9a84c]/40"
            >
              See corporate event ideas →
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
