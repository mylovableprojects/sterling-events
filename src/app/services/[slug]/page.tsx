import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageContent } from "@/components/ServicePageContent";
import {
  SERVICE_SLUGS,
  SERVICE_PAGE_DATA,
  type ServiceSlug,
} from "@/lib/servicePages";

const BASE = "https://sterlingeventrentals.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICE_PAGE_DATA[slug as ServiceSlug];
  if (!data) return {};
  const canonical = `${BASE}/services/${slug}`;
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical },
    openGraph: {
      title: data.title,
      description: data.description,
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
      title: data.title,
      description: data.description,
    },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const data = SERVICE_PAGE_DATA[slug as ServiceSlug];
  if (!data) notFound();

  const canonical = `/services/${slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.serviceName,
    serviceType: data.serviceType,
    provider: { "@type": "LocalBusiness", name: "Sterling Event Rentals" },
    areaServed: { "@type": "State", name: "Greater Chicagoland" },
    description: data.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "TBD",
      eligibleRegion: { "@type": "City", name: "Chicago" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServicePageContent data={data} slug={slug} />
    </>
  );
}
