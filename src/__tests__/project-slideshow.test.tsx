import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";

import HomePage from "../app/page";
import { projects } from "../data/portfolio";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function renderMeasuredSlideshow(visible = 4) {
  render(<HomePage />);
  const track = screen.getByRole("group", { name: "Project slides" });
  // Supply browser layout and scrolling that jsdom does not implement.
  Object.defineProperties(track, {
    clientWidth: { configurable: true, value: visible * 255 - 20 },
    scrollWidth: { configurable: true, value: 1510 },
  });
  vi.spyOn(track.firstElementChild!, "getBoundingClientRect").mockReturnValue({ width: 235 } as DOMRect);
  track.scrollTo = (options: ScrollToOptions | number = {}) => {
    if (typeof options === "number") return;
    track.scrollLeft = Math.max(0, Math.min(options.left ?? 0, track.scrollWidth - track.clientWidth));
    fireEvent.scroll(track);
  };
  fireEvent(window, new Event("resize"));
  return track;
}

test("shows every project screenshot and website link on the homepage", () => {
  render(<HomePage />);
  const carousel = screen.getByRole("region", { name: "Project slideshow" });
  expect(within(carousel).getAllByRole("article")).toHaveLength(6);
  for (const project of projects) {
    expect(within(carousel).getByRole("img", { name: project.image.alt })).toBeInTheDocument();
    expect(within(carousel).getByRole("link", { name: `Visit ${project.title} website` })).toHaveAttribute("href", project.url);
  }
});

test("updates the visible project count when scrolling forward and backward", () => {
  const track = renderMeasuredSlideshow();
  expect(screen.getByText("Projects 1–4 of 6")).toBeInTheDocument();
  track.scrollLeft = 255;
  fireEvent.scroll(track);
  expect(screen.getByText("Projects 2–5 of 6")).toBeInTheDocument();
  track.scrollLeft = 510;
  fireEvent.scroll(track);
  expect(screen.getByText("Projects 3–6 of 6")).toBeInTheDocument();
  track.scrollLeft = 255;
  fireEvent.scroll(track);
  expect(screen.getByText("Projects 2–5 of 6")).toBeInTheDocument();
});

test("supports keyboard navigation and direct swipe scrolling on a single-card viewport", () => {
  const track = renderMeasuredSlideshow(1);
  fireEvent.keyDown(track, { key: "End" });
  expect(screen.getByText("Projects 6–6 of 6")).toBeInTheDocument();
  fireEvent.keyDown(track, { key: "Home" });
  fireEvent.keyDown(track, { key: "ArrowRight" });
  expect(screen.getByText("Projects 2–2 of 6")).toBeInTheDocument();
  track.scrollLeft = 765;
  fireEvent.scroll(track);
  expect(screen.getByText("Projects 4–4 of 6")).toBeInTheDocument();
});

test("uses vertical wheel scrolling for projects, then releases page scrolling at either end", () => {
  const track = renderMeasuredSlideshow();
  expect(fireEvent.wheel(track, { deltaY: 255, cancelable: true })).toBe(false);
  expect(screen.getByText("Projects 2–5 of 6")).toBeInTheDocument();
  expect(fireEvent.wheel(track, { deltaY: 255, cancelable: true })).toBe(false);
  expect(screen.getByText("Projects 3–6 of 6")).toBeInTheDocument();
  expect(fireEvent.wheel(track, { deltaY: 120, cancelable: true })).toBe(true);
  expect(fireEvent.wheel(track, { deltaY: -510, cancelable: true })).toBe(false);
  expect(track.scrollLeft).toBe(0);
  expect(fireEvent.wheel(track, { deltaY: -120, cancelable: true })).toBe(true);
});

test("preserves zoom and horizontal gestures and leaves non-overflowing content alone", () => {
  const track = renderMeasuredSlideshow();
  expect(fireEvent.wheel(track, { deltaY: 120, ctrlKey: true, cancelable: true })).toBe(true);
  expect(fireEvent.wheel(track, { deltaX: 120, deltaY: 2, cancelable: true })).toBe(true);
  expect(fireEvent.wheel(track, { deltaY: 120, shiftKey: true, cancelable: true })).toBe(true);
  expect(track.scrollLeft).toBe(0);
  Object.defineProperty(track, "scrollWidth", { value: track.clientWidth });
  expect(fireEvent.wheel(track, { deltaY: 120, cancelable: true })).toBe(true);
});

test("normalizes wheel line and page units and restores snap for touch interaction", () => {
  const track = renderMeasuredSlideshow();
  fireEvent.wheel(track, { deltaY: 3, deltaMode: 1, cancelable: true });
  expect(track.scrollLeft).toBe(48);
  expect(track).toHaveAttribute("data-wheel-scrolling", "true");
  fireEvent.pointerDown(track);
  expect(track).not.toHaveAttribute("data-wheel-scrolling");
  fireEvent.wheel(track, { deltaY: 1, deltaMode: 2, cancelable: true });
  expect(track.scrollLeft).toBe(510);
});

test("accumulates wheel input while smooth scrolling is still in flight and reverses immediately", () => {
  const track = renderMeasuredSlideshow();
  // Native smooth scrolling does not reach its destination synchronously.
  const scrollTo = vi.spyOn(track, "scrollTo").mockImplementation(() => {});
  fireEvent.wheel(track, { deltaY: 120, cancelable: true });
  fireEvent.wheel(track, { deltaY: 120, cancelable: true });
  expect(scrollTo).toHaveBeenLastCalledWith({ left: 240, behavior: "smooth" });
  track.scrollLeft = 80;
  fireEvent.wheel(track, { deltaY: -60, cancelable: true });
  expect(scrollTo).toHaveBeenLastCalledWith({ left: 20, behavior: "smooth" });
});

test("waits for the last slide to arrive before handing scrolling back to the page", () => {
  const track = renderMeasuredSlideshow();
  const scrollTo = vi.spyOn(track, "scrollTo").mockImplementation(() => {});
  fireEvent.wheel(track, { deltaY: 1000, cancelable: true });
  expect(fireEvent.wheel(track, { deltaY: 120, cancelable: true })).toBe(false);
  expect(scrollTo).toHaveBeenCalledTimes(1);
  track.scrollLeft = 510;
  fireEvent.scroll(track);
  expect(fireEvent.wheel(track, { deltaY: 120, cancelable: true })).toBe(true);
});

test("respects reduced motion for mouse-wheel navigation", () => {
  vi.stubGlobal("matchMedia", () => ({ matches: true }));
  const track = renderMeasuredSlideshow();
  const scrollTo = vi.spyOn(track, "scrollTo");
  fireEvent.wheel(track, { deltaY: 120, cancelable: true });
  expect(scrollTo).toHaveBeenLastCalledWith({ left: 120, behavior: "instant" });
});
