# SEO Audit — Post-Fix

## Audit Table (Indexable Pages)

| URL | Indexable | Canonical URL | Title | Meta description | H1 | OG/Twitter | Schema types | Breadcrumbs | Duplicate issues |
|-----|-----------|---------------|-------|------------------|-----|------------|--------------|-------------|------------------|
| / | Yes | https://sterlingeventrentals.com | Sterling Event Rentals \| Event Rentals in Chicago & Chicagoland | Sterling Event Rentals provides tent, table, stage... | Where every detail tells a story. | Yes | LocalBusiness, WebSite | No | — |
| /about | Yes | https://sterlingeventrentals.com/about | About Sterling Event Rentals \| Chicago Event Rentals | Licensed, insured, SIOTO... since 2021. | A rental house built on feeling. | Yes | AboutPage | No | — |
| /contact | Yes | https://sterlingeventrentals.com/contact | Contact Sterling Event Rentals \| Get a Quote | Get a quote for tent, table, stage... | Let's begin with a few details. | Yes | ContactPage | No | — |
| /services | Yes | https://sterlingeventrentals.com/services | Event Rental Services \| Tents, Tables, Stages \| ... | Tent and structure rentals, tables and seating... | Support that feels as considered as the design. | Yes | Service (hub) | No | — |
| /services/tents-structures | Yes | https://sterlingeventrentals.com/services/tents-structures | Tent & Structure Rentals in Chicago | (from servicePages – placeholder text) | Tent & structure rentals for Chicago events. | Yes | Service | Yes | Placeholder description in servicePages.ts |
| /services/tables-seating | Yes | Full canonical | Table & Chair Rentals in Chicago | Placeholder... | Table and chair rentals for Chicago events. | Yes | Service | Yes | Same |
| /services/stages-presentation | Yes | Full canonical | Stage & Presentation Rentals in Chicago | Placeholder... | Stage and presentation rentals... | Yes | Service | Yes | Same |
| /services/interactive-installations | Yes | Full canonical | Interactive & Specialty Installations in Chicago | Placeholder... | Interactive and specialty rentals... | Yes | Service | Yes | Same |
| /services/delivery-setup-teardown | Yes | Full canonical | Delivery, Setup & Teardown in Chicago | Placeholder... | Delivery, setup, and teardown... | Yes | Service | Yes | Same |
| /collection | Yes | https://sterlingeventrentals.com/collection | Rental Collection \| Tables, Chairs, Linens... | Browse Sterling Event Rentals' collection... | Pieces composed for the camera and the room. | Yes | None | No | — |
| /gallery | Yes | https://sterlingeventrentals.com/gallery | Event Gallery \| Weddings, Corporate, Social \| ... | See moments from weddings, corporate... | Moments, textures, and the in-between. | Yes | None | No | — |
| /packages | Yes | https://sterlingeventrentals.com/packages | Event Rental Packages in Chicago | Three event rental packages... | Event rental packages for Chicago and Chicagoland. | Yes | ItemList | Yes | — |
| /event-rental-pricing-chicago | Yes | Full canonical | Event Rental Pricing in Chicago | How event rental pricing works... | Event rental pricing in Chicago and Chicagoland. | Yes | FAQPage, BreadcrumbList | Yes | — |
| /service-area | Yes | https://sterlingeventrentals.com/service-area | Service Area for Event Rentals in Chicago | Sterling Event Rentals delivers to Chicago... | Where Sterling Event Rentals delivers... | Yes | LocalBusiness, BreadcrumbList | Yes | — |
| /resources | Yes | https://sterlingeventrentals.com/resources | Event Planning Resources for Chicago | Guides on tent sizing, Chicago tent permits... | Event planning resources for Chicago and Chicagoland. | Yes | BreadcrumbList | Yes | — |
| /resources/tent-sizing-guide | Yes | Full canonical | Tent Sizing Guide for Chicago Events \| ... | How to choose the right tent size... | (in content) | Yes | Article, BreadcrumbList | Yes | — |
| /resources/chicago-tent-permits | Yes | Full canonical | Chicago Tent Permit Basics \| ... | When tent permits may be needed... | Chicago tent permit basics | Yes | BreadcrumbList | Yes | — |
| /resources/outdoor-event-planning | Yes | Full canonical | Outdoor Event Planning in Chicago \| ... | Planning outdoor events... | Outdoor event planning in Chicago | Yes | BreadcrumbList | Yes | — |
| /resources/corporate-event-checklist | Yes | Full canonical | Corporate Event Checklist \| ... | Checklist to help corporate planners... | Corporate event checklist | Yes | BreadcrumbList | Yes | — |
| /answers | Yes | https://sterlingeventrentals.com/answers | Quick Answers \| Sterling Event Rentals | Quick answers to common questions... | Quick answers | Yes | BreadcrumbList | Yes | — |
| /answers/how-much-does-tent-rental-cost-chicago | Yes | Full canonical | How Much Does Tent Rental Cost... | Quick answer: typical tent rental pricing... | (from content) | Yes | FAQPage, BreadcrumbList, WebPage (speakable) | Yes | — |
| /answers/what-size-tent-for-100-guests | Yes | Full canonical | What Size Tent for 100 Guests? \| ... | Quick answer: tent size recommendations... | What size tent for 100 guests? | Yes | FAQPage, BreadcrumbList | Yes | — |
| /answers/do-i-need-permit-tent-chicago | Yes | Full canonical | Do I Need a Permit for a Tent... | Quick answer: when tent permits... | Do I need a permit for a tent in Chicago? | Yes | FAQPage, BreadcrumbList | Yes | — |
| /answers/how-far-in-advance-book-event-rentals | Yes | Full canonical | How Far in Advance to Book... | Quick answer: when to book... | How far in advance should I book event rentals? | Yes | FAQPage, BreadcrumbList | Yes | — |
| /answers/what-is-sioto-safety-seal | Yes | Full canonical | What Is the SIOTO Safety Seal? \| ... | Quick answer: what the SIOTO... | What is the SIOTO Safety Seal? | Yes | FAQPage, BreadcrumbList | Yes | — |
| /answers/event-rental-delivery-setup-chicago | Yes | Full canonical | Event Rental Delivery & Setup... | Quick answer: how delivery and setup... | How does event rental delivery and setup work... | Yes | FAQPage, BreadcrumbList | Yes | — |
| /answers/outdoor-event-rental-weather-policy | Yes | Full canonical | Outdoor Event Rental Weather Policy \| ... | Quick answer: how weather affects... | Outdoor event rental weather policy | Yes | FAQPage, BreadcrumbList | Yes | — |
| /reviews | Yes | https://sterlingeventrentals.com/reviews | Client Reviews \| Sterling Event Rentals | What Chicago-area clients say... | What our clients say | Yes | None | Yes | No schema (optional) |
| /legal/privacy-policy | No | Full URL | Privacy Policy — Sterling Event Rentals | (none) | (in content) | No | WebPage | No | noindex |
| /legal/terms-of-service | No | Full URL | Terms of Service — ... | (none) | (in content) | No | WebPage | No | noindex |
| /legal/cancellation-policy | No | Full URL | Cancellation Policy — ... | (none) | (in content) | No | WebPage | No | noindex |

