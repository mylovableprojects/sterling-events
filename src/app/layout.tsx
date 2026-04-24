import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { ClientRoot } from "../components/ClientRoot";

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
const siteUrl = "https://sterlingevents.com";
const defaultTitle = "Sterling Event Rentals | Event Rentals in Chicagoland";
const defaultDescription =
  "Chicago's full-service event rental company. Tents, tables, stages, and specialty installations for corporate events, weddings, and private parties in Naperville, Oak Park, Evanston, Schaumburg, and across Chicagoland. Licensed, SIOTO-certified. Get a quote.";

const GTM_ID = "GTM-WP3BV94Z";
const IS_PROD = process.env.NODE_ENV === "production";

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
        {IS_PROD && (
          <>
            <Script
              id="ld-localbusiness"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  name: siteName,
                  url: siteUrl,
                  telephone: "+17736927576",
                  email: "info@sterlingeventrentals.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Chicago",
                    addressRegion: "IL",
                    addressCountry: "US",
                  },
                  areaServed: {
                    "@type": "GeoCircle",
                    geoMidpoint: {
                      "@type": "GeoCoordinates",
                      latitude: 41.8781,
                      longitude: -87.6298,
                    },
                    geoRadius: "50000",
                  },
                  foundingDate: "2021",
                  priceRange: "$$",
                  hasCredential: "SIOTO Safety Seal",
                  image: `${siteUrl}/og-image.jpg`,
                  sameAs: [
                    "https://www.instagram.com/sterlingeventrental",
                    "https://www.facebook.com/profile.php?id=61582710860825",
                  ],
                }),
              }}
            />

            {/* Google Tag Manager */}
            <Script
              id="gtm-datalayer"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`,
              }}
            />
            <Script
              id="gtm-src"
              strategy="beforeInteractive"
              src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
            />

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
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
