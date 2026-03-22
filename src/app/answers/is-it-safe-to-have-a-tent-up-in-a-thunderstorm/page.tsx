import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "is-it-safe-to-have-a-tent-up-in-a-thunderstorm";
const BASE = "https://sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title: "Is It Safe to Have a Tent Up During a Thunderstorm? | Sterling Event Rentals",
  description: "Quick answer: tent safety and severe weather for Chicago-area outdoor events.",
  alternates: { canonical },
  openGraph: {
    title: "Is It Safe to Have a Tent Up During a Thunderstorm? | Sterling Event Rentals",
    description: "Quick answer: tent safety and severe weather for Chicago-area outdoor events.",
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
    title: "Is It Safe to Have a Tent Up During a Thunderstorm? | Sterling Event Rentals",
    description: "Quick answer: tent safety and severe weather for Chicago-area outdoor events.",
  },
};

const quickAnswerText =
  "Severe weather safety depends on conditions and timing. Sterling Event Rentals will not set up in forecasted unsafe weather — that policy exists to keep guests and crew safe. If weather changes after setup is complete, follow venue guidance and prioritize safety immediately. If you’re planning an outdoor event in Chicago, the best way to reduce risk is to confirm your weather plan early, consider sidewalls for wind/rain protection during the event, and understand the policy before the day-of.";

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
    { "@type": "ListItem", position: 2, name: "Answers", item: `${BASE}/answers` },
    { "@type": "ListItem", position: 3, name: "Thunderstorm safety", item: canonical },
  ],
};

export default function AnswerPage() {
  const config = ANSWER_SPOKE_CONFIG[slug];
  return (
    <>
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/answers", label: "Answers" },
              { href: `/answers/${slug}`, label: config?.breadcrumbLabel ?? "Thunderstorm safety" },
            ]}
          />
          <p className="section-eyebrow">Quick answer</p>
          <h1 className="hero-headline text-[var(--cream)]">
            Is it safe to have a tent up during a thunderstorm?
          </h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">{quickAnswerText}</p>
          </div>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}

