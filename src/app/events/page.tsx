import type { Metadata } from "next";
import Script from "next/script";
import { EventsHubContent } from "./EventsHubContent";

const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/events`;

const eventsTitle = "Chicago Event Rentals by Type | Sterling Event Rentals";
const eventsDescription =
  "Tents, tables, stages, entertainment by event type—corporate, wedding, private parties across Chicago & Chicagoland. Delivery, setup, teardown included.";

export const metadata: Metadata = {
  title: eventsTitle,
  description: eventsDescription,
  alternates: { canonical },
  openGraph: {
    title: eventsTitle,
    description: eventsDescription,
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
    title: eventsTitle,
    description: eventsDescription,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Events", item: canonical },
  ],
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Event Rentals by Event Type — Sterling Event Rentals",
  description: eventsDescription,
  url: canonical,
  publisher: {
    "@type": "LocalBusiness",
    name: "Sterling Event Rentals",
    url: BASE,
  },
};

export default function EventsHubPage() {
  return (
    <>
      <Script
        id="ld-bc-events"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="ld-collection-events"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <EventsHubContent />
    </>
  );
}
