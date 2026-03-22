"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RentalHighlightGrid } from "@/components/RentalHighlightGrid";
import type { EventTypeData } from "@/lib/eventTypes";

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const, amount: 0.12 as const },
    transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  };
}

function CameraIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ImgPlaceholder({
  label,
  gradFrom,
  gradTo,
  className = "",
}: {
  label: string;
  gradFrom: string;
  gradTo: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden flex-shrink-0 ${className}`}
      style={{ background: `linear-gradient(150deg, ${gradFrom}, ${gradTo})` }}
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #c9a84c 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="rounded-full border border-dashed border-[#c9a84c]/30 p-2.5 text-[#c9a84c]/30">
          <CameraIcon />
        </div>
        <span className="px-4 text-center text-[0.55rem] uppercase tracking-[0.3em] text-[#c9a84c]/30">
          {label}
        </span>
      </div>
    </div>
  );
}

type Props = { data: EventTypeData; slug: string };

export function EventTypeContent({ data, slug }: Props) {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[65vh] overflow-hidden flex items-end pb-16"
        style={{ background: `radial-gradient(ellipse at top left, ${data.heroGradient.from} 0%, ${data.heroGradient.to} 70%, #010108 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
        <div
          className="absolute left-0 top-0 h-px w-full opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, #c9a84c 40%, transparent)" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/events", label: "Events" },
              { href: `/events/${slug}`, label: data.name },
            ]}
          />
          <motion.div
            className="mt-6 max-w-3xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="section-eyebrow mb-4" style={{ color: "#e8c97a" }}>
              {data.eyebrow}
            </p>
            <h1 className="hero-headline" style={{ color: "#f5f0e8" }}>
              {data.h1}
            </h1>
            <p
              className="hero-subheadline mt-5 max-w-2xl"
              style={{ color: "rgba(245,230,200,0.82)" }}
              aria-label="Quick answer"
            >
              {data.quickAnswer}
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
            <a href="tel:+17736927576" className="btn-outline">Call (773) 692-7576</a>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
          <div className="flex flex-col items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase" style={{ color: "rgba(245,230,200,0.5)" }}>
            <span>Scroll</span>
            <div className="scroll-indicator" />
          </div>
        </div>
      </section>

      {/* ── INTRO + IMAGE SPLIT ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div {...reveal(0)}>
              <p className="section-eyebrow mb-3 text-[var(--gold)]">About This Service</p>
              <h2 className="heading-2 mb-6 text-[var(--charcoal)]">{data.tagline}</h2>
              <div className="flex flex-col gap-4">
                {data.bodyParagraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-[var(--charcoal)]/80">{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Request a Quote</Link>
                <Link href="/services" className="self-center text-sm font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-4 hover:decoration-[var(--gold-light)]">
                  Browse all services →
                </Link>
              </div>
            </motion.div>
            <motion.div {...reveal(0.12)}>
              <ImgPlaceholder
                label={`${data.name} Photo`}
                gradFrom={data.heroGradient.from}
                gradTo={data.heroGradient.to}
                className="w-full h-80 rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT PACKAGES ── */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div {...reveal(0)}>
            <p className="section-eyebrow mb-3" style={{ color: "#e8c97a" }}>What We Provide</p>
            <h2 className="heading-2 mb-12" style={{ color: "#f5f0e8" }}>
              Everything your {data.name.toLowerCase()} needs.
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                {...reveal(i * 0.07)}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-[#c9a84c]/30"
              >
                <span className="mb-3 block text-2xl" aria-hidden>{pkg.icon}</span>
                <h3 className="mb-2 font-medium" style={{ color: "#f5f0e8" }}>{pkg.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,230,200,0.72)" }}>{pkg.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-10 text-center" {...reveal(0.5)}>
            <Link
              href="/services"
              className="inline-block font-medium underline underline-offset-4 hover:opacity-80"
              style={{ color: "#e8c97a", textDecorationColor: "rgba(201,168,76,0.4)" }}
            >
              Browse all equipment categories →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Price list highlights (weddings + corporate) ── */}
      {(slug === "weddings" || slug === "corporate-events") && (
        <RentalHighlightGrid
          audience={slug === "weddings" ? "weddings" : "corporate-events"}
        />
      )}

      {/* ── IMAGE BREAK ── */}
      <section className="bg-[var(--cream)] py-12">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div {...reveal(0)}>
            <ImgPlaceholder
              label={`${data.name} Setup Photo`}
              gradFrom={data.midGradient.from}
              gradTo={data.midGradient.to}
              className="w-full h-64 rounded-2xl md:h-72"
            />
          </motion.div>
        </div>
      </section>

      {/* ── AEO: H2 QUESTION SECTIONS ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div {...reveal(0)}>
            <p className="section-eyebrow mb-3 text-[var(--gold)]">Common Questions</p>
          </motion.div>
          <div className="flex flex-col gap-14">
            {data.h2Sections.map((section, i) => (
              <motion.div key={section.question} {...reveal(i * 0.08)}>
                <h2 className="heading-2 mb-4 text-[var(--charcoal)]">{section.question}</h2>
                <p className="max-w-3xl text-base leading-relaxed text-[var(--charcoal)]/80">
                  {section.answer}
                </p>
                {section.resourceLink && (
                  <Link
                    href={section.resourceLink.href}
                    className="mt-3 inline-block font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-4 hover:decoration-[var(--gold-light)]"
                  >
                    {section.resourceLink.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING NOTE ── */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-14">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            {...reveal(0)}
            className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:gap-10"
          >
            <div className="flex-1">
              <p className="section-eyebrow mb-2" style={{ color: "#e8c97a" }}>Pricing</p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(245,230,200,0.88)" }}>
                {data.pricingNote}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:flex-shrink-0">
              <Link href="/event-rental-pricing-chicago" className="btn-primary whitespace-nowrap">
                See pricing details
              </Link>
              <Link
                href="/contact"
                className="text-center text-sm font-medium underline underline-offset-4 hover:opacity-80"
                style={{ color: "#e8c97a" }}
              >
                Get a quote →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED + RESOURCES ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <motion.div {...reveal(0)} className="flex flex-col gap-6">
              <ImgPlaceholder
                label={`${data.name} Details Photo`}
                gradFrom={data.midGradient.from}
                gradTo={data.midGradient.to}
                className="w-full h-56 rounded-2xl"
              />
              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: "#0b1f3a", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <p className="section-eyebrow mb-3" style={{ color: "#e8c97a" }}>Helpful resources</p>
                <ul className="space-y-2.5">
                  {data.resourceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium underline underline-offset-2 hover:opacity-80"
                        style={{ color: "#f5e6c8", textDecorationColor: "rgba(201,168,76,0.5)" }}
                      >
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div {...reveal(0.1)}>
              <p className="section-eyebrow mb-3 text-[var(--gold)]">Full-Service Rentals</p>
              <h2 className="heading-2 mb-6 text-[var(--charcoal)]">What&apos;s included on every order</h2>
              <ul className="space-y-4">
                {[
                  { title: "Professional delivery", body: "On-time delivery to your venue, confirmed in advance." },
                  { title: "Full setup by our crew", body: "We assemble everything before your event begins. You don't manage logistics." },
                  { title: "Teardown after your event", body: "We return after your event window and take everything down." },
                  { title: "Upfront itemized pricing", body: "Equipment, delivery, and setup quoted as named line items before you confirm." },
                  { title: "Licensed & SIOTO-certified", body: "Fully licensed and insured in Illinois. SIOTO Safety Seal certified for tent installations." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[0.6rem] font-bold text-[var(--gold)]">✓</span>
                    <div>
                      <span className="font-medium text-[var(--navy)]">{item.title} — </span>
                      <span className="text-sm text-[var(--charcoal)]/80">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Check Availability</Link>
                <Link href="/packages" className="self-center text-sm font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-4 hover:decoration-[var(--gold-light)]">
                  View packages →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="border-t border-white/10 py-24"
        style={{ background: `radial-gradient(ellipse at bottom right, ${data.heroGradient.from} 0%, #02030a 65%)` }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div {...reveal(0)}>
            <h2 className="heading-2 mb-4" style={{ color: "#f5f0e8" }}>
              Ready to plan your {data.name.toLowerCase()}?
            </h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(245,230,200,0.8)" }}>
              Tell us your date, guest count, and venue. We&apos;ll build a quote and confirm availability in one call.
            </p>
            <a
              href="tel:+17736927576"
              className="mb-6 inline-block text-4xl font-light tracking-wider hover:opacity-80"
              style={{ color: "#c9a84c" }}
            >
              (773) 692-7576
            </a>
            <p className="mb-6 text-sm" style={{ color: "rgba(245,230,200,0.5)" }}>or</p>
            <Link href="/contact" className="btn-outline inline-flex border-[var(--cream)]/30 text-[var(--cream)] hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/10">
              Submit your event details →
            </Link>
            <p className="mt-10 text-sm tracking-[0.15em]" style={{ color: "rgba(245,230,200,0.55)" }}>
              Licensed · Insured · SIOTO Safety Seal Certified
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div {...reveal(0)}>
            <h2 className="heading-2 mb-6 text-[var(--charcoal)]">Frequently asked questions</h2>
          </motion.div>
          <FAQAccordion
            items={data.faqs}
            withSchema
            schemaId={`ld-faq-${slug}`}
            variant="light"
          />
          <p className="mt-8 text-sm text-[var(--charcoal)]/70">
            <Link href="/events" className="font-medium text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-2">
              ← Back to all event types
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
