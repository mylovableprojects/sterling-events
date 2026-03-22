/**
 * Single source of truth for featured price-list items shown on event & service pages.
 * Copy is audience-specific — same equipment, different intent (SEO / duplicate-content safe).
 */

export type CatalogAudience = "weddings" | "corporate-events" | "games-entertainment";

export type RentalCatalogItem = {
  id: string;
  title: string;
  icon: string;
  /** Paragraph shown only on pages where this key is set */
  copyByAudience: Partial<Record<CatalogAudience, string>>;
};

export const RENTAL_CATALOG: RentalCatalogItem[] = [
  {
    id: "soft-play",
    title: "Soft play",
    icon: "🧸",
    copyByAudience: {
      weddings:
        "Keeps younger guests happily contained during cocktail hour or dinner — styled to sit comfortably beside your tent and reception flow. Photos coming soon.",
    },
  },
  {
    id: "bubble-house",
    title: "Bubble house",
    icon: "🫧",
    copyByAudience: {
      weddings:
        "A whimsical outdoor add-on guests remember — perfect for garden and tented receptions when you want something beyond the dance floor. Photos coming soon.",
    },
  },
  {
    id: "white-bounce-house",
    title: "White bounce house",
    icon: "🤍",
    copyByAudience: {
      weddings:
        "Clean white bounce options that match elevated wedding aesthetics — ideal for family-friendly receptions without primary-colored carnival looks. Photos coming soon.",
    },
  },
  {
    id: "champagne-wall-lights",
    title: "Champagne wall with lights",
    icon: "🥂",
    copyByAudience: {
      weddings:
        "Illuminated champagne walls for cocktail hour, grand entrance, or photo moments — built to photograph beautifully at dusk and under the tent. Photos coming soon.",
    },
  },
  {
    id: "mechanical-bull",
    title: "Mechanical bull",
    icon: "🐂",
    copyByAudience: {
      "corporate-events":
        "High-energy centerpiece for company picnics and outdoor team days — we deliver, set up safety surrounds, and tear down so you can focus on the crowd (and the line at the bull).",
      "games-entertainment":
        "Full-service mechanical bull rental: delivery, professional setup, safety mats, and teardown. Pair with lawn games, photo activations, or foam for a complete entertainment zone — quoted with your tent or as a standalone add-on where space allows.",
    },
  },
];

export type CatalogHighlight = {
  id: string;
  title: string;
  icon: string;
  body: string;
};

export function getHighlightsForAudience(audience: CatalogAudience): CatalogHighlight[] {
  const out: CatalogHighlight[] = [];
  for (const item of RENTAL_CATALOG) {
    const body = item.copyByAudience[audience];
    if (body) {
      out.push({
        id: item.id,
        title: item.title,
        icon: item.icon,
        body,
      });
    }
  }
  return out;
}
