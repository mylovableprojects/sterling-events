import type { Metadata } from "next";
import Script from "next/script";
import { SpeakableWebPageScript } from "@/components/SpeakableWebPageScript";
import { AnswerPageHero } from "@/components/AnswerPageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "can-you-deliver-the-day-before-my-event";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title: "Can You Deliver the Day Before My Event? | Sterling Event Rentals",
  description:
    "Yes — day-before delivery is available for Chicago and Chicagoland events. Ask when booking. An extended rental window may apply. Confirm delivery timing when you get your quote.",
  alternates: { canonical },
  openGraph: {
    title: "Can You Deliver the Day Before My Event? | Sterling Event Rentals",
    description:
      "Yes — day-before delivery is available for Chicago and Chicagoland events. Ask when booking. An extended rental window may apply. Confirm delivery timing when you get your quote.",
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
    title: "Can You Deliver the Day Before My Event? | Sterling Event Rentals",
    description:
      "Yes — day-before delivery is available for Chicago and Chicagoland events. Ask when booking. An extended rental window may apply. Confirm delivery timing when you get your quote.",
  },
};

const quickAnswerText =
  "Sometimes. Day-before delivery depends on availability, your venue rules, and what’s being installed (especially tents and staging). For many events, same-day delivery works best because it aligns with your rental window and reduces overnight weather risk. If you need day-before setup, request a quote with your venue and timing — we’ll confirm what’s possible and include any extended window in the total upfront.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you deliver the day before my event?",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Day-before delivery",
      item: canonical,
    },
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
      <AnswerPageHero slug="can-you-deliver-the-day-before-my-event" title="Can you deliver the day before my event?" lastCrumbLabel={config.breadcrumbLabel} />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          <p className="faq-answer">{quickAnswerText}</p>
        </div>
        <AnswerSpokeLinks slug={slug} />
      </BelowHeroQuickAnswer>
    </>
  );
}
