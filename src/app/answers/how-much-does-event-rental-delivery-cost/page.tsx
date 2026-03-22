import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "how-much-does-event-rental-delivery-cost";
const BASE = "https://sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title: "How Much Does Event Rental Delivery Cost in Chicago? | Sterling Event Rentals",
  description: "Delivery and setup are quoted as separate named line items on every Sterling estimate — not bundled. Cost varies by location, tent size, and access. Chicago and inner suburbs have standard rates.",
  alternates: { canonical },
  openGraph: {
    title: "How Much Does Event Rental Delivery Cost in Chicago? | Sterling Event Rentals",
    description: "Delivery and setup are quoted as separate named line items on every Sterling estimate — not bundled. Cost varies by location, tent size, and access. Chicago and inner suburbs have standard rates.",
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
    title: "How Much Does Event Rental Delivery Cost in Chicago? | Sterling Event Rentals",
    description: "Delivery and setup are quoted as separate named line items on every Sterling estimate — not bundled. Cost varies by location, tent size, and access. Chicago and inner suburbs have standard rates.",
  },
};

const quickAnswerText =
  "Delivery cost depends on your location, site access, and what you’re renting. Sterling quotes delivery, setup, and any access-related costs upfront so you see the full number before you commit. If your venue has stairs, long carries, tight loading access, or restricted parking, that can affect the delivery portion of the quote. Share your venue address (or zip code) and event date and we’ll confirm availability and provide an exact total.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does event rental delivery cost in Chicago?",
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
    { "@type": "ListItem", position: 3, name: "Delivery cost", item: canonical },
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
              { href: `/answers/${slug}`, label: config?.breadcrumbLabel ?? "Delivery cost" },
            ]}
          />
          <p className="section-eyebrow">Quick answer</p>
          <h1 className="hero-headline text-[var(--cream)]">How much does event rental delivery cost in Chicago?</h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">{quickAnswerText}</p>
          </div>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}

