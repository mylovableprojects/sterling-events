import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";

const BASE = "https://www.sterlingeventrentals.com";
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
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/reviews", label: "Reviews" }]} />}
        eyebrow="Reviews"
        title="What clients say about Sterling Event Rentals"
        subhead="Corporate planners, wedding couples, and private hosts across Chicago and Chicagoland. The things they mention most: on-time delivery, no surprises on pricing, and equipment that's clean and in place before guests arrive."
      />
    </>
  );
}
