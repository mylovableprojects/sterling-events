"use client";

import { useState } from "react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380513.2920725702!2d-87.89711489999999!3d41.8333929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0x6890a30983a1d553!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1709938800000!5m2!1sen!2sus";

/**
 * Interactive embed loads only after an explicit tap — avoids ~1s+ of maps.googleapis.com
 * main-thread work during initial load and in Lighthouse (no automatic scroll-trigger).
 */
export function ChicagolandMapEmbed({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-[var(--navy)]/15 shadow-md ${className}`}
    >
      {active ? (
        <iframe
          title="Chicago and Chicagoland — approximate Sterling Event Rentals delivery area"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          src={MAP_SRC}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--navy)]/[0.06] px-4 py-10">
          <p className="max-w-[18rem] text-center text-sm leading-snug text-[var(--charcoal)]/75">
            Load the map when you need it — keeps the page fast for everyone else.
          </p>
          <button
            type="button"
            className="btn-primary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em]"
            onClick={() => setActive(true)}
          >
            Load interactive map
          </button>
        </div>
      )}
    </div>
  );
}
