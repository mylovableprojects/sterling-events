import { ReactNode } from "react";

type Props = {
  /** Quote text. */
  quote: ReactNode;
  /** Optional attribution, e.g. "— Client Name, Corporate Event". */
  attribution?: string;
  /** Optional link to full reviews page. */
  reviewsHref?: string;
  className?: string;
};

/**
 * Single review pull for hero or section. Use for social proof.
 */
export function ReviewPull({
  quote,
  attribution,
  reviewsHref = "/reviews",
  className = "",
}: Props) {
  return (
    <blockquote
      className={`space-y-2 text-sm leading-relaxed text-[var(--champagne)]/80 ${className}`}
    >
      <p className="font-[var(--font-display)] text-lg italic text-[var(--cream)]/90">
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <footer className="text-[0.8rem] text-[var(--champagne)]/60">
          {attribution}
        </footer>
      )}
      {reviewsHref && (
        <p>
          <a href={reviewsHref} className="text-[var(--gold-light)] hover:underline">
            See all reviews →
          </a>
        </p>
      )}
    </blockquote>
  );
}
