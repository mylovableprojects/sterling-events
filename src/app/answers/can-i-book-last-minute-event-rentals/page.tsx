import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "can-i-book-last-minute-event-rentals";
const BASE = "https://sterlingevents.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title: "Can I Book Last-Minute Event Rentals in Chicago? | Sterling Event Rentals",
  description: "Yes — Sterling Event Rentals can often accommodate last-minute bookings in Chicago and Chicagoland. Call (773) 692-7576 to check availability. Deposit required to confirm your date and equipment.",
  alternates: { canonical },
  openGraph: {
    title: "Can I Book Last-Minute Event Rentals in Chicago? | Sterling Event Rentals",
    description: "Yes — Sterling Event Rentals can often accommodate last-minute bookings in Chicago and Chicagoland. Call (773) 692-7576 to check availability. Deposit required to confirm your date and equipment.",
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
    title: "Can I Book Last-Minute Event Rentals in Chicago? | Sterling Event Rentals",
    description: "Yes — Sterling Event Rentals can often accommodate last-minute bookings in Chicago and Chicagoland. Call (773) 692-7576 to check availability. Deposit required to confirm your date and equipment.",
  },
};

const quickAnswerText =
  "Sometimes — it depends on the date, the equipment you need, and how close you are to setup. Peak season (May–September) books out fastest, and larger tents and packages are harder to schedule last minute. The best move is to call (773) 692-7576 or request a quote with your date, venue, and guest count — we’ll confirm availability quickly and recommend the right setup.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I book last-minute event rentals in Chicago?",
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
    { "@type": "ListItem", position: 3, name: "Last-minute rentals", item: canonical },
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
              { href: `/answers/${slug}`, label: config?.breadcrumbLabel ?? "Last-minute rentals" },
            ]}
          />
          <p className="section-eyebrow">Quick answer</p>
          <h1 className="hero-headline text-[var(--cream)]">Can I book last-minute event rentals in Chicago?</h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">{quickAnswerText}</p>
          </div>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}

