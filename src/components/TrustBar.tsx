import { ReactNode } from "react";

type TrustItem = {
  label: string;
  /** Optional short description or badge name. */
  detail?: string;
};

type Props = {
  /** Override default items (SIOTO, Licensed, Insured, Est. year). */
  items?: TrustItem[];
  /** Optional prefix text, e.g. "Trusted by planners across Chicagoland." */
  prefix?: ReactNode;
  /** Layout: inline (single row) or stacked. */
  layout?: "inline" | "stacked";
  /** Light background (cream) — use charcoal/navy text. */
  variant?: "default" | "light";
  className?: string;
};

const DEFAULT_ITEMS: TrustItem[] = [
  { label: "Licensed" },
  { label: "Insured" },
  { label: "SIOTO Safety Seal Certified", detail: "(SIOTO operator training · sioto.com)" },
  { label: "Serving Chicagoland Since 2021" },
];

/**
 * Trust strip: SIOTO badge, Licensed/Insured, Est. year. Use in hero or above footer.
 */
export function TrustBar({
  items = DEFAULT_ITEMS,
  prefix,
  layout = "inline",
  variant = "default",
  className = "",
}: Props) {
  const isLight = variant === "light";
  return (
    <div
      className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-sm ${isLight ? "text-[var(--charcoal)]/80" : "text-[var(--champagne)]/80"} ${className}`}
      role="region"
      aria-label="Trust and credentials"
    >
      {prefix && (
        <span className={isLight ? "text-[var(--charcoal)]/70" : "text-[var(--champagne)]/70"}>{prefix}</span>
      )}
      {layout === "stacked" ? (
        <ul className="flex flex-col gap-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className={`font-medium ${isLight ? "text-[var(--navy)]" : "text-[var(--gold-light)]"}`}>{item.label}</span>
              {item.detail && (
                <span className={isLight ? "text-[var(--charcoal)]/60" : "text-[var(--champagne)]/60"}>— {item.detail}</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className={`font-medium ${isLight ? "text-[var(--navy)]" : "text-[var(--gold-light)]"}`}>{item.label}</span>
              {item.detail && (
                <span className={`text-[0.8rem] ${isLight ? "text-[var(--charcoal)]/60" : "text-[var(--champagne)]/60"}`}>{item.detail}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
