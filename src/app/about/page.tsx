import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ImageBreak } from "@/components/ImageBreak";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";

const BASE = "https://sterlingeventrentals.com";

export const metadata: Metadata = {
  title: "About Sterling Event Rentals | Chicago Event Rentals",
  description:
    "Sterling Event Rentals is a licensed, insured, SIOTO Safety Seal certified event rental company based in Chicago, serving corporate planners, wedding couples, and private hosts across Chicagoland — including Evanston, Oak Park, Naperville, Schaumburg, and Orland Park — since 2021.",
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: "About Sterling Event Rentals | Chicago Event Rentals",
    description:
      "Sterling Event Rentals is a licensed, insured, SIOTO Safety Seal certified event rental company based in Chicago, serving corporate planners, wedding couples, and private hosts across Chicagoland — including Evanston, Oak Park, Naperville, Schaumburg, and Orland Park — since 2021.",
    url: `${BASE}/about`,
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
    title: "About Sterling Event Rentals | Chicago Event Rentals",
    description:
      "Sterling Event Rentals is a licensed, insured, SIOTO Safety Seal certified event rental company based in Chicago, serving corporate planners, wedding couples, and private hosts across Chicagoland — including Evanston, Oak Park, Naperville, Schaumburg, and Orland Park — since 2021.",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Sterling Event Rentals",
  description: "Sterling Event Rentals is a Chicago event rental company founded by Steve Rangel in 2021. Licensed, insured, SIOTO Safety Seal certified. Serves corporate planners, weddings, and private hosts across Chicago and Chicagoland.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Sterling Event Rentals",
    foundingDate: "2021",
    founder: { "@type": "Person", name: "Steve Rangel" },
  },
};

