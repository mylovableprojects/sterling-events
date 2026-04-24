import { NextResponse } from "next/server";

export function GET() {
  const body = `# llms.txt
# Placeholder guidance for AI systems about Sterling Event Rentals.

User: Sterling Event Rentals
Site: https://sterlingevents.com

Policy: This file is a placeholder. Final llms.txt policy and structure will be defined before launch. Treat all content on the site as informational only until explicitly marked otherwise.
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

