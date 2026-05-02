import type { Metadata } from "next";
import Script from "next/script";
import { SpeakableWebPageScript } from "@/components/SpeakableWebPageScript";
import { AnswerPageHero } from "@/components/AnswerPageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "how-do-i-pay-for-event-rentals";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title: "How Do I Pay for Event Rentals? | Sterling Event Rentals",
  description:
    "50% deposit holds your date. Balance due at or before delivery. Sterling Event Rentals accepts standard payment methods — ask when you get your quote for Chicago and Chicagoland events.",
  alternates: { canonical },
  openGraph: {
    title: "How Do I Pay for Event Rentals? | Sterling Event Rentals",
    description:
      "50% deposit holds your date. Balance due at or before delivery. Sterling Event Rentals accepts standard payment methods — ask when you get your quote for Chicago and Chicagoland events.",
    url: canonical,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sterling Event Rentals — Event rentals in Chicago and Chicagoland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Do I Pay for Event Rentals? | Sterling Event Rentals",
    description:
      "50% deposit holds your date. Balance due at or before delivery. Sterling Event Rentals accepts standard payment methods — ask when you get your quote for Chicago and Chicagoland events.",
  },
};

const quickAnswerText =
  "Sterling uses a simple structure: a 50% deposit holds your date, and the balance is due at or before delivery. Payment options can vary by order and timing, so the fastest way to confirm is to call (773) 692-7576 or request a quote — we’ll send the exact total and payment instructions with your booking details.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I pay for event rentals?",
      acceptedAnswer: { "@type": "Answer", text: quickAnswerText },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    {
      "@type": "ListItem",
      position: 2,
      name: "Answers",
      item: `${BASE}/answers`,
    },
    { "@type": "ListItem", position: 3, name: "Payment", item: canonical },
  ],
};

export default function AnswerPage() {
  const config = ANSWER_SPOKE_CONFIG[slug];
  return (
    <>
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SpeakableWebPageScript pageUrl={canonical} />
      <AnswerPageHero slug="how-do-i-pay-for-event-rentals" title="How do I pay for event rentals?" lastCrumbLabel={config.breadcrumbLabel} />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          <p className="faq-answer">{quickAnswerText}</p>
        </div>
        <AnswerSpokeLinks slug={slug} />
      </BelowHeroQuickAnswer>
    </>
  );
}
