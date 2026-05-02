"use client";

import { PageHero } from "@/components/PageHero";

const HERO_BG = "/images/outdoor-event-planning/wedding_tent_rentals_chicago.webp";

export function Hero() {
  return (
    <PageHero
      eyebrow="Event Rentals · Chicago & Chicagoland"
      title="Your event reflects on you. Make sure the rental company does too."
      subhead="Tents, tables, stages, and specialty installations for 25 to 300+ guests. We handle delivery, setup, and teardown. You show up and host."
      backgroundImage={{
        src: HERO_BG,
        alt: "Illuminated event tent at an outdoor evening wedding reception",
      }}
    />
  );
}
