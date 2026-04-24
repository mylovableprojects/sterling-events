import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const BASE = "https://sterlingevents.com";
const canonical = `${BASE}/answers`;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Answers", item: canonical },
  ],
};

const answersCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Chicago Event Rental Questions Answered — Sterling Event Rentals",
  description: "Quick answers to common event rental questions for Chicago and Chicagoland.",
  url: canonical,
  publisher: { "@type": "LocalBusiness", name: "Sterling Event Rentals", url: BASE },
};

const answersTitle = "Chicago Event Rental Questions Answered | Sterling Event Rentals";
const answersDescription = "Quick answers to common event rental questions — tent sizing, permits, booking lead times, delivery, weather policy, and pricing for Chicago, Evanston, Oak Park, Naperville, and across Chicagoland.";

export const metadata: Metadata = {
  title: answersTitle,
  description: answersDescription,
  alternates: { canonical },
  openGraph: {
    title: answersTitle,
    description: answersDescription,
    url: canonical,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sterling Event Rentals — Event rentals in Chicago and Chicagoland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: answersTitle,
    description: answersDescription,
  },
};

const answerLinks = [
  { href: "/answers/how-much-does-tent-rental-cost-chicago", label: "How much does tent rental cost in Chicago?" },
  { href: "/answers/what-size-tent-for-100-guests", label: "What size tent for 100 guests?" },
  { href: "/answers/do-i-need-permit-tent-chicago", label: "Do I need a permit for a tent in Chicago?" },
  { href: "/answers/how-far-in-advance-book-event-rentals", label: "How far in advance should I book event rentals?" },
  { href: "/answers/what-is-sioto-safety-seal", label: "What is the SIOTO Safety Seal?" },
  { href: "/answers/event-rental-delivery-setup-chicago", label: "How does event rental delivery and setup work in Chicago?" },
  { href: "/answers/outdoor-event-rental-weather-policy", label: "Outdoor event rental weather policy" },
  { href: "/answers/can-i-book-last-minute-event-rentals", label: "Can I book last-minute event rentals in Chicago?" },
  { href: "/answers/do-i-have-to-sign-a-contract", label: "Do I have to sign a contract for event rentals?" },
  { href: "/answers/how-do-i-pay-for-event-rentals", label: "How do I pay for event rentals?" },
  { href: "/answers/how-much-does-event-rental-delivery-cost", label: "How much does event rental delivery cost in Chicago?" },
  { href: "/answers/what-do-i-need-ready-before-delivery-setup", label: "What do I need ready before delivery and setup?" },
  { href: "/answers/can-you-deliver-the-day-before-my-event", label: "Can you deliver the day before my event?" },
  { href: "/answers/can-you-set-up-a-tent-on-concrete", label: "Can you set up a tent on concrete or a driveway?" },
  { href: "/answers/can-you-heat-or-cool-a-tent", label: "Can you heat or cool a tent?" },
  { href: "/answers/how-much-does-table-and-chair-rental-cost-for-100-guests", label: "How much does table and chair rental cost for 100 guests?" },
  { href: "/answers/is-there-a-security-deposit", label: "Is there a security deposit?" },
  { href: "/answers/is-it-safe-to-have-a-tent-up-in-a-thunderstorm", label: "Is it safe to have a tent up during a thunderstorm?" },
  { href: "/answers/do-you-rent-dance-floors", label: "Do you rent dance floors in Chicago?" },
];

export default function AnswersHubPage() {
  return (
    <>
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="ld-collection-answers" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(answersCollectionSchema) }} />
      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/answers", label: "Answers" }]} />
          <p className="section-eyebrow">Answers</p>
          <h1 className="hero-headline text-[var(--cream)]">
            Quick answers to common event rental questions
          </h1>
          <p className="mt-4 max-w-xl hero-subheadline text-[var(--champagne)]/80">
            Tent sizing, permits, booking timelines, delivery, weather policy, and pricing — answered directly.
          </p>
        </div>
      </section>
      <section className="bg-[var(--navy)]/55 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="space-y-3">
            {answerLinks.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="text-[var(--cream)] hover:text-[var(--gold)] hover:underline">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link href="/resources" className="text-[var(--gold-light)] hover:underline">
              For full guides, visit our Resources →
            </Link>
          </p>
          <p className="mt-4">
            <Link href="/contact" className="btn-primary inline-block">
              Still have questions? Get a quote
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
