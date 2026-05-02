export const SERVICE_AREA_SLUGS = [
  "chicago",
  "north-suburbs",
  "southwest-suburbs",
] as const;

export type ServiceAreaSlug = (typeof SERVICE_AREA_SLUGS)[number];

export type ServiceAreaData = {
  slug: ServiceAreaSlug;
  name: string;
  tagline: string;
  title: string;
  description: string;
  h1: string;
  quickAnswer: string;
  cities: string[];
  neighborhoods?: string[];
  bodyParagraphs: string[];
  venueTypes: { icon: string; title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  schemaAreaNames: string[];
  /** AEO content blocks — each becomes an H2 + answer paragraph on the page */
  h2Sections?: {
    question: string;
    answer: string;
    resourceLink?: { href: string; label: string };
  }[];
  /** Links to relevant resources/pricing — rendered as inline CTAs */
  resourceLinks?: { href: string; label: string }[];
  /** Short pricing context note — shown in AEO section and schema */
  pricingNote?: string;
};

export const SERVICE_AREA_DATA: Record<ServiceAreaSlug, ServiceAreaData> = {
  chicago: {
    slug: "chicago",
    name: "Chicago & Near Suburbs",
    tagline: "Chicago city, Oak Park, Evanston, Berwyn, and the inner ring.",
    title:
      "Event Rentals Chicago IL | Tent, Table & Stage Rentals | Sterling",
    description:
      "Sterling Event Rentals delivers tents, tables, chairs, stages, and entertainment rentals throughout Chicago, IL and near suburbs — Oak Park, Evanston, Berwyn, Skokie. SIOTO-certified, $500 minimum, upfront pricing. Call (773) 692-7576.",
    h1: "Event rentals in Chicago, IL — delivery, setup & teardown included",
    quickAnswer:
      "Sterling Event Rentals is a full-service event rental company based in Chicago, IL. We deliver tents, tables, chairs, stages, and entertainment rentals to all Chicago neighborhoods and inner-ring suburbs including Oak Park, Evanston, Berwyn, Cicero, and Skokie. Every order includes professional delivery, full setup, and teardown by our crew. The minimum rental order is $500. We are licensed, insured, and SIOTO Safety Seal certified. Call (773) 692-7576 to confirm delivery to your venue or zip code.",
    pricingNote:
      "Sterling Event Rentals has a $500 minimum rental order for Chicago and near-suburb events. Delivery and setup are quoted as separate named line items on every estimate — before you confirm. No hidden fees at delivery.",
    cities: [
      "Chicago",
      "Oak Park",
      "Evanston",
      "Berwyn",
      "Cicero",
      "Skokie",
      "Elmwood Park",
      "Forest Park",
      "River Forest",
      "Norridge",
    ],
    neighborhoods: [
      "Loop",
      "River North",
      "Lincoln Park",
      "Lakeview",
      "Wicker Park",
      "Pilsen",
      "Hyde Park",
      "Bronzeville",
      "Andersonville",
      "South Loop",
      "West Loop",
      "Bridgeport",
      "Rogers Park",
      "Humboldt Park",
    ],
    bodyParagraphs: [
      "Sterling Event Rentals is based in Chicago and serves the full city footprint — from lakefront corporate events near Michigan Avenue and Navy Pier to backyard parties in Beverly and graduation celebrations in Pilsen. We know the permit landscape, the park district requirements, and the access challenges that come with dense urban venues.",
      "In the inner-ring suburbs, we regularly serve Oak Park, Evanston, Berwyn, and Skokie for corporate picnics, school events, and private parties. Delivery fees for inner-ring locations are typically the same as city delivery — confirmed on your quote before you commit.",
      "Every Chicago and near-suburb order includes full setup and teardown by our crew. You don't manage logistics — we handle delivery timing, assembly, and pickup around your event window.",
    ],
    h2Sections: [
      {
        question: "How much does event rental cost in Chicago, IL?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order for Chicago events. Tent rentals typically range from $500 to several thousand dollars depending on size — a 20×20 frame tent for a small gathering costs significantly less than a 40×80 structure for 300+ guests. Tables, chairs, and staging are priced separately. Every quote includes equipment, delivery, and setup as named line items so you see the full cost before you confirm anything. Call (773) 692-7576 or submit the contact form for a quote specific to your event.",
        resourceLink: {
          href: "/event-rental-pricing-chicago",
          label: "See full event rental pricing in Chicago →",
        },
      },
      {
        question: "Do you need a permit for a tent in Chicago?",
        answer:
          "In most cases, yes — a permit is required for tents on public property in Chicago, including Chicago Park District sites and Cook County Forest Preserve locations. Requirements vary by site, tent size, and intended use. Sterling Event Rentals is SIOTO Safety Seal certified, and we can provide documentation that many venues and park districts require from vendors. Permit applications are the customer's responsibility, but we'll give you the information you need to file correctly.",
        resourceLink: {
          href: "/resources/chicago-tent-permits",
          label: "Read the Chicago tent permit guide →",
        },
      },
      {
        question: "What size tent do I need for my Chicago event?",
        answer:
          "As a general rule, allow 10–12 square feet per guest for seated dinner events, and 6–8 square feet for standing or cocktail-style events. A 20×20 tent (400 sq ft) seats approximately 30–40 guests at round tables. A 30×60 tent (1,800 sq ft) seats approximately 150–180 guests. For Chicago rooftop and urban venue events, access constraints often determine available tent sizes — we'll assess your site and recommend the right structure.",
        resourceLink: {
          href: "/resources/tent-sizing-guide",
          label: "Use the full tent sizing guide →",
        },
      },
      {
        question: "How far in advance should I book event rentals in Chicago?",
        answer:
          "For most Chicago events, we recommend booking 2–3 weeks in advance. Peak season (May through September) — especially summer weekends — books significantly faster. Corporate clients typically book 21–30 days out. Wedding couples often book 3–6 months ahead to secure their date. For last-minute needs, call (773) 692-7576 directly — we can sometimes accommodate short-notice bookings depending on availability.",
      },
    ],
    resourceLinks: [
      { href: "/event-rental-pricing-chicago", label: "Event rental pricing in Chicago" },
      { href: "/resources/chicago-tent-permits", label: "Chicago tent permit guide" },
      { href: "/resources/tent-sizing-guide", label: "Tent sizing guide" },
      { href: "/packages", label: "View event packages" },
    ],
    venueTypes: [
      {
        icon: "🏙️",
        title: "Chicago Lakefront & Parks",
        body: "Grant Park, Lincoln Park, Millennium Park–adjacent venues, and lakefront spaces. Permits required for most public sites.",
      },
      {
        icon: "🏢",
        title: "Corporate Campuses & Rooftops",
        body: "River North offices, West Loop headquarters, rooftop terraces, and corporate outdoor event spaces.",
      },
      {
        icon: "🏠",
        title: "Private Residences",
        body: "Backyard events in Lincoln Park, Hyde Park, Beverly, and across Chicago's 77 neighborhoods.",
      },
      {
        icon: "🎓",
        title: "Universities & Institutions",
        body: "UChicago, DePaul, Loyola, UIC, and other campus outdoor spaces across the city.",
      },
      {
        icon: "🌳",
        title: "Forest Preserves & Park Districts",
        body: "Chicago Park District sites and Cook County Forest Preserve locations. Permits are the customer's responsibility.",
      },
      {
        icon: "🏨",
        title: "Hotel Courtyards & Private Venues",
        body: "Hotel courtyards, private clubs, and event venue outdoor spaces throughout the city.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver to all Chicago neighborhoods?",
        answer:
          "Yes — we serve all Chicago neighborhoods, from the North Side to the South Side and the Near West Side to the Far Southwest. Call (773) 692-7576 with your venue address and we'll confirm delivery availability and timing.",
      },
      {
        question: "What is the minimum order for event rentals in Chicago?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order. Delivery and setup are quoted as separate named line items — not bundled into the equipment total — so you see exactly what each cost is before you confirm.",
      },
      {
        question: "Can you deliver to a Chicago Park District site?",
        answer:
          "Yes. We deliver to Chicago Park District sites. You are responsible for any permits the Park District requires before we can set up. We'll confirm your timeline and access requirements when you book.",
      },
      {
        question: "What will my Chicago quote include as line items?",
        answer:
          "Expect equipment (tent, tables, chairs, add-ons), delivery, and setup as separate named amounts — not a single bundled number that hides the setup fee. The $500 minimum still applies. Lakefront, rooftop, and tight urban sites may affect access time; we bake that into the quote when you share the address. For published ranges visit https://www.sterlingeventrentals.com/event-rental-pricing-chicago; for a tight summary of city tent minimums see https://www.sterlingeventrentals.com/answers/how-much-does-tent-rental-cost-chicago.",
      },
      {
        question: "What is the delivery fee for Chicago events?",
        answer:
          "Delivery fees are quoted as a named line item on every estimate before you confirm. Fees vary by location, order size, and access conditions. Call (773) 692-7576 or submit the contact form with your venue address for an exact number.",
      },
      {
        question: "Are you licensed and insured for events in Chicago?",
        answer:
          "Yes. Sterling Event Rentals is fully licensed and insured in Illinois, and SIOTO Safety Seal certified (SIOTO operator safety training; verify at sioto.com). We can provide insurance documentation and certification records for venues that require vendor verification.",
      },
    ],
    schemaAreaNames: [
      "Chicago",
      "Oak Park",
      "Evanston",
      "Berwyn",
      "Cicero",
      "Skokie",
    ],
  },

  "north-suburbs": {
    slug: "north-suburbs",
    name: "North & Northwest Suburbs",
    tagline:
      "Schaumburg, Arlington Heights, Palatine, Des Plaines, Wilmette, and the north shore.",
    title:
      "Event Rentals North Suburbs Chicago | Schaumburg | Sterling",
    description:
      "Sterling Event Rentals delivers tents, tables, chairs, stages, and entertainment rentals to the north and northwest suburbs of Chicago, IL — Schaumburg, Arlington Heights, Palatine, Wilmette, Northbrook, Glenview. SIOTO-certified, $500 minimum. Call (773) 692-7576.",
    h1: "Event rentals in the north and northwest suburbs of Chicago, IL",
    quickAnswer:
      "Sterling Event Rentals is a full-service event rental company delivering to the north and northwest suburbs of Chicago, IL — including Schaumburg, Arlington Heights, Palatine, Des Plaines, Wilmette, Northbrook, Glenview, Rolling Meadows, Elk Grove Village, and Mount Prospect. Every order includes professional delivery, full setup, and teardown. The minimum rental order is $500. We are licensed, insured, and SIOTO Safety Seal certified. Call (773) 692-7576 with your venue address to confirm delivery and get a quote.",
    pricingNote:
      "Sterling Event Rentals has a $500 minimum rental order for north and northwest suburb events. Delivery and setup are quoted as separate named line items on every estimate — before you confirm. Most locations in this corridor fall within our standard delivery zone.",
    cities: [
      "Schaumburg",
      "Arlington Heights",
      "Palatine",
      "Des Plaines",
      "Wilmette",
      "Northbrook",
      "Glenview",
      "Rolling Meadows",
      "Elk Grove Village",
      "Mount Prospect",
      "Hoffman Estates",
      "Niles",
      "Park Ridge",
      "Rosemont",
      "Evanston",
    ],
    bodyParagraphs: [
      "The north and northwest suburbs are home to a dense concentration of corporate campuses, office parks, and hotel conference centers — and Sterling serves them regularly. Corporate picnics in Schaumburg, company appreciation events in Arlington Heights, and team gatherings near the O'Hare corridor are among our most consistent bookings in this region.",
      "We also serve private events across the north shore and northwest suburbs — graduation parties, milestone birthdays, and outdoor weddings in Wilmette, Northbrook, Glenview, and surrounding communities. Northwest suburb properties often offer more outdoor space than Chicago venues, making larger tent footprints more accessible.",
      "Delivery fees for north and northwest suburb locations are quoted as named line items on your estimate before you confirm. Most locations in this corridor fall within our standard delivery zone — call (773) 692-7576 with your zip code to confirm availability for your event.",
    ],
    h2Sections: [
      {
        question: "How much does event rental cost in Schaumburg and the north suburbs?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order. Tent rental pricing varies by size and guest count — a 20×20 frame tent for a small gathering starts lower than a 40×60 or 40×80 structure needed for 150–300 guests. Tables, chairs, staging, and entertainment are priced separately. Every quote includes equipment cost, setup fee, and delivery as named line items so you see the full number before you confirm. Call (773) 692-7576 or submit the contact form for a quote specific to your event and venue.",
        resourceLink: {
          href: "/event-rental-pricing-chicago",
          label: "See full event rental pricing details →",
        },
      },
      {
        question: "What types of corporate events does Sterling serve in the north and northwest suburbs?",
        answer:
          "Corporate picnics, company appreciation days, team-building events, and large outdoor company gatherings are among our most common bookings in the north and northwest suburbs. We regularly set up in the Schaumburg corporate corridor, Arlington Heights and Palatine office parks, and the Rosemont event district. Typical corporate setups include large frame tents for 100–300 guests, stage and presentation equipment for outdoor ceremonies, full table and seating packages, and entertainment rentals. For corporate events, we recommend booking 3–4 weeks in advance for peak summer dates.",
      },
      {
        question: "What size tent do I need for a north suburb event?",
        answer:
          "Allow 10–12 square feet per guest for seated dinner events and 6–8 square feet for cocktail or standing-room events. A 20×20 tent (400 sq ft) seats approximately 30–40 guests at round tables. A 30×60 tent (1,800 sq ft) seats approximately 150–180 guests. Northwest suburb venues — corporate campuses, park district sites, and residential properties in Schaumburg, Arlington Heights, and Glenview — typically offer more outdoor footprint than city venues, which often allows for larger or more flexible tent configurations.",
        resourceLink: {
          href: "/resources/tent-sizing-guide",
          label: "Use the full tent sizing guide →",
        },
      },
      {
        question: "How far in advance should I book event rentals in the north suburbs?",
        answer:
          "We recommend 2–3 weeks minimum for most private events. Corporate picnics and large outdoor company events in the peak summer season (June through August) book faster — often 4–6 weeks out. The Schaumburg and Arlington Heights corporate event corridor is especially active between Memorial Day and Labor Day. For any event over 150 guests or requiring multiple tent structures, earlier is always better. Call (773) 692-7576 to check availability for your specific date.",
      },
    ],
    resourceLinks: [
      { href: "/event-rental-pricing-chicago", label: "Event rental pricing" },
      { href: "/resources/tent-sizing-guide", label: "Tent sizing guide" },
      { href: "/packages", label: "View event packages" },
      { href: "/services/delivery-setup-teardown-chicago", label: "How delivery & setup works" },
    ],
    venueTypes: [
      {
        icon: "🏢",
        title: "Corporate Campuses & Office Parks",
        body: "Schaumburg's corporate corridor, Arlington Heights and Palatine office parks, Rosemont event district, and Elk Grove Village business sites.",
      },
      {
        icon: "🏨",
        title: "Hotels & Conference Centers",
        body: "Hotel outdoor spaces and conference center grounds throughout the northwest suburbs and O'Hare corridor.",
      },
      {
        icon: "🌳",
        title: "Park District Sites",
        body: "Municipal parks and park district facilities across the north and northwest suburbs. Permits are the customer's responsibility.",
      },
      {
        icon: "🏠",
        title: "Private Residences",
        body: "Backyard and estate events in Wilmette, Northbrook, Glenview, Arlington Heights, and surrounding communities.",
      },
      {
        icon: "🎓",
        title: "Schools & Universities",
        body: "High school and university outdoor event spaces throughout the north shore and northwest suburban corridor.",
      },
      {
        icon: "⛳",
        title: "Country Clubs & Golf Courses",
        body: "Outdoor event space at private clubs and golf courses across the north shore and northwest suburbs.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver to Schaumburg and the northwest suburbs?",
        answer:
          "Yes. Schaumburg, Arlington Heights, Palatine, Hoffman Estates, Rolling Meadows, Elk Grove Village, and surrounding northwest suburbs are within our regular delivery area. Call (773) 692-7576 to confirm your specific venue or zip code.",
      },
      {
        question: "Do you serve the north shore suburbs?",
        answer:
          "Yes. We deliver to Wilmette, Northbrook, Glenview, Niles, Park Ridge, and other north shore and near-north communities. Call (773) 692-7576 with your venue address to confirm delivery availability.",
      },
      {
        question: "What is the minimum order for the north and northwest suburbs?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order. Delivery and setup are quoted as separate named line items on every estimate — not bundled into the equipment total — so you see exactly what each cost is before you confirm.",
      },
      {
        question: "What affects delivery fees for Schaumburg and northwest-corridor events?",
        answer:
          "Distance from our Chicago base, order size (how many truck loads), and site access (office-park dock vs. residential backyard) shape the delivery line item. Most Schaumburg, Arlington Heights, and Rosemont venues fall in our standard zone, but delivery is still quoted separately from equipment before you sign. Call (773) 692-7576 with your zip and gate or dock instructions for an exact total.",
      },
      {
        question: "Do you serve corporate picnics in Schaumburg and Arlington Heights?",
        answer:
          "Yes — corporate picnics and outdoor company events are among our most consistent bookings in this region. We set up tents, tables, seating, stages, and entertainment for events ranging from 50-person team days to 300-person company picnics. Call (773) 692-7576 or fill out the contact form to discuss your event.",
      },
      {
        question: "Is there a delivery surcharge for north suburb locations?",
        answer:
          "Delivery fees are quoted as a named line item on every estimate before you confirm. Most north and northwest suburb locations fall within our standard delivery zone. Call (773) 692-7576 with your zip code for the exact delivery fee for your venue.",
      },
      {
        question: "Are you licensed and insured for events in the north suburbs?",
        answer:
          "Yes. Sterling Event Rentals is fully licensed and insured in Illinois and SIOTO Safety Seal certified (SIOTO operator safety training; verify at sioto.com). We can provide insurance and certification documentation for venues, corporate clients, and park districts that require vendor verification.",
      },
    ],
    schemaAreaNames: [
      "Schaumburg",
      "Arlington Heights",
      "Palatine",
      "Des Plaines",
      "Wilmette",
      "Northbrook",
      "Glenview",
    ],
  },

  "southwest-suburbs": {
    slug: "southwest-suburbs",
    name: "South & Southwest Suburbs",
    tagline:
      "Naperville, Orland Park, Downers Grove, Bolingbrook, Joliet, and the southwest corridor.",
    title:
      "Event Rentals Southwest Suburbs Chicago | Naperville | Sterling",
    description:
      "Sterling Event Rentals delivers tents, tables, chairs, stages, and entertainment rentals to the south and southwest suburbs of Chicago, IL — Naperville, Orland Park, Downers Grove, Bolingbrook, Joliet, Tinley Park. SIOTO-certified, $500 minimum. Call (773) 692-7576.",
    h1: "Event rentals in the south and southwest suburbs of Chicago, IL",
    quickAnswer:
      "Sterling Event Rentals is a full-service event rental company delivering to the south and southwest suburbs of Chicago, IL — including Naperville, Orland Park, Downers Grove, Bolingbrook, Joliet, Plainfield, Tinley Park, Mokena, Aurora, and Homer Glen. Every order includes professional delivery, full setup, and teardown. The minimum rental order is $500. We are licensed, insured, and SIOTO Safety Seal certified. Call (773) 692-7576 with your venue address to confirm delivery and get a quote.",
    pricingNote:
      "Sterling Event Rentals has a $500 minimum rental order for south and southwest suburb events. Delivery and setup are quoted as separate named line items on every estimate — before you confirm. Delivery fees for farther southwest locations are quoted upfront with no surprises at delivery.",
    cities: [
      "Naperville",
      "Orland Park",
      "Downers Grove",
      "Bolingbrook",
      "Joliet",
      "Plainfield",
      "Tinley Park",
      "Mokena",
      "Aurora",
      "Homer Glen",
      "New Lenox",
      "Romeoville",
      "Lisle",
      "Westmont",
      "Oak Lawn",
    ],
    bodyParagraphs: [
      "The south and southwest suburbs — including Naperville, Orland Park, Downers Grove, and Bolingbrook — are one of our fastest-growing delivery corridors. Large residential lots, well-maintained park district facilities, and a growing base of corporate campuses along the I-88 tech corridor make this region a natural fit for tent, table, stage, and entertainment rentals.",
      "Naperville is among our most active delivery areas. We serve residential neighborhoods, downtown Naperville event spaces, Riverwalk-adjacent venues, and Naperville Park District sites regularly. Orland Park, Tinley Park, and the far southwest suburbs including Joliet, Plainfield, and New Lenox are also within our delivery range.",
      "Every southwest suburb order includes full setup and teardown by our crew. Delivery fees for this corridor are quoted as named line items on your estimate before you confirm — no surprises at delivery.",
    ],
    h2Sections: [
      {
        question: "How much does event rental cost in Naperville and the southwest suburbs?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order. Tent rental pricing varies by size and guest count — a small 20×20 frame tent for a backyard gathering costs significantly less than a 40×80 structure for a 200–300 person corporate event. Tables, chairs, staging, and entertainment rentals are priced separately. Every quote includes equipment, delivery, and setup as named line items so you see the complete cost before you confirm anything. Call (773) 692-7576 or submit the contact form for a quote specific to your venue and event.",
        resourceLink: {
          href: "/event-rental-pricing-chicago",
          label: "See full event rental pricing details →",
        },
      },
      {
        question: "What size tent do I need for a southwest suburb event?",
        answer:
          "As a general rule, allow 10–12 square feet per guest for seated dinner events and 6–8 square feet for cocktail or standing-room events. A 20×20 tent (400 sq ft) seats approximately 30–40 guests at round tables. A 30×60 tent (1,800 sq ft) seats approximately 150–180 guests. Southwest suburb venues — particularly residential properties in Naperville, Plainfield, and Orland Park — often feature larger backyards than Chicago or inner-ring suburb lots, which gives more flexibility for tent placement and size.",
        resourceLink: {
          href: "/resources/tent-sizing-guide",
          label: "Use the full tent sizing guide →",
        },
      },
      {
        question: "Do you need a permit for a tent at a Naperville Park District site?",
        answer:
          "In most cases, yes. Naperville Park District sites require vendor permits and may have specific rules about tent size, anchoring, and event duration. You are responsible for obtaining the required permits before we can set up. Sterling Event Rentals is SIOTO Safety Seal certified and can provide vendor documentation that many park districts and venues require. We'll confirm your access requirements and timing when you book.",
        resourceLink: {
          href: "/resources/chicago-tent-permits",
          label: "Read the tent permit guide →",
        },
      },
      {
        question: "How far in advance should I book event rentals in the southwest suburbs?",
        answer:
          "We recommend 2–3 weeks minimum for most private events. Large backyard events, corporate picnics, and milestone celebrations in peak summer season (June through August) book faster — often 4–6 weeks out for Naperville, Orland Park, and the broader southwest corridor. For events requiring large tent structures (30×60 and above) or multiple equipment categories, earlier booking ensures availability. Call (773) 692-7576 to check your specific date.",
      },
    ],
    resourceLinks: [
      { href: "/event-rental-pricing-chicago", label: "Event rental pricing" },
      { href: "/resources/tent-sizing-guide", label: "Tent sizing guide" },
      { href: "/resources/chicago-tent-permits", label: "Tent permit guide" },
      { href: "/packages", label: "View event packages" },
    ],
    venueTypes: [
      {
        icon: "🏠",
        title: "Private Residences & Estates",
        body: "Backyard events on larger residential lots across Naperville, Orland Park, Plainfield, Homer Glen, and surrounding communities.",
      },
      {
        icon: "🌳",
        title: "Park District Sites",
        body: "Municipal parks and park district facilities in Naperville, Downers Grove, Tinley Park, and the southwest corridor. Permits are the customer's responsibility.",
      },
      {
        icon: "🏢",
        title: "Corporate Campuses",
        body: "Office parks and corporate event spaces throughout the I-88 corridor, Naperville tech corridor, and Bolingbrook and Aurora business districts.",
      },
      {
        icon: "⛪",
        title: "Churches & Community Halls",
        body: "Church grounds and community center outdoor spaces throughout the south and southwest suburbs.",
      },
      {
        icon: "🎓",
        title: "Schools & Universities",
        body: "High school and university outdoor event spaces in Naperville, Aurora, Joliet, and surrounding communities.",
      },
      {
        icon: "🏨",
        title: "Hotels & Banquet Facilities",
        body: "Hotel outdoor spaces and banquet facility grounds across the southwest suburban corridor.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver to Naperville?",
        answer:
          "Yes. Naperville is one of our most active delivery areas. We serve residential neighborhoods, Naperville Park District sites, downtown event spaces, and corporate campuses throughout the city. Call (773) 692-7576 to confirm your venue and get a quote.",
      },
      {
        question: "What is the minimum order for south and southwest suburb events?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order. Delivery and setup are quoted as separate named line items on every estimate — not bundled into the equipment total — so you see the full cost before you confirm.",
      },
      {
        question: "How does tent sizing differ on large southwest suburban lots?",
        answer:
          "Bigger yards in Naperville, Plainfield, and Orland Park often mean you can fit a wider frame or add a buffet or stage wing without fighting alley access the way you might in the city. That can change which structure we recommend even at the same guest count. Share a rough layout when you call (773) 692-7576 — and skim the Tent sizing guide on https://www.sterlingeventrentals.com/resources/tent-sizing-guide for square-footage rules of thumb before we translate them into a package.",
      },
      {
        question: "Can you deliver to a Naperville Park District site?",
        answer:
          "Yes. We deliver to Naperville Park District sites. You are responsible for obtaining any permits the Park District requires before setup. We'll confirm your timeline and access needs when you book.",
      },
      {
        question: "Do you serve Joliet and the far southwest suburbs?",
        answer:
          "Yes. We serve Joliet, Plainfield, Mokena, New Lenox, Romeoville, and the far southwest suburbs. Delivery fees for farther locations are quoted upfront as a named line item. Call (773) 692-7576 with your venue address to confirm.",
      },
      {
        question: "Is there a delivery surcharge for southwest suburb locations?",
        answer:
          "Delivery fees are quoted as a named line item on every estimate before you confirm. Fees vary by distance and order size. Locations in Joliet, Plainfield, and the far southwest may carry a slightly higher delivery fee — always quoted upfront. Call (773) 692-7576 with your zip code for an exact number.",
      },
      {
        question: "Are you licensed and insured for events in the southwest suburbs?",
        answer:
          "Yes. Sterling Event Rentals is fully licensed and insured in Illinois and SIOTO Safety Seal certified (SIOTO operator safety training; verify at sioto.com). We can provide documentation for venues, park districts, and corporate clients that require vendor verification.",
      },
    ],
    schemaAreaNames: [
      "Naperville",
      "Orland Park",
      "Downers Grove",
      "Bolingbrook",
      "Joliet",
      "Tinley Park",
      "Plainfield",
    ],
  },
};
