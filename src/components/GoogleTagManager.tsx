"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-WP3BV94Z";

/**
 * Loads GTM after first engagement (tap, key, scroll, touch) or after a fallback delay —
 * keeps `gtm.js` off the initial navigation/Lighthouse critical path. Events queue in
 * `dataLayer` until the script runs (standard GTM behavior).
 */
export function GoogleTagManager() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    let done = false;
    const ac = new AbortController();
    const { signal } = ac;

    const fallbackTimer = window.setTimeout(inject, 6000);

    function inject() {
      if (done) return;
      done = true;
      window.clearTimeout(fallbackTimer);
      ac.abort();

      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer ?? [];
      w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(s);
    }

    window.addEventListener("pointerdown", inject, { capture: true, passive: true, signal });
    window.addEventListener("keydown", inject, { capture: true, passive: true, signal });
    window.addEventListener("scroll", inject, { capture: true, passive: true, signal });
    window.addEventListener("touchstart", inject, { capture: true, passive: true, signal });

    return () => {
      window.clearTimeout(fallbackTimer);
      ac.abort();
    };
  }, []);

  return null;
}
