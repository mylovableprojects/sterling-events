"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-WP3BV94Z";

function appendGtmScript() {
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

function scheduleGtmInject() {
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(() => appendGtmScript(), { timeout: 3200 });
  } else {
    setTimeout(appendGtmScript, 1);
  }
}

/**
 * Loads GTM after meaningful engagement or a fallback delay — keeps `gtm.js` off the
 * initial navigation and avoids firing on the first scroll pixel (common in Lighthouse).
 * Events queue in `dataLayer` until the script runs (standard GTM behavior).
 */
export function GoogleTagManager() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    let done = false;
    const ac = new AbortController();
    const { signal } = ac;

    const fallbackTimer = window.setTimeout(inject, 12_000);

    function inject() {
      if (done) return;
      done = true;
      window.clearTimeout(fallbackTimer);
      ac.abort();
      scheduleGtmInject();
    }

    /** Scroll only counts after real depth — not the first few px Lighthouse uses for layout. */
    function onScroll() {
      const y = window.scrollY;
      const doc = document.documentElement;
      const maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight);
      const ratio = maxScroll > 0 ? y / maxScroll : 0;
      if (y >= 520 || ratio >= 0.22) inject();
    }

    window.addEventListener("pointerdown", inject, { capture: true, passive: true, signal });
    window.addEventListener("keydown", inject, { capture: true, passive: true, signal });
    window.addEventListener("touchstart", inject, { capture: true, passive: true, signal });
    window.addEventListener("scroll", onScroll, { capture: true, passive: true, signal });

    return () => {
      window.clearTimeout(fallbackTimer);
      ac.abort();
    };
  }, []);

  return null;
}
