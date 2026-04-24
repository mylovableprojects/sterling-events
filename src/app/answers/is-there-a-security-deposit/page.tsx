import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "is-there-a-security-deposit";
const BASE = "https://sterlingevents.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title: "Is There a Security Deposit for Event Rentals? | Sterling Event Rentals",
  description: "Sterling Event Rentals does not charge a separate security deposit. A 50% deposit holds your date. You are responsible for equipment damage beyond normal wear. Full terms stated in your contract.",
  alternates: { canonical },
  openGraph: {
    title: "Is There a Security Deposit for Event Rentals? | Sterling Event Rentals",
    description: "Sterling Event Rentals does not charge a separate security deposit. A 50% deposit holds your date. You are responsible for equipment damage beyond normal wear. Full terms stated in your contract.",
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
    title: "Is There a Security Deposit for Event Rentals? | Sterling Event Rentals",
    description: "Sterling Event Rentals does not charge a separate security deposit. A 50% deposit holds your date. You are responsible for equipment damage beyond normal wear. Full terms stated in your contract.",
  },
};

const quickAnswerText =
  "Sterling uses a 50% deposit to hold your date (with the balance due at or before delivery). Whether an additional security deposit applies can depend on the order and the venue requirements. The goal is clarity: if anything applies beyond the standard deposit, it should be stated upfront in your quote so you’re not surprised later. Request a quote and we’ll confirm the exact deposit(s) and how any damage responsibility is handled for your event.";

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
    { "@type": "ListItem", position: 2, name: "Answers", item: `${BASE}/answers` },
    { "@type": "ListItem", position: 3, name: "Security deposit", item: canonical },
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
              { href: `/answers/${slug}`, label: config?.breadcrumbLabel ?? "Security deposit" },
            ]}
          />
          <p className="section-eyebrow">Quick answer</p>
          <h1 className="hero-headline text-[var(--cream)]">Is there a security deposit?</h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">{quickAnswerText}</p>
          </div>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}

