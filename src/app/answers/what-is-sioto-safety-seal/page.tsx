import type { Metadata } from "next";
import Script from "next/script";
import { SpeakableWebPageScript } from "@/components/SpeakableWebPageScript";
import { AnswerPageHero } from "@/components/AnswerPageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "what-is-sioto-safety-seal";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the SIOTO Safety Seal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SIOTO Safety Seal is issued by SIOTO (Safe Inflatable Operators Training Organization), which provides nationally recognized safety training and certification for party and event rental operators. The seal shows certified training completion; planners can verify active credentials through SIOTO's public verification tools. It complements insurance and venue paperwork — it does not replace local permits. Sterling Event Rentals is licensed, insured, and SIOTO Safety Seal certified. Program overview: https://www.sioto.org/ — verification: https://sioto.com/verify-2/",
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
      name: "What is the SIOTO Safety Seal?",
      item: canonical,
    },
  ],
};

export const metadata: Metadata = {
  title: "What Is the SIOTO Safety Seal? | Sterling Event Rentals",
  description:
    "The SIOTO Safety Seal is issued by SIOTO (Safe Inflatable Operators Training Organization), which provides nationally recognized safety training and certification for party and event rental operators. Sterling is licensed, insured, and SIOTO Safety Seal certified — verify credentials at https://sioto.com/verify-2/.",
  alternates: { canonical },
  openGraph: {
    title: "What Is the SIOTO Safety Seal? | Sterling Event Rentals",
    description:
      "The SIOTO Safety Seal is issued by SIOTO (Safe Inflatable Operators Training Organization), which provides nationally recognized safety training and certification for party and event rental operators. Sterling is licensed, insured, and SIOTO Safety Seal certified — verify credentials at https://sioto.com/verify-2/.",
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
    title: "What Is the SIOTO Safety Seal? | Sterling Event Rentals",
    description:
      "The SIOTO Safety Seal is issued by SIOTO (Safe Inflatable Operators Training Organization), which provides nationally recognized safety training and certification for party and event rental operators. Sterling is licensed, insured, and SIOTO Safety Seal certified — verify credentials at https://sioto.com/verify-2/.",
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
      <AnswerPageHero slug="what-is-sioto-safety-seal" title="What is the SIOTO Safety Seal?" lastCrumbLabel={config.breadcrumbLabel} />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          <p className="faq-answer">
            The SIOTO Safety Seal is issued by SIOTO (Safe Inflatable Operators Training Organization), which provides nationally recognized safety training and certification for party and event rental operators. The seal reflects completed, tested training—not a substitute for venue permits or local fire rules. Corporate buyers and venue coordinators can verify active credentials through SIOTO&apos;s public verification flow. Sterling Event Rentals is licensed, insured, and SIOTO Safety Seal certified.{" "}
            <a
              href="https://www.sioto.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--gold-light)] underline decoration-[var(--gold)]/50 underline-offset-2 hover:decoration-[var(--gold)]"
            >
              SIOTO program overview
            </a>
            {" · "}
            <a
              href="https://sioto.com/verify-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--gold-light)] underline decoration-[var(--gold)]/50 underline-offset-2 hover:decoration-[var(--gold)]"
            >
              Verify a member
            </a>
          </p>
        </div>
        <AnswerSpokeLinks slug={slug} />
      </BelowHeroQuickAnswer>
    </>
  );
}
