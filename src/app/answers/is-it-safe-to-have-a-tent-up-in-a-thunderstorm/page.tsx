import type { Metadata } from "next";
import Script from "next/script";
import { SpeakableWebPageScript } from "@/components/SpeakableWebPageScript";
import { AnswerPageHero } from "@/components/AnswerPageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "is-it-safe-to-have-a-tent-up-in-a-thunderstorm";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title:
    "Is It Safe to Have a Tent Up During a Thunderstorm? | Sterling Event Rentals",
  description:
    "No — Sterling will not leave tents up in active thunderstorm conditions in Chicago. High winds and lightning are grounds to take down or delay setup. Know the weather policy before your event.",
  alternates: { canonical },
  openGraph: {
    title:
      "Is It Safe to Have a Tent Up During a Thunderstorm? | Sterling Event Rentals",
    description:
      "No — Sterling will not leave tents up in active thunderstorm conditions in Chicago. High winds and lightning are grounds to take down or delay setup. Know the weather policy before your event.",
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
    title:
      "Is It Safe to Have a Tent Up During a Thunderstorm? | Sterling Event Rentals",
    description:
      "No — Sterling will not leave tents up in active thunderstorm conditions in Chicago. High winds and lightning are grounds to take down or delay setup. Know the weather policy before your event.",
  },
};

const quickAnswerText =
  "Severe weather safety depends on conditions and timing. Sterling Event Rentals will not set up in forecasted unsafe weather — that policy exists to keep guests and crew safe. If weather changes after setup is complete, follow venue guidance and prioritize safety immediately. If you’re planning an outdoor event in Chicago, the best way to reduce risk is to confirm your weather plan early, consider sidewalls for wind/rain protection during the event, and understand the policy before the day-of. The National Weather Service stresses that no outdoor shelter is lightning-safe; if thunder roars, go indoors — see https://www.weather.gov/safety/lightning for official guidance.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it safe to have a tent up during a thunderstorm?",
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
      name: "Thunderstorm safety",
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
      <AnswerPageHero slug="is-it-safe-to-have-a-tent-up-in-a-thunderstorm" title="Is it safe to have a tent up during a thunderstorm?" lastCrumbLabel={config.breadcrumbLabel} />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          <p className="faq-answer">{quickAnswerText}</p>
        </div>
        <AnswerSpokeLinks slug={slug} />
      </BelowHeroQuickAnswer>
    </>
  );
}
