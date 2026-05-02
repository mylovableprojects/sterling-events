#!/usr/bin/env node
/**
 * Fails if legacy service paths (pre–`-chicago` suffix) appear in source.
 * Run: node scripts/check-service-links.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");
const NEXT_CONFIG = path.join(ROOT, "next.config.ts");

const LEGACY_SEGMENTS = [
  "tents-structures",
  "tables-seating",
  "stages-presentation",
  "games-entertainment",
  "event-extras",
  "delivery-setup-teardown",
];

/** Match /services/{slug} not followed by -chicago (end of path, quote, or non-word) */
function buildPattern(seg) {
  return new RegExp(
    `/services/${seg.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?!-chicago)(?=["'\`\\s)>]|$)`,
    "g",
  );
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) {
      if (name.name === "node_modules" || name.name === ".next") continue;
      walk(full, files);
    } else if (/\.(tsx?|jsx?|mdx)$/.test(name.name)) {
      files.push(full);
    }
  }
  return files;
}

const issues = [];
const files = [...walk(SRC), NEXT_CONFIG].filter((f) => fs.existsSync(f));

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  for (const seg of LEGACY_SEGMENTS) {
    const re = buildPattern(seg);
    if (re.test(text)) {
      const rel = path.relative(ROOT, file);
      issues.push(`${rel}: legacy /services/${seg} (expected /services/${seg}-chicago)`);
    }
    re.lastIndex = 0;
  }
}

if (issues.length) {
  console.error("Legacy service URL patterns found:\n");
  for (const line of issues) console.error("  -", line);
  process.exit(1);
}

console.log("check-service-links: OK (no legacy /services/{slug} without -chicago in src or next.config.ts)");
