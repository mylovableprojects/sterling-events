import Script from "next/script";

export type Crumb = {
  href: string;
  label: string;
};

type Props = {
  items: Crumb[];
  /** Base URL for schema (e.g. https://sterlingeventrentals.com). If provided, outputs BreadcrumbList JSON-LD. */
  baseUrl?: string;
  /** Optional id for the schema script. */
  schemaId?: string;
};

/**
 * Breadcrumb nav with optional BreadcrumbList JSON-LD. Use baseUrl to emit schema.
 */
export function BreadcrumbNav({
  items,
  baseUrl = "https://sterlingeventrentals.com",
  schemaId = "ld-breadcrumbs",
}: Props) {
  if (!items.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href.startsWith("http") ? item.href : `${baseUrl}${item.href}`,
    })),
  };

  return (
    <Script
      id={schemaId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
