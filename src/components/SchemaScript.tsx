import Script from "next/script";

type SchemaObject = Record<string, unknown>;

type Props = {
  /** One or more JSON-LD schema objects. Each is output as a separate script. */
  items: SchemaObject | SchemaObject[];
  /** Optional stable id prefix for script elements (e.g. "ld-service-hub"). */
  idPrefix?: string;
};

/**
 * JSON-LD injector for per-page schema. Renders a script tag per item.
 * Use in layout (global) or in any page that needs structured data.
 */
export function SchemaScript({ items, idPrefix = "ld-schema" }: Props) {
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
