import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "what-is-sioto-safety-seal";
const BASE = "https://sterlingevents.com";
const canonical = `${BASE}/answers/${slug}`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the SIOTO Safety Seal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SIOTO Safety Seal is an independent third-party certification for tent and event rental companies. SIOTO (Safety and Insurance Organization for Tent and Outdoor events) inspects equipment and evaluates operating practices against industry safety standards — it goes beyond basic liability insurance. For corporate buyers and venue coordinators who need to document vendor credentials, it's a verifiable signal. Sterling Event Rentals is licensed, insured, and SIOTO Safety Seal certified.",
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
    { "@type": "ListItem", position: 3, name: "What is the SIOTO Safety Seal?", item: canonical },
  ],
};

export const metadata: Metadata = {
  title: "What Is the SIOTO Safety Seal? | Sterling Event Rentals",
  description: "The SIOTO Safety Seal is an independent third-party certification for tent and event rental safety. Sterling Event Rentals is SIOTO-certified — a credential corporate venues and park districts recognize.",
  alternates: { canonical },
  openGraph: {
    title: "What Is the SIOTO Safety Seal? | Sterling Event Rentals",
    description: "The SIOTO Safety Seal is an independent third-party certification for tent and event rental safety. Sterling Event Rentals is SIOTO-certified — a credential corporate venues and park districts recognize.",
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
    title: "What Is the SIOTO Safety Seal? | Sterling Event Rentals",
    description: "The SIOTO Safety Seal is an independent third-party certification for tent and event rental safety. Sterling Event Rentals is SIOTO-certified — a credential corporate venues and park districts recognize.",
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
            What is the SIOTO Safety Seal?
          </h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">The SIOTO Safety Seal is an independent third-party certification for tent and event rental companies. SIOTO (Safety and Insurance Organization for Tent and Outdoor events) inspects equipment and evaluates operating practices against industry safety standards — it goes beyond basic liability insurance. For corporate buyers and venue coordinators who need to document vendor credentials, it&apos;s a verifiable signal. Sterling Event Rentals is licensed, insured, and SIOTO Safety Seal certified.</p>
          </div>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}
