import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { ImageBreak } from "@/components/ImageBreak";
import { ScrollReveal } from "@/components/ScrollReveal";

const BASE = "https://sterlingeventrentals.com";

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
  { seed: "sterling-gallery-1", category: "Weddings" },
  { seed: "sterling-gallery-2", category: "Corporate" },
  { seed: "sterling-gallery-3", category: "Social" },
  { seed: "sterling-gallery-4", category: "Styled Shoots" },
  { seed: "sterling-gallery-5", category: "Weddings" },
  { seed: "sterling-gallery-6", category: "Corporate" },
  { seed: "sterling-gallery-7", category: "Social" },
  { seed: "sterling-gallery-8", category: "Styled Shoots" },
];

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
      <Script id="ld-bc-gallery" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryBreadcrumbSchema) }} />
      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-28 top-8 h-56 w-56" />
        <div className="gradient-orb bottom-[-4rem] right-[-3rem] h-72 w-72 opacity-60" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <div className="space-y-4 md:max-w-2xl">
            <div className="section-eyebrow">Gallery</div>
            <h1 className="hero-headline text-[var(--cream)]">
              Moments, textures, and the in-between.
            </h1>
            <p className="hero-subheadline leading-relaxed text-[var(--champagne)]/80">
              A glimpse into celebrations we’ve had the honor of supporting—from candlelit dinners to brand
              experiences, styled editorials, and everything in between.
            </p>
          </div>
        </div>
      </section>

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
              <div key={item.seed} className="mb-4 break-inside-avoid">
                <ScrollReveal className="relative overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative h-64 md:h-72">
                    <Image
                      src={`https://picsum.photos/seed/${item.seed}/900/1200`}
                      alt={`${item.category} event vignette`}
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
        src="https://picsum.photos/seed/sterling-gallery-hero/1600/900"
        alt="A wide shot of an evening reception with glowing candlelight"
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

