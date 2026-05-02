import Script from "next/script";
import { speakableWebPageJsonLd } from "@/lib/speakableSchema";

type Props = {
  pageUrl: string;
  scriptId?: string;
};

/** Optional JSON-LD: marks quick-answer / FAQ answer regions for TTS-oriented surfaces. */
export function SpeakableWebPageScript({ pageUrl, scriptId = "ld-speakable" }: Props) {
  return (
    <Script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(speakableWebPageJsonLd(pageUrl)),
      }}
    />
  );
}
