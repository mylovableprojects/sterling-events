export const SERVICE_SLUGS = [
  "tents-structures-chicago",
  "tables-seating-chicago",
  "stages-presentation-chicago",
  "games-entertainment-chicago",
  "event-extras-chicago",
  "delivery-setup-teardown-chicago",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type ServicePageData = {
  title: string;
  description: string;
  label: string;
  h1: string;
  serviceName: string;
  serviceType: string;
  quickAnswer: string;
  keyTakeaways: string;
  processSteps: string[];
  proofCopy: string;
  faqs: { question: string; answer: string }[];
  ctaCopy: string;
  /** CTA for packages link, e.g. "See tent packages →" */
  packagesCta: string;
  /** Optional secondary end-of-page CTA, e.g. "See Our Packages →" */
  secondaryCta?: { href: string; label: string };
  /** Optional contextual resource link, e.g. tent sizing guide */
  contextualResource?: { href: string; label: string };
  /** Optional contextual answer links */
  contextualAnswers?: { href: string; label: string }[];
  /** 2–3 sibling services for "You may also need" */
  siblingServices: { href: string; label: string }[];
  /** Optional cross-link matrix links with exact anchor text */
  crossLinks?: { href: string; label: string }[];
  /** Optional H2 sections (question + 3–5 sentence answer each) for AEO */
  h2Sections?: { question: string; answer: string }[];
  /** Optional "Who this service is for" bullets (e.g. corporate, wedding, private) */
  whoItsFor?: string[];
  /** Optional "What's included" list from business context */
  whatsIncluded?: string[];
  /** Optional contextual links to weave into body (rendered as a block after content) */
  bodyInternalLinks?: { href: string; label: string }[];
  /** Optional hero subheadline (below H1, above Quick Answer) */
  heroSubheadline?: string;
  /** Optional intro paragraph (after Quick Answer, before first H2) */
  introParagraph?: string;
  /** Optional tent size reference table (after first H2 on tent page) */
  tentSizeTable?: {
    rows: { guestCount: string; size: string; bestFor: string }[];
    note: string;
  };
  /** Optional trust strip (icon + headline + sentence each), after Who this service is for */
  trustStrip?: { title: string; body: string }[];
  /** Optional process block (headline + steps + note), after What's included */
  processBlock?: {
    headline: string;
    steps: { title: string; body: string }[];
    note: string;
  };
  /** Optional paragraph to show after the weather H2 (tents page) */
  chicagoWeatherParagraph?: string;
  /** Optional CTA headline and subheadline above the primary CTA button */
  ctaHeadline?: string;
  ctaSubheadline?: string;
  /** Optional image slot labels for 8-section layout (placeholder overlays). */
  heroImageLabel?: string;
  /** Optional full-bleed hero background (e.g. photography behind headline). */
  heroImageSrc?: string | null;
  heroImageAlt?: string;
  section2PhotoGridLabels?: string[];
  section2PhotoGridSrcs?: (string | null)[];
  section3ImageLabel?: string;
  section3ImageSrc?: string | null;
  section4InlinePhotoLabel?: string;
  section6ImageLabel?: string;
  section6ImageSrc?: string | null;
  /** Optional footer text links below CTA (e.g. Tent Sizing Guide, See all services). */
  ctaFooterLinks?: { href: string; label: string }[];
};

export const SERVICE_PAGE_DATA: Record<ServiceSlug, ServicePageData> = {
  "tents-structures-chicago": {
    title: "Tent Rentals in Chicago | Sterling Event Rentals",
    description:
      "Professional tent rentals for corporate events, weddings, and private parties in Chicago, Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and across Chicagoland. Sizes from 20x20 to 40x80+. Licensed, insured, SIOTO certified. Get a quote.",
    label: "Tents & Structures",
    h1: "Tent Rentals in Chicago",
    serviceName: "Tent & Structure Rentals Chicago",
    serviceType: "Tent Rental",
    quickAnswer:
      "Sterling Event Rentals provides professional tent and structure rentals for outdoor events across Chicago and Chicagoland. Available sizes range from 20x20 for smaller gatherings to 40x80+ for large corporate and wedding events. Every rental includes delivery, setup, and teardown by our certified crew.",
    heroSubheadline:
      "When the tent goes up right, the rest of the day falls into place.",
    introParagraph:
      "We set up tents for corporate picnics, outdoor weddings, milestone parties, school events, and park district events across Chicago and the suburbs. Our crew brings the tent, sets it up, and tears it down—you don't lift a thing. When you're putting a structure over dozens or hundreds of people, that's why we're SIOTO Safety Seal certified: SIOTO (Safe Inflatable Operators Training Organization) documents nationally recognized operator safety training you can verify online — it complements insurance and venue paperwork; it does not replace local permits.",
    tentSizeTable: {
      rows: [
        { guestCount: "25–50 guests", size: "20×20", bestFor: "Backyard parties, small corporate gatherings" },
        { guestCount: "50–100 guests", size: "20×40", bestFor: "Corporate picnics, birthday parties, graduations" },
        { guestCount: "100–150 guests", size: "30×45 or 30×60", bestFor: "Weddings, large corporate events" },
        { guestCount: "150–300+ guests", size: "40×80 or multi-structure", bestFor: "Large weddings, company-wide events" },
      ],
      note:
        "Add 20–25% more tent square footage if you're including a stage, dance floor, or buffet tables. Not sure what you need? Call us — we'll size it with you.",
    },
    trustStrip: [
      {
        title: "SIOTO Safety Seal Certified",
        body: "SIOTO (Safe Inflatable Operators Training Organization) operator safety training — verifiable at sioto.com. Complements insurance; not a substitute for venue permits.",
      },
      {
        title: "Full-Service Crew",
        body: "We deliver, set up, and tear down. You don't touch a thing.",
      },
      {
        title: "Serving Chicagoland Since 2021",
        body: "Four years of corporate events, weddings, and private parties across the Chicago area.",
      },
    ],
    processBlock: {
      headline: "Here's exactly what happens when you book a tent rental",
      steps: [
        {
          title: "You book and we confirm",
          body: "Call or fill out the form with your date, guest count, and venue. We confirm availability and send a full quote — setup fee included, no surprises.",
        },
        {
          title: "Our crew handles everything on-site",
          body: "We arrive before your event window, set up the full structure, and make sure everything is secure before your first guest arrives.",
        },
        {
          title: "We come back and take it all down",
          body: "After your event, our crew returns for teardown. You walk away — we handle the rest.",
        },
      ],
      note: "Setup fee is separate from the equipment rental cost and is quoted upfront. No hidden fees added after booking.",
    },
    chicagoWeatherParagraph:
      "Chicago weather is part of the deal: spring rain, summer heat, and October wind can all show up on the same weekend. For most outdoor events here—whether it's Millennium Park, a forest preserve, or a corporate campus—a tent isn't optional; it's the contingency plan. Sidewalls turn that tent into real shelter when the wind picks up or a shower rolls through. We won't set up in forecasted unsafe conditions. That's not a loophole—it's our crew and certification making sure we don't put guests under a structure when it isn't safe.",
    ctaHeadline: "Ready to lock in your tent?",
    ctaSubheadline:
      "Tell us your date, guest count, and venue — we'll confirm availability and send a full quote.",
    keyTakeaways: "",
    processSteps: [],
    proofCopy: "",
    heroImageLabel: "Tent setup — corporate event",
    heroImageSrc: "/images/outdoor-event-planning/stage_rentals_chicago.webp",
    heroImageAlt: "Outdoor event stage and rental setup in Chicago",
    section2PhotoGridLabels: [
      "Exterior tent setup",
      "Crew installing structure",
      "Guests under tent — corporate event",
    ],
    section2PhotoGridSrcs: [
      "/images/outdoor-event-planning/tent-rentals-in-chicago-area.webp",
      "/images/outdoor-event-planning/south-chicago-tent-rentals.webp",
      "/images/outdoor-event-planning/Setting-up-for-an-outdoor%20event.webp",
    ],
    section3ImageLabel: "Tent interior — tables and chairs setup",
    section3ImageSrc: "/images/outdoor-event-planning/Global%20Corp%20Picnic%20Bash.png",
    section6ImageLabel: "Crew setup — tent installation in progress",
    section6ImageSrc: "/images/outdoor-event-planning/tent-setup.webp",
    ctaFooterLinks: [
      { href: "/resources/tent-sizing-guide", label: "Tent Sizing Guide" },
      { href: "/resources/chicago-tent-permits", label: "Chicago Permit Guide" },
      { href: "/services", label: "See all services" },
    ],
    whoItsFor: [
      "Corporate event planners who need vendor credibility, on-time delivery, and a dedicated day-of contact for tent and structure setup.",
      "Wedding couples and coordinators who want clear weather policy, tent sizing guidance, and full-service setup so the day runs smoothly.",
      "Private hosts (birthdays, graduations, reunions) who want a single vendor for tent, delivery, and teardown without managing logistics.",
    ],
    whatsIncluded: [
      "Professional tent and structure rentals for outdoor events (sizes from 20x20 to 40x80+).",
      "Delivery, setup, and teardown by Sterling's crew (setup fee is separate from unit cost and quoted upfront).",
      "Permits are the customer's responsibility; Sterling does not pull permits. Sterling will not set up in forecasted unsafe weather.",
    ],
    faqs: [
      {
        question: "What is included in Sterling's tent rental quote?",
        answer:
          "Your quote covers the tent structure (or structures), professional delivery, full install, and post-event teardown by our crew — plus any add-ons you selected such as sidewalls. The setup fee is always its own line item next to equipment so nothing hides in a bundled total. A $500 company minimum applies. Permits remain your responsibility; we're happy to explain thresholds, but we do not file permits for you.",
      },
      {
        question: "What happens if the weather is bad on the day of my event?",
        answer:
          "Sterling will not set up in forecasted unsafe conditions. If weather is unsafe before setup begins, we work with you to reschedule when possible. Once delivery and setup are complete, no refund is issued. For Chicago wind and rain, tent sidewalls are a practical add-on for weather protection during the event. Refund timing and exceptions are spelled out at /legal/cancellation-policy and in your written quote.",
      },
      {
        question: "Do you need a permit for a tent in Chicago?",
        answer:
          "In Chicago, tents over a certain size typically require a permit from the city. The permit is the customer's responsibility—Sterling does not pull permits on behalf of clients. We can point you to requirements and timing. See our Chicago tent permit guide for how to apply.",
      },
      {
        question: "Can you set up a tent in a park or public space?",
        answer:
          "Yes, when the site allows it. Permits for parks and public spaces are the customer's responsibility. We need clear access for our truck and crew. Share your venue when you request a quote so we can confirm feasibility.",
      },
      {
        question: "Can you set up a tent on concrete, asphalt, or a driveway?",
        answer:
          "Often, yes — but it depends on your surface and the setup area. Hard surfaces can change what’s possible for anchoring and placement, and some venues have their own rules. Share your venue address and setup area details when you request a quote and we’ll confirm feasibility and recommend the right setup.",
      },
      {
        question: "Can you heat or cool a tent for an event?",
        answer:
          "Comfort depends on your date, tent size, sidewalls, and whether it’s a daytime or evening event. Tell us your timing and venue when you request a quote and we’ll recommend a weather-ready setup and confirm what comfort add-ons are available for your order.",
      },
      {
        question: "How do I reserve a tent for my event date?",
        answer:
          "Call (773) 692-7576 or use the contact form. We confirm availability and send a quote. A 50% deposit holds your date; the balance is due at or before delivery.",
      },
    ],
    ctaCopy: "Check Availability for Your Date",
    packagesCta: "See tent packages →",
    secondaryCta: { href: "/packages", label: "See Our Packages →" },
    contextualResource: { href: "/resources/tent-sizing-guide", label: "Not sure what size?" },
    contextualAnswers: [
      { href: "/answers/do-i-need-permit-tent-chicago", label: "Do I need a permit?" },
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Weather policy" },
    ],
    siblingServices: [
      { href: "/services/tables-seating-chicago", label: "Tables & Seating" },
      { href: "/services/stages-presentation-chicago", label: "Stages & Presentation" },
      { href: "/services/delivery-setup-teardown-chicago", label: "Delivery & Setup" },
    ],
    crossLinks: [
      { href: "/services/tables-seating-chicago", label: "Most tent events also need tables and seating →" },
      { href: "/services/delivery-setup-teardown-chicago", label: "Every tent rental includes professional delivery and setup →" },
    ],
  },
  "tables-seating-chicago": {
    title: "Table & Chair Rentals in Chicago | Sterling Event Rentals",
    description:
      "Round, rectangular, and cocktail table rentals with matching chair options for events in Chicago, Evanston, Oak Park, Naperville, Schaumburg, and across Chicagoland. Linen upgrades available. Delivery and setup included.",
    label: "Tables & Seating",
    h1: "Table & Chair Rentals in Chicago",
    serviceName: "Table & Chair Rentals Chicago",
    serviceType: "Table and Chair Rental",
    heroSubheadline:
      "The right tables, the right chairs, clean and in place before your first guest arrives.",
    quickAnswer:
      "Sterling Event Rentals provides table and chair rental for events of all sizes across Chicago and Chicagoland. Options include round banquet tables, 6-ft and 8-ft rectangular tables, square tables, cocktail and high-top tables, and kids' tables. Chair styles include standard folding chairs, chiavari chairs, wooden crossback chairs, and kids' chairs. Linen upgrades are available. Every order includes delivery, setup, and teardown.",
    introParagraph:
      "We supply tables and chairs for corporate events, weddings, and private parties across Chicago and the suburbs. Round banquet tables, rectangular and high-top options, square tables, kids' tables, and chair upgrades like chiavari and wooden crossback pair with tent and stage rentals. Our crew delivers, sets up, and tears down—you get the layout you need without the logistics.",
    heroImageLabel: "Table and chair setup — event",
    heroImageSrc: "/images/outdoor-event-planning/wedding_chairs_chicago.webp",
    heroImageAlt: "Wedding reception tables and chairs set under lighting in Chicago",
    section2PhotoGridLabels: [
      "Round tables and chairs — reception",
      "Cocktail tables and seating",
      "Full room setup — corporate event",
    ],
    section2PhotoGridSrcs: [
      "/images/outdoor-event-planning/round-tables-seating.webp",
      "/images/outdoor-event-planning/cocktail_tables.webp",
      "/images/outdoor-event-planning/round_table_rentals_chicago.webp",
    ],
    section3ImageLabel: "Table layout — chairs and linens",
    section3ImageSrc: "/images/outdoor-event-planning/chairs-linens-chicago.webp",
    section6ImageLabel: "Crew setting up tables and chairs",
    section6ImageSrc: "/images/outdoor-event-planning/sterling-event-rentals.webp",
    processBlock: {
      headline: "Here's exactly what happens when you book",
      steps: [
        {
          title: "You book and we confirm",
          body: "Call or fill out the form with your date, guest count, and layout needs. We confirm availability and send a full quote — setup fee included, no surprises.",
        },
        {
          title: "Our crew handles everything on-site",
          body: "We deliver, set up tables and chairs, and make sure the layout is ready before your guests arrive.",
        },
        {
          title: "We come back and take it all down",
          body: "After your event, our crew returns for teardown. You walk away — we handle the rest.",
        },
      ],
      note: "Setup fee is separate from the equipment rental cost and is quoted upfront. No hidden fees added after booking.",
    },
    ctaFooterLinks: [
      { href: "/resources/tent-sizing-guide", label: "Tent sizing guide" },
      { href: "/packages", label: "Packages" },
      { href: "/services", label: "See all services" },
    ],
    trustStrip: [
      { title: "SIOTO Safety Seal Certified", body: "SIOTO (Safe Inflatable Operators Training Organization) operator safety training — verifiable at sioto.com. Complements insurance; not a substitute for venue permits." },
      { title: "Full-Service Crew", body: "We deliver, set up, and tear down. You don't touch a thing." },
      { title: "Serving Chicagoland Since 2021", body: "Four years of corporate events, weddings, and private parties across the Chicago area." },
    ],
    keyTakeaways: "",
    processSteps: [],
    proofCopy: "",
    h2Sections: [
      {
        question: "What types of tables and chairs does Sterling offer?",
        answer:
          "We offer round banquet tables, rectangular tables (6-ft and 8-ft folding), square tables, cocktail and high-top tables, and kids’ tables. Chair options include white folding chairs, chiavari chairs, wooden crossback chairs, and kids’ chairs. You can mix styles—for example, rounds with chiavaris for a reception and high-tops for the bar area. We’ll recommend quantities and styles based on your guest count and layout.",
      },
      {
        question: "How many tables and chairs do I need for my event?",
        answer:
          "It depends on your seating style and whether you’re doing a seated meal, reception, or mix. For 100 guests at round tables (8 per table), you’d need about 13 tables and 100 chairs plus a few spare. For a mix of seated and standing, we factor in buffet tables, head table, and cocktail tables. Share your guest count and format and we’ll propose a layout and quantities.",
      },
      {
        question: "Do you offer linen rentals with tables?",
        answer:
          "Yes. Linen upgrades are available as an add-on. You can add tablecloths for all tables and, for larger or more formal events, napkins in your choice of colors. Linens are a strong visual upgrade that photographs well—especially for weddings and branded corporate events. We’ll quote linens with your table and chair order.",
      },
      {
        question: "Are tables and chairs included in tent packages?",
        answer:
          "Yes. Every Sterling package includes tables and chairs—quantities and styles vary by package tier. The Ready Set includes up to 10 tables and 80 chairs; The Event Ready and The Sterling Experience include more tables, chairs, and options like round banquet tables and chiavari or cross-back chairs. Pairing tables with a tent? Our tent packages are built to include both.",
      },
      {
        question: "What is the minimum order for table and chair rentals?",
        answer:
          "A $500 minimum rental applies to all orders, including table and chair rental Chicago and Chicagoland clients book. Standalone table and chair orders count toward the minimum; most clients pair them with a tent or book a package. We’ll confirm the total when you request a quote.",
      },
    ],
    whoItsFor: [
      "Corporate event planners who need predictable quantities, a polished look, and options like high-tops for networking or linens that match brand colors.",
      "Wedding couples and coordinators who want a clear mix of round and rectangular tables, chair upgrades (chiavari, cross-back), and linen options for a cohesive reception.",
      "Private hosts (parties, reunions, graduations) who need simple table and chair counts, optional linens, and delivery and setup so they can focus on the event.",
    ],
    whatsIncluded: [
      "Full-range table and chair rentals: round banquet tables, rectangular tables (6-ft, 8-ft), square tables, cocktail and high-top tables, and kids' tables. Chair options include white folding chairs, chiavari chairs, wooden crossback chairs, and kids' chairs.",
      "Linen upgrades available as an add-on (tablecloths, napkins, color options).",
      "Delivery, setup, and teardown by Sterling's crew (setup fee is separate from unit cost and quoted upfront).",
    ],
    bodyInternalLinks: [
      { href: "/services/tents-structures-chicago", label: "Tent & Structure rentals" },
      { href: "/packages", label: "Event packages" },
      { href: "/services/stages-presentation-chicago", label: "Stage & Presentation rentals" },
      { href: "/contact", label: "Check availability" },
    ],
    faqs: [
      {
        question: "What table sizes do you carry?",
        answer:
          "We carry 6-ft and 8-ft rectangular folding tables, round banquet tables (typically 60-inch and 72-inch), square tables, cocktail and high-top tables, and kids' tables. Sizes and quantities are matched to your guest count and layout when you request a quote.",
      },
      {
        question: "What chair styles are available?",
        answer:
          "White folding chairs, chiavari chairs, wooden crossback chairs, and kids' chairs. Chiavari and crossback are popular upgrades for weddings and formal events. We can mix styles—for example, chiavaris at dinner tables and folding chairs at overflow or cocktail areas.",
      },
      {
        question: "Can I add linens to my order?",
        answer:
          "Yes. Linen upgrades are available as an add-on. Tablecloths for all tables and napkins in your color choice can be quoted with your order. Add them when you book so they’re included in your total.",
      },
      {
        question: "Do tables and chairs come with delivery?",
        answer:
          "Yes. Every Sterling order includes delivery, setup, and teardown. Our crew delivers, sets up, and picks up after the event. The setup fee is separate from the per-item rental cost and is quoted upfront.",
      },
      {
        question: "Do the tables and chairs arrive clean?",
        answer:
          "They should. Clean equipment is table stakes for a professional event. If anything arrives with an issue, tell us right away so we can address it before guests arrive. When you request a quote, share your venue access and timing so we can plan a smooth setup window.",
      },
      {
        question: "How do I calculate how many tables I need for 100 guests?",
        answer:
          "For round tables seating 8, plan about 13 tables and 100 chairs. For 6-ft rectangular tables (6–8 per table), you’d need roughly 13–17 tables. We’ll recommend exact quantities based on your layout, head table, buffet, and any cocktail or high-top needs.",
      },
      {
        question: "How much does it cost to rent tables and chairs for 100 guests?",
        answer:
          "It depends on your table mix (round vs. rectangular), chair style (standard vs. upgrades like chiavari or cross-back), linens, and delivery/setup access. Sterling quotes the full total upfront (equipment + setup fee + any delivery/access costs) and a $500 minimum applies. Share your date, venue, and layout and we’ll send an exact itemized quote.",
      },
      {
        question: "Can I add tables and chairs to an existing tent rental?",
        answer:
          "Yes. Tables and chairs can be added to any tent or package order. If you’ve already booked a tent, contact us with your updated guest count and we’ll add the right table and chair quantities and update your quote.",
      },
    ],
    ctaHeadline: "Ready to lock in your tables and seating?",
    ctaSubheadline: "Tell us your date, guest count, and layout — we'll confirm availability and send a full quote.",
    ctaCopy: "Check Availability for Your Date",
    packagesCta: "See table and seating packages →",
    secondaryCta: { href: "/packages", label: "See Our Packages →" },
    siblingServices: [
      { href: "/services/tents-structures-chicago", label: "Tents & Structures" },
      { href: "/services/stages-presentation-chicago", label: "Stages & Presentation" },
      { href: "/services/delivery-setup-teardown-chicago", label: "Delivery & Setup" },
    ],
    crossLinks: [
      { href: "/packages", label: "See full package pricing →" },
    ],
  },
  "stages-presentation-chicago": {
    title: "Stage & Riser Rentals in Chicago | Sterling Event Rentals",
    description:
      "Professional stage and riser rentals for corporate events, ceremonies, and presentations in Chicago, Naperville, Evanston, Schaumburg, and across Chicagoland. Scalable configurations. Delivery and setup included.",
    label: "Stages & Presentation",
    h1: "Stage & Riser Rentals in Chicago",
    serviceName: "Stage & Presentation Rentals Chicago",
    serviceType: "Stage Rental",
    heroSubheadline:
      "A professional stage is the difference between a program that runs and one that commands attention.",
    quickAnswer:
      "Sterling Event Rentals provides stage and riser rentals, podiums, pipe and drape, backdrops, and dance floors for corporate presentations, ceremonies, award shows, and outdoor performances across Chicago and Chicagoland. Stages can be combined with tent structures for fully covered setups. Every rental includes delivery, setup, and teardown.",
    introParagraph:
      "We provide stage and riser rentals, podiums, pipe and drape, backdrops, and dance floors for corporate presentations, ceremonies, and outdoor performances across Chicago and Chicagoland. Stages can be set up under a tent or standalone; pipe and drape and backdrops can define the event space or frame a presentation area. Our crew delivers, sets up, and tears down—you get a professional setup without the logistics.",
    heroImageLabel: "Stage setup — corporate event",
    heroImageSrc: "/images/outdoor-event-planning/stage_in_chicago.webp",
    heroImageAlt: "Professional stage rental setup for an event in Chicago",
    section2PhotoGridLabels: [
      "Stage under tent — ceremony",
      "Riser and presentation setup",
      "Stage with seating — event",
    ],
    section2PhotoGridSrcs: [
      "/images/outdoor-event-planning/tent-stage-rentals-chicago.webp",
      "/images/outdoor-event-planning/stage-rentals-chicago.webp",
      "/images/outdoor-event-planning/chicago-stair-rentals.webp",
    ],
    section3ImageLabel: "Stage and riser configuration",
    section3ImageSrc: "/images/outdoor-event-planning/Urban%20Stage%20by%20the%20Water.webp",
    section6ImageLabel: "Crew installing stage",
    section6ImageSrc: "/images/outdoor-event-planning/stage-setup-chicago.webp",
    processBlock: {
      headline: "Here's exactly what happens when you book",
      steps: [
        {
          title: "You book and we confirm",
          body: "Call or fill out the form with your date, venue, and stage needs. We confirm availability and send a full quote — setup fee included, no surprises.",
        },
        {
          title: "Our crew handles everything on-site",
          body: "We deliver, set up the stage or risers, and make sure everything is secure before your program begins.",
        },
        {
          title: "We come back and take it all down",
          body: "After your event, our crew returns for teardown. You walk away — we handle the rest.",
        },
      ],
      note: "Setup fee is separate from the equipment rental cost and is quoted upfront. No hidden fees added after booking.",
    },
    ctaFooterLinks: [
      { href: "/services/tents-structures-chicago", label: "Tents & Structures" },
      { href: "/services", label: "See all services" },
    ],
    trustStrip: [
      { title: "SIOTO Safety Seal Certified", body: "SIOTO (Safe Inflatable Operators Training Organization) operator safety training — verifiable at sioto.com. Complements insurance; not a substitute for venue permits." },
      { title: "Full-Service Crew", body: "We deliver, set up, and tear down. You don't touch a thing." },
      { title: "Serving Chicagoland Since 2021", body: "Four years of corporate events, weddings, and private parties across the Chicago area." },
    ],
    keyTakeaways: "",
    processSteps: [],
    proofCopy: "",
    h2Sections: [
      {
        question: "What size stage do I need for my event?",
        answer:
          "It depends on how many speakers or performers you have, whether you need space for a band or DJ, and how much room you want for movement. A small speaking setup might need a compact riser; a live band or award ceremony often needs a larger platform. Share your program and audience size and we’ll recommend a stage size and configuration that fits your tent or venue.",
      },
      {
        question: "Can a stage be set up under a tent?",
        answer:
          "Yes. Stages can be set up under a tent and are often combined with tent structures for fully covered setups. We’ll confirm dimensions so the stage fits comfortably inside your tent footprint and leave enough clearance for entry and sightlines. Combining a stage with a tent is common for corporate events, weddings, and outdoor ceremonies.",
      },
      {
        question: "Do you offer stage rentals for corporate events?",
        answer:
          "Yes. Corporate presentations, company meetings, award ceremonies, and product launches are a core use. We offer scalable configurations, professional setup and teardown, and can coordinate with your tent and table layout. Corporate clients often book 21–30 days out; we’ll confirm availability and quote delivery and setup upfront.",
      },
      {
        question: "What is included in a stage rental?",
        answer:
          "Every stage rental Chicago and Chicagoland clients book with Sterling includes the platform, delivery to your location, full setup by our crew, and teardown after the event. The setup fee is separate from the per-item rental cost and is quoted upfront. Stage extensions are available as an add-on. We also offer podiums, pipe and drape, backdrops, and dance floors — all can be added to your stage order or booked separately.",
      },
      {
        question: "How do I book a stage for my event?",
        answer:
          "Call (773) 692-7576 or use the contact form. Share your event date, venue, audience size, and whether you need the stage under a tent or standalone. We’ll confirm availability, recommend a size, and send a quote. A 50% deposit holds your date.",
      },
    ],
    whoItsFor: [
      "Corporate event planners who need a reliable platform for presentations, awards, or live elements and want it sized and set up under their tent or in their venue.",
      "Wedding couples and coordinators who want a stage for the ceremony, toasts, or band and need it combined with their tent and layout.",
      "Private hosts (reunions, fundraisers, community events) who need a simple raised platform for speakers or entertainment with delivery and setup handled.",
    ],
    whatsIncluded: [
      "Stage and riser rentals for corporate presentations, ceremonies, performances, and speeches. Available in various configurations. Stage extensions available as an add-on.",
      "Podiums, pipe and drape, backdrops, and dance floors available as standalone rentals or as add-ons to a stage or tent order.",
      "Stages can be combined with tent structures for fully covered setups. Delivery, setup, and teardown by Sterling's crew (setup fee is separate from unit cost and quoted upfront).",
    ],
    bodyInternalLinks: [
      { href: "/services/tents-structures-chicago", label: "Tent & Structure rentals" },
      { href: "/services/games-entertainment-chicago", label: "Games & Entertainment" },
      { href: "/packages", label: "Event packages" },
      { href: "/contact", label: "Check availability" },
    ],
    faqs: [
      {
        question: "Do you offer stage extensions?",
        answer:
          "Yes. Stage extensions are available as an add-on to widen or extend your platform. Ask when you request a quote if you need more space for a band, multiple speakers, or equipment.",
      },
      {
        question: "Can a stage be combined with a tent rental?",
        answer:
          "Yes. Stages are often set up inside or under a tent for corporate events, weddings, and ceremonies. We’ll size the stage to fit your tent and confirm the layout so sightlines and flow work for your event.",
      },
      {
        question: "What is the lead time for staging rentals?",
        answer:
          "For corporate events we recommend booking 21–30 days in advance. For weddings and large events, booking earlier helps secure your date. Contact us with your date and we’ll confirm availability.",
      },
      {
        question: "Is a stage rental right for an outdoor ceremony?",
        answer:
          "Yes. A low riser or stage can define the ceremony space and improve sightlines for guests. We can set it under your tent so the ceremony is covered. Sizing depends on your party size and whether you want room for an arch or floral arrangements.",
      },
      {
        question: "Do you offer risers for smaller presentations?",
        answer:
          "Yes. We offer risers as well as full stages, so you can choose the right height and footprint for a single speaker, panel, or small performance. Ask for riser options when you request a quote.",
      },
      {
        question: "Do you rent dance floors?",
        answer:
          "Yes. Dance floor rentals are available and can be set up under a tent or in an open outdoor area. Size depends on your guest count and how much space you want for dancing. We'll recommend dimensions and placement when you request a quote.",
      },
      {
        question: "Do you offer podiums, pipe and drape, or backdrops?",
        answer:
          "Yes. Podiums, pipe and drape, and backdrops are available as add-ons to any stage or tent order or as standalone rentals. Pipe and drape is commonly used to define the event space or create a professional backdrop for presentations. Backdrops work well for ceremonies, photo moments, and branded corporate events.",
      },
    ],
    ctaHeadline: "Ready to lock in your stage?",
    ctaSubheadline: "Tell us your date, venue, and program — we'll confirm availability and send a full quote.",
    ctaCopy: "Check Availability for Your Date",
    packagesCta: "See stage packages →",
    secondaryCta: { href: "/packages", label: "See Our Packages →" },
    siblingServices: [
      { href: "/services/tents-structures-chicago", label: "Tents & Structures" },
      { href: "/services/tables-seating-chicago", label: "Tables & Seating" },
      { href: "/services/games-entertainment-chicago", label: "Games & Entertainment" },
    ],
    crossLinks: [
      { href: "/services/games-entertainment-chicago", label: "Add games & entertainment to your stage setup →" },
    ],
  },
  "games-entertainment-chicago": {
    title: "Games & Entertainment Rentals in Chicago | Sterling Event Rentals",
    description:
      "Mechanical bull and photo booth rentals for corporate events and private parties in Chicago, Oak Park, Naperville, Evanston, and across Chicagoland. Delivery and setup included.",
    label: "Games & Entertainment",
    h1: "Games & Entertainment Rentals in Chicago",
    serviceName: "Games & Entertainment Rentals Chicago",
    serviceType: "Event Games and Entertainment Rental",
    heroSubheadline:
      "Give your guests something to do — and something to talk about after.",
    quickAnswer:
      "Sterling Event Rentals provides games and entertainment rentals for corporate events, private parties, and weddings across Chicago and Chicagoland. We offer mechanical bulls and photo booths — available as standalone rentals or as add-ons to any package. Every order includes delivery, setup, and teardown.",
    introParagraph:
      "We offer mechanical bulls and photo booths for corporate events, weddings, and private parties across Chicago and Chicagoland. Add one or both to your tent or package for guest engagement and memorable moments. Our crew delivers, sets up, and tears down.",
    heroImageLabel: "Interactive game — corporate event",
    heroImageSrc: "/images/outdoor-event-planning/chicago-bull-rental.webp",
    heroImageAlt: "Mechanical bull rental at a corporate event in Chicago",
    section2PhotoGridLabels: [
      "Mechanical bull — corporate event",
      "Photo booth — wedding reception",
    ],
    section2PhotoGridSrcs: [
      "/images/outdoor-event-planning/chicago-bull-rental.webp",
      "/images/outdoor-event-planning/360-photobooth-chicago.webp",
    ],
    section3ImageLabel: "Interactive installation setup",
    section3ImageSrc: "/images/outdoor-event-planning/bull-rental-chicago.webp",
    section6ImageLabel: "Crew setting up game installation",
    section6ImageSrc: "/images/outdoor-event-planning/360-photobooth-chicago.webp",
    processBlock: {
      headline: "Here's exactly what happens when you book",
      steps: [
        {
          title: "You book and we confirm",
          body: "Call or fill out the form with your date and which installations you want. We confirm availability and send a full quote — setup fee included, no surprises.",
        },
        {
          title: "Our crew handles everything on-site",
          body: "We deliver, set up the games or activations, and place them where you want them for your event.",
        },
        {
          title: "We come back and take it all down",
          body: "After your event, our crew returns for teardown. You walk away — we handle the rest.",
        },
      ],
      note: "Setup fee is separate from the equipment rental cost and is quoted upfront. No hidden fees added after booking.",
    },
    ctaFooterLinks: [
      { href: "/packages/pricing", label: "Full price list (PDF)" },
      { href: "/resources/corporate-event-checklist", label: "Corporate event checklist" },
      { href: "/services", label: "See all services" },
    ],
    trustStrip: [
      { title: "SIOTO Safety Seal Certified", body: "SIOTO (Safe Inflatable Operators Training Organization) operator safety training — verifiable at sioto.com. Complements insurance; not a substitute for venue permits." },
      { title: "Full-Service Crew", body: "We deliver, set up, and tear down. You don't touch a thing." },
      { title: "Serving Chicagoland Since 2021", body: "Four years of corporate events, weddings, and private parties across the Chicago area." },
    ],
    keyTakeaways: "",
    processSteps: [],
    proofCopy: "",
    h2Sections: [
      {
        question: "What games and entertainment does Sterling rent in Chicago?",
        answer:
          "We offer mechanical bulls and photo booths. Both work for outdoor and tented events — from corporate picnics and private parties to weddings. You can book one or both. We’ll recommend what fits your space, guest count, and audience.",
      },
      {
        question: "Are games and entertainment rentals available for corporate events?",
        answer:
          "Yes. Corporate picnics, team events, and client gatherings are a strong fit. Mechanical bulls make a high-energy centerpiece; photo booths drive engagement and social sharing and can be branded for your company. These sit alongside the tent, stage, and seating so guests can move between the formal program and the fun.",
      },
      {
        question: "Can I add games or activations to my existing package?",
        answer:
          "Yes. Interactive installations are available as add-ons to any tent or package order. If you’ve already booked The Event Ready or The Sterling Experience, you can add one or more installations to your quote. We’ll confirm placement, space, and pricing so everything is included before you confirm.",
      },
      {
        question: "What’s the difference between games and entertainment rentals and standard equipment rentals?",
        answer:
          "Standard rentals are functional (tents, tables, chairs, stages). Games and entertainment rentals are experience-focused: they give guests an activity or a photo moment. They’re often added on top of a base package to increase engagement and social sharing. Delivery, setup, and teardown are included for both; we’ll quote them with your main order.",
      },
    ],
    whoItsFor: [
      "Corporate event planners who want guest engagement beyond the program — a mechanical bull or photo booth that fits team events, picnics, and client gatherings, often with branding options.",
      "Wedding couples and coordinators who want a photo booth for the cocktail hour or reception so guests have something to do and a memory to take home.",
      "Private hosts (birthdays, reunions, block parties) who want a high-energy centerpiece or photo moment without building a full program.",
    ],
    whatsIncluded: [
      "Games and entertainment rentals: mechanical bulls and photo booths.",
      "Available as standalone rentals or as add-ons to any tent or package.",
      "Delivery, setup, and teardown by Sterling's crew (setup fee is separate from unit cost and quoted upfront).",
    ],
    bodyInternalLinks: [
      { href: "/services/tents-structures-chicago", label: "Tent & Structure rentals" },
      { href: "/packages", label: "The Sterling Experience package" },
      { href: "/resources/corporate-event-checklist", label: "Corporate event planning checklist" },
      { href: "/contact", label: "Check availability" },
    ],
    faqs: [
      {
        question: "What game options are available?",
        answer:
          "We offer mechanical bull rentals and photo booths. Mechanical bulls work for corporate events, private parties, and anyone who wants a high-engagement centerpiece. Photo booths are a popular add-on for weddings and corporate gatherings. We can suggest what fits your event type and space when you request a quote.",
      },
      {
        question: "Do you rent mechanical bulls in Chicago?",
        answer:
          "Yes. Mechanical bull rentals are available for corporate events, private parties, and social events across Chicago and Chicagoland. Our crew delivers, sets up the bull and the surrounding safety mats, and tears it all down after. Share your date and event details when you request a quote.",
      },
      {
        question: "Can I add a photo booth to my event?",
        answer:
          "Yes. Photo booth rentals are available and work well for weddings, corporate events, and private parties. We’ll quote placement and setup with your order.",
      },
      {
        question: "Do interactive installations require extra space under the tent?",
        answer:
          "Some need a clear area; we’ll confirm footprint when you book. Games can sit just outside the tent or in a corner inside. Photo activations often need a few feet of clearance. We’ll work with your tent and table layout so everything fits.",
      },
      {
        question: "Are game rentals available without a full package?",
        answer:
          "Yes. You can rent interactive installations on their own, though a $500 minimum applies to all orders. Many clients add them to a tent or package. We’ll quote based on what you need.",
      },
      {
        question: "How do interactive installations work for corporate events?",
        answer:
          "We deliver, set up, and tear down the installations. You get engagement and photo moments without managing equipment. Corporate clients often add one or two items—games for a picnic or a branded photo activation—to their tent and seating package. See our corporate event planning checklist for more planning tips.",
      },
    ],
    ctaHeadline: "Ready to add games and entertainment?",
    ctaSubheadline: "Tell us your date and what you have in mind — we'll confirm availability and send a full quote.",
    ctaCopy: "Check Availability for Your Date",
    packagesCta: "See packages with add-ons →",
    secondaryCta: { href: "/packages", label: "See Our Packages →" },
    siblingServices: [
      { href: "/services/event-extras-chicago", label: "Event Extras" },
      { href: "/services/tents-structures-chicago", label: "Tents & Structures" },
      { href: "/services/tables-seating-chicago", label: "Tables & Seating" },
    ],
    crossLinks: [
      { href: "/services/event-extras-chicago", label: "Add event extras for a more elevated setup →" },
      { href: "/packages", label: "See The Sterling Experience package →" },
    ],
  },
  "event-extras-chicago": {
    title: "Event Extras & Specialty Rentals Chicago | Sterling Event Rentals",
    description:
      "Champagne walls, portable bars, and lounge furniture for weddings, corporate events, and private parties in Chicago, Evanston, Oak Park, Naperville, Schaumburg, and across Chicagoland. Delivery and setup included.",
    label: "Event Extras",
    h1: "Event Extras & Specialty Rentals in Chicago",
    serviceName: "Event Extras & Specialty Rentals Chicago",
    serviceType: "Event Specialty Rental",
    heroSubheadline:
      "The finishing details that make your event look and feel different.",
    quickAnswer:
      "Sterling Event Rentals provides specialty event extras — champagne walls, portable bars, and lounge furniture — for weddings, corporate events, and private parties across Chicago and Chicagoland. Available as standalone rentals or as add-ons to any tent or package order. Every rental includes delivery, setup, and teardown.",
    introParagraph:
      "We offer champagne walls, portable bars, and lounge furniture for weddings, corporate events, and private parties across Chicago and Chicagoland. These are the extras that elevate the atmosphere — a champagne wall for the cocktail hour, a portable bar for the reception, lounge seating for a more relaxed corporate gathering. Our crew delivers, sets up, and tears down.",
    heroImageLabel: "Event extras — champagne wall and bar setup",
    heroImageSrc: "/images/outdoor-event-planning/champagne-wall.webp",
    heroImageAlt: "Champagne wall rental at a wedding or corporate event in Chicago",
    section2PhotoGridLabels: [
      "Champagne wall — wedding reception",
      "Portable bar setup — event",
      "Lounge furniture — corporate event",
      "Mini Mila pink bounce house — kids event",
      "Soft play — micro wedding",
      "Bubble house — event",
      "Wedding bounce house",
      "Soft play setup",
    ],
    section2PhotoGridSrcs: [
      "/images/outdoor-event-planning/champagne-wall.webp",
      "/images/outdoor-event-planning/Portable Bar.webp",
      "/images/outdoor-event-planning/Lounge Furniture.webp",
      "/images/outdoor-event-planning/mini-mila-pink-bounce-house.webp",
      "/images/outdoor-event-planning/soft-play-micro-weddings.webp",
      "/images/outdoor-event-planning/Bubble House 01 (1).webp",
      "/images/outdoor-event-planning/Wedding Bounce House (1).webp",
      "/images/outdoor-event-planning/Soft Play 02 (1).webp",
    ],
    section3ImageLabel: "Event extras — specialty rental setup",
    section3ImageSrc: "/images/outdoor-event-planning/Portable Bar.webp",
    section6ImageLabel: "Crew setting up event extras",
    section6ImageSrc: "/images/outdoor-event-planning/soft-play-micro-weddings.webp",
    processBlock: {
      headline: "Here's exactly what happens when you book",
      steps: [
        {
          title: "You book and we confirm",
          body: "Call or fill out the form with your date and which extras you want. We confirm availability and send a full quote — setup fee included, no surprises.",
        },
        {
          title: "Our crew handles everything on-site",
          body: "We deliver and set up the specialty items so they're ready before your event starts.",
        },
        {
          title: "We come back and take it all down",
          body: "After your event, our crew returns for teardown. You walk away — we handle the rest.",
        },
      ],
      note: "Setup fee is separate from the equipment rental cost and is quoted upfront. No hidden fees added after booking.",
    },
    ctaFooterLinks: [
      { href: "/services/games-entertainment-chicago", label: "Games & Entertainment" },
      { href: "/services", label: "See all services" },
    ],
    trustStrip: [
      { title: "SIOTO Safety Seal Certified", body: "SIOTO (Safe Inflatable Operators Training Organization) operator safety training — verifiable at sioto.com. Complements insurance; not a substitute for venue permits." },
      { title: "Full-Service Crew", body: "We deliver, set up, and tear down. You don't touch a thing." },
      { title: "Serving Chicagoland Since 2021", body: "Four years of corporate events, weddings, and private parties across the Chicago area." },
    ],
    keyTakeaways: "",
    processSteps: [],
    proofCopy: "",
    h2Sections: [
      {
        question: "What event extras does Sterling offer?",
        answer:
          "Sterling provides champagne walls, portable bars, and lounge furniture for events across Chicago and Chicagoland. Champagne walls are a popular focal point for weddings and upscale corporate events. Portable bars anchor the reception or cocktail hour. Lounge furniture creates a relaxed seating zone separate from the main dining area. You can book one item or combine several — we'll quote everything with your order.",
      },
      {
        question: "Can I add event extras to my existing package?",
        answer:
          "Yes. Champagne walls, portable bars, and lounge furniture are available as add-ons to any tent or package order. If you've already booked The Event Ready or The Sterling Experience, contact us to add specialty items to your quote. We'll confirm placement, space, and pricing before you finalize.",
      },
      {
        question: "Are event extras available for corporate events?",
        answer:
          "Yes. Portable bars and lounge furniture are popular for corporate gatherings, client events, and team events where you want a more relaxed or elevated atmosphere. Lounge zones work well alongside a tent and stage setup to give guests a place to network away from the main program.",
      },
      {
        question: "What's the difference between event extras and games & entertainment?",
        answer:
          "Games and entertainment rentals are activity-focused — mechanical bulls, bounce houses, cornhole, foam machines — things that give guests something to do. Event extras are atmosphere-focused: champagne walls, portable bars, and lounge furniture that shape the look and feel of the space. Both are available as add-ons, and many events use both.",
      },
    ],
    whoItsFor: [
      "Wedding couples and coordinators who want a champagne wall, portable bar, or lounge area to elevate the reception experience.",
      "Corporate event planners who want lounge furniture or a portable bar to give client gatherings or team events a more polished, relaxed feel.",
      "Private hosts (milestone birthdays, anniversaries, celebrations) who want signature pieces that make the event feel thoughtfully put together.",
    ],
    whatsIncluded: [
      "Specialty rental items: champagne walls, portable bars, and lounge furniture.",
      "Available as standalone rentals or as add-ons to any tent or package.",
      "Delivery, setup, and teardown by Sterling's crew (setup fee is separate from unit cost and quoted upfront).",
    ],
    bodyInternalLinks: [
      { href: "/services/games-entertainment-chicago", label: "Games & Entertainment" },
      { href: "/packages", label: "Event packages" },
      { href: "/contact", label: "Check availability" },
    ],
    faqs: [
      {
        question: "Do you rent champagne walls in Chicago?",
        answer:
          "Yes. Champagne wall rentals are available for weddings and events across Chicago and Chicagoland. They're popular for cocktail hours, reception entrances, and photo moments. Ask when you request a quote and we'll include placement and setup in your order.",
      },
      {
        question: "Can I rent a portable bar for my event?",
        answer:
          "Yes. Portable bar rentals are available for weddings, corporate events, and private parties. We deliver, set up, and tear down. Share your date and event format when you request a quote.",
      },
      {
        question: "Do you rent lounge furniture for events?",
        answer:
          "Yes. Lounge furniture is available as an add-on — typically used to create a relaxed seating zone separate from the dining area. Common at corporate events and wedding receptions. We'll recommend placement based on your tent size and layout.",
      },
      {
        question: "Can I add a champagne wall or bar to a tent rental?",
        answer:
          "Yes. Event extras pair with any tent or package order. We'll size and place them inside your tent footprint so they fit your layout. Add them when you request a quote.",
      },
      {
        question: "Is there a minimum order for event extras?",
        answer:
          "Sterling's $500 minimum applies to all orders. Most clients add event extras on top of a tent or package, which easily meets the minimum. Standalone extras orders are also welcome.",
      },
    ],
    ctaHeadline: "Ready to add the finishing details?",
    ctaSubheadline: "Tell us your date and what you have in mind — we'll confirm availability and send a full quote.",
    ctaCopy: "Check Availability for Your Date",
    packagesCta: "See packages →",
    secondaryCta: { href: "/packages", label: "See Our Packages →" },
    siblingServices: [
      { href: "/services/games-entertainment-chicago", label: "Games & Entertainment" },
      { href: "/services/tents-structures-chicago", label: "Tents & Structures" },
      { href: "/services/tables-seating-chicago", label: "Tables & Seating" },
    ],
    crossLinks: [
      { href: "/services/games-entertainment-chicago", label: "Pair with games & entertainment for a complete event →" },
      { href: "/packages", label: "See The Sterling Experience package →" },
    ],
  },
  "delivery-setup-teardown-chicago": {
    title: "Delivery, Setup & Teardown | Sterling Event Rentals Chicago",
    description:
      "Every Sterling rental includes professional delivery, full setup, and after-event teardown in Chicago, Evanston, Oak Park, Naperville, Schaumburg, Orland Park, and across Chicagoland. No self-assembly. SIOTO safety-certified crew.",
    label: "Delivery, Setup & Teardown",
    h1: "Delivery, Setup & Teardown in Chicago",
    serviceName: "Event Rental Delivery, Setup & Teardown Chicago",
    serviceType: "Delivery and Setup",
    heroSubheadline:
      "You booked the venue. We handle everything that goes in it.",
    quickAnswer:
      "Every Sterling Event Rentals order includes professional delivery, complete setup, and post-event teardown by our trained crew. This is not a self-service rental — Sterling's team handles all installation so you can focus on your event. The setup fee is separate from equipment rental cost and quoted upfront, so there are no surprises at delivery.",
    introParagraph:
      "Every Sterling rental includes professional delivery, full setup, and teardown by our crew. This is not self-service—we bring the equipment, set it up, and take it down. The setup fee is separate from unit cost and quoted upfront so there are no surprises.",
    heroImageLabel: "Delivery and setup — event rental",
    section2PhotoGridLabels: [
      "Crew unloading equipment",
      "Setup in progress — tent",
      "Teardown — post event",
    ],
    section3ImageLabel: "Full delivery and setup — event",
    section6ImageLabel: "Crew on-site — delivery window",
    processBlock: {
      headline: "Here's exactly what happens when you book",
      steps: [
        {
          title: "You book and we confirm",
          body: "Call or fill out the form with your date, address, and equipment list. We confirm availability and send a full quote — setup fee included, no surprises.",
        },
        {
          title: "Our crew handles everything on-site",
          body: "We arrive within the agreed window, deliver the equipment, and set everything up. After your event we return for teardown and removal.",
        },
        {
          title: "We come back and take it all down",
          body: "After your event, our crew returns for teardown. You walk away — we handle the rest.",
        },
      ],
      note: "Setup fee is separate from the equipment rental cost and is quoted upfront. No hidden fees added after booking.",
    },
    ctaFooterLinks: [
      { href: "/service-area", label: "Service area" },
      { href: "/services", label: "See all services" },
    ],
    trustStrip: [
      { title: "SIOTO Safety Seal Certified", body: "SIOTO (Safe Inflatable Operators Training Organization) operator safety training — verifiable at sioto.com. Complements insurance; not a substitute for venue permits." },
      { title: "Full-Service Crew", body: "We deliver, set up, and tear down. You don't touch a thing." },
      { title: "Serving Chicagoland Since 2021", body: "Four years of corporate events, weddings, and private parties across the Chicago area." },
    ],
    keyTakeaways: "",
    processSteps: [],
    proofCopy: "",
    h2Sections: [
      {
        question: "Does Sterling handle delivery and setup, or is it self-service?",
        answer:
          "Sterling handles it. Every order includes delivery, full setup, and teardown by our crew. You don’t assemble tents, tables, or stages yourself. We bring the equipment, set it up, and pick it up after the event. This is not a self-service rental—our team does the work so you can focus on your guests and program.",
      },
      {
        question: "How does the delivery and setup process work?",
        answer:
          "We confirm your event date, address, and any access details (parking, gates, stairs). On the day, our crew arrives within the agreed window, delivers the equipment, and sets everything up. We’ll coordinate with you or your day-of contact. After the event we return to teardown and remove the equipment. Standard rental window is 1–6 hours; extended windows are available as an add-on.",
      },
      {
        question: "What is the setup fee for deliveries?",
        answer:
          "The setup fee is separate from the per-item rental cost. We quote it upfront with your order so the total is clear—no hidden fees. Event rental delivery setup Chicago and Chicagoland clients book with Sterling always includes the setup fee in the written quote before you confirm.",
      },
      {
        question: "How early will the crew arrive before my event?",
        answer:
          "We agree on a delivery window when you book. For tighter timing, priority scheduling (confirmed arrival time) is available as an add-on and is popular with corporate and wedding clients. We’ll confirm the window as the date approaches so you know when to expect the crew.",
      },
      {
        question: "What happens after the event — how does teardown work?",
        answer:
          "Our crew returns after your rental window to teardown and remove all equipment. You don’t need to break down or return anything. We handle load-out and leave the site clear. Teardown is included in every Sterling rental.",
      },
      {
        question: "Is there a surcharge for difficult access or farther locations?",
        answer:
          "A surcharge may apply for difficult access—elevators, stairs, long carry from the truck, or restricted parking. We’ll ask about your site when you request a quote and include any surcharge in the total so there are no day-of surprises. Learn about our service area and delivery coverage if you’re outside the city.",
      },
    ],
    whoItsFor: [
      "Corporate event planners who need reliable load-in and load-out, a dedicated day-of contact, and no surprises on setup fees or timing.",
      "Wedding couples and coordinators who want the space set and struck by professionals so they can focus on the ceremony and reception.",
      "Private hosts who want delivery, setup, and teardown handled so they can enjoy the party instead of managing equipment.",
    ],
    whatsIncluded: [
      "Every rental includes professional delivery, setup, and teardown by Sterling's crew. This is not self-service.",
      "Setup fee is separate from unit rental cost—stated upfront and quoted with your order.",
      "Standard rental window: 1–6 hours; extended windows available as an add-on. Delivery surcharge may apply for difficult access or farther locations.",
    ],
    bodyInternalLinks: [
      { href: "/packages", label: "Full service packages" },
      { href: "/service-area", label: "Service area" },
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Weather policy" },
      { href: "/contact", label: "Check availability" },
    ],
    faqs: [
      {
        question: "Is setup included in the rental price?",
        answer:
          "Delivery, setup, and teardown are included in every Sterling order. The setup fee is separate from the per-item rental cost (e.g. tent, tables). We quote both in your total so you see the full price before you confirm.",
      },
      {
        question: "Do I need to be there for delivery and pickup?",
        answer:
          "Not always. Many clients are working or coordinating multiple vendors. The key is access: we need a clear way into the site and a point of contact who can answer questions if something changes. When you request a quote, tell us if you’ll be on-site or if a venue contact will meet the crew.",
      },
      {
        question: "How much does delivery cost?",
        answer:
          "Delivery cost depends on your location, site access, and what you’re renting. We include delivery, setup, and any access-related costs in your quote so you see the full number before you commit. Share your venue address (or zip code) and date and we’ll provide an exact total.",
      },
      {
        question: "What do I need to have ready before you arrive?",
        answer:
          "Clear access and a clear setup area. Make sure the crew can unload, gates are unlocked, and the setup area is free of vehicles and obstacles. For venues, share loading and access instructions (dock, service entrance, elevator/stairs, and on-site contact). Smooth access means smooth setup.",
      },
      {
        question: "Can you deliver the day before my event?",
        answer:
          "Sometimes. Day-before delivery depends on availability, venue rules, and the type of installation. If you need day-before setup, tell us when you request a quote and we’ll confirm what’s possible and include any extended window in the total upfront.",
      },
      {
        question: "Can I book last minute — like a week before my event?",
        answer:
          "Sometimes, depending on availability and what you need. Peak-season weekends book out fastest, and larger tents and packages are harder to schedule last minute. Call (773) 692-7576 or send your date and venue through the contact form — we’ll confirm availability quickly.",
      },
      {
        question: "Can I make changes after I book?",
        answer:
          "Often, yes—depending on availability and how close you are to the event. If your guest count changes or you want to add items like sidewalls, linens, stages, or games, contact us as soon as you know. The earlier you update the order, the more flexibility you have.",
      },
      {
        question: "Can you deliver to a park or public venue?",
        answer:
          "Yes, when the venue allows and we have clear access for our truck and crew. Permits and venue rules are your responsibility. Share your venue and any access details when you request a quote so we can confirm feasibility.",
      },
      {
        question: "What happens if something gets damaged during my event?",
        answer:
          "Accidents can happen. We’ll walk you through responsibility and any applicable charges in plain language during booking so there are no surprises. If something is damaged, let us know right away so we can document it and resolve it quickly.",
      },
      {
        question: "What if my event location has difficult access?",
        answer:
          "We’ll ask about access when you book—elevators, stairs, long carry, or restricted parking. A surcharge may apply for difficult access; we include it in your quote upfront so there are no surprises on the day.",
      },
      {
        question: "How long does setup take?",
        answer:
          "It depends on the order—tent size, number of tables and chairs, stage, and site access. We’ll give you a realistic window when you book. Our crew works efficiently; we’ll coordinate so setup is complete before your event start. For arrival windows vs. a locked time, see the delivery & setup section above on priority scheduling.",
      },
    ],
    ctaHeadline: "Ready to confirm delivery and setup?",
    ctaSubheadline: "Tell us your date and location — we'll confirm availability and send a full quote.",
    ctaCopy: "Check Availability for Your Date",
    packagesCta: "See delivery packages →",
    secondaryCta: { href: "/packages", label: "See Our Packages →" },
    contextualAnswers: [
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Weather policy" },
    ],
    siblingServices: [
      { href: "/services/tents-structures-chicago", label: "Tents & Structures" },
      { href: "/services/tables-seating-chicago", label: "Tables & Seating" },
    ],
    crossLinks: [
      { href: "/packages", label: "See full service packages →" },
      { href: "/service-area", label: "Learn about our service area →" },
    ],
  },
};
