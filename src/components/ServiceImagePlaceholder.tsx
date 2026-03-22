"use client";

import Image from "next/image";

type Props = {
  /** Descriptive label for the photo slot (used as alt when src provided). */
  label: string;
  /** CSS aspect-ratio value, e.g. "4/3", "16/9". Default "4/3". */
  aspectRatio?: string;
  /** Optional class names for the wrapper. */
  className?: string;
  /** When provided, render next/image instead of placeholder. */
  src?: string | null;
};

/**
 * Reusable service page image slot. Placeholder state shows camera + label
 * for easy find-and-replace later; with src renders next/image.
 */
export function ServiceImagePlaceholder({
  label,
  aspectRatio = "4/3",
  className = "",
  src,
}: Props) {
  const aspectStyle = { aspectRatio };

  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl ${className}`}
        style={aspectStyle}
      >
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--gold)]/25 bg-[var(--navy)] ${className}`}
      style={aspectStyle}
      data-photo-slot={label}
    >
      <span className="text-2xl opacity-60" aria-hidden>
        📷
      </span>
      <span className="text-center text-sm text-[var(--champagne)]/40">
        {label}
      </span>
    </div>
  );
}
