export const EVENT_TYPE_SLUGS = [
  "corporate-events",
  "weddings",
  "private-parties",
] as const;

export type EventTypeSlug = (typeof EVENT_TYPE_SLUGS)[number];

export type EventTypeData = {
  slug: EventTypeSlug;
  name: string;
  tagline: string;
  title: string;
  description: string;
  h1: string;
  quickAnswer: string;
  eyebrow: string;
  /** Short hero descriptor used in the AEO speakable passage */
  heroDescriptor: string;
  bodyParagraphs: string[];
  /** Equipment packages showcased on the page */
  packages: { icon: string; title: string; body: string }[];
  /** AEO h2 + answer blocks */
  h2Sections: {
    question: string;
    answer: string;
    resourceLink?: { href: string; label: string };
  }[];
  pricingNote: string;
  faqs: { question: string; answer: string }[];
  resourceLinks: { href: string; label: string }[];
  /** Schema.org @type for the event */
  schemaEventType: string;
  /** Optional full-bleed hero photo (gradient scrim layered on top for text contrast) */
  heroBackgroundImage?: { src: string; alt: string };
  /** Lighter scrim over hero photo so more of the image shows through (still uses heroGradient colors) */
  heroScrim?: "default" | "light";
  /** Gradient colors for placeholder images */
  heroGradient: { from: string; to: string };
  midGradient: { from: string; to: string };
  /** Optional photo for the “About This Service” intro (replaces placeholder on the right) */
  aboutSectionImage?: { src: string; alt: string };
  /** Optional full-width image between equipment packages and FAQ */
  midBreakImage?: { src: string; alt: string };
  /** Optional image above “Helpful resources” in the bottom split */
  detailsSectionImage?: { src: string; alt: string };
};

