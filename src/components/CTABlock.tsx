import Link from "next/link";
import { ReactNode } from "react";

type CTAItem = {
  href: string;
  label: string;
  /** primary = filled, secondary = outline, ghost = text only */
  variant?: "primary" | "secondary" | "ghost";
};

type Props = {
  /** Primary CTA (e.g. "Check availability for your date"). */
  primary: CTAItem;
  /** Optional secondary CTAs. */
  secondary?: CTAItem[];
  /** Optional sub-copy above or between buttons, e.g. "Not sure which package?" */
  subCopy?: ReactNode;
  /** Layout: row (default) or column. */
  layout?: "row" | "column";
  className?: string;
};

const variantClasses = {
  primary: "btn-primary",
  secondary: "btn-outline border-[var(--cream)]/30 text-[var(--cream)] hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/10",
  ghost: "text-[var(--gold-light)] hover:underline",
};

/**
 * Reusable CTA block with primary and optional secondary buttons.
 */
export function CTABlock({
  primary,
  secondary = [],
  subCopy,
  layout = "row",
  className = "",
}: Props) {
  return (
    <div
      className={`flex flex-wrap items-center gap-4 ${layout === "column" ? "flex-col" : ""} ${className}`}
    >
      {subCopy && (
        <span className="text-[0.8rem] text-[var(--champagne)]/70 w-full shrink-0 md:w-auto">
          {subCopy}
        </span>
      )}
      <Link
        href={primary.href}
        className={variantClasses[primary.variant ?? "primary"]}
      >
        {primary.label}
      </Link>
      {secondary.map((cta) => (
        <Link
          key={cta.href + cta.label}
          href={cta.href}
          className={variantClasses[cta.variant ?? "secondary"]}
        >
          {cta.label}
        </Link>
      ))}
    </div>
  );
}