**Sitemap:** Contains only indexable canonical URLs (legal pages removed). Collection and gallery added.  
**robots.txt:** Unchanged; correct (Allow: /, Disallow: /legal/, Sitemap).

---

## Fixes Implemented

- **Unique titles/descriptions:** Set or refined on all indexable pages; layout default description no longer placeholder.
- **Canonicals:** All indexable pages use full absolute canonicals (https://sterlingeventrentals.com/...).
- **OG/Twitter:** Every indexable page has openGraph and twitter metadata with title, description, url, and images where applicable.
- **Schema:** FAQPage + BreadcrumbList on all answer spokes; BreadcrumbList on resource spokes that lacked it; service pages already had Service schema.
- **Sitemap:** Only indexable pages; legal URLs removed; /collection and /gallery added.
- **robots.txt:** Already correct; no change.
- **Hero:** "Bay Area" replaced with "Chicago & Chicagoland" on homepage.

---

## Remaining Warnings

1. **Layout canonical:** Root layout still has `<link rel="canonical" href={siteUrl} />`. For non-home pages, Next.js should override with the page’s `alternates.canonical`; if not, consider removing the layout canonical and relying on per-page metadata only.

2. **Service pages (servicePages.ts):** All five service spokes still use placeholder `title`/`description` and body copy in `SERVICE_PAGE_DATA`. Replace with final, non-placeholder content for production.

3. **Placeholder body copy:** Several pages still contain "Placeholder" in hero or body text (e.g. resources hub, service-area, event-rental-pricing, packages, collection/gallery, and resource/answer body copy). Replace before launch.

4. **Reviews page schema:** /reviews has no structured data. Optional: add AggregateRating or ItemList if you have review data to expose.

5. **Collection / Gallery schema:** No WebPage or CollectionPage schema. Optional for richer SERP features.

6. **OG image:** All pages reference `/og-image.jpg`. Ensure this asset exists and is at least 1200×630 for best social sharing.

7. **Contact page copy:** Contact page still shows placeholder email/phone (e.g. hello@sterlingevents.com, (415) 555-0192). Align with real contact details.
