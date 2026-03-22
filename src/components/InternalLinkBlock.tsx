import Link from "next/link";

export type InternalLink = {
  href: string;
  label: string;
};

type Props = {
  /** Section title, e.g. "Related questions" or "You may also need". */
  title: string;
  links: InternalLink[];
  /** Layout: list (vertical) or inline (comma-separated). */
  layout?: "list" | "inline";
  className?: string;
};

/**
 * Block of internal links for "Related answers", "You may also need", etc.
 */
export function InternalLinkBlock({
  title,
  links,
  layout = "list",
  className = "",
}: Props) {
  if (!links.length) return null;

  return (
    <div className={`border-t border-white/10 pt-6 ${className}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--champagne)]/70">
        {title}
      </p>
      {layout === "list" ? (
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[var(--cream)] hover:text-[var(--gold-light)] hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="flex flex-wrap gap-x-1 gap-y-1 text-sm">
          {links.map((link, i) => (
            <span key={link.href}>
              {i > 0 && ", "}
              <Link
                href={link.href}
                className="text-[var(--gold-light)] hover:underline"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
