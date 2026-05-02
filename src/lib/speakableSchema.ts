/**
 * Minimal WebPage + SpeakableSpecification for voice / AEO parity.
 * Pair with `.quick-answer` and `.faq-answer` in the DOM (see QuickAnswerBox, answer pages).
 */
export function speakableWebPageJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".quick-answer", ".faq-answer"],
    },
  };
}