export default function AboutPage() {
  return (
    <>
      <Script id="ld-about" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <section className="gradient-hero relative min-h-[75vh]">
        <div className="gradient-orb -left-32 top-6 h-56 w-56" />
        <div className="gradient-orb bottom-[-5rem] right-[-4rem] h-72 w-72 opacity-60" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center">
          <div className="flex-1 space-y-6 md:max-w-2xl">
            <div className="section-eyebrow">About us</div>
            <h1 className="hero-headline text-[var(--cream)]">
              About Sterling Event Rentals
            </h1>
            <p className="max-w-2xl hero-subheadline leading-relaxed text-[var(--champagne)]/90">
              Chicago-based event rental company serving corporate planners, wedding couples, and private hosts across Chicagoland since 2021. Tents, tables, stages, and specialty installations — delivered, set up, and torn down by our crew. Licensed, insured, and SIOTO Safety Seal certified.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-[var(--gold)] text-sm font-medium tracking-wide uppercase">
                Licensed
              </span>
              <span className="text-[var(--gold)]/40">·</span>
              <span className="inline-flex items-center gap-1.5 text-[var(--gold)] text-sm font-medium tracking-wide uppercase">
                Insured
              </span>
              <span className="text-[var(--gold)]/40">·</span>
              <span className="inline-flex items-center gap-1.5 text-[var(--gold)] text-sm font-medium tracking-wide uppercase">
                SIOTO Safety Seal Certified
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/contact" className="btn-primary">
                Work With Us — Check Availability
              </a>
              <a href="/services" className="btn-outline">
                Browse Our Services
              </a>
            </div>
            <TrustBar className="mt-8" />
          </div>
          <div className="mt-4 flex-1 md:mt-0 md:flex md:justify-end">
            <div
              className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-[var(--gold)]/20 bg-[var(--navy)]"
              data-photo-slot="Steve Rangel or crew — candid at event setup"
            >
              <p className="absolute inset-0 flex items-center justify-center text-xs text-[var(--champagne)]/30">
                📸 Photo: Steve or crew at event
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <ScrollReveal className="md:w-1/2 space-y-6">
            <div className="section-eyebrow">Our story</div>
            <h2 className="heading-2 text-[var(--charcoal)]">
              Why Sterling exists
            </h2>
            <p className="text-lg leading-relaxed text-[var(--charcoal)] md:text-xl max-w-xl">
              Sterling was founded in 2021 by Steve Rangel in Chicago. The clients we serve — corporate planners, wedding couples, private hosts — all have one thing in common: their reputation is on the line when they book a vendor. A late delivery, wrong equipment, or a no-show is their problem, not ours, unless we make it ours. We built Sterling around the opposite of that: on-time delivery, transparent terms stated upfront, and safety credentials that hold up when a venue or employer asks.
            </p>
          </ScrollReveal>
          <div className="md:w-1/2">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--navy)]/10 bg-[var(--navy)]/5"
              data-photo-slot="Event setup — wide shot, tent or tables in place"
            >
              <p className="absolute inset-0 flex items-center justify-center text-xs text-[var(--charcoal)]/30">
                📸 Photo: Event setup
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal className="mb-10">
            <div className="section-eyebrow">What sets us apart</div>
            <h2 className="heading-2 text-[var(--cream)]">
              Why corporate planners and event hosts choose Sterling
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal className="space-y-3 rounded-2xl bg-white p-8 border-t-2 border-[var(--gold)]">
              <h3 className="font-[var(--font-display)] text-xl font-medium text-[var(--navy)] mb-3">
                Safety-Certified. Not Just Insured.
              </h3>
              <p className="text-base leading-relaxed text-[var(--charcoal)]/80">
                Sterling holds the SIOTO Safety Seal—an independent third-party certification that verifies equipment safety and operational standards. Competitors say &quot;fully insured.&quot; We can say certified. That distinction matters to corporate buyers and venue coordinators who need to verify vendor credentials.
              </p>
            </ScrollReveal>
            <ScrollReveal className="space-y-3 rounded-2xl bg-white p-8 border-t-2 border-[var(--gold)]">
              <h3 className="font-[var(--font-display)] text-xl font-medium text-[var(--navy)] mb-3">
                Transparent Pricing. Zero Surprises.
              </h3>
              <p className="text-base leading-relaxed text-[var(--charcoal)]/80">
                Clear pricing, clear deposit terms, and clear cancellation language—stated upfront, not in the fine print. Setup fee is separate from unit cost. The price you see is what you pay.
              </p>
            </ScrollReveal>
            <ScrollReveal className="space-y-3 rounded-2xl bg-white p-8 border-t-2 border-[var(--gold)]">
              <h3 className="font-[var(--font-display)] text-xl font-medium text-[var(--navy)] mb-3">
                Built for Corporate Events. Not Just Birthday Parties.
              </h3>
              <p className="text-base leading-relaxed text-[var(--charcoal)]/80">
                Most event rental companies are built around kids&apos; parties. Corporate events are different: tighter timelines, stricter vendor requirements, and a planner whose job is on the line if something goes wrong. We operate on 21–30 day lead times, offer a dedicated day-of contact, and hold credentials that corporate and venue risk requirements actually ask for.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <ScrollReveal className="md:w-1/2 space-y-6">
            <div className="section-eyebrow">Credentials</div>
            <h2 className="heading-2 text-[var(--charcoal)]">
              What the SIOTO Safety Seal means
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-[var(--charcoal)]/80 mt-6">
              The SIOTO Safety Seal means our equipment and operations have been independently inspected and certified to meet industry safety standards—not just insured against accidents after they happen. That distinction matters to corporate buyers and venue coordinators who need to verify vendor credentials before they book.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-[var(--gold)]/50 px-4 py-2 text-sm font-medium text-[var(--charcoal)] bg-white">
                Licensed
              </span>
              <span className="inline-flex items-center rounded-full border border-[var(--gold)]/50 px-4 py-2 text-sm font-medium text-[var(--charcoal)] bg-white">
                Insured
              </span>
              <span className="inline-flex items-center rounded-full border border-[var(--gold)]/50 px-4 py-2 text-sm font-medium text-[var(--charcoal)] bg-white">
                SIOTO Safety Seal Certified
              </span>
            </div>
          </ScrollReveal>
          <div className="md:w-1/2">
            <div
              className="flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl border-2 border-[var(--gold)]/30 bg-white mx-auto"
              data-photo-slot="SIOTO Safety Seal badge image"
            >
              <div className="text-center">
                <p className="mb-2 text-4xl">🏅</p>
                <p className="text-sm text-[var(--charcoal)]/40 font-medium uppercase tracking-widest">
                  SIOTO Safety Seal
                </p>
                <p className="mt-1 text-xs text-[var(--charcoal)]/30">
                  Badge image — request from Steve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal className="md:flex md:items-center md:justify-between md:gap-10">
            <div className="md:w-1/2">
              <div className="section-eyebrow">Where we serve</div>
              <h2 className="heading-2 text-[var(--cream)]">
                Service area
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--champagne)]/85">
                Sterling serves Chicago and the Greater Chicagoland area — including Evanston, Oak Park, Naperville, Schaumburg, and Orland Park. Call{" "}
                <a
                  href="tel:+17736927576"
                  className="text-[var(--cream)] underline underline-offset-2 hover:no-underline"
                >
                  (773) 692-7576
                </a>{" "}
                or see our{" "}
                <Link
                  href="/service-area"
                  className="text-[var(--cream)] underline underline-offset-2 hover:no-underline"
                >
                  service area page
                </Link>{" "}
                to confirm delivery for your location.
              </p>
              <a
                href="/service-area"
                className="mt-6 inline-flex items-center gap-2 text-[var(--gold)] text-sm font-medium uppercase tracking-widest hover:gap-3 transition-all"
              >
                See full service area →
              </a>
            </div>
            <div className="mt-8 grid flex-1 grid-cols-2 gap-3 md:mt-0 md:max-w-md">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="mb-1 text-xs uppercase tracking-widest text-[var(--gold)]">
                  Direction
                </p>
                <p className="font-medium text-[var(--cream)]">North Suburbs</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="mb-1 text-xs uppercase tracking-widest text-[var(--gold)]">
                  Direction
                </p>
                <p className="font-medium text-[var(--cream)]">South Suburbs</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="mb-1 text-xs uppercase tracking-widest text-[var(--gold)]">
                  Direction
                </p>
                <p className="font-medium text-[var(--cream)]">West Suburbs</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="mb-1 text-xs uppercase tracking-widest text-[var(--gold)]">
                  Direction
                </p>
                <p className="font-medium text-[var(--cream)]">Northwest Suburbs</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[var(--navy)]/55 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h3 className="heading-2 text-[var(--cream)] text-center max-w-3xl mx-auto">
              Peak season books weeks out. Check your date before it goes.
            </h3>
          </ScrollReveal>
          <p className="mt-4 text-center text-lg text-[var(--champagne)]/75 max-w-xl mx-auto">
            Call (773) 692-7576 or send your date, guest count, and venue. We&apos;ll confirm availability and send a full quote — equipment, setup, and delivery in one number.
          </p>
          <ScrollReveal className="mt-8 flex flex-wrap justify-center gap-4">
            <CTABlock
              primary={{ href: "/contact", label: "Check Availability for Your Date" }}
              secondary={[
                { href: "/services", label: "Browse Our Services", variant: "secondary" },
                { href: "/packages", label: "See Our Packages", variant: "ghost" },
                { href: "/service-area", label: "Service area →", variant: "ghost" },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

