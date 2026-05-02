import type { Metadata } from "next";
import Script from "next/script";
import { SpeakableWebPageScript } from "@/components/SpeakableWebPageScript";
import { AnswerPageHero } from "@/components/AnswerPageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "is-there-a-security-deposit";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title:
    "Is There a Security Deposit for Event Rentals? | Sterling Event Rentals",
  description:
    "Sterling Event Rentals does not charge a separate security deposit. A 50% deposit holds your date. You are responsible for equipment damage beyond normal wear. Full terms stated in your contract.",
  alternates: { canonical },
  openGraph: {
    title:
      "Is There a Security Deposit for Event Rentals? | Sterling Event Rentals",
    description:
      "Sterling Event Rentals does not charge a separate security deposit. A 50% deposit holds your date. You are responsible for equipment damage beyond normal wear. Full terms stated in your contract.",
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
      "Is There a Security Deposit for Event Rentals? | Sterling Event Rentals",
    description:
      "Sterling Event Rentals does not charge a separate security deposit. A 50% deposit holds your date. You are responsible for equipment damage beyond normal wear. Full terms stated in your contract.",
  },
};

const quickAnswerText =
  "Sterling Event Rentals does not charge a separate security deposit. A 50% deposit holds your date, and the balance is due at or before delivery. You are responsible for equipment damage beyond normal wear, as stated in your contract. If a venue or unusual order ever requires an additional hold beyond that structure, we spell it out in your quote before you commit.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a security deposit for event rentals?",
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
      name: "Security deposit",
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
      <AnswerPageHero slug="is-there-a-security-deposit" title="Is there a security deposit?" lastCrumbLabel={config.breadcrumbLabel} />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          <p className="faq-answer">{quickAnswerText}</p>
        </div>
        <AnswerSpokeLinks slug={slug} />
      </BelowHeroQuickAnswer>
    </>
  );
}
