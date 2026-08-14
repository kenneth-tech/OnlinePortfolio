import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, test } from "vitest";

function readSource(...parts: string[]) {
  const sourcePath = join(process.cwd(), ...parts);

  return existsSync(sourcePath) ? readFileSync(sourcePath, "utf8") : "";
}

const globalsCss = readSource("src", "app", "globals.css");
const siteHeader = readSource("src", "components", "site-header.tsx");
const siteFooter = readSource("src", "components", "site-footer.tsx");
const homePage = readSource("src", "app", "page.tsx");
const rootLayout = readSource("src", "app", "layout.tsx");
const cursorGlow = readSource("src", "components", "cursor-glow.tsx");
const nonButtonPages = [
  "projects",
  "experience",
  "skills",
  "contact",
].map((route) => readSource("src", "app", route, "page.tsx"));

describe("brand theme", () => {
  test("defines the approved two-color portfolio palette", () => {
    expect(globalsCss).toContain("#7FFFD4");
    expect(globalsCss).toContain("#0B1D3A");
    expect(globalsCss).not.toContain("#321E48");
    expect(globalsCss).not.toContain("#43637E");
    expect(globalsCss).not.toContain("#65DCD5");
    expect(globalsCss).not.toContain("#D9FFF4");
    expect(globalsCss).not.toContain("brand-accent");
    expect(globalsCss).not.toContain("brand-surface");
  });

  test("reserves aquamarine for buttons and cursor animation", () => {
    expect(globalsCss).toContain("--brand-button: #7FFFD4");
    expect(globalsCss).toContain("--brand-muted: #0B1D3A");
    expect(homePage).toContain("bg-brand-button");
    expect(rootLayout).toContain("<CursorGlow />");
    expect(cursorGlow).toContain("brand-button");
    expect(cursorGlow).toContain("pointer-events-none");
    expect(cursorGlow).toContain("pointermove");
    expect(cursorGlow).toContain("prefers-reduced-motion");
    expect(siteHeader).not.toContain("brand-button");
    expect(siteFooter).not.toContain("brand-button");
    for (const page of nonButtonPages) {
      expect(page).not.toContain("brand-button");
    }
  });

  test("uses deep purple for the navbar background", () => {
    expect(siteHeader).toContain("bg-brand-ink");
  });

  test("uses white for the page background", () => {
    expect(globalsCss).toContain("--background: #ffffff");
  });
});
