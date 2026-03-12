import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "outdoor-event-rental-weather-policy";
const BASE = "https://sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Outdoor event rental weather policy",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sterling will not set up in forecasted unsafe weather conditions. If conditions become unsafe after setup is complete, no refund is issued. Tent sidewalls are available as an add-on for added weather protection during the event. Details are confirmed at booking.",
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
    { "@type": "ListItem", position: 3, name: "Outdoor event rental weather policy", item: canonical },
  ],
};

export const metadata: Metadata = {
  title: "Outdoor Event Rental Weather Policy | Sterling Event Rentals",
  description: "Quick answer: how weather affects outdoor event rentals and our policy in Chicago.",
  alternates: { canonical },
  openGraph: {
    title: "Outdoor Event Rental Weather Policy | Sterling Event Rentals",
    description: "Quick answer: how weather affects outdoor event rentals and our policy in Chicago.",
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
    title: "Outdoor Event Rental Weather Policy | Sterling Event Rentals",
    description: "Quick answer: how weather affects outdoor event rentals and our policy in Chicago.",
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
            Outdoor event rental weather policy
          </h1>
          <div className="mt-6 max-w-2xl rounded-xl bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">
              Quick answer
            </h2>
            <p className="text-lg leading-relaxed text-[var(--champagne)]">
              Sterling Event Rentals will <strong>not</strong> deliver or set up equipment when unsafe weather is
              forecast. If conditions become unsafe <strong>after</strong> delivery and setup is complete, no refund is
              issued. If you&apos;re planning an outdoor event in Chicago, ask about{" "}
              <strong>tent sidewalls</strong>—they&apos;re a practical add-on for wind and rain protection during the event.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--champagne)]/85">
              Weather anxiety is normal here—April through October can swing from sun to wind to sudden storms. The best
              way to reduce stress is to confirm your venue, tent sizing, and add-ons early so you&apos;re not scrambling
              the week of your date.
            </p>
          </div>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}
