import Link from "next/link";

type Props = {
  title: string;
  description: string;
  /** Optional list of included items. */
  features?: string[];
  /** Optional price or "Starting at $X". */
  priceNote?: string;
  /** Optional badge, e.g. "Most Popular". */
  badge?: string;
  /** CTA label for this card. */
  ctaLabel: string;
  ctaHref: string;
  /** Optional secondary links (e.g. "Tables & Seating →"). */
  secondaryLinks?: { href: string; label: string }[];
  /** Highlight style for "most popular" tier. */
  highlight?: boolean;
  className?: string;
};

/**
 * Package tier card for /packages. Use highlight for the middle "Most Popular" tier.
 */
export function PackageCard({
  title,
  description,
  features = [],
  priceNote,
  badge,
  ctaLabel,
  ctaHref,
  secondaryLinks = [],
  highlight = false,
  className = "",
}: Props) {
  return (
    <div
      className={`flex h-full flex-col space-y-3 rounded-xl border p-4 text-[var(--champagne)]/85 ${
        highlight
          ? "border-[var(--gold)]/60 bg-[var(--navy)]/95"
          : "border-white/10 bg-[var(--navy)]/90"
      } ${className}`}
    >
      {badge && (
        <p className="section-eyebrow text-[var(--gold-light)]">{badge}</p>
      )}
      <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)]">
        {title}
      </h3>
      <p className="text-sm">{description}</p>
      {features.length > 0 && (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
      {priceNote && (
        <p className="mt-3 text-[0.8rem] text-[var(--champagne)]/70">
          {priceNote}
        </p>
      )}
      <div className="mt-auto pt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--gold-light)]">
        <Link href={ctaHref} className="hover:underline">
          {ctaLabel}
        </Link>
        {secondaryLinks.map((s) => (
          <Link key={s.href} href={s.href} className="hover:underline">
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
