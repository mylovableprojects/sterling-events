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
  /** Lets same-origin links participate in DNS prefetch when hints exist (e.g. layout dns-prefetch). */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-DNS-Prefetch-Control", value: "on" }],
      },
    ];
  },
  /**
   * Extra widths so `sizes`≈380px at 2× DPR (~760px) maps to a ~760 derivative instead of
   * jumping 750→828 (Lighthouse “larger than it needs to be” on bento cards).
   */
  images: {
    deviceSizes: [
      360, 384, 400, 420, 480, 560, 640, 750, 760, 828, 1080, 1120, 1200, 1280, 1360, 1400, 1440,
      1536, 1600, 1920, 2048, 3840,
    ],
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    // Prevent Next from inferring the wrong workspace root when multiple lockfiles exist.
    root: __dirname,
  },
  // Inlines app-router CSS into the HTML in production so the browser does not wait on a
  // second critical request for `/_next/static/chunks/*.css` (Lighthouse network dependency chain).
  experimental: {
    inlineCss: true,
    /** Tree-shake barrel imports (smaller client chunks for icons). */
    optimizePackageImports: ["lucide-react", "framer-motion"],
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
