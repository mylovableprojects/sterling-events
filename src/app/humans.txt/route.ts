import { NextResponse } from "next/server";

export function GET() {
  const body = `/* humans.txt */
/* Placeholder metadata about the people behind Sterling Event Rentals. */

Team: Placeholder — details to be added.
Location: Chicago, IL, USA
Site: https://sterlingeventrentals.com

Note: This file is a placeholder for future human-readable project credits and contact details.
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

