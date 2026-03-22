import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import {
  EVENT_TYPE_SLUGS,
  EVENT_TYPE_DATA,
  type EventTypeSlug,
} from "@/lib/eventTypes";
import { EventTypeContent } from "./EventTypeContent";

const BASE = "https://sterlingeventrentals.com";

type Props = { params: Promise<{ eventType: string }> };

export function generateStaticParams() {
  return EVENT_TYPE_SLUGS.map((eventType) => ({ eventType }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { eventType } = await params;
  const data = EVENT_TYPE_DATA[eventType as EventTypeSlug];
  if (!data) return {};
  const canonical = `${BASE}/events/${eventType}`;
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical },
    openGraph: {
      title: data.title,
      description: data.description,
      url: canonical,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: data.title }],
    },
    twitter: { card: "summary_large_image", title: data.title, description: data.description },
  };
}

export default async function EventTypePage({ params }: Props) {
  const { eventType } = await params;
  const data = EVENT_TYPE_DATA[eventType as EventTypeSlug];
  if (!data) notFound();

  const canonical = `${BASE}/events/${eventType}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    serviceType: "Event Rental",
    description: data.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Sterling Event Rentals",
      telephone: "+17736927576",
      url: BASE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "IL",
        addressCountry: "US",
      },
    },
    areaServed: { "@type": "State", name: "Illinois" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: data.pricingNote,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Events", item: `${BASE}/events` },
      { "@type": "ListItem", position: 3, name: data.name, item: canonical },
    ],
  };

  return (
    <>
      <Script
        id="ld-service-event"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="ld-bc-event"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EventTypeContent data={data} slug={eventType} />
    </>
  );
}
