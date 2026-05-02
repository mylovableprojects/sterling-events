import type { Metadata } from "next";
import Script from "next/script";
import { SpeakableWebPageScript } from "@/components/SpeakableWebPageScript";
import { AnswerPageHero } from "@/components/AnswerPageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "how-much-does-tent-rental-cost-chicago";
const BASE = "https://www.sterlingeventrentals.com";

const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title: "How Much Does Tent Rental Cost in Chicago? | Sterling Event Rentals",
  description:
    "Tent rental in Chicago starts at $500. A 20x20 for small parties, 20x40 for 50–100 guests. Every Sterling quote includes equipment, setup, and delivery as named line items — no surprises.",
  alternates: { canonical },
  openGraph: {
    title:
      "How Much Does Tent Rental Cost in Chicago? | Sterling Event Rentals",
    description:
      "Tent rental in Chicago starts at $500. A 20x20 for small parties, 20x40 for 50–100 guests. Every Sterling quote includes equipment, setup, and delivery as named line items — no surprises.",
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
      "How Much Does Tent Rental Cost in Chicago? | Sterling Event Rentals",
    description:
      "Tent rental in Chicago starts at $500. A 20x20 for small parties, 20x40 for 50–100 guests. Every Sterling quote includes equipment, setup, and delivery as named line items — no surprises.",
  },
};

const quickAnswerText =
  "Tent rental in Chicago starts at Sterling's $500 minimum order, which covers equipment and the setup fee. A 20x20 frame tent for a small backyard party with tables and chairs typically falls in the Ready Set package range. Tents for 75–150 guests are in the Event Ready range. For 150–300+ guests, a custom quote is required. Every quote includes equipment, setup, and delivery — no line items added after. Call (773) 692-7576 with your date and guest count, or submit a contact form, and we'll send an exact total.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does tent rental cost in Chicago?",
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
      name: "How much does tent rental cost in Chicago?",
      item: `${BASE}/answers/${slug}`,
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
      <AnswerPageHero slug="how-much-does-tent-rental-cost-chicago" title="How much does tent rental cost in Chicago?" lastCrumbLabel={config.breadcrumbLabel} />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          <p className="faq-answer">{quickAnswerText}</p>
        </div>
        <AnswerSpokeLinks slug={slug} />
      </BelowHeroQuickAnswer>
    </>
  );
}
