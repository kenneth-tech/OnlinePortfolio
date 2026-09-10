import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
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

test("pauses and resumes the scene through its accessible control", () => {
  render(<SiteMotionBackground />);
  const pause = screen.getByRole("button", { name: "Pause background animation" });
  const scene = document.getElementById(pause.getAttribute("aria-controls")!);
  expect(scene).toHaveAttribute("data-playing", "true");
  fireEvent.click(pause);
  expect(scene).toHaveAttribute("data-playing", "false");
  fireEvent.click(screen.getByRole("button", { name: "Play background animation" }));
  expect(scene).toHaveAttribute("data-playing", "true");
});

test("starts with a still scene when reduced motion is requested", () => {
  reducedMotion = true;
  render(<SiteMotionBackground />);
  const play = screen.getByRole("button", { name: "Play background animation" });
  expect(document.getElementById(play.getAttribute("aria-controls")!)).toHaveAttribute("data-playing", "false");
});

test("responds when the visitor enables reduced motion while browsing", () => {
  render(<SiteMotionBackground />);
  act(() => {
    reducedMotion = true;
    preferenceChanged();
  });
  expect(screen.getByRole("button", { name: "Play background animation" })).toBeInTheDocument();
});
