import type { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { ImageBreak } from "@/components/ImageBreak";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RentalCard, RentalCategory, RentalItem } from "@/components/RentalCard";

const BASE = "https://www.sterlingeventrentals.com";

const collectionTitle = "Rental Collection | Tables, Chairs, Linens & Décor | Sterling";
const collectionDescription =
  "Browse Sterling Event Rentals' collection of tables, chairs, linens, lighting, décor, and tableware for Chicago and Chicagoland events. Full inventory available on request.";

export const metadata: Metadata = {
  title: collectionTitle,
  description: collectionDescription,
  alternates: { canonical: `${BASE}/collection` },
  openGraph: {
    title: collectionTitle,
    description: collectionDescription,
    url: `${BASE}/collection`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sterling Event Rentals — Rental Collection Chicago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: collectionTitle,
    description: collectionDescription,
  },
};

const categories: RentalCategory[] = ["Tables", "Chairs", "Linens", "Lighting", "Décor", "Tableware"];

const sampleItems: RentalItem[] = [
  {
    name: "Sterling Oak Communal Table",
    category: "Tables",
    description: "Hand-finished oak with soft beveled edges, ideal for head tables and intimate feasts.",
    pricePerDay: 320,
    imageUrl: "https://picsum.photos/seed/sterling-table-1/900/700",
    featured: true,
  },
  {
    name: "Vogue Low-Back Dining Chair",
    category: "Chairs",
    description: "Sculptural silhouette with upholstered seat for elevated comfort and clean lines.",
    pricePerDay: 28,
    imageUrl: "https://picsum.photos/seed/sterling-chair-1/900/700",
  },
  {
    name: "Champagne Linen Ensemble",
    category: "Linens",
    description: "Layered linen collection in champagne and cream, designed to drape and pool beautifully.",
    pricePerDay: 85,
    imageUrl: "https://picsum.photos/seed/sterling-linen-1/900/700",
  },
  {
    name: "Luminous Taper Candle Suite",
    category: "Décor",
    description: "Assorted heights of taper holders in brushed brass for cinematic candlelight.",
    pricePerDay: 60,
    imageUrl: "https://picsum.photos/seed/sterling-decor-1/900/700",
  },
  {
    name: "Midnight Glass Charger",
    category: "Tableware",
    description: "Smoky glass chargers that frame each place setting with a subtle, polished edge.",
    pricePerDay: 16,
    imageUrl: "https://picsum.photos/seed/sterling-tableware-1/900/700",
  },
  {
    name: "Napa Glow Lantern Cluster",
    category: "Lighting",
    description: "Mixed-scale lanterns for pathways, terraces, and pool surrounds.",
    pricePerDay: 140,
    imageUrl: "https://picsum.photos/seed/sterling-lighting-1/900/700",
  },
];

const collectionItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sterling Event Rentals — Rental Collection",
  description: "Tables, chairs, linens, lighting, décor, and tableware available for events in Chicago and Chicagoland.",
  url: `${BASE}/collection`,
  itemListElement: sampleItems.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    description: item.description,
  })),
};

const collectionBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Collection", item: `${BASE}/collection` },
  ],
};

export default function CollectionPage() {
  return (
    <>
      <Script id="ld-collection-items" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionItemListSchema) }} />
      <Script id="ld-bc-collection" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionBreadcrumbSchema) }} />
      <PageHero
        eyebrow="The Collection"
        title="Pieces composed for the camera and the room."
        subhead="Browse an edited selection of our most-requested pieces. For full inventory and custom pulls, share your date, guest count, and venue details via our inquiry form."
        primaryCta={{ href: "/contact", label: "Begin an Inquiry" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
      />

      <section className="bg-[var(--navy)]/55 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal className="mb-8 flex flex-wrap gap-3 text-[0.76rem]">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="rounded-full border border-white/15 bg-black/30 px-4 py-1.5 tracking-[0.22em] text-[var(--champagne)]/80 uppercase hover:border-[var(--gold)]/70 hover:text-[var(--gold)]"
              >
                {category}
              </button>
            ))}
          </ScrollReveal>
          <ScrollReveal className="mb-8 flex items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="section-eyebrow">Selections</div>
              <h2 className="font-[var(--font-display)] text-3xl text-[var(--cream)]">An edit of favorites.</h2>
            </div>
            <p className="max-w-md text-[0.8rem] leading-relaxed text-[var(--champagne)]/80">
              These vignettes are a starting point. We’ll refine your pull based on floor plans, florals, and the way
              you want the evening to feel.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleItems.map((item) => (
              <ScrollReveal key={item.name}>
                <RentalCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ImageBreak
        src="https://picsum.photos/seed/sterling-collection-01/1600/900"
        alt="Overhead view of a table setting with layered glassware and candlelight"
        overlayText="“The right rentals disappear into the story—they simply make everything feel inevitable.”"
      />

      <section className="bg-[var(--navy-light)]/60 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <ScrollReveal>
            <h3 className="font-[var(--font-display)] text-3xl text-[var(--cream)] md:text-4xl">
              Share your date and wish list.
            </h3>
          </ScrollReveal>
          <ScrollReveal className="flex flex-wrap justify-center gap-4 md:justify-end">
            <a href="/contact" className="btn-primary">
              Begin an Inquiry
            </a>
            <a href="/services" className="btn-outline">
              Explore Services
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

