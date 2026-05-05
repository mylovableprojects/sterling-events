"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { syncAttributionFromBrowser } from "@/lib/attribution";

function AttributionCaptureInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    syncAttributionFromBrowser();
  }, [pathname, searchParams]);

  return null;
}

/** Runs on every navigation so UTMs on any page are stored before the user reaches /contact. */
export function AttributionCapture() {
  return (
    <Suspense fallback={null}>
      <AttributionCaptureInner />
    </Suspense>
  );
}
