import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";

import { ButtonCursorEffects } from "../components/button-cursor-effects";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function pointAt(target: Element, pointerType = "mouse") {
  const event = new MouseEvent("pointermove", { bubbles: true, clientX: 40, clientY: 30 });
  Object.defineProperty(event, "pointerType", { value: pointerType });
  fireEvent(target, event);
}

test("follows the mouse inside a button and preserves clicks", () => {
  const clicked = vi.fn();
  render(<><ButtonCursorEffects /><button onClick={clicked}><span>Contact me</span></button></>);
  const button = screen.getByRole("button");
  vi.spyOn(button, "getBoundingClientRect").mockReturnValue({ left: 10, top: 10 } as DOMRect);
  pointAt(screen.getByText("Contact me"));
  expect(button).toHaveAttribute("data-cursor-hover", "true");
  expect(button.style.getPropertyValue("--cursor-x")).toBe("30px");
  expect(button.style.getPropertyValue("--cursor-y")).toBe("20px");
  fireEvent.click(button);
  expect(clicked).toHaveBeenCalledOnce();
  fireEvent(button, new MouseEvent("pointerout", { bubbles: true }));
  expect(button).not.toHaveAttribute("data-cursor-hover");
});

test("ignores touch, disabled controls, and reduced-motion preferences", () => {
  render(<><ButtonCursorEffects /><button>Enabled</button><button disabled>Disabled</button></>);
  const enabled = screen.getByRole("button", { name: "Enabled" });
  const disabled = screen.getByRole("button", { name: "Disabled" });
  pointAt(disabled);
  pointAt(enabled, "touch");
  expect(disabled).not.toHaveAttribute("data-cursor-hover");
  expect(enabled).not.toHaveAttribute("data-cursor-hover");
  vi.stubGlobal("matchMedia", () => ({ matches: true }));
  pointAt(enabled);
  expect(enabled).not.toHaveAttribute("data-cursor-hover");
});

test("supports newly rendered button links and keyboard focus after navigation", () => {
  const { rerender } = render(<ButtonCursorEffects />);
  rerender(<><ButtonCursorEffects /><a className="inline-flex" href="/projects">Projects</a></>);
  const link = screen.getByRole("link");
  fireEvent.focusIn(link);
  expect(link).toHaveClass("cursor-button");
  expect(link).not.toHaveAttribute("data-cursor-hover");
  pointAt(link);
  expect(link).toHaveAttribute("data-cursor-hover", "true");
});
