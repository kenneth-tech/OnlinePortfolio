import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, test } from "vitest";

const globalsCss = readFileSync(
  join(process.cwd(), "src", "app", "globals.css"),
  "utf8",
);
const siteHeader = readFileSync(
  join(process.cwd(), "src", "components", "site-header.tsx"),
  "utf8",
);
const siteFooter = readFileSync(
  join(process.cwd(), "src", "components", "site-footer.tsx"),
  "utf8",
);
const homePage = readFileSync(
  join(process.cwd(), "src", "app", "page.tsx"),
  "utf8",
);
const nonButtonPages = [
  "projects",
  "experience",
  "skills",
  "contact",
].map((route) =>
  readFileSync(join(process.cwd(), "src", "app", route, "page.tsx"), "utf8"),
);

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

  test("reserves aquamarine for button styling", () => {
    expect(globalsCss).toContain("--brand-button: #7FFFD4");
    expect(globalsCss).toContain("--brand-muted: #0B1D3A");
    expect(homePage).toContain("bg-brand-button");
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
