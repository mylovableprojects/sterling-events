# SEO keyword ↔ URL map (Sterling Event Rentals)

**Domain:** `https://www.sterlingeventrentals.com`  
**Use:** One **primary** keyword or intent per URL; support with **secondary** terms in H2s and body. Avoid having two URLs fight for the same primary term.

**Maintain:** When you add a route, add a row here and set `title` / `description` in the page (or shared data file) to match.

---

## Hub & conversion pages

| URL path | Primary keyword / intent | Secondary (body, internal links) |
|----------|--------------------------|----------------------------------|
| `/` | Chicago event rentals; Chicagoland event rentals | Tents, tables, stages, corporate & wedding, SIOTO, quote |
| `/contact` | Chicago event rental quote | Tent, table, stage, packages, itemized quote |
| `/about` | Sterling Event Rentals Chicago (brand + trust) | Licensed, insured, SIOTO, since 2021, Chicagoland |
| `/reviews` | Chicago event rental reviews | Tents, delivery, setup, planners, couples |
| `/packages` | Event rental packages Chicago | 25–300+ guests, tent, tables, chairs, $500 minimum |
| `/packages/pricing` | Event rental pricing (supporting) | PDF / list; link from packages & pricing hub |
| `/event-rental-pricing-chicago` | Event rental pricing Chicago | $500 minimum, deposit, tent/table/stage cost |
| `/gallery` | Event rental gallery Chicago (visual intent) | Proof, social; keep thin if mostly images |
| `/collection` | Rental collection / inventory browse | Support commercial investigation |

---

## Services (`SERVICE_PAGE_DATA`)

| URL path | Primary keyword / intent | Notes |
|----------|--------------------------|--------|
| `/services` | Chicagoland event rental services | Hub; links to all `-chicago` service URLs |
| `/services/tents-structures-chicago` | Tent rental Chicago; wedding tent rental Chicago | Permit, sizing spokes |
| `/services/tables-seating-chicago` | Table and chair rental Chicago | Rounds, chiavari, linens |
| `/services/stages-presentation-chicago` | Stage rental Chicago | Corporate, riser, dance floor |
| `/services/games-entertainment-chicago` | Mechanical bull rental Chicago; photo booth rental Chicago | Add-ons |
| `/services/event-extras-chicago` | Champagne wall Chicago; portable bar rental; lounge furniture | Specialty |
| `/services/delivery-setup-teardown-chicago` | Event rental delivery Chicago; setup and teardown | Full-service vs self-service |

---

## Events by type (`EVENT_TYPE_DATA`)

| URL path | Primary keyword / intent |
|----------|----------------------------|
| `/events` | Event rentals by type Chicago |
| `/events/corporate-events` | Corporate event rentals Chicago |
| `/events/weddings` | Wedding tent rental Chicago; wedding rentals Chicago |
| `/events/private-parties` | Private party rentals Chicago; backyard event rentals |

---

## Service areas (`SERVICE_AREA_DATA`)

| URL path | Primary keyword / intent |
|----------|---------------------------|
| `/service-area` | Event rental service area Chicagoland; delivery area |
| `/service-area/chicago` | Chicago event rentals (city + near suburbs) |
| `/service-area/north-suburbs` | North suburbs event rentals (geo-modifier + rentals) |
| `/service-area/southwest-suburbs` | Southwest suburbs event rentals |

---

## Resources (guides)

| URL path | Primary keyword / intent |
|----------|---------------------------|
| `/resources` | Chicago event planning resources; tent permit / sizing intent |
| `/resources/tent-sizing-guide` | Tent size for guest count; tent sizing guide |
| `/resources/chicago-tent-permits` | Chicago tent permit |
| `/resources/outdoor-event-planning` | Outdoor event planning Chicago |
| `/resources/corporate-event-checklist` | Corporate event checklist Chicago |

---

## Answers (FAQ spokes — question-shaped queries)

Map each spoke to **one** natural query phrase; titles come from `answerPages` / page metadata.

| Slug (under `/answers/`) | Example primary query |
|--------------------------|-------------------------|
| `how-much-does-tent-rental-cost-chicago` | How much does tent rental cost in Chicago |
| `what-size-tent-for-100-guests` | What size tent for 100 guests |
| `do-i-need-permit-tent-chicago` | Do I need a permit for a tent in Chicago |
| `how-far-in-advance-book-event-rentals` | How far in advance to book event rentals |
| `what-is-sioto-safety-seal` | What is SIOTO Safety Seal |
| `event-rental-delivery-setup-chicago` | Event rental delivery and setup Chicago |
| `outdoor-event-rental-weather-policy` | Outdoor event rental weather policy |
| `can-i-book-last-minute-event-rentals` | Last minute event rentals Chicago |
| `how-much-does-event-rental-delivery-cost` | How much does event rental delivery cost |
| `what-do-i-need-ready-before-delivery-setup` | What to have ready before delivery |
| `how-much-does-table-and-chair-rental-cost-for-100-guests` | Table and chair rental cost 100 guests |
| `how-do-i-pay-for-event-rentals` | How to pay for event rentals |
| `is-there-a-security-deposit` | Security deposit event rentals |
| `do-i-have-to-sign-a-contract` | Contract for event rentals |
| `can-you-deliver-the-day-before-my-event` | Day before delivery event rentals |
| `can-you-heat-or-cool-a-tent` | Heat or cool a tent for event |
| `can-you-set-up-a-tent-on-concrete` | Tent setup on concrete |
| `is-it-safe-to-have-a-tent-up-in-a-thunderstorm` | Tent safety thunderstorm |
| `do-you-rent-dance-floors` | Dance floor rental Chicago |
| `/answers` (index) | Event rental questions Chicago (hub) |

*(Add new spokes to this table when you add keys to `ANSWER_SPOKE_CONFIG`.)*

---

## Quick rules

1. **Home** owns the broad head term; **service URLs** own `service + Chicago`; **answers** own question phrasing.  
2. **Internal links:** use the **exact** anchor labels already defined in `servicePages` / spokes—avoid duplicate anchors pointing at different URLs for the same phrase.  
3. After content changes, bump **`LAST_MOD`** in `src/app/sitemap.xml/route.ts` (see comment there) so crawlers see a honest freshness signal.
