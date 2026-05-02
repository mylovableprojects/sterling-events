import type { Metadata } from "next";
import Script from "next/script";
import { SpeakableWebPageScript } from "@/components/SpeakableWebPageScript";
import { AnswerPageHero } from "@/components/AnswerPageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "how-far-in-advance-book-event-rentals";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

const advanceBookingAnswer =
  "For corporate events, 21–30 days in advance is typical — enough time to confirm availability, get a quote, and lock your date with a deposit. For weddings, prime summer Saturdays and in-demand venues often book 12+ months ahead; if your date or location is more flexible, confirming 3–6 months before the event usually works — sooner is always safer. Social and private parties are often fine around 2–3 weeks, though peak summer weekends fill faster. As soon as you have a date and guest count, call (773) 692-7576 or request a quote. A 50% deposit holds your date.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far in advance should I book event rentals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: advanceBookingAnswer,
      },
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
      name: "How far in advance should I book event rentals?",
      item: canonical,
    },
  ],
};

export const metadata: Metadata = {
  title: "How Far in Advance to Book Event Rentals? | Sterling Event Rentals",
  description:
    "Corporate events: often 21–30 days. Weddings: peak dates may book 12+ months out; many confirm 3–6 months ahead when flexible. Private parties: often 2–3 weeks. Chicago summer weekends fill fast — confirm with a deposit as soon as you can.",
  alternates: { canonical },
  openGraph: {
    title: "How Far in Advance to Book Event Rentals? | Sterling Event Rentals",
    description:
      "Corporate events: often 21–30 days. Weddings: peak dates may book 12+ months out; many confirm 3–6 months ahead when flexible. Private parties: often 2–3 weeks. Chicago summer weekends fill fast — confirm with a deposit as soon as you can.",
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
    title: "How Far in Advance to Book Event Rentals? | Sterling Event Rentals",
    description:
      "Corporate events: often 21–30 days. Weddings: peak dates may book 12+ months out; many confirm 3–6 months ahead when flexible. Private parties: often 2–3 weeks. Chicago summer weekends fill fast — confirm with a deposit as soon as you can.",
  },
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
      <AnswerPageHero slug="how-far-in-advance-book-event-rentals" title="How far in advance should I book event rentals?" lastCrumbLabel={config.breadcrumbLabel} />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          <p className="faq-answer">{advanceBookingAnswer}</p>
        </div>
        <AnswerSpokeLinks slug={slug} />
      </BelowHeroQuickAnswer>
    </>
  );
}
