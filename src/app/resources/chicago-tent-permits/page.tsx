import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TentPermitPathDiagram } from "@/components/TentPermitPathDiagram";

const BASE = "https://www.sterlingeventrentals.com";
const canonical = `${BASE}/resources/chicago-tent-permits`;

/** WebP in public/images/outdoor-event-planning/Elegant Outdoor Wedding Scene.webp */
const IMG_ELEGANT_OUTDOOR_WEDDING_WEBP =
  "/images/outdoor-event-planning/Elegant%20Outdoor%20Wedding%20Scene.webp";
/** preparing-chicago-tent-permit-essentials.webp (source: Preparing for a Chicago Event Tent Permit Essentials) */
const IMG_PREPARING_TENT_PERMIT_ESSENTIALS_WEBP =
  "/images/outdoor-event-planning/preparing-chicago-tent-permit-essentials.webp";

const tentPermitsTitle = "Chicago Tent Permit Guide for Event Renters | Sterling Event Rentals";
const tentPermitsDescription =
  "In Chicago, tents over 400 sq ft or 15 ft tall require a permit. 401–600 sq ft: standard permit. 600+ sq ft: permit plus engineered drawings. Permits are the customer's responsibility. Full guide.";

export function generateMetadata(): Metadata {
  return {
    title: tentPermitsTitle,
    description: tentPermitsDescription,
    alternates: { canonical },
    openGraph: {
      title: tentPermitsTitle,
      description: tentPermitsDescription,
      url: canonical,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Chicago Tent Permit Guide — Sterling Event Rentals" }],
    },
    twitter: {
      card: "summary_large_image",
      title: tentPermitsTitle,
      description: tentPermitsDescription,
    },
  };
}

const quickAnswer =
  "In Chicago, tents 400 sq ft or smaller and under 15 ft tall do not require a building permit — so a standard 20×20 backyard tent is typically fine. Anything larger or taller requires a permit: 401–600 sq ft uses a simpler process, while 600+ sq ft requires engineered drawings and additional paperwork. Permits are the customer's responsibility — Sterling Event Rentals does not pull permits on behalf of clients.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Do You Need a Tent Permit in Chicago? A Renter's Guide",
  description: "Chicago tent permit thresholds, who is responsible, and how to apply. Guide for event renters.",
  author: { "@type": "Organization", name: "Sterling Event Rentals" },
  publisher: {
    "@type": "Organization",
    name: "Sterling Event Rentals",
    logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
  },
  datePublished: "2026-03-01",
  dateModified: "2026-03-22",
};

const faqItems = [
  {
    question: "Does a 20×20 tent require a permit in Chicago?",
    answer:
      "A 20×20 tent is exactly 400 sq ft — right at the threshold. Tents 400 sq ft or smaller AND under 15 ft tall do not require a Chicago building permit, so a standard 20×20 frame tent used for a backyard party typically does not require one. That said, if you set up multiple tents close together, the city may combine their square footage when determining permit requirements. When in doubt, confirm with the Chicago Department of Buildings.",
  },
  {
    question: "What happens if I set up multiple tents?",
    answer:
      "If you set up multiple tents in close proximity, the city may treat them as a single structure and combine their square footage for permit purposes. For example, two 20×20 tents side by side could be treated as 800 sq ft total — which would require a permit and potentially engineered drawings. Confirm the combined-tent rule with the Chicago Department of Buildings before your event.",
  },
  {
    question: "Do I need a special event permit for a park or street event?",
    answer:
      "Yes — if your event involves public access, street closures, or Chicago Park District property, you may need a special event permit regardless of tent size. The Chicago Park District has its own permitting process separate from the Department of Buildings. Contact the Park District directly for your venue.",
  },
  {
    question: "How far in advance should I apply for a tent permit?",
    answer:
      "Apply as early as possible. Budget at least 2–4 weeks, longer during peak summer months. If your tent requires engineered drawings (600+ sq ft), allow additional time for that documentation. Your permit timeline should align with booking your rental — Sterling recommends 21–30 days lead time for corporate events and 3–6 months for weddings.",
  },
  {
    question: "What happens if I don't get a permit?",
    answer:
      "Operating without a required permit can result in the city requiring you to take the tent down mid-event and may result in fines. The venue may also face liability. It's worth confirming whether a permit is required and applying in time.",
  },
  {
    question: "Does Sterling pull permits for customers?",
    answer:
      "No. Permits are the customer's responsibility. Sterling Event Rentals does not pull permits on behalf of clients. We can provide documentation we're responsible for — certificates of insurance, SIOTO Safety Seal certification records, and company licensing — that some agencies require from vendors.",
  },
  {
    question: "Can Sterling provide insurance documentation for my permit application?",
    answer:
      "Yes. Sterling Event Rentals is fully licensed and insured in Illinois and SIOTO Safety Seal certified for tent installations. We can provide certificates of insurance and certification records on request for permit applications, park districts, and venues that require vendor documentation.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${BASE}/resources` },
    { "@type": "ListItem", position: 3, name: "Chicago Tent Permits", item: canonical },
  ],
};

