"use client";

import Script from "next/script";
import {
  BOUNCETRACK_PIXEL_SCRIPT,
  BOUNCETRACK_PUBLIC_KEY,
} from "@/lib/bouncetrack";

type Props = {
  submissionId: string;
  email: string;
};

/** Fires once after a successful quote form submission (conversion / thank-you). */
export function BounceTrackConversionPixel({ submissionId, email }: Props) {
  return (
    <Script
      id={`bouncetrack-conversion-${submissionId}`}
      src={BOUNCETRACK_PIXEL_SCRIPT}
      data-key={BOUNCETRACK_PUBLIC_KEY}
      data-booking-id={submissionId}
      data-email={email}
      strategy="afterInteractive"
    />
  );
}
