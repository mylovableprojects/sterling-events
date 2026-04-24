import Script from "next/script";

const BASE = "https://sterlingevents.com";

type SchemaObject = Record<string, unknown>;

type Props = {
  /** One or more JSON-LD schema objects. Each will be output as a separate script. */
  items: SchemaObject | SchemaObject[];
  /** Optional stable id prefix for script elements (e.g. "ld-service-hub"). */
  idPrefix?: string;
};

/**
 * Injects JSON-LD schema via Next.js Script. Use in layout (global) or per-page.
 * For multiple items, pass an array; each item gets its own script with idPrefix-1, -2, etc.
 */
export function SchemaWrapper({ items, idPrefix = "ld-schema" }: Props) {
  const list = Array.isArray(items) ? items : [items];
  return (
    <>
      {list.map((schema, i) => (
        <Script
          key={i}
          id={list.length > 1 ? `${idPrefix}-${i + 1}` : idPrefix}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export { BASE };
