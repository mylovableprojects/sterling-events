"use client";

import { useEffect } from "react";
import {
  BOUNCETRACK_PIXEL_SCRIPT,
  BOUNCETRACK_PUBLIC_KEY,
} from "@/lib/bouncetrack";

type Props = {
  submissionId: string;
  email: string;
};

/**
 * Fires once after a successful quote form submission.
 * Injects the vendor snippet into document.head (async + data-* attributes).
 */
export function BounceTrackConversionPixel({ submissionId, email }: Props) {
  useEffect(() => {
    const scriptId = `bouncetrack-conversion-${submissionId}`;
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = BOUNCETRACK_PIXEL_SCRIPT;
    script.async = true;
    script.setAttribute("data-key", BOUNCETRACK_PUBLIC_KEY);
    script.setAttribute("data-booking-id", submissionId);
    script.setAttribute("data-email", email);
    document.head.appendChild(script);
  }, [submissionId, email]);

  return null;
}
