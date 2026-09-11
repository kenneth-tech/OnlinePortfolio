"use client";

import { useEffect } from "react";

// The fixed menu backdrop is a dismissal target, not a visible button.
const buttonSelector = 'button:not(.fixed), a.inline-flex, a.motion-card, nav a, [role="button"]:not(.fixed)';

export function ButtonCursorEffects() {
  useEffect(() => {
    let active: HTMLElement | null = null;
    const decorated = new Set<HTMLElement>();

    function findButton(target: EventTarget | null) {
      const button = target instanceof Element ? target.closest<HTMLElement>(buttonSelector) : null;
      return button?.matches(':disabled, [aria-disabled="true"]') ? null : button;
    }

    function clearHover() {
      if (!active) return;
      delete active.dataset.cursorHover;
      active.style.removeProperty("--cursor-x");
      active.style.removeProperty("--cursor-y");
      active = null;
    }

    function decorate(button: HTMLElement) {
      button.classList.add("cursor-button");
      decorated.add(button);
    }

    function moveCursor(event: PointerEvent) {
      if (event.pointerType !== "mouse" || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        clearHover();
        return;
      }
      const button = findButton(event.target);
      if (button !== active) clearHover();
      if (!button) return;
      decorate(button);
      active = button;
      const bounds = button.getBoundingClientRect();
      button.style.setProperty("--cursor-x", `${event.clientX - bounds.left}px`);
      button.style.setProperty("--cursor-y", `${event.clientY - bounds.top}px`);
      button.dataset.cursorHover = "true";
    }

    function leaveButton(event: PointerEvent) {
      if (active && (!(event.relatedTarget instanceof Node) || !active.contains(event.relatedTarget))) clearHover();
    }

    function focusButton(event: FocusEvent) {
      const button = findButton(event.target);
      if (button) decorate(button);
    }

    document.addEventListener("pointerover", moveCursor, { passive: true });
    document.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerout", leaveButton);
    document.addEventListener("focusin", focusButton);
    window.addEventListener("blur", clearHover);
    return () => {
      clearHover();
      document.removeEventListener("pointerover", moveCursor);
      document.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerout", leaveButton);
      document.removeEventListener("focusin", focusButton);
      window.removeEventListener("blur", clearHover);
      for (const button of decorated) button.classList.remove("cursor-button");
    };
  }, []);

  return null;
}
