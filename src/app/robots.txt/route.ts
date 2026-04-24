import { NextResponse } from "next/server";

const siteUrl = "https://sterlingevents.com";

export function GET() {
  const body = `User-agent: *
Allow: /

Disallow: /legal/

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

