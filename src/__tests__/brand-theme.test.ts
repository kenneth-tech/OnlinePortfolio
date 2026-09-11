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
const homePage = readSource("src", "app", "page.tsx");
const flippableHeroMedia = readSource(
  "src",
  "components",
  "flippable-hero-media.tsx",
);
const homeModuleCss = readSource("src", "app", "home.module.css");
const projectsPage = readSource("src", "app", "projects", "page.tsx");
const experiencePage = readSource("src", "app", "experience", "page.tsx");
const skillsPage = readSource("src", "app", "skills", "page.tsx");
const contactPage = readSource("src", "app", "contact", "page.tsx");
const rootLayout = readSource("src", "app", "layout.tsx");
const scrollReveal = readSource("src", "components", "scroll-reveal.tsx");
const animatedButtonLink = readSource(
  "src",
  "components",
  "animated-button-link.tsx",
);

describe("ATS and client portfolio theme", () => {
  test("defines a readable light-first professional palette", () => {
    expect(globalsCss).toContain("--brand-ink: #111827");
    expect(globalsCss).toContain("--brand-card: #FFFFFF");
    expect(globalsCss).toContain("--brand-button: #2563EB");
    expect(globalsCss).toContain("--brand-soft: #E0F2FE");
    expect(globalsCss).toContain("--brand-muted: #4B5563");
    expect(globalsCss).toContain("--background: #D6DFEB");
    expect(globalsCss).toContain("--foreground: #111827");
    expect(globalsCss).not.toContain('url("/images/homepage-hero-bg.png")');
  });

  test("uses restrained chrome and mobile layout safeguards", () => {
    expect(siteHeader).toContain("bg-white/95");
    expect(siteHeader).toContain("border-slate-200");
    expect(siteFooter).toContain("bg-[#111827]");
    expect(siteFooter).toContain("text-white");
    expect(rootLayout).toContain('main className="flex-1 pt-[72px]"');
    expect(globalsCss).toContain("overflow-x: hidden;");
    expect(globalsCss).toContain("scroll-behavior: smooth;");
  });

  test("does not depend on remote font downloads during production builds", () => {
    expect(rootLayout).not.toContain("next/font/google");
    expect(rootLayout).not.toContain("Geist");
    expect(globalsCss).toContain("--font-geist-sans:");
    expect(globalsCss).toContain("--font-geist-mono:");
  });

  test("keeps cards, buttons, and page headers compact and readable", () => {
    expect(animatedButtonLink).toContain("rounded-lg");
    expect(animatedButtonLink).toContain("min-h-11");
    expect(animatedButtonLink).not.toContain("hover:-translate-y-1");
    expect(statCard).toContain("rounded-lg");
    expect(pageHeader).toContain("text-brand-ink");
    expect(pageHeader).toContain("max-w-4xl");
  });

  test("promotes project proof and client-friendly content across pages", () => {
    expect(homePage).not.toContain("ATS-friendly portfolio");
    expect(homePage).not.toContain("Resume Summary");
    expect(homePage).toContain("Animated identity motion graphic");
    expect(homePage).toContain("FlippableHeroMedia");
    expect(homePage).not.toContain("Isometric developer desk animation");
    expect(homePage).not.toContain("Animated code laptop");
    expect(homePage).not.toContain("Animated coffee cup");
    expect(homePage).not.toContain("Central web and media motion logo");
    expect(homePage).not.toContain("Animated web developer logo");
    expect(homePage).not.toContain("Animated multimedia designer logo");
    expect(homePage).not.toContain("Creative Identity");
    expect(homePage).toContain("Project Proof");
    expect(homePage).toContain("Core Competencies");
    expect(projectsPage).toContain("Project Showcase");
    expect(projectsPage).toContain("Outcome");
    expect(experiencePage).toContain("Resume Experience");
    expect(skillsPage).toContain("Skills Matrix");
    expect(contactPage).toContain("Project Inquiry");
  });

  test("supports a navbar-controlled dark theme", () => {
    expect(globalsCss).toContain(':root[data-theme="dark"]');
    expect(siteHeader).toContain("portfolio-theme");
    expect(siteHeader).toContain("Switch to dark mode");
    expect(siteHeader).toContain("Switch to light mode");
    expect(siteHeader).toContain("aria-pressed={isDarkMode}");
  });

  test("adds accessible scroll reveal animation across routed pages", () => {
    expect(rootLayout).toContain("ScrollReveal");
    expect(scrollReveal).toContain('"use client";');
    expect(scrollReveal).toContain("IntersectionObserver");
    expect(scrollReveal).toContain("reveal-on-scroll");
    expect(globalsCss).toContain(".reveal-on-scroll");
    expect(globalsCss).toContain(".reveal-on-scroll.is-visible");
    expect(globalsCss).toContain("@media (prefers-reduced-motion: reduce)");
  });

  test("uses the uploaded motion graphic in the homepage hero", () => {
    expect(homePage).toContain("FlippableHeroMedia");
    expect(flippableHeroMedia).toContain("/images/new.webm");
    expect(flippableHeroMedia).toContain('poster="/images/971.jpg"');
    expect(flippableHeroMedia).toContain('type="video/webm"');
    expect(flippableHeroMedia).toContain("Flip hero motion graphic");
    expect(flippableHeroMedia).toContain("rotateY(${turns * 360}deg)");
    expect(homeModuleCss).toContain(".heroImageWrap");
    expect(homeModuleCss).toContain(".heroFlipButton");
    expect(homeModuleCss).toContain(".heroImage");
    expect(homeModuleCss).toContain(".heroImageWrap::before");
    expect(homeModuleCss).toContain(".heroImageWrap::after");
    expect(homeModuleCss).toContain("@keyframes image-float");
    expect(homeModuleCss).toContain("@keyframes image-glow");
    expect(homeModuleCss).toContain("@keyframes image-shine");
    expect(homeModuleCss).not.toContain(".isometricStage");
    expect(homeModuleCss).not.toContain(".laptopScreen");
    expect(homeModuleCss).not.toContain(".laptopBase");
    expect(homeModuleCss).not.toContain(".coffeeCup");
    expect(homeModuleCss).not.toContain(".codeLine");
    expect(homeModuleCss).not.toContain(".centralLogo");
    expect(homeModuleCss).not.toContain(".logoChip");
    expect(homePage).not.toContain("h-28 w-28");
    expect(homePage).not.toContain("h-32 w-32");
    expect(homePage).not.toContain("Array.from");
  });
});
