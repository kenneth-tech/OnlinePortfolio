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
const statCard = readSource("src", "components", "stat-card.tsx");
const pageHeader = readSource("src", "components", "page-header.tsx");
const creativeIconCloud = readSource(
  "src",
  "components",
  "creative-icon-cloud.tsx",
);
const homePage = readSource("src", "app", "page.tsx");
const projectsPage = readSource("src", "app", "projects", "page.tsx");
const homeModuleCss = readSource("src", "app", "home.module.css");
const homeHeroImagePath = join(
  process.cwd(),
  "public",
  "images",
  "homepage-hero-bg.png",
);
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

  test("uses dark header chrome and a black professional footer", () => {
    expect(siteHeader).toContain("bg-brand-ink");
    expect(siteFooter).toContain("bg-black");
    expect(siteFooter).toContain("text-white");
    expect(siteHeader).toContain("border-brand-button");
    expect(siteFooter).toContain("border-brand-button");
    expect(siteHeader).not.toContain("bg-white");
    expect(siteFooter).not.toContain("bg-white");
    expect(siteFooter).not.toContain("bg-brand-ink");
  });

  test("uses midnight navy for the page background", () => {
    expect(globalsCss).toContain("--background: #071A2F");
    expect(globalsCss).toContain("linear-gradient");
  });

  test("applies the portfolio artwork and gradient as the full-site background", () => {
    expect(globalsCss).toContain("html {");
    expect(globalsCss).toContain("min-height: 100%;");
    expect(globalsCss).toContain('url("/images/homepage-hero-bg.png")');
    expect(globalsCss).toContain("background-attachment: fixed;");
    expect(globalsCss).toContain("background-repeat: no-repeat, no-repeat;");
    expect(globalsCss).not.toContain("rgba(127, 255, 212, 0.045) 1px");
    expect(homePage).not.toContain("absolute inset-0 -z-10 bg-[linear-gradient");
  });

  test("keeps homepage overlays separate from the site-wide background image", () => {
    expect(homePage).toContain('import styles from "./home.module.css";');
    expect(homePage).toContain("styles.hero");
    expect(homeModuleCss).not.toContain("/images/homepage-hero-bg.png");
    expect(homeModuleCss).not.toContain("mix-blend-mode: screen;");
    expect(homeModuleCss).not.toContain(".hero::after");
    expect(homeModuleCss).not.toContain("rgba(7, 26, 47, 0.98)");
    expect(existsSync(homeHeroImagePath)).toBe(true);
  });

  test("lets homepage hero artwork span the desktop viewport behind centered content", () => {
    expect(homePage).toContain(
      '<section className={`${styles.hero} relative overflow-hidden`}>',
    );
    expect(homePage).toContain(
      "min-h-[calc(100svh-88px)]",
    );
    expect(homePage).not.toContain("`${styles.hero} relative mx-auto grid");
  });

  test("adds mobile-friendly layout safeguards and touch targets", () => {
    expect(globalsCss).toContain("overflow-x: hidden;");
    expect(globalsCss).toContain("@media (max-width: 640px)");
    expect(globalsCss).toContain("background-attachment: scroll;");
    expect(siteHeader).toContain("sticky top-0 z-50");
    expect(siteHeader).toContain("overflow-x-auto");
    expect(siteHeader).toContain("min-h-11");
    expect(animatedButtonLink).toContain("w-full sm:w-auto");
    expect(homePage).toContain("text-4xl");
    expect(homePage).toContain("sm:text-6xl");
    expect(homePage).toContain("lg:text-7xl");
    expect(projectsPage).toContain("grid-cols-1");
    expect(pageHeader).toContain("text-3xl");
    expect(pageHeader).toContain("sm:text-5xl");
  });

  test("defines refined whole-site motion with reduced-motion support", () => {
    expect(globalsCss).toContain("@keyframes soft-rise");
    expect(globalsCss).toContain("@keyframes depth-float");
    expect(globalsCss).toContain(".motion-surface");
    expect(globalsCss).toContain(".motion-card");
    expect(globalsCss).toContain(".motion-icon");
    expect(globalsCss).toContain("@media (prefers-reduced-motion: reduce)");
    expect(pageHeader).toContain("motion-surface");
    expect(statCard).toContain("motion-card");
    expect(projectsPage).toContain("motion-card");
  });

  test("adds reusable 3d creative icons for web and multimedia work", () => {
    expect(creativeIconCloud).toContain("CreativeIconCloud");
    expect(creativeIconCloud).toContain("Web development icon");
    expect(creativeIconCloud).toContain("Multimedia design icon");
    expect(creativeIconCloud).toContain("UI design icon");
    expect(creativeIconCloud).toContain("Video production icon");
    expect(creativeIconCloud).toContain("motion-icon");
    expect(homePage).toContain("CreativeIconCloud");
  });

  test("keeps creative icon tiles square on mobile and rectangular on desktop", () => {
    expect(creativeIconCloud).toContain("aspect-square");
    expect(creativeIconCloud).toContain("md:aspect-[5/3]");
  });
});
