import type { Metadata } from "next";
import Script from "next/script";
import { SpeakableWebPageScript } from "@/components/SpeakableWebPageScript";
import { AnswerPageHero } from "@/components/AnswerPageHero";
import { BelowHeroQuickAnswer } from "@/components/BelowHeroQuickAnswer";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "what-do-i-need-ready-before-delivery-setup";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title:
    "What Do I Need Ready Before Rental Delivery & Setup? | Sterling Event Rentals",
  description:
    "Clear truck access, a designated on-site contact, and confirmed permit if required. Sterling's crew handles the rest. Prep checklist for Chicago and Chicagoland delivery and setup.",
  alternates: { canonical },
  openGraph: {
    title:
      "What Do I Need Ready Before Rental Delivery & Setup? | Sterling Event Rentals",
    description:
      "Clear truck access, a designated on-site contact, and confirmed permit if required. Sterling's crew handles the rest. Prep checklist for Chicago and Chicagoland delivery and setup.",
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
      "What Do I Need Ready Before Rental Delivery & Setup? | Sterling Event Rentals",
    description:
      "Clear truck access, a designated on-site contact, and confirmed permit if required. Sterling's crew handles the rest. Prep checklist for Chicago and Chicagoland delivery and setup.",
  },
};

const quickAnswerText =
  "Have clear access and a point of contact ready. Before Sterling arrives, make sure the crew can park and unload, gates are unlocked, pets are secured, and the setup area is clear. If you’re at a venue, share loading instructions (dock, service entrance, elevator/stairs, and who to call on arrival). The smoother the access, the smoother the setup — and the faster everything is ready before guests arrive.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What do I need to have ready before rental delivery and setup?",
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
      name: "Before delivery",
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
      <AnswerPageHero slug="what-do-i-need-ready-before-delivery-setup" title="What do I need ready before rental delivery and setup?" lastCrumbLabel={config.breadcrumbLabel} />

      <BelowHeroQuickAnswer>
        <div className="quick-answer max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
          <p className="faq-answer">{quickAnswerText}</p>
        </div>
        <AnswerSpokeLinks slug={slug} />
      </BelowHeroQuickAnswer>
    </>
  );
}
