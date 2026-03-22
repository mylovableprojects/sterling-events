import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--gold)]/35 bg-black/50 pt-10 pb-6 text-xs text-[var(--champagne)]/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <div className="text-[0.7rem] tracking-[0.35em] text-[var(--champagne)]/70 uppercase">
            Sterling
          </div>
          <div className="text-xl font-semibold tracking-[0.2em] text-[var(--gold)] uppercase">
            Events
          </div>
          <p className="max-w-xs text-[0.78rem] leading-relaxed text-[var(--champagne)]/70">
            Tent, table, stage, and specialty event rentals for Chicago and Chicagoland. Licensed, insured, SIOTO Safety Seal Certified.
          </p>
          <address className="mt-2 not-italic text-[0.75rem] leading-relaxed text-[var(--champagne)]/55">
            Chicago, IL · Serving Chicagoland<br />
            <a href="tel:+17736927576" className="transition-colors hover:text-[var(--gold)]">(773) 692-7576</a>
            {" · "}
            <a href="mailto:info@sterlingeventrentals.com" className="transition-colors hover:text-[var(--gold)]">info@sterlingeventrentals.com</a>
          </address>
        </div>

        <div className="flex flex-1 flex-col gap-8 md:flex-row md:justify-end">
          <div className="space-y-3">
            <div className="section-eyebrow">Services</div>
            <div className="flex flex-col gap-1 text-[0.8rem]">
              <Link href="/services" className="hover:text-[var(--gold)]">
                All Services
              </Link>
              <Link href="/services/tents-structures" className="hover:text-[var(--gold)]">
                Tents &amp; Structures
              </Link>
              <Link href="/services/tables-seating" className="hover:text-[var(--gold)]">
                Tables &amp; Seating
              </Link>
              <Link href="/services/stages-presentation" className="hover:text-[var(--gold)]">
                Stages &amp; Presentation
              </Link>
              <Link href="/services/games-entertainment" className="hover:text-[var(--gold)]">
                Games &amp; Entertainment
              </Link>
              <Link href="/services/event-extras" className="hover:text-[var(--gold)]">
                Event Extras
              </Link>
              <Link href="/services/delivery-setup-teardown" className="hover:text-[var(--gold)]">
                Delivery &amp; Setup
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="section-eyebrow">Plan Your Event</div>
            <div className="flex flex-col gap-1 text-[0.8rem]">
              <Link href="/packages" className="hover:text-[var(--gold)]">
                Packages
              </Link>
              <Link href="/event-rental-pricing-chicago" className="hover:text-[var(--gold)]">
                Pricing Guide
              </Link>
              <Link href="/service-area" className="hover:text-[var(--gold)]">
                Service Area
              </Link>
              <Link href="/resources/tent-sizing-guide" className="hover:text-[var(--gold)]">
                Tent Sizing Guide
              </Link>
              <Link href="/resources/corporate-event-checklist" className="hover:text-[var(--gold)]">
                Corporate Checklist
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="section-eyebrow">Company</div>
            <div className="flex flex-col gap-1 text-[0.8rem]">
              <Link href="/about" className="hover:text-[var(--gold)]">
                About Sterling
              </Link>
              <Link href="/reviews" className="hover:text-[var(--gold)]">
                Client Reviews
              </Link>
              <Link href="/contact" className="hover:text-[var(--gold)]">
                Contact
              </Link>
              <Link href="/legal/privacy-policy" className="hover:text-[var(--gold)]">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-of-service" className="hover:text-[var(--gold)]">
                Terms of Service
              </Link>
              <Link href="/legal/cancellation-policy" className="hover:text-[var(--gold)]">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 px-4 pt-6 text-[0.7rem] text-[var(--champagne)]/60">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>
              © 2026 Sterling Event Rentals&nbsp;&nbsp;|&nbsp;&nbsp;Chicago, IL&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="tel:+17736927576" className="transition-colors hover:text-[var(--gold)]">
                (773) 692-7576
              </a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a
                href="mailto:info@sterlingeventrentals.com"
                className="transition-colors hover:text-[var(--gold)]"
              >
                info@sterlingeventrentals.com
              </a>
            </p>
            <p className="tracking-[0.22em] uppercase">
              Licensed · Insured · SIOTO Safety Seal Certified
            </p>
          </div>

          <div className="flex items-center gap-4 md:justify-end">
            <span className="sr-only">Social</span>
            <a
              href="https://www.instagram.com/sterlingeventrental"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sterling Event Rentals on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[var(--champagne)]/70 transition-colors hover:border-[var(--gold)]/40 hover:text-[var(--gold)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M12 16.2A4.2 4.2 0 1 0 12 7.8a4.2 4.2 0 0 0 0 8.4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M17.6 6.6h.01"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61582710860825"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sterling Event Rentals on Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[var(--champagne)]/70 transition-colors hover:border-[var(--gold)]/40 hover:text-[var(--gold)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M14 8.5V7.1c0-.7.3-1.1 1.2-1.1H17V3h-2.3C12.5 3 11 4.3 11 6.8v1.7H9v3h2V21h3v-9.5h2.4l.6-3H14Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

