import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const BASE = "https://sterlingevents.com";
const canonical = `${BASE}/reviews`;

export const metadata: Metadata = {
  title: "Client Reviews | Sterling Event Rentals Chicago & Chicagoland",
  description: "What corporate planners, wedding couples, and private hosts say about Sterling Event Rentals — tent rentals, delivery, setup, and teardown across Chicago, Evanston, Oak Park, Naperville, and Chicagoland.",
  alternates: { canonical },
  openGraph: {
    title: "Client Reviews | Sterling Event Rentals Chicago & Chicagoland",
    description: "What corporate planners, wedding couples, and private hosts say about Sterling Event Rentals — tent rentals, delivery, setup, and teardown across Chicago, Evanston, Oak Park, Naperville, and Chicagoland.",
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
    title: "Client Reviews | Sterling Event Rentals Chicago & Chicagoland",
    description: "What corporate planners, wedding couples, and private hosts say about Sterling Event Rentals — tent rentals, delivery, setup, and teardown across Chicago, Evanston, Oak Park, Naperville, and Chicagoland.",
  },
};

const reviewsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Reviews", item: canonical },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <Script id="ld-bc-reviews" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsBreadcrumbSchema) }} />
      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/reviews", label: "Reviews" }]} />
          <p className="section-eyebrow">Reviews</p>
          <h1 className="hero-headline text-[var(--cream)]">
            What clients say about Sterling Event Rentals
          </h1>
          <p className="mt-4 max-w-xl hero-subheadline text-[var(--champagne)]/80">
            Corporate planners, wedding couples, and private hosts across Chicago and Chicagoland. The things they mention most: on-time delivery, no surprises on pricing, and equipment that&apos;s clean and in place before guests arrive.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="tel:+17736927576"
              className="text-[var(--gold-light)] font-medium hover:underline"
            >
              (773) 692-7576
            </a>
            <Link href="/contact" className="text-[var(--gold-light)] font-medium hover:underline">
              Check availability for your date →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
