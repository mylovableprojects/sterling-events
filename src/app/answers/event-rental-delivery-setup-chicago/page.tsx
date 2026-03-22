import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerSpokeLinks } from "@/components/AnswerSpokeLinks";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const slug = "event-rental-delivery-setup-chicago";
const BASE = "https://sterlingeventrentals.com";
const canonical = `${BASE}/answers/${slug}`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does event rental delivery and setup work in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sterling delivers, installs, and tears down every order — full-service, not drop-off. Our crew arrives before your event window, builds out the tent, tables, chairs, and add-ons, and returns after for teardown. The setup fee is separate from equipment cost and quoted upfront. We need clear truck access and a point of contact on arrival. Standard rental windows are 1–6 hours; extended windows available. Share your venue address and date when you request a quote and we'll confirm access, timing, and the full delivery total.",
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
    { "@type": "ListItem", position: 3, name: "Event rental delivery and setup in Chicago", item: canonical },
  ],
};

export const metadata: Metadata = {
  title: "Event Rental Delivery & Setup in Chicago | Sterling Event Rentals",
  description: "Sterling Event Rentals delivers, sets up, and tears down every order in Chicago and Chicagoland. Your crew arrives before your event and disappears after — you never lift a chair. Setup quoted upfront.",
  alternates: { canonical },
  openGraph: {
    title: "Event Rental Delivery & Setup in Chicago | Sterling Event Rentals",
    description: "Sterling Event Rentals delivers, sets up, and tears down every order in Chicago and Chicagoland. Your crew arrives before your event and disappears after — you never lift a chair. Setup quoted upfront.",
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
    title: "Event Rental Delivery & Setup in Chicago | Sterling Event Rentals",
    description: "Sterling Event Rentals delivers, sets up, and tears down every order in Chicago and Chicagoland. Your crew arrives before your event and disappears after — you never lift a chair. Setup quoted upfront.",
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
            How does event rental delivery and setup work in Chicago?
          </h1>
          <div className="quick-answer mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--gold)]/50 bg-black/35 p-4 hero-subheadline text-[var(--champagne)]/85">
            <p className="faq-answer">Sterling delivers, installs, and tears down every order — this is full-service, not drop-off. Our crew arrives before your event window, builds out the tent, tables, chairs, and any add-ons, and returns after for full teardown. The setup fee is separate from the equipment cost and quoted upfront. We need clear truck access to your venue and a point of contact on arrival. Standard rental windows are 1–6 hours; extended windows are available. Share your venue address and event date when you request a quote and we&apos;ll confirm access, timing, and the full delivery total.</p>
          </div>
          <AnswerSpokeLinks slug={slug} />
        </div>
      </section>
    </>
  );
}
