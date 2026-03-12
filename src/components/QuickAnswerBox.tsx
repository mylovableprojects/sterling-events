import { ReactNode } from "react";

type Props = {
  /** Direct answer text or markup. AEO target — no preamble. */
  children: ReactNode;
  /** Optional label above the answer (e.g. "Quick answer"). */
  label?: string;
  /** Visual variant: default (dark), or light for cream/light pages. */
  variant?: "default" | "light";
  /** Optional left border accent (AEO doc recommends for answer pages). */
  accent?: boolean;
};

/**
 * Styled answer block for AEO pages. Use for featured-snippet / AI Overview target.
 * Includes .quick-answer and .faq-answer for Speakable schema.
 */
export function QuickAnswerBox({
  children,
  label = "Quick answer",
  variant = "default",
  accent = false,
}: Props) {
  const isLight = variant === "light";
  return (
    <div
      className={`quick-answer max-w-2xl rounded-xl ${
        isLight
          ? "bg-[var(--navy)]/10 p-4 text-[var(--charcoal)]/90"
          : "border border-[var(--gold)]/30 bg-[var(--navy)]/60 p-6 text-base leading-relaxed text-[var(--champagne)]"
      } ${accent ? "border-l-4 border-[var(--gold)]/50" : ""}`}
      data-aeo="quick-answer"
    >
      {label && (
        <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">
          {label}
        </h2>
      )}
      <div className="faq-answer">{children}</div>
    </div>
  );
}