export const EVENT_TYPE_DATA: Record<EventTypeSlug, EventTypeData> = {
  "corporate-events": {
    slug: "corporate-events",
    name: "Corporate Events & Company Picnics",
    tagline: "Tents, tables, stages, and entertainment for outdoor company events across the Chicago area.",
    title: "Corporate Event Rentals Chicago IL | Sterling Event Rentals",
    description:
      "Sterling Event Rentals delivers corporate event rentals throughout the Chicago area — tents, tables, chairs, stages, and entertainment for company picnics, team-building events, and outdoor corporate gatherings. SIOTO-certified, $500 minimum. Call (773) 692-7576.",
    h1: "Corporate event & company picnic rentals — Chicago, IL",
    quickAnswer:
      "Sterling Event Rentals provides full-service corporate event rentals throughout the Chicago area, including company picnics, team-building events, and outdoor corporate gatherings. We deliver tents, tables, chairs, stages, presentation equipment, and entertainment rentals — with professional setup and teardown by our crew on every order. The minimum rental order is $500. We serve Chicago, Schaumburg, Arlington Heights, Naperville, and surrounding suburbs. Call (773) 692-7576 to discuss your event.",
    eyebrow: "Corporate & Company Events",
    heroDescriptor: "Outdoor corporate event rentals with full setup and teardown.",
    bodyParagraphs: [
      "Sterling Event Rentals is the go-to tent and equipment vendor for corporate events across the Chicago metro — from small team-building days to 300-person company picnics. We handle the logistics so you can focus on the event itself.",
      "Corporate clients choose us because we show up on time, set up completely, and disappear after. Every quote includes delivery and setup as named line items — no bundled fees, no surprise charges at delivery. You know exactly what you're paying before you sign anything.",
      "We serve corporate campuses in Schaumburg, the O'Hare corridor, the River North and West Loop office districts, and the I-88 tech corridor through Naperville and Aurora. If you have a venue in the Chicago metro, we can deliver to it.",
    ],
    packages: [
      {
        icon: "⛺",
        title: "Tent & Structure Packages",
        body: "Frame tents from 20×20 to 40×80+ for 30 to 500+ guests. Anchored, weather-rated, and sized for your headcount. Ideal for corporate grounds, hotel courtyards, and park district sites.",
      },
      {
        icon: "🪑",
        title: "Tables & Seating",
        body: "Round, rectangular, and cocktail tables. Folding, cross-back, and chiavari chair options. Linen upgrades available. Full seating packages for any layout.",
      },
      {
        icon: "🎤",
        title: "Stages & Presentation",
        body: "Modular stage and riser rentals for company announcements, award ceremonies, and executive presentations. Pairs naturally with tent structures.",
      },
      {
        icon: "🎯",
        title: "Games & Entertainment",
        body: "Mechanical bulls, bounce houses, photo booths, foam machines, and more. Built for corporate events that need more than tables — the kind employees actually talk about after.",
      },
      {
        icon: "🍾",
        title: "Event Extras",
        body: "Portable bars, champagne walls, and lounge furniture. The finishing details that make your corporate event look intentional and distinctive.",
      },
      {
        icon: "🚚",
        title: "Delivery, Setup & Teardown",
        body: "Professional crew handles delivery, assembly, and breakdown on every order. You don't lift anything. We coordinate around your venue access window.",
      },
    ],
    h2Sections: [
      {
        question: "What does a corporate picnic rental package include?",
        answer:
          "A typical Sterling corporate picnic package includes a frame tent sized for your headcount, round or rectangular tables, folding or banquet chairs, and delivery, setup, and teardown by our crew. Many corporate clients add staging for speeches and awards, entertainment items like games and inflatables, and extras like portable bars or lounge seating. Every order is custom-quoted — you tell us your guest count, venue, and event format, and we build a quote around it. Call (773) 692-7576 or submit the contact form to start.",
        resourceLink: {
          href: "/packages",
          label: "Browse event packages →",
        },
      },
      {
        question: "How much does a corporate event rental cost in Chicago?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order. A basic corporate picnic setup — tent, tables, and chairs for 50–75 guests — typically starts in the $1,200–$2,500 range depending on tent size and seating configuration. Larger events for 150–300 guests with staging, entertainment, and extras run higher. Every quote includes equipment, setup, and delivery as named line items before you confirm. No bundled fees, no surprises at delivery.",
        resourceLink: {
          href: "/event-rental-pricing-chicago",
          label: "See full pricing details →",
        },
      },
      {
        question: "How far in advance should I book a corporate event rental?",
        answer:
          "We recommend booking corporate picnics and outdoor company events 3–4 weeks in advance. Peak season (Memorial Day through Labor Day) books significantly faster — especially Fridays and Saturdays in June, July, and August. Large events requiring multiple tent structures or entertainment equipment should book 4–6 weeks out to guarantee availability. Call (773) 692-7576 to check your specific date.",
      },
      {
        question: "Do you serve corporate events in Schaumburg and the northwest suburbs?",
        answer:
          "Yes. Schaumburg, Arlington Heights, Palatine, Rosemont, and the broader O'Hare and northwest suburb corridor are among our most consistent corporate event delivery areas. We regularly service the Schaumburg business district, corporate campus events near Arlington Heights and Hoffman Estates, and hotel-adjacent events along the I-90 and I-290 corridors. Call (773) 692-7576 or confirm your address via the contact form.",
        resourceLink: {
          href: "/service-area/north-suburbs",
          label: "See north suburb service area →",
        },
      },
    ],
    pricingNote:
      "Sterling Event Rentals has a $500 minimum rental order. Every corporate quote includes equipment, delivery, and setup as separate named line items before you confirm. No bundled pricing, no hidden fees at delivery.",
    faqs: [
      {
        question: "Do you do corporate picnics?",
        answer:
          "Yes. Corporate picnics are among our most common event types. We provide tents, tables, chairs, stages, and entertainment for company picnics ranging from 30-person team lunches to 300-person all-company events. Call (773) 692-7576 or submit the contact form to get a quote.",
      },
      {
        question: "What is the minimum order for a corporate event rental?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order. Delivery and setup are quoted as separate named line items — not bundled into the equipment total — so you see exactly what each cost is before you confirm.",
      },
      {
        question: "Can you handle events for 200+ corporate guests?",
        answer:
          "Yes. We regularly service corporate events for 100–400+ guests. For large events, we typically provide 40×60 or 40×80 tent structures, full table and chair packages, and stage and entertainment rentals. Call (773) 692-7576 to discuss your headcount and venue.",
      },
      {
        question: "Do you provide stages for corporate presentations?",
        answer:
          "Yes. We rent modular stage and riser systems for corporate announcements, award ceremonies, and outdoor presentations. Stages can be configured to multiple dimensions and combine naturally with our tent structures.",
      },
      {
        question: "Can we add entertainment to a corporate rental?",
        answer:
          "Yes. Mechanical bulls, bounce houses, photo booths, and foam machines are popular additions to corporate picnics and team-building events. Ask about entertainment packages when you call.",
      },
      {
        question: "How early do you arrive to set up?",
        answer:
          "Setup timing is confirmed when you book. We coordinate around your venue access window and have everything in place before your event starts. Teardown is scheduled after your event closes.",
      },
      {
        question: "Are you insured for corporate events and vendor requirements?",
        answer:
          "Yes. Sterling Event Rentals is fully licensed and insured in Illinois, and SIOTO Safety Seal certified (SIOTO operator safety training; verify at sioto.com). We can provide certificates of insurance and vendor documentation for corporate venues, hotels, and park districts that require it.",
      },
      {
        question: "Do you serve Chicago and suburban corporate locations?",
        answer:
          "Yes. We deliver to corporate venues throughout the Chicago metro — city locations in the Loop, River North, and West Loop; northwest suburbs including Schaumburg and Arlington Heights; and south and southwest suburbs including Naperville and Orland Park. Call (773) 692-7576 with your venue address.",
      },
    ],
    resourceLinks: [
      { href: "/resources/corporate-event-checklist", label: "Corporate event planning checklist" },
      { href: "/packages/pricing", label: "Download price list (PDF)" },
      { href: "/event-rental-pricing-chicago", label: "Event rental pricing" },
      { href: "/packages", label: "View event packages" },
      { href: "/services/stages-presentation", label: "Stages & presentation rentals" },
      { href: "/services/games-entertainment", label: "Games & entertainment rentals" },
    ],
    schemaEventType: "BusinessEvent",
    heroBackgroundImage: {
      src: "/images/outdoor-event-planning/corporate_events.webp",
      alt: "Outdoor corporate event under a white tent with banquet tables and guests.",
    },
    heroScrim: "light",
    heroGradient: { from: "#0b1f3a", to: "#020810" },
    midGradient: { from: "#1a2e50", to: "#071020" },
    aboutSectionImage: {
      src: "/images/outdoor-event-planning/Elegant%20Outdoor%20Event%20with%20City%20Views.webp",
      alt: "White event tent with dining setup on a lawn, Chicago skyline and Lake Michigan in the background.",
    },
    midBreakImage: {
      src: "/images/outdoor-event-planning/Global%20Corp%20Picnic%20Bash.png",
      alt: "Company picnic under a white tent with catering and guests, Chicago skyline beyond the park.",
    },
    detailsSectionImage: {
      src: "/images/outdoor-event-planning/Elegant%20Outdoor%20Event%20Tent.webp",
      alt: "Formal corporate banquet under a white peak tent with long dining tables and Chicago skyline in the distance.",
    },
  },

  weddings: {
    slug: "weddings",
    name: "Weddings",
    tagline: "Tent, table, and décor rentals for outdoor weddings across the Chicago metro.",
    title: "Wedding Tent & Table Rentals Chicago IL | Sterling Event Rentals",
    description:
      "Sterling Event Rentals provides wedding tent, table, chair, and décor rentals throughout the Chicago area. Full delivery, setup, and teardown on every order. SIOTO-certified, $500 minimum. Call (773) 692-7576.",
    h1: "Wedding rentals — tent, tables & décor for Chicago area outdoor weddings",
    quickAnswer:
      "Sterling Event Rentals provides full-service wedding rentals for outdoor ceremonies and receptions across the Chicago metro area, including tents, tables, chairs, linens, stages, and décor extras. We deliver, set up, and tear down on every order — you don't touch a single chair. The minimum rental order is $500. We serve Chicago, the north shore, Naperville, and throughout the suburbs. Call (773) 692-7576 to discuss your date and venue.",
    eyebrow: "Wedding Rentals",
    heroDescriptor: "Full-service outdoor wedding rentals with professional delivery and setup.",
    bodyParagraphs: [
      "Your wedding day should look and feel like everything you planned — which means the logistics behind it need to be handled precisely. Sterling Event Rentals is the rental partner that shows up on time, sets up completely, and leaves no detail to chance.",
      "We provide tent structures for outdoor ceremonies and receptions, full table and seating packages, stage and presentation risers for ceremonies, champagne walls and portable bars for cocktail hours, and lounge furniture for outdoor reception spaces. Everything delivered, set up, and broken down by our crew.",
      "We work with couples at every venue type — private estate weddings in Naperville and the north shore, lakefront Chicago ceremonies, park district outdoor receptions, and hotel courtyard weddings. Tell us your guest count, venue, and vision, and we'll build a quote around it.",
    ],
    packages: [
      {
        icon: "⛺",
        title: "Wedding Tent & Structure",
        body: "Frame and pole tent structures from 20×20 to 40×80+ for intimate ceremonies to large receptions. Weather-rated, anchored, and properly sized for your guest count and venue footprint.",
      },
      {
        icon: "🪑",
        title: "Tables & Seating",
        body: "Round banquet tables, farm tables, cocktail tables, and rectangular options. Chiavari, cross-back, and folding chair options. Linen upgrades to match your palette.",
      },
      {
        icon: "🎤",
        title: "Ceremony Staging",
        body: "Modular stage and riser systems for outdoor ceremony platforms, head tables, and band or DJ risers. Pairs naturally with tent structures for covered ceremonies.",
      },
      {
        icon: "🍾",
        title: "Champagne Walls & Bars",
        body: "Champagne walls, portable bar setups, and lounge seating for cocktail hours and receptions. The details that photograph beautifully and give guests somewhere to gather.",
      },
      {
        icon: "🛋️",
        title: "Lounge Furniture",
        body: "Outdoor lounge seating, accent furniture, and décor pieces that make outdoor reception spaces feel intentional and finished. Available in multiple styles.",
      },
      {
        icon: "🚚",
        title: "White-Glove Setup",
        body: "Full delivery, setup, and teardown on every wedding order. Our crew arrives on your schedule, assembles everything, and returns after the reception to take it all down.",
      },
    ],
    h2Sections: [
      {
        question: "What wedding rentals does Sterling Event Rentals provide?",
        answer:
          "Sterling provides tent structures for outdoor ceremonies and receptions, full table and chair packages, ceremony staging, champagne walls and portable bars, and lounge furniture. Every order includes delivery, full setup, and teardown by our crew. We serve Chicago, the north shore, Naperville, and throughout the Chicago metro. Call (773) 692-7576 or submit the contact form to get a quote for your date and venue.",
        resourceLink: {
          href: "/packages",
          label: "Browse wedding rental packages →",
        },
      },
      {
        question: "How much does a wedding tent rental cost in Chicago?",
        answer:
          "Wedding tent rental pricing depends on tent size, guest count, and accessories. Sterling Event Rentals has a $500 minimum rental order. A frame tent for an intimate outdoor ceremony (30–50 guests) starts lower than a large reception tent for 150–250 guests. Tables, chairs, linens, staging, and décor extras are priced separately. Every quote is itemized — equipment, delivery, and setup as named line items — before you confirm. Call (773) 692-7576 for a quote specific to your guest count and venue.",
        resourceLink: {
          href: "/event-rental-pricing-chicago",
          label: "See full rental pricing →",
        },
      },
      {
        question: "How far in advance should we book wedding rentals?",
        answer:
          "We strongly recommend booking 3–6 months in advance for peak season weekend dates (May through October). Summer Saturdays are the first to go. While we can sometimes accommodate shorter timelines, locking in your date early ensures the tent size, quantity of chairs, and accessories you need are available. Call (773) 692-7576 to check availability for your specific date.",
      },
      {
        question: "What size tent do I need for an outdoor wedding?",
        answer:
          "Allow 10–12 square feet per guest for a seated dinner reception, and 15–18 square feet if you're including a dance floor and band or DJ setup. A 30×60 tent (1,800 sq ft) seats approximately 120–150 guests without a dance floor. A 40×80 tent (3,200 sq ft) seats 250–300 with a dance floor and full setup. Your venue's dimensions and layout will also factor into what's possible. We'll assess your site and recommend the right structure.",
        resourceLink: {
          href: "/resources/tent-sizing-guide",
          label: "Use the full tent sizing guide →",
        },
      },
    ],
    pricingNote:
      "Sterling Event Rentals has a $500 minimum rental order. Every wedding quote includes equipment, delivery, and setup as separate named line items before you confirm. We recommend booking 3–6 months in advance for peak season dates.",
    faqs: [
      {
        question: "Do you rent tents for outdoor weddings?",
        answer:
          "Yes. Wedding tent rentals are one of our core services. We offer frame and pole tent structures from small ceremony canopies to large reception tents for 300+ guests. Every tent order includes delivery, setup, and teardown by our crew.",
      },
      {
        question: "What is the minimum order for a wedding rental?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order. Delivery and setup are quoted as separate named line items — not bundled into the equipment total — so you see exactly what each cost is before you confirm.",
      },
      {
        question: "Do you do full-service wedding setups?",
        answer:
          "Yes. Every order includes delivery, full setup, and teardown by our crew. We arrive on schedule, assemble everything before your ceremony or reception begins, and return after the event to take it all down. You don't manage logistics.",
      },
      {
        question: "Can you provide chairs and tables as well as a tent?",
        answer:
          "Yes. We supply tent structures, round and rectangular banquet tables, cocktail tables, chiavari and cross-back chairs, and linen options — as a package or à la carte. Everything is quoted as a single order with one delivery and setup.",
      },
      {
        question: "Do you offer champagne walls or bar setups for weddings?",
        answer:
          "Yes. Champagne walls and portable bar setups are available as add-ons to wedding orders. We also provide lounge furniture and other décor extras for cocktail hours and outdoor reception spaces.",
      },
      {
        question: "How far in advance should we book?",
        answer:
          "3–6 months in advance for peak season weekend dates (May through October). Saturdays book fastest. Call (773) 692-7576 to check your specific date — availability varies by season.",
      },
      {
        question: "Do you deliver to wedding venues outside Chicago?",
        answer:
          "Yes. We deliver to wedding venues throughout the Chicago metro — private estates on the north shore, park district outdoor spaces in the suburbs, hotel and country club grounds, and venues across Naperville, Orland Park, and surrounding communities.",
      },
      {
        question: "Are you insured for wedding venue requirements?",
        answer:
          "Yes. Sterling Event Rentals is fully licensed and insured in Illinois and SIOTO Safety Seal certified (SIOTO operator safety training; verify at sioto.com). We can provide certificates of insurance and certification documentation for wedding venues, country clubs, and park districts that require vendor verification.",
      },
    ],
    resourceLinks: [
      { href: "/resources/tent-sizing-guide", label: "Wedding tent sizing guide" },
      { href: "/resources/outdoor-event-planning", label: "Outdoor event planning guide" },
      { href: "/packages/pricing", label: "Download price list (PDF)" },
      { href: "/event-rental-pricing-chicago", label: "Event rental pricing" },
      { href: "/packages", label: "View rental packages" },
      { href: "/services/event-extras", label: "Champagne walls & event extras" },
    ],
    schemaEventType: "SocialEvent",
    heroBackgroundImage: {
      src: "/images/outdoor-event-planning/outdoor-wedding.webp",
      alt: "Outdoor wedding reception under a white tent with banquet tables and string lights.",
    },
    heroScrim: "light",
    heroGradient: { from: "#1a0a2e", to: "#060210" },
    midGradient: { from: "#2a1540", to: "#0d0620" },
    aboutSectionImage: {
      src: "/images/outdoor-event-planning/Elegant%20Outdoor%20Wedding%20Scene.webp",
      alt: "Elegant outdoor wedding tent with dining tables on a lawn, Chicago skyline and Lake Michigan in the background.",
    },
    midBreakImage: {
      src: "/images/outdoor-event-planning/Elegant%20Cityscape%20Event%20Setup.webp",
      alt: "Formal wedding reception space with banquet tables and Chicago skyline visible through floor-to-ceiling windows at dusk.",
    },
    detailsSectionImage: {
      src: "/images/outdoor-event-planning/Elegant%20Outdoor%20Event%20Tent.webp",
      alt: "Outdoor wedding reception under a white peak tent with long dining tables and the Chicago skyline in the distance.",
    },
  },

  "private-parties": {
    slug: "private-parties",
    name: "Private Parties & Social Events",
    tagline: "Backyard parties, milestone birthdays, graduations, and social gatherings across the Chicago area.",
    title: "Private Party & Backyard Tent Rental Chicago IL | Sterling",
    description:
      "Sterling Event Rentals delivers tent, table, chair, and entertainment rentals for private parties and social events across the Chicago area — backyard graduations, milestone birthdays, quinceañeras, and outdoor gatherings. $500 minimum. Call (773) 692-7576.",
    h1: "Private party & social event rentals — Chicago area backyard & outdoor events",
    quickAnswer:
      "Sterling Event Rentals provides full-service rentals for private parties and social events throughout the Chicago metro area — backyard graduation parties, milestone birthday celebrations, quinceañeras, family reunions, and outdoor social gatherings. We deliver tents, tables, chairs, entertainment, and décor extras with professional setup and teardown on every order. The minimum rental order is $500. Call (773) 692-7576 to get a quote for your event.",
    eyebrow: "Private Parties & Social Events",
    heroDescriptor: "Backyard and outdoor social event rentals with full delivery and setup.",
    bodyParagraphs: [
      "From graduation parties in Naperville backyards to quinceañeras in Chicago's Pilsen neighborhood and milestone birthdays on the north shore, Sterling Event Rentals handles the setup so you can focus on the celebration.",
      "Private events are our roots. We started by serving backyard parties and social gatherings, and it's still a big part of who we are. Whether you need a 20×20 tent for 40 guests or a 40×60 structure for a 200-person block party, we show up with the right equipment, set it up completely, and pick it up after.",
      "Every private party rental includes professional delivery, full setup by our crew, and teardown after your event window. You don't move a single chair. Upfront pricing with equipment, delivery, and setup as named line items before you confirm.",
    ],
    packages: [
      {
        icon: "⛺",
        title: "Party Tents & Canopies",
        body: "Frame tents from 20×20 for small backyard gatherings to 40×80+ for large block parties and family reunions. Proper anchoring for residential lots, parks, and outdoor venues.",
      },
      {
        icon: "🪑",
        title: "Tables & Chairs",
        body: "Round tables, rectangular tables, and cocktail tables. Folding, cross-back, and chiavari chairs. Linen upgrades. Full packages or individual items — whatever your event needs.",
      },
      {
        icon: "🎠",
        title: "Games & Entertainment",
        body: "Mechanical bulls, bounce houses, photo booths, foam machines, and more. Built for the kind of events people actually remember — and talk about for years.",
      },
      {
        icon: "🍾",
        title: "Event Extras & Décor",
        body: "Champagne walls, portable bars, and lounge furniture. The finishing pieces that make a backyard party look like a real event.",
      },
      {
        icon: "🎤",
        title: "Stages & Risers",
        body: "Modular staging for DJ setups, live bands, and presentation moments at larger private events and milestone celebrations.",
      },
      {
        icon: "🚚",
        title: "Full-Service Delivery",
        body: "Professional delivery, setup, and teardown by our crew on every order. We work around your event window. You focus on your guests.",
      },
    ],
    h2Sections: [
      {
        question: "What do I need to rent for a backyard party tent?",
        answer:
          "For a typical backyard party, you'll need a tent sized for your guest count (10–12 square feet per seated guest), tables and chairs, and delivery and setup service. Many private party clients also add entertainment items like bounce houses or photo booths, linen packages, and décor extras. Sterling will walk you through options when you call — we'll ask about your guest count, available outdoor space, and event format and build a quote around it. Call (773) 692-7576 or submit the contact form to get started.",
        resourceLink: {
          href: "/resources/tent-sizing-guide",
          label: "Use the tent sizing guide →",
        },
      },
      {
        question: "How much does it cost to rent a tent for a backyard party?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order. A 20×20 frame tent for a small gathering of 30–40 guests, with basic tables and chairs, typically falls in the $800–$1,500 range depending on setup requirements. Larger tents for 100–200 guests run higher. Every quote is itemized — you see the equipment cost, delivery fee, and setup as separate line items before you confirm. No bundled pricing, no surprise charges.",
        resourceLink: {
          href: "/event-rental-pricing-chicago",
          label: "See full rental pricing →",
        },
      },
      {
        question: "Do you rent equipment for graduation parties?",
        answer:
          "Yes. Graduation party rentals are among our most common bookings every May and June. We provide tents, tables, chairs, and entertainment for graduation parties ranging from 30-person backyard celebrations to large 150+ guest events. We recommend booking 2–3 weeks in advance for May and June graduation season. Call (773) 692-7576 to check availability for your date.",
      },
      {
        question: "Can you set up a tent in my backyard?",
        answer:
          "Yes, in most cases. We anchor frame tents with stakes and ballast weights depending on your surface type. We'll ask about your yard dimensions, surface type (grass, pavers, concrete), and any overhead obstructions when you call. We assess access and anchoring requirements before confirming the order. Call (773) 692-7576 to discuss your specific backyard setup.",
      },
    ],
    pricingNote:
      "Sterling Event Rentals has a $500 minimum rental order for private parties. Delivery and setup are quoted as separate named line items before you confirm — no hidden fees at delivery.",
    faqs: [
      {
        question: "Do you rent tents for backyard parties?",
        answer:
          "Yes. Backyard tent rentals are one of our most common services. We provide frame tents from 20×20 for small gatherings to large structures for 200+ guests. Every tent order includes delivery, setup, and teardown by our crew.",
      },
      {
        question: "What is the minimum order for a private party rental?",
        answer:
          "Sterling Event Rentals has a $500 minimum rental order. Delivery and setup are quoted as separate named line items — not bundled into the equipment total — so you see exactly what each cost is before you confirm.",
      },
      {
        question: "Do you do graduation party rentals?",
        answer:
          "Yes. Graduation parties are among our most common bookings in May and June. We recommend booking 2–3 weeks in advance for graduation season. Call (773) 692-7576 to check availability for your date.",
      },
      {
        question: "Do you provide bounce houses and entertainment for private parties?",
        answer:
          "Yes. Bounce houses, mechanical bulls, photo booths, and foam machines are all available to add to a private party rental order. Popular for family reunions, graduation parties, and milestone celebrations.",
      },
      {
        question: "Can you set up in a residential backyard?",
        answer:
          "Yes. We regularly set up tents in residential backyards across Chicago and the suburbs. We'll assess your yard dimensions, surface type, and access when you call. Most standard backyards can accommodate a 20×20 or 20×30 tent.",
      },
      {
        question: "Do you rent champagne walls or bar setups for parties?",
        answer:
          "Yes. Champagne walls, portable bar setups, and lounge furniture are available as add-ons. Popular for milestone birthdays, quinceañeras, and outdoor celebrations.",
      },
      {
        question: "How far in advance should I book a private party rental?",
        answer:
          "We recommend 2–3 weeks minimum. Graduation season (May–June) and peak summer weekends book faster — sometimes 4–6 weeks out. Call (773) 692-7576 to check availability for your specific date.",
      },
      {
        question: "Do you serve private parties in the suburbs?",
        answer:
          "Yes. We deliver to private parties throughout the Chicago metro — from Chicago neighborhoods like Pilsen and Beverly to Naperville, Orland Park, and the north shore suburbs. Call (773) 692-7576 with your venue address to confirm delivery.",
      },
    ],
    resourceLinks: [
      { href: "/resources/tent-sizing-guide", label: "Tent sizing guide" },
      { href: "/resources/outdoor-event-planning", label: "Outdoor event planning guide" },
      { href: "/event-rental-pricing-chicago", label: "Event rental pricing" },
      { href: "/packages", label: "View event packages" },
      { href: "/services/games-entertainment", label: "Games & entertainment rentals" },
    ],
    schemaEventType: "SocialEvent",
    heroBackgroundImage: {
      src: "/images/outdoor-event-planning/private-parties-backyard.webp",
      alt: "Backyard private party with a white tent, tables, and seating on a residential lawn.",
    },
    heroScrim: "light",
    heroGradient: { from: "#1f0a0a", to: "#080202" },
    midGradient: { from: "#2e1010", to: "#120404" },
    aboutSectionImage: {
      src: "/images/outdoor-event-planning/backyard-chicago-wedding.webp",
      alt: "Backyard wedding or private celebration setup with tent and tables in a Chicago-area residential outdoor space.",
    },
    midBreakImage: {
      src: "/images/outdoor-event-planning/Outdoor%20Graduation%20Celebration%202024.webp",
      alt: "Outdoor graduation ceremony with Class of 2024 marquee, tent, and seating on a turf field with Chicago skyline beyond.",
    },
    detailsSectionImage: {
      src: "/images/outdoor-event-planning/graduation-chicago.webp",
      alt: "Outdoor graduation ceremony setup in Chicago with tent, stage, and seating for guests.",
    },
  },
};
