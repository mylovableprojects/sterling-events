"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/tents-structures", label: "Tents & Structures" },
  { href: "/services/tables-seating", label: "Tables & Seating" },
  { href: "/services/stages-presentation", label: "Stages & Presentation" },
  { href: "/services/games-entertainment", label: "Games & Entertainment" },
  { href: "/services/event-extras", label: "Event Extras" },
  { href: "/services/delivery-setup-teardown", label: "Delivery, Setup & Teardown" },
];

const resourceLinks = [
  { href: "/resources", label: "All Resources" },
  { href: "/resources/tent-sizing-guide", label: "Tent Sizing Guide" },
  { href: "/resources/chicago-tent-permits", label: "Chicago Tent Permits" },
  { href: "/resources/outdoor-event-planning", label: "Outdoor Event Planning" },
  { href: "/resources/corporate-event-checklist", label: "Corporate Event Checklist" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [resourcesOpenMobile, setResourcesOpenMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-40 flex items-center justify-center"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={`mx-4 mt-4 flex w-full max-w-6xl items-center justify-between rounded-full border border-white/5 px-6 py-3 text-sm transition-all ${
            scrolled ? "glass-nav shadow-[0_18px_60px_rgba(0,0,0,0.65)]" : "bg-black/40 backdrop-blur-md"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border border-[var(--gold)]/60 bg-gradient-to-br from-[var(--gold)]/40 to-transparent" />
            <div className="leading-tight">
              <div className="text-[0.7rem] tracking-[0.35em] text-[var(--champagne)]/80 uppercase">
                Sterling
              </div>
              <div className="text-[1.15rem] font-semibold tracking-[0.18em] text-[var(--gold)] uppercase">
                Events
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <div className="relative group">
              <button
                type="button"
                className="nav-link-underline text-xs tracking-[0.28em] uppercase text-[var(--champagne)]/80"
              >
                Services ▾
              </button>
              <div className="invisible absolute left-0 top-full mt-3 w-64 rounded-2xl border border-white/10 bg-black/90 p-3 text-[0.75rem] opacity-0 shadow-[0_18px_60px_rgba(0,0,0,0.8)] transition-all group-hover:visible group-hover:opacity-100">
                <ul className="space-y-1">
                  {serviceLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between rounded-md px-2 py-1.5 ${
                            active ? "text-[var(--gold)]" : "text-[var(--champagne)]/80 hover:text-[var(--gold)]"
                          }`}
                        >
                          <span className="text-[0.7rem] tracking-[0.18em] uppercase">{link.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <Link
              href="/packages"
              className={`nav-link-underline text-xs tracking-[0.28em] uppercase ${
                pathname === "/packages" ? "nav-link-underline-active text-[var(--gold)]" : "text-[var(--champagne)]/80"
              }`}
            >
              Packages
            </Link>

            <Link
              href="/service-area"
              className={`nav-link-underline text-xs tracking-[0.28em] uppercase ${
                pathname === "/service-area"
                  ? "nav-link-underline-active text-[var(--gold)]"
                  : "text-[var(--champagne)]/80"
              }`}
            >
              Service Area
            </Link>

            <div className="relative group">
              <button
                type="button"
                className="nav-link-underline text-xs tracking-[0.28em] uppercase text-[var(--champagne)]/80"
              >
                Resources ▾
              </button>
              <div className="invisible absolute left-0 top-full mt-3 w-72 rounded-2xl border border-white/10 bg-black/90 p-3 text-[0.75rem] opacity-0 shadow-[0_18px_60px_rgba(0,0,0,0.8)] transition-all group-hover:visible group-hover:opacity-100">
                <ul className="space-y-1">
                  {resourceLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between rounded-md px-2 py-1.5 ${
                            active ? "text-[var(--gold)]" : "text-[var(--champagne)]/80 hover:text-[var(--gold)]"
                          }`}
                        >
                          <span className="text-[0.7rem] tracking-[0.18em] uppercase">{link.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <Link
              href="/about"
              className={`nav-link-underline text-xs tracking-[0.28em] uppercase ${
                pathname === "/about" ? "nav-link-underline-active text-[var(--gold)]" : "text-[var(--champagne)]/80"
              }`}
            >
              About
            </Link>

            <div className="flex items-center gap-4">
              <a
                href="tel:+17736927576"
                className="hidden text-[0.7rem] tracking-[0.25em] text-[var(--champagne)]/80 md:inline-block uppercase"
              >
                (773) 692-7576
              </a>
              <Link href="/contact" className="btn-primary">
                Check Availability
              </Link>
            </div>
          </nav>

          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[var(--champagne)] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <motion.span
              className="absolute h-px w-4 bg-[var(--champagne)]"
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
              transition={{ duration: 0.18 }}
            />
            <motion.span
              className="absolute h-px w-4 bg-[var(--champagne)]"
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
              transition={{ duration: 0.18 }}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-[radial-gradient(circle_at_top,_#101432_0,_#02030a_55%,_#010108_100%)] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col justify-between px-8 pb-10 pt-16">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full border border-[var(--gold)]/60 bg-gradient-to-br from-[var(--gold)]/40 to-transparent" />
                  <div className="leading-tight">
                    <div className="text-[0.7rem] tracking-[0.35em] text-[var(--champagne)]/80 uppercase">
                      Sterling
                    </div>
                    <div className="text-[1.15rem] font-semibold tracking-[0.18em] text-[var(--gold)] uppercase">
                      Events
                    </div>
                  </div>
                </Link>
                <a
                  href="tel:+17736927576"
                  className="text-[0.7rem] tracking-[0.25em] text-[var(--champagne)]/80 uppercase"
                >
                  (773) 692-7576
                </a>
              </div>

              <nav className="mt-10 flex-1 space-y-4 text-sm">
                <Link
                  href="/"
                  className={`block text-lg tracking-[0.25em] uppercase ${
                    pathname === "/" ? "text-[var(--gold)]" : "text-[var(--champagne)]"
                  }`}
                >
                  Home
                </Link>

                <button
                  type="button"
                  onClick={() => setServicesOpenMobile((prev) => !prev)}
                  className="flex w-full items-center justify-between text-lg tracking-[0.25em] uppercase text-[var(--champagne)]"
                >
                  <span>Services</span>
                  <span>{servicesOpenMobile ? "−" : "+"}</span>
                </button>
                {servicesOpenMobile && (
                  <ul className="ml-4 space-y-2 text-[0.8rem]">
                    {serviceLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`block tracking-[0.2em] uppercase ${
                            pathname === link.href ? "text-[var(--gold)]" : "text-[var(--champagne)]/85"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href="/packages"
                  className={`block text-lg tracking-[0.25em] uppercase ${
                    pathname === "/packages" ? "text-[var(--gold)]" : "text-[var(--champagne)]"
                  }`}
                >
                  Packages
                </Link>

                <Link
                  href="/service-area"
                  className={`block text-lg tracking-[0.25em] uppercase ${
                    pathname === "/service-area" ? "text-[var(--gold)]" : "text-[var(--champagne)]"
                  }`}
                >
                  Service Area
                </Link>

                <button
                  type="button"
                  onClick={() => setResourcesOpenMobile((prev) => !prev)}
                  className="flex w-full items-center justify-between text-lg tracking-[0.25em] uppercase text-[var(--champagne)]"
                >
                  <span>Resources</span>
                  <span>{resourcesOpenMobile ? "−" : "+"}</span>
                </button>
                {resourcesOpenMobile && (
                  <ul className="ml-4 space-y-2 text-[0.8rem]">
                    {resourceLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`block tracking-[0.2em] uppercase ${
                            pathname === link.href ? "text-[var(--gold)]" : "text-[var(--champagne)]/85"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href="/about"
                  className={`block text-lg tracking-[0.25em] uppercase ${
                    pathname === "/about" ? "text-[var(--gold)]" : "text-[var(--champagne)]"
                  }`}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className={`block text-lg tracking-[0.25em] uppercase ${
                    pathname === "/contact" ? "text-[var(--gold)]" : "text-[var(--champagne)]"
                  }`}
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-6">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Check Availability
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

