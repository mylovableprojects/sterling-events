/**
 * Data for answer spoke pages: breadcrumb label, relevant service, and related answers.
 */

export type AnswerSpokeConfig = {
  slug: string;
  breadcrumbLabel: string;
  serviceHref: string;
  serviceLabel: string;
  related: { href: string; label: string }[];
};

export const ANSWER_SPOKE_CONFIG: Record<string, AnswerSpokeConfig> = {
  "how-much-does-tent-rental-cost-chicago": {
    slug: "how-much-does-tent-rental-cost-chicago",
    breadcrumbLabel: "Cost Guide",
    serviceHref: "/services/tents-structures-chicago",
    serviceLabel: "Browse tent options →",
    related: [
      { href: "/answers/what-size-tent-for-100-guests", label: "What size tent for 100 guests?" },
      { href: "/answers/do-i-need-permit-tent-chicago", label: "Do I need a permit for a tent in Chicago?" },
      { href: "/answers/how-far-in-advance-book-event-rentals", label: "How far in advance should I book?" },
    ],
  },
  "what-size-tent-for-100-guests": {
    slug: "what-size-tent-for-100-guests",
    breadcrumbLabel: "Tent size for 100 guests",
    serviceHref: "/services/tents-structures-chicago",
    serviceLabel: "Browse tent options →",
    related: [
      { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost in Chicago?" },
      { href: "/answers/do-i-need-permit-tent-chicago", label: "Do I need a permit for a tent in Chicago?" },
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Outdoor event rental weather policy" },
    ],
  },
  "do-i-need-permit-tent-chicago": {
    slug: "do-i-need-permit-tent-chicago",
    breadcrumbLabel: "Tent permits",
    serviceHref: "/services/tents-structures-chicago",
    serviceLabel: "Browse tent options →",
    related: [
      { href: "/answers/what-size-tent-for-100-guests", label: "What size tent for 100 guests?" },
      { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost?" },
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Outdoor event rental weather policy" },
    ],
  },
  "how-far-in-advance-book-event-rentals": {
    slug: "how-far-in-advance-book-event-rentals",
    breadcrumbLabel: "Booking timeline",
    serviceHref: "/services/tents-structures-chicago",
    serviceLabel: "Browse tent options →",
    related: [
      { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost in Chicago?" },
      { href: "/answers/event-rental-delivery-setup-chicago", label: "How does delivery and setup work?" },
      { href: "/answers/do-i-need-permit-tent-chicago", label: "Do I need a permit for a tent?" },
    ],
  },
  "what-is-sioto-safety-seal": {
    slug: "what-is-sioto-safety-seal",
    breadcrumbLabel: "SIOTO Safety Seal",
    serviceHref: "/services/tents-structures-chicago",
    serviceLabel: "Tents & Structures →",
    related: [
      { href: "/answers/do-i-need-permit-tent-chicago", label: "Do I need a permit for a tent in Chicago?" },
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Outdoor event rental weather policy" },
      { href: "/answers/event-rental-delivery-setup-chicago", label: "How does delivery and setup work?" },
    ],
  },
  "event-rental-delivery-setup-chicago": {
    slug: "event-rental-delivery-setup-chicago",
    breadcrumbLabel: "Delivery & setup",
    serviceHref: "/services/delivery-setup-teardown-chicago",
    serviceLabel: "Delivery, Setup & Teardown →",
    related: [
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Outdoor event rental weather policy" },
      { href: "/answers/how-far-in-advance-book-event-rentals", label: "How far in advance should I book?" },
      { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost?" },
    ],
  },
  "outdoor-event-rental-weather-policy": {
    slug: "outdoor-event-rental-weather-policy",
    breadcrumbLabel: "Weather policy",
    serviceHref: "/services/tents-structures-chicago",
    serviceLabel: "Tents & Structures →",
    related: [
      { href: "/answers/event-rental-delivery-setup-chicago", label: "How does delivery and setup work?" },
      { href: "/answers/do-i-need-permit-tent-chicago", label: "Do I need a permit for a tent?" },
      { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost?" },
    ],
  },
  "can-i-book-last-minute-event-rentals": {
    slug: "can-i-book-last-minute-event-rentals",
    breadcrumbLabel: "Last-minute rentals",
    serviceHref: "/services/delivery-setup-teardown-chicago",
    serviceLabel: "Delivery, Setup & Teardown →",
    related: [
      { href: "/answers/how-far-in-advance-book-event-rentals", label: "How far in advance should I book?" },
      { href: "/answers/event-rental-delivery-setup-chicago", label: "How does delivery and setup work?" },
      { href: "/answers/how-much-does-event-rental-delivery-cost", label: "How much does delivery cost?" },
    ],
  },
  "do-i-have-to-sign-a-contract": {
    slug: "do-i-have-to-sign-a-contract",
    breadcrumbLabel: "Contract",
    serviceHref: "/services/delivery-setup-teardown-chicago",
    serviceLabel: "Delivery, Setup & Teardown →",
    related: [
      { href: "/answers/how-do-i-pay-for-event-rentals", label: "How do I pay for event rentals?" },
      { href: "/answers/how-far-in-advance-book-event-rentals", label: "How far in advance should I book?" },
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Outdoor event rental weather policy" },
    ],
  },
  "how-do-i-pay-for-event-rentals": {
    slug: "how-do-i-pay-for-event-rentals",
    breadcrumbLabel: "Payment",
    serviceHref: "/services/delivery-setup-teardown-chicago",
    serviceLabel: "Delivery, Setup & Teardown →",
    related: [
      { href: "/answers/is-there-a-security-deposit", label: "Is there a security deposit?" },
      { href: "/answers/how-far-in-advance-book-event-rentals", label: "How far in advance should I book?" },
      { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost?" },
    ],
  },
  "how-much-does-event-rental-delivery-cost": {
    slug: "how-much-does-event-rental-delivery-cost",
    breadcrumbLabel: "Delivery cost",
    serviceHref: "/services/delivery-setup-teardown-chicago",
    serviceLabel: "Delivery, Setup & Teardown →",
    related: [
      { href: "/answers/what-do-i-need-ready-before-delivery-setup", label: "What do I need ready before delivery and setup?" },
      { href: "/answers/event-rental-delivery-setup-chicago", label: "How does delivery and setup work?" },
      { href: "/answers/how-far-in-advance-book-event-rentals", label: "How far in advance should I book?" },
    ],
  },
  "what-do-i-need-ready-before-delivery-setup": {
    slug: "what-do-i-need-ready-before-delivery-setup",
    breadcrumbLabel: "Before delivery",
    serviceHref: "/services/delivery-setup-teardown-chicago",
    serviceLabel: "Delivery, Setup & Teardown →",
    related: [
      { href: "/answers/event-rental-delivery-setup-chicago", label: "How does delivery and setup work?" },
      { href: "/answers/can-you-deliver-the-day-before-my-event", label: "Can you deliver the day before my event?" },
      { href: "/answers/how-much-does-event-rental-delivery-cost", label: "How much does delivery cost?" },
    ],
  },
  "can-you-deliver-the-day-before-my-event": {
    slug: "can-you-deliver-the-day-before-my-event",
    breadcrumbLabel: "Day-before delivery",
    serviceHref: "/services/delivery-setup-teardown-chicago",
    serviceLabel: "Delivery, Setup & Teardown →",
    related: [
      { href: "/answers/what-do-i-need-ready-before-delivery-setup", label: "What do I need ready before delivery and setup?" },
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Outdoor event rental weather policy" },
      { href: "/answers/how-far-in-advance-book-event-rentals", label: "How far in advance should I book?" },
    ],
  },
  "can-you-set-up-a-tent-on-concrete": {
    slug: "can-you-set-up-a-tent-on-concrete",
    breadcrumbLabel: "Tent on concrete",
    serviceHref: "/services/tents-structures-chicago",
    serviceLabel: "Browse tent options →",
    related: [
      { href: "/answers/what-size-tent-for-100-guests", label: "What size tent for 100 guests?" },
      { href: "/answers/do-i-need-permit-tent-chicago", label: "Do I need a permit for a tent in Chicago?" },
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Outdoor event rental weather policy" },
    ],
  },
  "can-you-heat-or-cool-a-tent": {
    slug: "can-you-heat-or-cool-a-tent",
    breadcrumbLabel: "Tent heating/cooling",
    serviceHref: "/services/tents-structures-chicago",
    serviceLabel: "Browse tent options →",
    related: [
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Outdoor event rental weather policy" },
      { href: "/answers/what-size-tent-for-100-guests", label: "What size tent for 100 guests?" },
      { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost?" },
    ],
  },
  "how-much-does-table-and-chair-rental-cost-for-100-guests": {
    slug: "how-much-does-table-and-chair-rental-cost-for-100-guests",
    breadcrumbLabel: "Tables & chairs for 100",
    serviceHref: "/services/tables-seating-chicago",
    serviceLabel: "Tables & Seating →",
    related: [
      { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost in Chicago?" },
      { href: "/answers/how-much-does-event-rental-delivery-cost", label: "How much does delivery cost?" },
      { href: "/answers/how-far-in-advance-book-event-rentals", label: "How far in advance should I book?" },
    ],
  },
  "is-there-a-security-deposit": {
    slug: "is-there-a-security-deposit",
    breadcrumbLabel: "Security deposit",
    serviceHref: "/services/delivery-setup-teardown-chicago",
    serviceLabel: "Delivery, Setup & Teardown →",
    related: [
      { href: "/answers/how-do-i-pay-for-event-rentals", label: "How do I pay for event rentals?" },
      { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost?" },
      { href: "/answers/event-rental-delivery-setup-chicago", label: "How does delivery and setup work?" },
    ],
  },
  "is-it-safe-to-have-a-tent-up-in-a-thunderstorm": {
    slug: "is-it-safe-to-have-a-tent-up-in-a-thunderstorm",
    breadcrumbLabel: "Thunderstorm safety",
    serviceHref: "/services/tents-structures-chicago",
    serviceLabel: "Tents & Structures →",
    related: [
      { href: "/answers/outdoor-event-rental-weather-policy", label: "Outdoor event rental weather policy" },
      { href: "/answers/do-i-need-permit-tent-chicago", label: "Do I need a permit for a tent?" },
      { href: "/answers/what-size-tent-for-100-guests", label: "What size tent for 100 guests?" },
    ],
  },
  "do-you-rent-dance-floors": {
    slug: "do-you-rent-dance-floors",
    breadcrumbLabel: "Dance floors",
    serviceHref: "/packages",
    serviceLabel: "See Our Packages →",
    related: [
      { href: "/answers/what-size-tent-for-100-guests", label: "What size tent for 100 guests?" },
      { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost?" },
      { href: "/answers/event-rental-delivery-setup-chicago", label: "How does delivery and setup work?" },
    ],
  },
};
