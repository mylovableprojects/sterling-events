import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "how-far-in-advance-book-event-rentals";
const BASE = "https://sterlingevents.com";
const canonical = `${BASE}/answers/${slug}`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far in advance should I book event rentals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For corporate events, 21–30 days in advance is typical — enough time to confirm availability, get a quote, and lock your date with a deposit. For weddings, book 12–18 months out; popular Chicago-area dates fill fast. Social and private events are more flexible, but summer and fall weekends go quickly. A 50% deposit holds your date; call (773) 692-7576 or request a quote as soon as you have a date and guest count.",
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
    { "@type": "ListItem", position: 3, name: "How far in advance should I book event rentals?", item: canonical },
  ],
};

export const metadata: Metadata = {
  title: "How Far in Advance to Book Event Rentals? | Sterling Event Rentals",
  description: "Book corporate event rentals 21–30 days out. Weddings: 3–6 months. Private parties: 2–3 weeks. Peak summer weekends in Chicago fill fast — the sooner you confirm with a deposit, the better.",
  alternates: { canonical },
  openGraph: {
    title: "How Far in Advance to Book Event Rentals? | Sterling Event Rentals",
    description: "Book corporate event rentals 21–30 days out. Weddings: 3–6 months. Private parties: 2–3 weeks. Peak summer weekends in Chicago fill fast — the sooner you confirm with a deposit, the better.",
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
    description: "Book corporate event rentals 21–30 days out. Weddings: 3–6 months. Private parties: 2–3 weeks. Peak summer weekends in Chicago fill fast — the sooner you confirm with a deposit, the better.",
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
            How far in advance should I book event rentals?
          </h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">For corporate events, 21–30 days in advance is typical — enough time to confirm availability, get a quote, and lock your date with a deposit. For weddings, book 12–18 months out; popular Chicago-area dates fill fast. Social and private events are more flexible, but summer and fall weekends go quickly. The rule: as soon as you have a date and guest count, call (773) 692-7576 or request a quote. A 50% deposit holds your date.</p>
          </div>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}
