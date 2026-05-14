"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires `PageView` on client-side navigations. Base code lives in `layout.tsx` as
 * `beforeInteractive` so `fbq` exists in the initial HTML (Meta Pixel Helper + ads).
 */
export function MetaPixel() {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window.fbq !== "function") return;
    if (prevPath.current === null) {
      prevPath.current = pathname;
      return;
    }
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    window.fbq("track", "PageView");
  }, [pathname]);

  return null;
}
