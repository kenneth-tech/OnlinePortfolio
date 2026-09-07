"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type ScrollRevealProps = {
  children: ReactNode;
};

const revealSelector = ".motion-surface, .motion-card";

export function ScrollReveal({ children }: ScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const elements = Array.from(root.querySelectorAll(revealSelector));

    if (!("IntersectionObserver" in window)) {
      for (const element of elements) {
        element.classList.add("reveal-on-scroll", "is-visible");
      }

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    for (const element of elements) {
      element.classList.add("reveal-on-scroll");
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div ref={rootRef} className="contents">
      {children}
    </div>
  );
}
