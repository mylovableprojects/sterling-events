import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { ImageBreak } from "@/components/ImageBreak";
import { ScrollReveal } from "@/components/ScrollReveal";

const BASE = "https://www.sterlingeventrentals.com";

const galleryTitle = "Event Gallery | Weddings, Corporate & Social Events | Sterling";
const galleryDescription =
  "See setups from weddings, corporate events, and social celebrations across Chicago and Chicagoland — tents, tables, stages, and entertainment installed by Sterling Event Rentals.";

export const metadata: Metadata = {
  title: galleryTitle,
  description: galleryDescription,
  alternates: { canonical: `${BASE}/gallery` },
  openGraph: {
    title: galleryTitle,
    description: galleryDescription,
    url: `${BASE}/gallery`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sterling Event Rentals — Event Gallery Chicago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: galleryTitle,
    description: galleryDescription,
  },
};

const galleryItems = [
  {
    src: "/images/outdoor-event-planning/outdoor-wedding.webp",
    category: "Weddings",
    alt: "Outdoor wedding reception under a tent with tables and lighting",
  },
  {
    src: "/images/outdoor-event-planning/corporate_events.webp",
    category: "Corporate",
    alt: "Corporate event under a white tent with banquet tables",
  },
  {
    src: "/images/outdoor-event-planning/private-parties-backyard.webp",
    category: "Social",
    alt: "Backyard private party with tent and seating",
  },
  {
    src: "/images/outdoor-event-planning/champagne-wall.webp",
    category: "Styled Shoots",
    alt: "Champagne wall display at an upscale event",
  },
  {
    src: "/images/outdoor-event-planning/tent-stage-rentals-chicago.webp",
    category: "Weddings",
    alt: "Tent and stage rental setup for an outdoor event",
  },
  {
    src: "/images/outdoor-event-planning/round-tables-seating.webp",
    category: "Corporate",
    alt: "Round tables and seating under event lighting",
  },
  {
    src: "/images/outdoor-event-planning/stage_in_chicago.webp",
    category: "Social",
    alt: "Stage rental setup for a Chicago outdoor event",
  },
  {
    src: "/images/outdoor-event-planning/cocktail_tables.webp",
    category: "Styled Shoots",
    alt: "Cocktail tables and high-top seating at an event",
  },
] as const;

const galleryPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Event Gallery — Sterling Event Rentals",
  description: "Photos from weddings, corporate events, and social celebrations across Chicago and Chicagoland set up by Sterling Event Rentals.",
  url: `${BASE}/gallery`,
  provider: { "@type": "LocalBusiness", name: "Sterling Event Rentals", url: BASE },
};

const galleryBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${BASE}/gallery` },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <Script id="ld-gallery-page" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryPageSchema) }} />
      <Script id="ld-bc-gallery" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryBreadcrumbSchema) }} />
      <PageHero
        eyebrow="Gallery"
        title="Moments, textures, and the in-between."
        subhead="A glimpse into celebrations we've had the honor of supporting—from candlelit dinners to brand experiences, styled editorials, and everything in between."
      />

      <section className="bg-[var(--navy)]/55 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal className="mb-6 flex flex-wrap gap-3 text-[0.76rem]">
            {["Weddings", "Corporate", "Social", "Styled Shoots"].map((cat) => (
              <button
                key={cat}
                type="button"
                className="rounded-full border border-white/15 bg-black/30 px-4 py-1.5 tracking-[0.22em] text-[var(--champagne)]/80 uppercase hover:border-[var(--gold)]/70 hover:text-[var(--gold)]"
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryItems.map((item) => (
              <div key={item.src} className="mb-4 break-inside-avoid">
                <ScrollReveal className="relative overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative h-64 md:h-72">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-3 text-[0.7rem]">
                    <span className="section-eyebrow text-[var(--champagne)]/80">{item.category}</span>
                    <span className="text-[var(--champagne)]/65">Sterling Events</span>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageBreak
        src="/images/outdoor-event-planning/wedding_tent_rentals_chicago.webp"
        alt="Evening outdoor wedding tent with warm lighting and guest seating"
        overlayText="“What we remember most are the way the room felt, the light, the laughter between courses.”"
      />

      <section className="bg-[var(--navy-light)]/60 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <ScrollReveal>
            <h3 className="font-[var(--font-display)] text-3xl text-[var(--cream)] md:text-4xl">
              Imagine your evening in this light.
            </h3>
          </ScrollReveal>
          <ScrollReveal className="flex flex-wrap justify-center gap-4 md:justify-end">
            <a href="/collection" className="btn-outline">
              Explore the Collection
            </a>
            <a href="/contact" className="btn-primary">
              Begin an Inquiry
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

