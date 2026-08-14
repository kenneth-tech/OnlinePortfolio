"use client";

import { useEffect, useState } from "react";

type CursorPosition = {
  x: number;
  y: number;
};

export function CursorGlow() {
  const [position, setPosition] = useState<CursorPosition | null>(null);

  useEffect(() => {
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!finePointerQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handlePointerLeave = () => {
      setPosition(null);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("blur", handlePointerLeave);
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, []);

  if (!position) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-50 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-button/70 bg-brand-button/15 shadow-[0_0_28px_rgba(127,255,212,0.42)] transition-transform duration-75 ease-out motion-safe:animate-pulse md:block"
      style={{ left: position.x, top: position.y }}
    >
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-button" />
    </div>
  );
}
