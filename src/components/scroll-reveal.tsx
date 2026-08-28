"use client";

import {
  createElement,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type ScrollRevealElement =
  | "div"
  | "section"
  | "article"
  | "header"
  | "aside"
  | "nav";

type ScrollRevealProps = {
  as?: ScrollRevealElement;
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  threshold?: number;
  "aria-label"?: string;
};

export function ScrollReveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.18,
  "aria-label": ariaLabel,
}: ScrollRevealProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element) {
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => {
        window.cancelAnimationFrame(frame);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, threshold]);

  return createElement(
    as,
    {
      ref: setElement,
      className: `scroll-reveal ${className}`.trim(),
      "aria-label": ariaLabel,
      "data-direction": direction,
      "data-scroll-reveal": true,
      "data-visible": isVisible,
      style: {
        "--scroll-reveal-delay": `${delay}ms`,
      } as CSSProperties,
    },
    children,
  );
}
