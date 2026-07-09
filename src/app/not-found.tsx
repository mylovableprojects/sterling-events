import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { href: "/services", label: "Browse services" },
  { href: "/packages", label: "View packages" },
  { href: "/service-area", label: "Service area" },
  { href: "/answers", label: "Common questions" },
  { href: "/gallery", label: "Event gallery" },
] as const;

export default function NotFound() {
  return (
    <>
      <section className="gradient-hero relative flex min-h-[85vh] flex-col overflow-hidden">
        <div className="gradient-orb -left-32 top-6 h-56 w-56" />
        <div className="gradient-orb bottom-[-5rem] right-[-4rem] h-72 w-72 opacity-60" />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-8 text-center">
          <p className="section-eyebrow mb-6 text-[var(--gold)]">404 · Page not found</p>

          <p
            className="font-[var(--font-display)] text-[5.5rem] leading-none tracking-tight text-[var(--gold)]/25 md:text-[7rem]"
            aria-hidden
          >
            404
          </p>

          <h1 className="hero-headline mt-2 text-[var(--cream)]">
            This page isn&apos;t on the guest list.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--champagne)]/85 md:text-lg">
            The link may be outdated, or the page may have moved. Head back home or
            request a quote — our team can point you to tents, tables, stages, and
            everything else for your Chicago event.
          </p>

          <div className="mt-10 flex w-full justify-center">
            <CTABlock
              primary={{ href: "/", label: "Back to home" }}
              secondary={[
                { href: "/contact", label: "Get a quote" },
                { href: "/services", label: "Browse services", variant: "secondary" },
              ]}
              layout="column"
              className="justify-center"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--navy)]/10 bg-[var(--cream)] py-16 text-[var(--charcoal)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--navy)] md:text-3xl">
            Popular destinations
          </h2>
          <p className="mt-2 text-sm text-[var(--charcoal)]/70">
            Or jump straight to what most hosts are looking for.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  style={{ color: "#0b1f3a", border: "1px solid rgba(11,31,58,0.25)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-[var(--charcoal)]/65">
            Prefer to talk it through? Call{" "}
            <a
              href="tel:+17736927576"
              className="font-medium underline decoration-[var(--gold)] underline-offset-2 hover:decoration-[var(--gold-light)]"
              style={{ color: "#0b1f3a" }}
            >
              (773) 692-7576
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
