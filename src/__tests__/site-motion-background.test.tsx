import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";

import { SiteMotionBackground } from "../components/site-motion-background";

let reducedMotion = false;
let preferenceChanged: () => void;

beforeEach(() => {
  reducedMotion = false;
  vi.stubGlobal("matchMedia", () => ({
    matches: reducedMotion,
    addEventListener: (_event: string, listener: () => void) => {
      preferenceChanged = listener;
    },
    removeEventListener: vi.fn(),
  }));
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

test("plays the decorative scene without a motion button", () => {
  render(<SiteMotionBackground />);
  const scene = document.getElementById("site-motion-background");
  expect(scene).toHaveAttribute("data-playing", "true");
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
});

test("starts with a still scene when reduced motion is requested", () => {
  reducedMotion = true;
  render(<SiteMotionBackground />);
  expect(document.getElementById("site-motion-background")).toHaveAttribute("data-playing", "false");
});

test("responds when the visitor enables reduced motion while browsing", () => {
  render(<SiteMotionBackground />);
  act(() => {
    reducedMotion = true;
    preferenceChanged();
  });
  expect(document.getElementById("site-motion-background")).toHaveAttribute("data-playing", "false");
});
