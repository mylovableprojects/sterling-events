import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "can-you-set-up-a-tent-on-concrete";
const BASE = "https://sterlingevents.com";
const canonical = `${BASE}/answers/${slug}`;

export const metadata: Metadata = {
  title: "Can You Set Up a Tent on Concrete or a Driveway? | Sterling Event Rentals",
  description: "Yes. Sterling sets up tents on concrete, asphalt, pavers, and driveways using ballast weights instead of stakes. Common for corporate venues and urban event spaces in Chicago and Chicagoland.",
  alternates: { canonical },
  openGraph: {
    title: "Can You Set Up a Tent on Concrete or a Driveway? | Sterling Event Rentals",
    description: "Yes. Sterling sets up tents on concrete, asphalt, pavers, and driveways using ballast weights instead of stakes. Common for corporate venues and urban event spaces in Chicago and Chicagoland.",
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
    title: "Can You Set Up a Tent on Concrete or a Driveway? | Sterling Event Rentals",
    description: "Yes. Sterling sets up tents on concrete, asphalt, pavers, and driveways using ballast weights instead of stakes. Common for corporate venues and urban event spaces in Chicago and Chicagoland.",
  },
};

const quickAnswerText =
  "Often, yes — but it depends on the surface, the tent size, and the venue rules. Some tent installs need specific anchoring methods, and hard surfaces can change what’s possible. The fastest way to confirm is to share your venue address and the exact setup area (driveway, patio, parking lot, concrete pad) when you request a quote. We’ll confirm feasibility and recommend the right setup for your site.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you set up a tent on concrete, asphalt, or a driveway?",
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
    { "@type": "ListItem", position: 3, name: "Tent on concrete", item: canonical },
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
              { href: `/answers/${slug}`, label: config?.breadcrumbLabel ?? "Tent on concrete" },
            ]}
          />
          <p className="section-eyebrow">Quick answer</p>
          <h1 className="hero-headline text-[var(--cream)]">
            Can you set up a tent on concrete, asphalt, or a driveway?
          </h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">{quickAnswerText}</p>
          </div>
          <p className="mt-6">
            <Link href="/services/tents-structures" className="text-[var(--gold-light)] hover:underline">
              Tent rentals & structures →
            </Link>
          </p>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}

