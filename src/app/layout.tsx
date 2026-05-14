import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { ClientRoot } from "../components/ClientRoot";
import { GoogleTagManager } from "../components/GoogleTagManager";
import { MetaPixel } from "../components/MetaPixel";
import { getMetaPixelInlineSnippet, META_PIXEL_ID } from "../lib/metaPixel";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const siteName = "Sterling Event Rentals";
const siteUrl = "https://www.sterlingeventrentals.com";
const defaultTitle = "Sterling Event Rentals | Event Rentals in Chicagoland";
const defaultDescription =
  "Chicago's full-service event rental company. Tents, tables, stages, and specialty installations for corporate events, weddings, and private parties in Naperville, Oak Park, Evanston, Schaumburg, and across Chicagoland. Licensed, SIOTO-certified. Get a quote.";

const GTM_ID = "GTM-WP3BV94Z";
const IS_PROD = process.env.NODE_ENV === "production";
/** Pixel in prod always; in dev only if `.env.local` has NEXT_PUBLIC_META_PIXEL_DEV=true (for Meta Pixel Helper on localhost). */
const META_PIXEL_ENABLED =
  IS_PROD || process.env.NEXT_PUBLIC_META_PIXEL_DEV === "true";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Sterling Event Rentals",
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sterling Event Rentals — Event rentals in Chicago and Chicagoland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {META_PIXEL_ENABLED && (
          <>
            <link rel="dns-prefetch" href="https://connect.facebook.net" />
            <link rel="dns-prefetch" href="https://www.facebook.com" />
            {/*
              beforeInteractive = snippet in first HTML document (Meta Pixel Helper detects this).
              Do not add a second copy of this snippet in a client component.
            */}
            <Script
              id="meta-pixel-base"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: getMetaPixelInlineSnippet() }}
            />
          </>
        )}
        {IS_PROD && (
          <>
            {/* Warm DNS for deferred GTM (tiny cost vs full preconnect on critical path) */}
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <Script
              id="ld-website"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  name: siteName,
                  url: siteUrl,
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteUrl}/answers?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                  },
                }),
              }}
            />
          </>
        )}
      </head>
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {IS_PROD && (
          <>
            <GoogleTagManager />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        {META_PIXEL_ENABLED && (
          <>
            <MetaPixel />
            <noscript>
              <img
                height={1}
                width={1}
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
