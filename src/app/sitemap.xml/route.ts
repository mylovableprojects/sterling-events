import { NextResponse } from "next/server";
import { SERVICE_SLUGS } from "@/lib/servicePages";
import { EVENT_TYPE_SLUGS } from "@/lib/eventTypes";
import { SERVICE_AREA_SLUGS } from "@/lib/serviceAreas";
import { ANSWER_SPOKE_CONFIG } from "@/lib/answerPages";

const siteUrl = "https://www.sterlingeventrentals.com";

function buildUrls(): string[] {
  const urls = new Set<string>();

  // Core indexable pages (legal pages are noindex and excluded)
  [
    "/",
    "/about",
    "/contact",
    "/services",
    "/collection",
    "/gallery",
    "/packages",
    "/packages/pricing",
    "/event-rental-pricing-chicago",
    "/events",
    "/service-area",
    "/resources",
    "/resources/tent-sizing-guide",
    "/resources/chicago-tent-permits",
    "/resources/outdoor-event-planning",
    "/resources/corporate-event-checklist",
    "/answers",
    "/reviews",
  ].forEach((p) => urls.add(p));

  // Services
  SERVICE_SLUGS.forEach((slug) => urls.add(`/services/${slug}`));

  // Event types
  EVENT_TYPE_SLUGS.forEach((slug) => urls.add(`/events/${slug}`));

  // Service areas
  SERVICE_AREA_SLUGS.forEach((slug) => urls.add(`/service-area/${slug}`));

  // Answers (all spoke pages)
  Object.keys(ANSWER_SPOKE_CONFIG).forEach((slug) => urls.add(`/answers/${slug}`));

  return Array.from(urls).sort();
}

const LAST_MOD = "2026-04-27";

export function GET() {
  const urls = buildUrls();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `<url>
  <loc>${siteUrl}${path}</loc>
  <lastmod>${LAST_MOD}</lastmod>
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

