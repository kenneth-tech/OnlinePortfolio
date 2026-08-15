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
const animatedButtonLink = readSource(
  "src",
  "components",
  "animated-button-link.tsx",
);
const nonButtonPages = [
  "projects",
  "experience",
  "skills",
  "contact",
].map((route) => readSource("src", "app", route, "page.tsx"));

describe("brand theme", () => {
  test("defines the approved premium dark portfolio palette", () => {
    expect(globalsCss).toContain("#071A2F");
    expect(globalsCss).toContain("#0B2545");
    expect(globalsCss).toContain("#7FFFD4");
    expect(globalsCss).toContain("#B8FFE8");
    expect(globalsCss).toContain("#F5FFFC");
    expect(globalsCss).toContain("#9AAFC2");
    expect(globalsCss).not.toContain("#321E48");
    expect(globalsCss).not.toContain("#43637E");
    expect(globalsCss).not.toContain("#65DCD5");
    expect(globalsCss).not.toContain("#D9FFF4");
  });

  test("uses refined aquamarine button and glow styling", () => {
    expect(globalsCss).toContain("--brand-button: #7FFFD4");
    expect(globalsCss).toContain("--brand-soft: #B8FFE8");
    expect(globalsCss).toContain("--brand-card: #0B2545");
    expect(globalsCss).toContain("--brand-muted: #9AAFC2");
    expect(rootLayout).not.toContain("CursorGlow");
    expect(cursorGlow).toBe("");
    expect(animatedButtonLink).toContain("brand-button");
    expect(animatedButtonLink).toContain("shadow-[0_0_26px_rgba(127,255,212,0.20)]");
    expect(animatedButtonLink).toContain("transition-[background-color,border-color,color,transform,box-shadow]");
    expect(animatedButtonLink).toContain("hover:-translate-y-1");
    expect(animatedButtonLink).toContain("hover:border-brand-button");
    expect(animatedButtonLink).not.toContain("after:");
    expect(homePage).toContain("brand-button");
    expect(nonButtonPages.join("\n")).toContain("brand-button");
  });

  test("uses dark premium site chrome", () => {
    expect(siteHeader).toContain("bg-brand-ink");
    expect(siteFooter).toContain("bg-brand-ink");
    expect(siteHeader).toContain("border-brand-button");
    expect(siteFooter).toContain("border-brand-button");
    expect(siteHeader).not.toContain("bg-white");
    expect(siteFooter).not.toContain("bg-white");
  });

  test("uses midnight navy for the page background", () => {
    expect(globalsCss).toContain("--background: #071A2F");
    expect(globalsCss).toContain("linear-gradient");
  });
});
