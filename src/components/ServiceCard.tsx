import Link from "next/link";

type Props = {
  href: string;
  title: string;
  description?: string;
  /** Optional eyebrow, e.g. "Rental category". */
  eyebrow?: string;
  className?: string;
};

/**
 * Card for service hub links (e.g. Tents & Structures, Tables & Seating).
 */
export function ServiceCard({
  href,
  title,
  description,
  eyebrow,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`block rounded-xl border border-white/10 bg-black/25 py-4 px-5 text-[var(--cream)] transition hover:border-[var(--gold)]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] ${className}`}
    >
      {eyebrow && (
        <p className="mb-1 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--champagne)]/60">
          {eyebrow}
        </p>
      )}
      <span className="font-medium">{title}</span>
      {description && (
        <p className="mt-1 text-sm text-[var(--champagne)]/80">{description}</p>
      )}
      <span className="mt-2 inline-block text-sm text-[var(--gold-light)]">→</span>
    </Link>
  );
}
