import Script from "next/script";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ImageBreak } from "@/components/ImageBreak";
import { SectionIntro } from "@/components/SectionIntro";

const BASE = "https://www.sterlingeventrentals.com";
const title = "Event Rental Pricing Chicago | Sterling Event Rentals";
const description =
  "How event rental pricing works in Chicago and Chicagoland: $500 minimum, deposit structure, and what affects cost for tent, table, stage, and package rentals.";
const canonical = `${BASE}/event-rental-pricing-chicago`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
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
    title,
    description,
  },
};

export default function EventRentalPricingChicagoPage() {
  return (
    <>
      <Script
        id="ld-faq-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Placeholder: How does event rental pricing work in Chicago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Placeholder: explanation that pricing is based on item types, quantities, event date, and delivery/setup needs, with a confirmed minimum rental and deposit structure.",
                },
              },
            ],
          }),
        }}
      />
      <Script
        id="ld-breadcrumbs-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sterlingeventrentals.com" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Pricing",
                item: "https://www.sterlingeventrentals.com/event-rental-pricing-chicago",
              },
            ],
          }),
        }}
      />

      <section className="gradient-hero relative min-h-[75vh] overflow-hidden">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="gradient-orb bottom-[-5rem] right-[-4rem] h-72 w-72 opacity-60" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: canonical, label: "Pricing" },
            ]}
          />
          <SectionIntro
            eyebrow="Pricing"
            title="Event rental pricing in Chicago and Chicagoland."
            quickAnswer={
              <>
                <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">
                  Quick answer
                </h2>
                <p>
                  Placeholder: short overview explaining that this page covers how Sterling structures pricing for
                  tents, tables, stages, and installations, what the minimum rental is, and what information is needed
                  to provide an exact quote.
                </p>
              </>
            }
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
          <div className="flex flex-col items-center gap-3 text-[0.65rem] tracking-[0.3em] text-[var(--champagne)]/70 uppercase">
            <span>Scroll</span>
            <div className="scroll-indicator" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4 text-sm text-[var(--charcoal)]/80">
          <ScrollReveal className="space-y-3">
            <h2 className="heading-2 text-[var(--charcoal)]">Key takeaways about pricing</h2>
            <p>
              Placeholder: summary of the confirmed minimum rental amount, deposit percentage, and the fact that setup
              and delivery are quoted as clear line items rather than hidden fees.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal className="space-y-3 rounded-xl border border-white/10 bg-[var(--navy)]/90 p-4 text-[var(--champagne)]/85">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)]">
                What affects the price of your event
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Placeholder: type and quantity of items (tents, tables, chairs, stages, installations).</li>
                <li>Placeholder: event date, time of year, and lead time before the event.</li>
                <li>Placeholder: delivery distance, access conditions, and setup complexity.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal className="space-y-3 rounded-xl border border-white/10 bg-[var(--navy)]/90 p-4 text-[var(--champagne)]/85">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--cream)]">How quotes and deposits work</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Placeholder: outline of how initial quotes are prepared from inquiry details.</li>
                <li>Placeholder: explanation of the deposit required to hold a date.</li>
                <li>Placeholder: note on when the remaining balance is due.</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ImageBreak
        src="https://picsum.photos/seed/sterling-pricing-01/1600/900"
        alt="Placeholder: styled event table with pricing discussion imagery"
        overlayText="“Placeholder: short line about transparent pricing with no hidden fees for Chicago event rentals.”"
      />

      <section className="bg-[var(--navy)]/75 py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4 text-sm text-[var(--champagne)]/80">
          <ScrollReveal className="space-y-3">
            <h2 className="heading-2">Example pricing structures</h2>
            <p>
              Placeholder: high-level examples of how pricing might differ between a small backyard gathering and a
              larger corporate or wedding setup, without using specific dollar amounts yet.
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4">
            <h2 className="heading-2">Frequently asked questions about pricing</h2>
            <div className="space-y-3">
              <details className="rounded-md border border-white/10 bg-black/20 p-3">
                <summary className="cursor-pointer text-[var(--cream)]">
                  Placeholder: Is there a minimum rental amount?
                </summary>
                <p className="mt-2">
                  Placeholder: statement that there is a confirmed minimum rental threshold and that events are quoted
                  with that in mind.
                </p>
              </details>
              <details className="rounded-md border border-white/10 bg-black/20 p-3">
                <summary className="cursor-pointer text-[var(--cream)]">
                  Placeholder: Is setup and teardown included in the price?
                </summary>
                <p className="mt-2">
                  Placeholder: explanation that setup and teardown are separate from unit pricing but always shown
                  upfront in the quote.
                </p>
              </details>
              <details className="rounded-md border border-white/10 bg-black/20 p-3">
                <summary className="cursor-pointer text-[var(--cream)]">
                  Placeholder: When is payment due for my event?
                </summary>
                <p className="mt-2">
                  Placeholder: brief answer about deposit timing and when the remaining balance is expected.
                </p>
              </details>
              <details className="rounded-md border border-white/10 bg-black/20 p-3">
                <summary className="cursor-pointer text-[var(--cream)]">
                  Placeholder: Are there any hidden fees I should know about?
                </summary>
                <p className="mt-2">
                  Placeholder: reassurance that quotes include delivery, setup, and any known surcharges so there are no
                  surprise charges at the end.
                </p>
              </details>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="text-[0.8rem] text-[var(--champagne)]/70">
              Placeholder: short closing line inviting visitors to share event details for an exact, itemized quote.
            </div>
            <a href="/contact" className="btn-primary">
              Placeholder: Get an exact quote
            </a>
          </ScrollReveal>
        </div>
      </section>

      <ImageBreak
        src="https://picsum.photos/seed/sterling-pricing-02/1600/900"
        alt="Placeholder: overview shot of an event with clear, calm atmosphere"
        overlayText="“Placeholder: line about making pricing feel straightforward for planners and hosts.”"
      />
    </>
  );
}

