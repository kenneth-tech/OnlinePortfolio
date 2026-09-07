"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";

import { profile } from "../data/portfolio";
import { SiteLogo } from "./site-logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return typeof window.localStorage.getItem === "function" &&
      window.localStorage.getItem("portfolio-theme") === "dark"
      ? "dark"
      : "light";
  });
  const menuButtonLabel = isMenuOpen ? "Close main menu" : "Open main menu";
  const MenuIcon = isMenuOpen ? FaXmark : FaBars;
  const isDarkMode = theme === "dark";
  const themeButtonLabel = isDarkMode
    ? "Switch to light mode"
    : "Switch to dark mode";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme = isDarkMode ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    if (typeof window.localStorage.setItem === "function") {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    }
    setTheme(nextTheme);
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const rootStyle = document.documentElement.style;
    const originalRootOverflow = rootStyle.overflow;
    const originalBodyOverflow = bodyStyle.overflow;
    const originalBodyPosition = bodyStyle.position;
    const originalBodyTop = bodyStyle.top;
    const originalBodyWidth = bodyStyle.width;

    rootStyle.overflow = "hidden";
    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.width = "100%";

    return () => {
      rootStyle.overflow = originalRootOverflow;
      bodyStyle.overflow = originalBodyOverflow;
      bodyStyle.position = originalBodyPosition;
      bodyStyle.top = originalBodyTop;
      bodyStyle.width = originalBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky inset-x-0 top-0 z-[100] border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <div className="flex items-center gap-4">
          <SiteLogo />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav aria-label="Main navigation" className="hidden sm:block">
            <ul className="flex min-w-max flex-nowrap gap-1 text-sm font-medium text-brand-muted">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center rounded-lg px-3 py-2 outline-none transition hover:bg-brand-soft hover:text-brand-button focus-visible:ring-2 focus-visible:ring-brand-button"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-label={themeButtonLabel}
            aria-pressed={isDarkMode}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-brand-ink outline-none transition-[background-color,border-color,color,box-shadow] duration-200 hover:border-brand-button hover:bg-brand-soft hover:text-brand-button focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-white"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <FaSun aria-hidden="true" className="h-4 w-4" />
            ) : (
              <FaMoon aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={menuButtonLabel}
            className="relative z-[70] inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-300 text-brand-ink outline-none transition-[background-color,border-color,color,box-shadow] duration-200 hover:border-brand-button hover:bg-brand-soft hover:text-brand-button focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-white sm:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <MenuIcon aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
        {isMenuOpen ? (
          <button
            type="button"
            aria-label="Close mobile menu backdrop"
            className="fixed inset-0 z-40 bg-brand-ink/40 backdrop-blur-sm transition-opacity duration-300 sm:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : null}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isMenuOpen}
          inert={isMenuOpen ? undefined : true}
          className={`${isMenuOpen ? "max-sm:translate-x-0 max-sm:opacity-100" : "max-sm:translate-x-full max-sm:opacity-0"} fixed right-0 top-0 z-50 flex h-dvh w-[min(86vw,360px)] transform-gpu flex-col border-l border-slate-200 bg-white px-6 pb-8 pt-24 shadow-[-24px_0_70px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-[transform,opacity] duration-300 ease-out sm:hidden`}
        >
          <p className="mb-5 border-b border-slate-200 pb-4 text-xs font-semibold uppercase tracking-normal text-brand-button sm:hidden">
            Navigation
          </p>
          <ul className="grid gap-2 text-base font-medium text-brand-muted sm:flex sm:min-w-max sm:flex-nowrap sm:gap-2 sm:text-sm">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${isMenuOpen ? "max-sm:translate-x-0 max-sm:opacity-100" : "max-sm:translate-x-4 max-sm:opacity-0"} flex min-h-12 transform-gpu items-center rounded-lg border border-transparent px-3 py-3 outline-none transition-[background-color,border-color,color,opacity,transform] duration-300 ease-out hover:border-brand-button/20 hover:bg-brand-soft hover:text-brand-button focus-visible:ring-2 focus-visible:ring-brand-button sm:min-h-11 sm:border-0 sm:py-2`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${120 + index * 55}ms`
                      : "0ms",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-slate-200 pt-5 text-sm text-brand-muted sm:hidden">
            <p className="font-semibold text-brand-ink">{profile.role}</p>
            <p className="mt-1">{profile.location}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
