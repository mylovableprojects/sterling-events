"use client";

import Script from "next/script";
import { useId } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
  /** If true, outputs FAQPage JSON-LD script. Default true. */
  withSchema?: boolean;
  /** Optional id prefix for the schema script. */
  schemaId?: string;
  /** Visual variant: default (dark), light, or resourceArticle (dark, border-b only). */
  variant?: "default" | "light" | "resourceArticle";
};

/**
 * FAQ block with optional FAQPage schema. Use for service pages, packages, answers, etc.
 */
export function FAQAccordion({
  items,
  withSchema = true,
  schemaId = "ld-faq",
  variant = "default",
}: Props) {
  const baseId = useId();
  const isLight = variant === "light";
  const isResourceArticle = variant === "resourceArticle";

  const faqSchema = withSchema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      {faqSchema && (
        <Script
          id={schemaId}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className={isResourceArticle ? "space-y-0" : "space-y-3"}>
        {items.map((item, i) => (
          <details
            key={i}
            className={
              isResourceArticle
                ? "border-b border-white/10 py-5 last:border-b-0"
                : `rounded-md border p-3 ${
                    isLight
                      ? "border-[var(--navy)]/20 bg-[var(--cream)]/80"
                      : "border-white/10 bg-black/20"
                  }`
            }
          >
            <summary
              id={`${baseId}-q-${i}`}
              className={`cursor-pointer list-none ${
                isResourceArticle
                  ? "flex w-full items-center justify-between gap-4 text-left text-lg font-medium text-[var(--cream)] transition-colors hover:text-[var(--gold)]"
                  : isLight
                    ? "font-medium text-[var(--charcoal)]"
                    : "font-medium text-[var(--cream)]"
              }`}
            >
              {item.question}
            </summary>
            <p
              className={
                isResourceArticle
                  ? "mt-4 max-w-2xl text-base leading-relaxed text-[var(--champagne)]/80"
                  : "faq-answer mt-2 text-sm"
              }
              style={!isResourceArticle ? { color: isLight ? "var(--charcoal)" : "var(--champagne)" } : undefined}
            >
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </>
  );
}
