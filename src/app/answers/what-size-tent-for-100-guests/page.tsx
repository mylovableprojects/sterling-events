import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "what-size-tent-for-100-guests";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

const quickAnswerText =
  "For 100 guests with seated dining, a 20x40 tent is the minimum — it fits roughly 12–14 round tables and chairs with room to circulate. If you're adding a stage, dance floor, or buffet line, size up to a 30x45 or 30x60 so everything fits under one structure. Sterling's Event Ready package (tent up to 20x40, tables, chairs, setup, and delivery) is built for 75–150 guests. Call (773) 692-7576 with your guest count and layout and we'll confirm the right size for your event.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What size tent for 100 guests?",
      acceptedAnswer: {
        "@type": "Answer",
        text: quickAnswerText,
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Answers", item: `${BASE}/answers` },
    { "@type": "ListItem", position: 3, name: "What size tent for 100 guests?", item: canonical },
  ],
};

export const metadata: Metadata = {
  title: "What Size Tent for 100 Guests? | Sterling Event Rentals",
  description: "For 100 guests, plan on a 20x40 tent minimum. Add a stage or dance floor? Size up to 30x60. Sterling Event Rentals sizes your tent to your guest count and layout in Chicago and Chicagoland.",
  alternates: { canonical },
  openGraph: {
    title: "What Size Tent for 100 Guests? | Sterling Event Rentals",
    description: "For 100 guests, plan on a 20x40 tent minimum. Add a stage or dance floor? Size up to 30x60. Sterling Event Rentals sizes your tent to your guest count and layout in Chicago and Chicagoland.",
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
    title: "What Size Tent for 100 Guests? | Sterling Event Rentals",
    description: "For 100 guests, plan on a 20x40 tent minimum. Add a stage or dance floor? Size up to 30x60. Sterling Event Rentals sizes your tent to your guest count and layout in Chicago and Chicagoland.",
  },
};

export default function AnswerPage() {
  const config = ANSWER_SPOKE_CONFIG[slug];
  return (
    <>
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/answers", label: "Answers" },
              { href: `/answers/${slug}`, label: config.breadcrumbLabel },
            ]}
          />
          <p className="section-eyebrow">Quick answer</p>
          <h1 className="hero-headline text-[var(--cream)]">
            What size tent for 100 guests?
          </h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">{quickAnswerText}</p>
          </div>
          <p className="mt-6">
            <Link href="/resources/tent-sizing-guide" className="text-[var(--gold-light)] hover:underline">
              Full tent sizing guide →
            </Link>
          </p>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}
