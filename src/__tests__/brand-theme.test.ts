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

  test("uses deep purple for the navbar background", () => {
    expect(siteHeader).toContain("bg-brand-ink");
  });

  test("uses white for the page background", () => {
    expect(globalsCss).toContain("--background: #ffffff");
  });
});
