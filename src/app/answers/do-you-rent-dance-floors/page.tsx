import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "do-you-rent-dance-floors";
const BASE = "https://sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title: "Do You Rent Dance Floors in Chicago? | Sterling Event Rentals",
  description: "Quick answer: dance floor rentals and how to request them for Chicago-area events.",
  alternates: { canonical },
  openGraph: {
    title: "Do You Rent Dance Floors in Chicago? | Sterling Event Rentals",
    description: "Quick answer: dance floor rentals and how to request them for Chicago-area events.",
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
    title: "Do You Rent Dance Floors in Chicago? | Sterling Event Rentals",
    description: "Quick answer: dance floor rentals and how to request them for Chicago-area events.",
  },
};

const quickAnswerText =
  "Dance floors may be available as an add-on depending on your date, venue, and setup requirements. The easiest way to confirm is to request a quote with your guest count and venue — we’ll confirm availability and recommend a dance floor size that fits your tent and layout (along with any staging, tables, and lighting considerations).";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you rent dance floors in Chicago?",
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
    { "@type": "ListItem", position: 3, name: "Dance floors", item: canonical },
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
              { href: `/answers/${slug}`, label: config?.breadcrumbLabel ?? "Dance floors" },
            ]}
          />
          <p className="section-eyebrow">Quick answer</p>
          <h1 className="hero-headline text-[var(--cream)]">Do you rent dance floors in Chicago?</h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">{quickAnswerText}</p>
          </div>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}

