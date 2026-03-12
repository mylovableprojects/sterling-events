# SEO Audit — Pre-Fix (Indexable Pages Only)

| URL | Indexable | Canonical URL | Title | Meta description | H1 | OG/Twitter | Schema types | Breadcrumbs | Duplicate issues |
|-----|-----------|---------------|-------|-------------------|-----|------------|--------------|-------------|-------------------|
| / | Yes | (layout: siteUrl only) | Sterling Event Rentals \| Event Rentals in Chicagoland | Placeholder: overview... | Where every detail tells a story. | Yes (layout) | LocalBusiness, WebSite | No | Default description placeholder; Hero says "Bay Area" |
| /about | Yes | Missing | (layout default) | (layout default) | A rental house built on feeling. | Yes (layout) | AboutPage | No | No page metadata |
| /contact | Yes | Missing | (layout default) | (layout default) | Let's begin with a few details. | Yes (layout) | ContactPage | No | No page metadata |
| /services | Yes | Missing | (layout default) | (layout default) | Support that feels as considered as the design. | Yes (layout) | Service (hub) | No | No page metadata |
| /services/tents-structures | Yes | /services/tents-structures (relative) | Tent & Structure Rentals in Chicago | Placeholder: overview... | Tent & structure rentals for Chicago events. | No | Service | Yes | Relative canonical; placeholder description |
| /services/tables-seating | Yes | /services/tables-seating (relative) | Table & Chair Rentals in Chicago | Placeholder... | Table and chair rentals for Chicago events. | No | Service | Yes | Relative canonical; placeholder description |
| /services/stages-presentation | Yes | Relative | Stage & Presentation Rentals in Chicago | Placeholder... | Stage and presentation rentals for Chicago events. | No | Service | Yes | Same |
| /services/interactive-installations | Yes | Relative | Interactive & Specialty Installations in Chicago | Placeholder... | Interactive and specialty rentals for Chicago events. | No | Service | Yes | Same |
| /services/delivery-setup-teardown | Yes | Relative | Delivery, Setup & Teardown in Chicago | Placeholder... | Delivery, setup, and teardown for Chicago events. | No | Service | Yes | Same |
| /collection | Yes | Missing | (layout default) | (layout default) | Pieces composed for the camera and the room. | Yes (layout) | None | No | No page metadata or schema |
| /gallery | Yes | Missing | (layout default) | (layout default) | Moments, textures, and the in-between. | Yes (layout) | None | No | No page metadata or schema |
| /packages | Yes | /packages (relative) | Event Rental Packages in Chicago | Placeholder: overview... | Placeholder: event rental packages for Chicago. | No | ItemList | Yes | Relative canonical; placeholder copy in H1/description |
| /event-rental-pricing-chicago | Yes | /event-rental-pricing-chicago (relative) | Event Rental Pricing in Chicago | Placeholder... | Placeholder: event rental pricing in Chicago. | No | FAQPage, BreadcrumbList | Yes | Same |
| /service-area | Yes | /service-area (relative) | Service Area for Event Rentals in Chicago | Placeholder... | Placeholder: where Sterling Event Rentals delivers... | No | LocalBusiness, BreadcrumbList | Yes | Same |
| /resources | Yes | /resources (relative) | Event Planning Resources for Chicago | Placeholder... | Placeholder: event planning resources for Chicago. | No | BreadcrumbList | Yes | Same |
| /resources/tent-sizing-guide | Yes | /resources/tent-sizing-guide (relative) | Tent Sizing Guide for Chicago Events \| Sterling Event Rentals | How to choose the right tent size... | (in content) | No | Article, BreadcrumbList | Yes | Canonical relative |
| /resources/chicago-tent-permits | Yes | /resources/chicago-tent-permits (relative) | Chicago Tent Permit Basics \| Sterling Event Rentals | When tent permits may be needed... | Chicago tent permit basics | No | None | Yes | No schema; canonical relative |
| /resources/outdoor-event-planning | Yes | Relative | Outdoor Event Planning in Chicago \| Sterling Event Rentals | Planning outdoor events... | Outdoor event planning in Chicago | No | None | Yes | No schema |
| /resources/corporate-event-checklist | Yes | Relative | Corporate Event Checklist \| Sterling Event Rentals | Checklist to help corporate planners... | Corporate event checklist | No | None | Yes | No schema |
| /answers | Yes | /answers (relative) | Quick Answers \| Sterling Event Rentals | Quick answers to common questions... | Quick answers | No | None | Yes | No schema; canonical relative |
| /answers/how-much-does-tent-rental-cost-chicago | Yes | /answers/... (relative) | How Much Does Tent Rental Cost in Chicago? \| ... | Quick answer: typical tent rental pricing... | (from config) | No | FAQPage, BreadcrumbList, WebPage (speakable) | Yes | Canonical relative |
| /answers/what-size-tent-for-100-guests | Yes | Relative | What Size Tent for 100 Guests? \| ... | Quick answer: tent size recommendations... | What size tent for 100 guests? | No | None | Yes | No FAQ/schema |
| /answers/do-i-need-permit-tent-chicago | Yes | Relative | Do I Need a Permit for a Tent in Chicago? \| ... | Quick answer: when tent permits... | Do I need a permit for a tent in Chicago? | No | None | Yes | No schema |
| /answers/how-far-in-advance-book-event-rentals | Yes | Relative | How Far in Advance to Book Event Rentals? \| ... | Quick answer: when to book... | How far in advance should I book event rentals? | No | None | Yes | No schema |
| /answers/what-is-sioto-safety-seal | Yes | Relative | What Is the SIOTO Safety Seal? \| ... | Quick answer: what the SIOTO... | What is the SIOTO Safety Seal? | No | None | Yes | No schema |
| /answers/event-rental-delivery-setup-chicago | Yes | Relative | Event Rental Delivery & Setup in Chicago \| ... | Quick answer: how delivery and setup... | How does event rental delivery and setup work in Chicago? | No | None | Yes | No schema |
| /answers/outdoor-event-rental-weather-policy | Yes | Relative | Outdoor Event Rental Weather Policy \| ... | Quick answer: how weather affects... | Outdoor event rental weather policy | No | None | Yes | No schema |
| /reviews | Yes | /reviews (relative) | Client Reviews \| Sterling Event Rentals | What Chicago-area clients say... | What our clients say | No | None | Yes | No schema; canonical relative |
| /legal/privacy-policy | No | https://sterlingeventrentals.com/legal/privacy-policy | Privacy Policy — Sterling Event Rentals | (none) | (in content) | No | WebPage | No | noindex |
| /legal/terms-of-service | No | full URL | Terms of Service — Sterling Event Rentals | (none) | (in content) | No | WebPage | No | noindex |
| /legal/cancellation-policy | No | full URL | Cancellation Policy — Sterling Event Rentals | (none) | (in content) | No | WebPage | No | noindex |

**Summary:** Many pages use relative canonicals (Next resolves with metadataBase; full URLs preferred). Multiple pages missing page-level metadata (about, contact, services, collection, gallery). No page-level OG/Twitter overrides except layout defaults. Sitemap currently includes /legal/* (should exclude). Placeholder copy in layout and several H1s/descriptions.