const H2 = "font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl mb-3";
const BODY = "text-base leading-relaxed text-[var(--charcoal)]/82";

export default function ChicagoTentPermitsPage() {
  return (
    <>
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="ld-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO ── */}
      <section className="gradient-hero relative min-h-[60vh]">
        <div className="gradient-orb -left-24 top-10 h-56 w-56" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/resources", label: "Resources" },
              { href: "/resources/chicago-tent-permits", label: "Chicago Tent Permits" },
            ]}
          />
          <p className="section-eyebrow text-[var(--gold-light)]">Resource Guide</p>
          <h1 className="hero-headline text-[var(--cream)]">
            Do you need a tent permit in Chicago?
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--champagne)]/85" aria-label="Quick answer">
            {quickAnswer}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">Get a Quote for Your Event</Link>
            <Link href="/resources/tent-sizing-guide" className="btn-outline">What size tent do I need? →</Link>
          </div>
        </div>
      </section>

      {/* ── PERMIT THRESHOLD TIERS ── */}
      <section className="bg-[var(--cream)] py-14">
        <div className="mx-auto max-w-4xl px-4">
          <p className="section-eyebrow mb-3 text-[var(--gold)]">At a Glance</p>
          <h2 className="mb-8 font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
            Chicago tent permit thresholds
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">

            {/* Tier 1 — No permit */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#f0f7f0", border: "1.5px solid rgba(34,139,34,0.25)" }}>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl">✅</span>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1a6b1a" }}>No Permit Needed</p>
              </div>
              <p className="text-3xl font-bold mb-1" style={{ color: "#0b1f3a" }}>≤ 400 sq ft</p>
              <p className="text-sm mb-3" style={{ color: "rgba(30,40,60,0.65)" }}>AND under 15 ft tall</p>
              <div className="border-t pt-3" style={{ borderColor: "rgba(34,139,34,0.15)" }}>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(30,40,60,0.7)" }}>
                  Standard 20×20 backyard tents typically fall here. Safety rules still apply.
                </p>
              </div>
            </div>

            {/* Tier 2 — Permit required */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fff9ed", border: "1.5px solid rgba(201,168,76,0.45)" }}>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8a6200" }}>Permit Required</p>
              </div>
              <p className="text-3xl font-bold mb-1" style={{ color: "#0b1f3a" }}>401–600 sq ft</p>
              <p className="text-sm mb-3" style={{ color: "rgba(30,40,60,0.65)" }}>OR over 15 ft tall</p>
              <div className="border-t pt-3" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(30,40,60,0.7)" }}>
                  Standard permit process through Chicago Dept of Buildings. Most 20×30 and 20×40 tents fall here.
                </p>
              </div>
            </div>

            {/* Tier 3 — Permit + drawings */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fff0f0", border: "1.5px solid rgba(180,40,40,0.25)" }}>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl">📋</span>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8a1a1a" }}>Permit + Drawings</p>
              </div>
              <p className="text-3xl font-bold mb-1" style={{ color: "#0b1f3a" }}>600+ sq ft</p>
              <p className="text-sm mb-3" style={{ color: "rgba(30,40,60,0.65)" }}>30×20 and larger</p>
              <div className="border-t pt-3" style={{ borderColor: "rgba(180,40,40,0.15)" }}>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(30,40,60,0.7)" }}>
                  Permit required plus engineered drawings and additional paperwork. Allow extra lead time.
                </p>
              </div>
            </div>

          </div>

          {/* Multi-tent nuance callout */}
          <div className="mt-5 rounded-xl px-5 py-4 flex gap-3" style={{ backgroundColor: "#f5f0e8", border: "1px solid rgba(11,31,58,0.1)" }}>
            <span className="text-lg flex-shrink-0 mt-0.5">🧠</span>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(30,40,60,0.8)" }}>
              <strong style={{ color: "#0b1f3a" }}>Multiple tents:</strong> If you set up multiple tents in close proximity, the city may combine their square footage when determining permit requirements. Two 20×20 tents side by side could be treated as a single 800 sq ft structure — triggering the permit + drawings tier.
            </p>
          </div>

          <p className="mt-3 text-xs italic" style={{ color: "rgba(30,40,60,0.4)" }}>
            Thresholds are for Chicago private property. Park District and other jurisdictions have separate rules. Confirm current requirements with the Chicago Department of Buildings before your event.
          </p>
        </div>
      </section>

      {/* ── Featured image ── */}
      <section className="bg-[var(--cream)] pb-14">
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative h-56 w-full overflow-hidden rounded-2xl md:h-64">
            <Image
              src={IMG_ELEGANT_OUTDOOR_WEDDING_WEBP}
              alt="Elegant outdoor wedding tent setup with Chicago skyline in the background."
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── PERMIT PATH DIAGRAM ── */}
      <section className="bg-[var(--navy)] py-14">
        <div className="mx-auto max-w-5xl px-4">
          <p className="section-eyebrow mb-3" style={{ color: "#e8c97a" }}>Visual Guide</p>
          <h2 className="mb-8 font-[var(--font-display)] text-2xl md:text-3xl" style={{ color: "#f5f0e8" }}>
            Which agency do you apply to?
          </h2>
          <TentPermitPathDiagram />
        </div>
      </section>

      {/* ── 3 CORE AEO H2 SECTIONS ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-10 text-[var(--gold)]">The Essentials</p>
          <div className="flex flex-col gap-12">

            <div>
              <h2 className={H2}>When is a tent permit required in Chicago?</h2>
              <p className={BODY}>
                In Chicago, a building permit is required for any tent <strong>over 400 sq ft</strong> or <strong>taller than 15 ft</strong>. A standard 20×20 frame tent (400 sq ft) sits right at the threshold — typically no permit needed for private property events. A 20×30 or larger crosses into permit territory. Tents 600 sq ft and above require engineered drawings in addition to the standard permit, which adds paperwork and lead time.
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(30,40,60,0.6)" }}>
                Park venues and events involving public access or street closures may have additional or separate permit requirements regardless of tent size.
              </p>
            </div>

            <div className="border-t border-[var(--navy)]/8" />

            <div>
              <h2 className={H2}>Who is responsible for getting the permit?</h2>
              <p className={BODY}>
                You are. Permits are the customer&apos;s responsibility. Sterling Event Rentals does not pull permits on behalf of clients. We can provide documentation we&apos;re responsible for — certificates of insurance and SIOTO Safety Seal certification records — that many agencies and venues require from vendors as part of your application.
              </p>
            </div>

            <div className="border-t border-[var(--navy)]/8" />

            <div>
              <h2 className={H2}>How do I apply for a tent permit in Chicago?</h2>
              <p className={BODY}>The process depends on your venue type:</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl p-5" style={{ backgroundColor: "#f5f0e8", border: "1px solid rgba(11,31,58,0.1)" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#0b1f3a" }}>Private Property</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(30,40,60,0.8)" }}>
                    Apply through the <strong>Chicago Department of Buildings</strong>. Visit chicago.gov or call the DOB for current forms and processing timelines.
                  </p>
                </div>
                <div className="rounded-xl p-5" style={{ backgroundColor: "#f5f0e8", border: "1px solid rgba(11,31,58,0.1)" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#0b1f3a" }}>Park District Venues</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(30,40,60,0.8)" }}>
                    Apply through the <strong>Chicago Park District</strong>. Visit chicagoparkdistrict.com/permits for current requirements and application instructions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── APPLICATION CHECKLIST + IMAGE ── */}
      <section className="border-t border-white/10 bg-[var(--navy)] py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="section-eyebrow mb-3" style={{ color: "#e8c97a" }}>What You'll Typically Need</p>
              <h2 className="mb-6 font-[var(--font-display)] text-xl md:text-2xl" style={{ color: "#f5f0e8" }}>
                Permit application checklist
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { item: "Tent dimensions", note: "Size in feet and total square footage" },
                  { item: "Event date & times", note: "Full setup through teardown window" },
                  { item: "Venue address & site details", note: "Full address, surface type, access notes" },
                  { item: "Site plan / layout", note: "Tent position relative to structures and property lines" },
                  { item: "Certificate of insurance", note: "Sterling provides ours on request" },
                  { item: "Vendor certification", note: "Sterling provides SIOTO Safety Seal docs" },
                  { item: "Engineered drawings", note: "Required for tents 600 sq ft and larger" },
                ].map((row) => (
                  <div key={row.item} className="flex gap-3 items-start">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold"
                      style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>✓</span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#f5f0e8" }}>{row.item}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(245,230,200,0.45)" }}>{row.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs" style={{ color: "rgba(245,230,200,0.35)" }}>
                Confirm the full list with the Chicago DOB or Park District for your specific venue and tent size.
              </p>
            </div>

            {/* Permit application photo */}
            <div className="flex flex-col gap-5">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl lg:h-80">
                <Image
                  src={IMG_PREPARING_TENT_PERMIT_ESSENTIALS_WEBP}
                  alt="Preparing for a Chicago event tent permit: essentials and documentation for your application."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 448px"
                />
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>
                  Sterling Can Provide
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,230,200,0.75)" }}>
                  Certificate of insurance, SIOTO Safety Seal certification, and company licensing records — the vendor documentation most agencies require. Just ask when you get your quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-3 text-[var(--gold)]">FAQ</p>
          <h2 className="mb-8 font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
            Common questions about Chicago tent permits
          </h2>
          <FAQAccordion items={faqItems} withSchema={false} schemaId="ld-faq-inline" variant="light" />
        </div>
      </section>

      {/* ── RELATED + CTA ── */}
      <section className="border-t border-[var(--navy)]/10 bg-[var(--sand)] py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-4 text-[var(--gold)]">You might also find helpful</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/resources/tent-sizing-guide", label: "What size tent do I need?" },
              { href: "/services/tents-structures", label: "Browse tent options" },
              { href: "/resources/outdoor-event-planning", label: "Outdoor event planning guide" },
              { href: "/contact", label: "Have questions? Contact us" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium transition-colors"
                style={{ color: "#0b1f3a", border: "1px solid rgba(11,31,58,0.25)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[var(--navy)] p-10 text-center">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--cream)] md:text-3xl">
              Ready to reserve your tent?
            </h2>
            <p className="mt-3 text-sm text-[var(--champagne)]/65">
              We&apos;ll confirm availability and provide any vendor documentation you need for your permit application.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-block">Check Availability</Link>
            <p className="mt-4 text-sm text-[var(--champagne)]/45">(773) 692-7576</p>
          </div>
        </div>
      </section>
    </>
  );
}
