import { NextResponse } from "next/server";

const siteUrl = "https://sterlingeventrentals.com";

// Indexable pages only (legal pages are noindex and excluded)
const urls = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/services/tents-structures",
  "/services/tables-seating",
  "/services/stages-presentation",
  "/services/games-entertainment",
  "/services/event-extras",
  "/services/delivery-setup-teardown",
  "/collection",
  "/gallery",
  "/packages",
  "/event-rental-pricing-chicago",
  "/service-area",
  "/resources",
  "/resources/tent-sizing-guide",
  "/resources/chicago-tent-permits",
  "/resources/outdoor-event-planning",
  "/resources/corporate-event-checklist",
  "/answers",
  "/answers/how-much-does-tent-rental-cost-chicago",
  "/answers/what-size-tent-for-100-guests",
  "/answers/do-i-need-permit-tent-chicago",
  "/answers/how-far-in-advance-book-event-rentals",
  "/answers/what-is-sioto-safety-seal",
  "/answers/event-rental-delivery-setup-chicago",
  "/answers/outdoor-event-rental-weather-policy",
  "/reviews",
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `<url>
  <loc>${siteUrl}${path}</loc>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

