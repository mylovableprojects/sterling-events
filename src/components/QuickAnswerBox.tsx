import { ReactNode } from "react";

type Props = {
  /** Direct answer text or markup. AEO target — lead with the answer, no preamble. */
  children: ReactNode;
  /** Optional visible kicker above the answer (most pages omit this). */
  label?: string;
  /** Visual variant: default (dark), or light for cream/light pages. */
  variant?: "default" | "light";
  /** Optional left border accent (AEO doc recommends for answer pages). */
  accent?: boolean;
};

/**
 * Styled answer block for AEO pages. Use for featured-snippet / AI Overview target.
 * Uses `.quick-answer` / `.faq-answer` so optional `SpeakableWebPageScript` (or Article `speakable`) can target the same DOM via cssSelector.
 */
export function QuickAnswerBox({
  children,
  label,
  variant = "default",
  accent = false,
}: Props) {
  const isLight = variant === "light";
  return (
    <div
      className={`quick-answer w-full max-w-2xl rounded-xl md:max-w-3xl ${
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
