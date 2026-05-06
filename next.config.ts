import type { NextConfig } from "next";

/** Legacy service URLs (pre–`-chicago` suffix) → permanent redirects for SEO */
const LEGACY_SERVICE_SLUGS = [
  "tents-structures",
  "tables-seating",
  "stages-presentation",
  "games-entertainment",
  "event-extras",
  "delivery-setup-teardown",
] as const;

const nextConfig: NextConfig = {
  turbopack: {
    // Prevent Next from inferring the wrong workspace root when multiple lockfiles exist.
    root: __dirname,
  },
  // Inlines app-router CSS into the HTML in production so the browser does not wait on a
  // second critical request for `/_next/static/chunks/*.css` (Lighthouse network dependency chain).
  experimental: {
    inlineCss: true,
    /** Tree-shake barrel imports (smaller client chunks for icons). */
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    const slugRedirects = LEGACY_SERVICE_SLUGS.map((slug) => ({
      source: `/services/${slug}`,
      destination: `/services/${slug}-chicago`,
      permanent: true,
    }));
    return [
      ...slugRedirects,
      {
        source: "/services/delivery-setup",
        destination: "/services/delivery-setup-teardown-chicago",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
