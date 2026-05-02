import type { Metadata } from "next";
import Script from "next/script";
import { SpeakableWebPageScript } from "@/components/SpeakableWebPageScript";
import { AnswerPageHero } from "@/components/AnswerPageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "can-you-heat-or-cool-a-tent";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title: "Can You Heat or Cool a Tent? | Sterling Event Rentals",
  description:
    "Heating and cooling options are available for tented events in Chicago and Chicagoland. Ask Sterling about heaters for spring and fall events, and cooling solutions for hot summer dates.",
  alternates: { canonical },
  openGraph: {
    title: "Can You Heat or Cool a Tent? | Sterling Event Rentals",
    description:
      "Heating and cooling options are available for tented events in Chicago and Chicagoland. Ask Sterling about heaters for spring and fall events, and cooling solutions for hot summer dates.",
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
    title: "Can You Heat or Cool a Tent? | Sterling Event Rentals",
    description:
      "Heating and cooling options are available for tented events in Chicago and Chicagoland. Ask Sterling about heaters for spring and fall events, and cooling solutions for hot summer dates.",
  },
};

const quickAnswerText =
  "Yes — tent comfort is a real factor in Chicago. The right solution depends on the month, tent size, sidewalls, and whether you’re trying to add warmth (cool nights) or airflow (summer heat). When you request a quote, tell us your date, guest count, and whether the event is daytime or evening — we’ll recommend a weather-ready setup and confirm what comfort add-ons are available for your order.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you heat or cool a tent for an event?",
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
      name: "Tent heating/cooling",
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
      <AnswerPageHero slug="can-you-heat-or-cool-a-tent" title="Can you heat or cool a tent?" lastCrumbLabel={config.breadcrumbLabel} />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          <p className="faq-answer">{quickAnswerText}</p>
        </div>
        <AnswerSpokeLinks slug={slug} />
      </BelowHeroQuickAnswer>
    </>
  );
}
