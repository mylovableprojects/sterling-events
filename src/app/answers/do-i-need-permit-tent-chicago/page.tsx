import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "do-i-need-permit-tent-chicago";
const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a permit for a tent in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Chicago, tents over a certain size typically require a permit from the Department of Buildings (private property) or the Chicago Park District (park venues). The permit is the customer's responsibility — Sterling Event Rentals does not pull permits on behalf of clients. Apply as early as possible; processing can take several weeks. See the Chicago tent permit guide at www.sterlingeventrentals.com/resources/chicago-tent-permits for the full breakdown of when you need one and how to apply.",
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
    { "@type": "ListItem", position: 3, name: "Do I need a permit for a tent in Chicago?", item: canonical },
  ],
};

export const metadata: Metadata = {
  title: "Do I Need a Permit for a Tent in Chicago? | Sterling Event Rentals",
  description: "Tents over 400 sq ft or 15 ft tall require a Chicago building permit. Permits are the customer's responsibility — Sterling provides vendor documentation (COI, SIOTO cert) for your application.",
  alternates: { canonical },
  openGraph: {
    title: "Do I Need a Permit for a Tent in Chicago? | Sterling Event Rentals",
    description: "Tents over 400 sq ft or 15 ft tall require a Chicago building permit. Permits are the customer's responsibility — Sterling provides vendor documentation (COI, SIOTO cert) for your application.",
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
    title: "Do I Need a Permit for a Tent in Chicago? | Sterling Event Rentals",
    description: "Tents over 400 sq ft or 15 ft tall require a Chicago building permit. Permits are the customer's responsibility — Sterling provides vendor documentation (COI, SIOTO cert) for your application.",
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
            Do I need a permit for a tent in Chicago?
          </h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">In Chicago, tents over a certain size typically require a permit from the Department of Buildings (private property) or the Chicago Park District (park venues). The permit is the customer&apos;s responsibility — Sterling Event Rentals does not pull permits on behalf of clients. Apply as early as possible; processing can take several weeks. See our <a href="/resources/chicago-tent-permits" className="text-[var(--gold-light)] hover:underline">Chicago tent permit guide</a> for the full breakdown of when you need one and how to apply.</p>
          </div>
          <p className="mt-6">
            <Link href="/resources/chicago-tent-permits" className="text-[var(--gold-light)] hover:underline">
              Chicago tent permit guide →
            </Link>
          </p>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}
