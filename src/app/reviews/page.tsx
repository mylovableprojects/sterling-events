import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";

const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/reviews`;

const reviewsTitle = "Chicago Event Rental Reviews | Sterling Event Rentals";
const reviewsDescription =
  "What planners, couples, and hosts say about Sterling—tent & table rentals, delivery, full setup across Chicago, Evanston, Oak Park, Naperville & Chicagoland.";

export const metadata: Metadata = {
  title: reviewsTitle,
  description: reviewsDescription,
  alternates: { canonical },
  openGraph: {
    title: reviewsTitle,
    description: reviewsDescription,
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
    title: reviewsTitle,
    description: reviewsDescription,
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
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/reviews", label: "Reviews" }]} />}
        eyebrow="Reviews"
        title="What clients say about Sterling Event Rentals"
        subhead="Corporate planners, wedding couples, and private hosts across Chicago and Chicagoland. The things they mention most: on-time delivery, no surprises on pricing, and equipment that's clean and in place before guests arrive."
      />
    </>
  );
}
