"use client";

import { ServiceImagePlaceholder } from "@/components/ServiceImagePlaceholder";

type Props = {
  count: number;
  labels: string[];
  /** Optional image srcs in same order as labels (for future use). */
  srcs?: (string | null)[];
};

/**
 * Grid of photo placeholders for service pages. Each slot is aspect-4/3, rounded-xl.
 */
export function PhotoGrid({ count, labels, srcs }: Props) {
  const items = Array.from({ length: count }, (_, i) => ({
    label: labels[i] ?? `Photo ${i + 1}`,
    src: srcs?.[i],
  }));

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ label, src }) => (
        <ServiceImagePlaceholder
          key={label}
          label={label}
          aspectRatio="4/3"
          className="rounded-xl"
          src={src}
        />
      ))}
    </div>
  );
}
