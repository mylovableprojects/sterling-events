"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ChicagolandMapEmbed = dynamic(
  () => import("./ChicagolandMapEmbed").then((m) => m.ChicagolandMapEmbed),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex min-h-[220px] w-full flex-col items-center justify-center rounded-xl border border-[var(--navy)]/15 bg-[var(--navy)]/[0.06] md:min-h-[280px]"
        aria-hidden
      >
        <span className="text-xs text-[var(--charcoal)]/40">Loading…</span>
      </div>
    ),
  },
);

/**
 * Defers the client chunk until the section is near the viewport. The Google Maps iframe
 * still loads only after the visitor taps “Load interactive map” inside ChicagolandMapEmbed.
 */
export function DeferredChicagolandMapEmbed({ className = "" }: { className?: string }) {
  const [loadChunk, setLoadChunk] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadChunk(true);
          io.disconnect();
        }
      },
      { rootMargin: "280px 0px", threshold: 0 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sentinelRef} className={className}>
      {loadChunk ? (
        <ChicagolandMapEmbed className="h-full min-h-[220px] w-full md:min-h-[280px]" />
      ) : (
        <div
          className="min-h-[220px] w-full rounded-xl border border-[var(--navy)]/15 bg-[var(--navy)]/[0.06] md:min-h-[280px]"
          aria-hidden
        />
      )}
    </div>
  );
}
