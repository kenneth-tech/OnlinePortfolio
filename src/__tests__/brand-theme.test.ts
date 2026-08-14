import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, test } from "vitest";

const globalsCss = readFileSync(
  join(process.cwd(), "src", "app", "globals.css"),
  "utf8",
);

describe("brand theme", () => {
  test("defines the approved portfolio color palette", () => {
    expect(globalsCss).toContain("#321E48");
    expect(globalsCss).toContain("#43637E");
    expect(globalsCss).toContain("#65DCD5");
    expect(globalsCss).toContain("#D9FFF4");
  });
});
