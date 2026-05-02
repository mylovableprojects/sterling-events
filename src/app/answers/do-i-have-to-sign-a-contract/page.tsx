import type { Metadata } from "next";
import Script from "next/script";
import { SpeakableWebPageScript } from "@/components/SpeakableWebPageScript";
import { AnswerPageHero } from "@/components/AnswerPageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "do-i-have-to-sign-a-contract";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title:
    "Do I Have to Sign a Contract for Event Rentals? | Sterling Event Rentals",
  description:
    "Yes. Sterling Event Rentals uses a rental agreement that covers equipment, delivery, setup, weather policy, and cancellation terms. You review the full contract before paying your deposit.",
  alternates: { canonical },
  openGraph: {
    title:
      "Do I Have to Sign a Contract for Event Rentals? | Sterling Event Rentals",
    description:
      "Yes. Sterling Event Rentals uses a rental agreement that covers equipment, delivery, setup, weather policy, and cancellation terms. You review the full contract before paying your deposit.",
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
      "Do I Have to Sign a Contract for Event Rentals? | Sterling Event Rentals",
    description:
      "Yes. Sterling Event Rentals uses a rental agreement that covers equipment, delivery, setup, weather policy, and cancellation terms. You review the full contract before paying your deposit.",
  },
};

const quickAnswerText =
  "Sterling confirms your event details (date, venue, guest count, and equipment list) and provides clear terms before you book. You’ll see deposit requirements, cancellation and weather policy, and what’s included (delivery, setup, and teardown) so there are no surprises. To reserve your date, contact us and we’ll walk you through the exact booking steps for your event.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I have to sign a contract for event rentals?",
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
    { "@type": "ListItem", position: 3, name: "Contract", item: canonical },
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
      <AnswerPageHero slug="do-i-have-to-sign-a-contract" title="Do I have to sign a contract for event rentals?" lastCrumbLabel={config.breadcrumbLabel} />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          <p className="faq-answer">{quickAnswerText}</p>
        </div>
        <AnswerSpokeLinks slug={slug} />
      </BelowHeroQuickAnswer>
    </>
  );
}
