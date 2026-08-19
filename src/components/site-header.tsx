"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

import { profile } from "../data/portfolio";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonLabel = isMenuOpen ? "Close main menu" : "Open main menu";
  const MenuIcon = isMenuOpen ? FaXmark : FaBars;

  return (
    <header className="sticky top-0 z-50 border-b border-brand-button/10 bg-brand-ink/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="max-w-full truncate text-base font-semibold text-white outline-none transition hover:text-brand-button focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink"
            onClick={() => setIsMenuOpen(false)}
          >
            {profile.name}
          </Link>
          <button
            type="button"
            aria-controls="main-navigation"
            aria-expanded={isMenuOpen}
            aria-label={menuButtonLabel}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-button/25 text-white outline-none transition-[background-color,border-color,color,box-shadow] duration-200 hover:border-brand-button hover:bg-brand-button/10 hover:text-brand-button focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink sm:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <MenuIcon aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${isMenuOpen ? "max-sm:block" : "max-sm:hidden"} mt-4 rounded-xl border border-brand-button/15 bg-brand-card/90 p-2 shadow-[0_18px_54px_rgba(0,0,0,0.22)] sm:mt-0 sm:block sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
        >
          <ul className="grid gap-1 text-sm font-medium text-brand-muted sm:flex sm:min-w-max sm:flex-nowrap sm:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-12 items-center rounded-lg px-3 py-2 outline-none transition hover:bg-brand-button/10 hover:text-brand-soft focus-visible:ring-2 focus-visible:ring-brand-button sm:min-h-11"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
