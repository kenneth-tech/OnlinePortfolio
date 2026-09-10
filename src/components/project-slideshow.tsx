"use client";

import { useEffect, useRef, useState, type ReactNode, type KeyboardEvent } from "react";

import styles from "./project-slideshow.module.css";

export function ProjectSlideshow({ children, count }: { children: ReactNode; count: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState({ first: 1, last: 1 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let wheelTarget: number | null = null;

    const updateRange = () => {
      const firstCard = track.firstElementChild as HTMLElement | null;
      if (!firstCard || !track.clientWidth) return;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 20;
      const step = firstCard.getBoundingClientRect().width + gap;
      if (!step) return;
      const first = Math.round(track.scrollLeft / step) + 1;
      const visible = Math.max(1, Math.round((track.clientWidth + gap) / step));
      setRange({
        first,
        last: Math.min(count, first + visible - 1),
      });
    };

    const restoreSnap = () => {
      if (wheelTarget !== null) {
        track.scrollTo({ left: track.scrollLeft, behavior: "instant" });
        wheelTarget = null;
      }
      delete track.dataset.wheelScrolling;
    };

    const finishWheelScroll = () => {
      wheelTarget = null;
    };

    const handleWheel = (event: WheelEvent) => {
      // Preserve browser zoom, shift-wheel, and native horizontal gestures.
      if (event.ctrlKey || event.shiftKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
        if (wheelTarget !== null) restoreSnap();
        return;
      }
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const position = Math.max(0, Math.min(maxScroll, track.scrollLeft));
      if (!maxScroll || (event.deltaY > 0 && position >= maxScroll - 1) || (event.deltaY < 0 && position <= 1)) {
        if (wheelTarget !== null) restoreSnap();
        return;
      }
      if (!event.cancelable) return;

      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? track.clientWidth : 1;
      event.preventDefault();
      // Disable snapping during wheel input so small deltas do not snap backward.
      track.dataset.wheelScrolling = "true";
      const delta = event.deltaY * unit;
      const reversing = wheelTarget !== null && (wheelTarget - position) * delta < 0;
      const target = Math.max(0, Math.min(maxScroll, (reversing ? position : wheelTarget ?? position) + delta));
      // Accumulate rapid input, but let an existing animation finish at the edge.
      if (target === wheelTarget) return;
      wheelTarget = target;
      const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      track.scrollTo({
        left: target,
        behavior: reducedMotion ? "instant" : "smooth",
      });
    };

    updateRange();
    track.addEventListener("wheel", handleWheel, { passive: false });
    track.addEventListener("pointerleave", restoreSnap);
    track.addEventListener("pointerdown", restoreSnap);
    track.addEventListener("keydown", restoreSnap);
    track.addEventListener("scroll", updateRange, { passive: true });
    track.addEventListener("scrollend", finishWheelScroll);
    window.addEventListener("resize", updateRange);
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(updateRange);
    observer?.observe(track);
    return () => {
      track.removeEventListener("wheel", handleWheel);
      track.removeEventListener("pointerleave", restoreSnap);
      track.removeEventListener("pointerdown", restoreSnap);
      track.removeEventListener("keydown", restoreSnap);
      track.removeEventListener("scroll", updateRange);
      track.removeEventListener("scrollend", finishWheelScroll);
      window.removeEventListener("resize", updateRange);
      observer?.disconnect();
    };
  }, [count]);

  function move(direction: number) {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 20;
    track.scrollTo({ left: track.scrollLeft + direction * (card.getBoundingClientRect().width + gap) });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      trackRef.current?.scrollTo({ left: event.key === "Home" ? 0 : trackRef.current.scrollWidth });
    }
  }

  return (
    <div className="mt-6" role="region" aria-label="Project slideshow" aria-roledescription="carousel">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-brand-muted" aria-live="polite" aria-atomic="true">
          Projects {range.first}–{range.last} of {count}
        </p>
      </div>
      <div id="homepage-project-slides" ref={trackRef} className={styles.track} tabIndex={0} role="group" aria-label="Project slides" onKeyDown={handleKeyDown}>
        {children}
      </div>
    </div>
  );
}
