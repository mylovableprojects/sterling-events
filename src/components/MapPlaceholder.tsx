"use client";

/**
 * Illustrative coverage map placeholder for the service area page.
 * Replace with <ServiceAreaMap /> (full SVG) when ready.
 */
export function MapPlaceholder() {
  return (
    <div
      className="relative flex aspect-square max-w-lg flex-col items-center justify-center rounded-2xl border border-[var(--gold)]/20 bg-[var(--navy)] overflow-hidden"
      data-component="service-area-map"
    >
      <span className="text-center text-sm text-[var(--champagne)]/60">
        📍 Coverage map — Chicago & Chicagoland
      </span>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-3 w-3 rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--gold)]" aria-hidden />
      </div>
      <span className="absolute left-2 top-2 text-[10px] uppercase tracking-wider text-[var(--champagne)]/40">
        N
      </span>
      <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider text-[var(--champagne)]/40">
        S
      </span>
      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider text-[var(--champagne)]/40">
        W
      </span>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider text-[var(--champagne)]/40">
        NW
      </span>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-medium text-[var(--champagne)]/50">
        Sterling Event Rentals
      </span>
    </div>
  );
}
