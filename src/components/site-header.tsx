import Link from "next/link";

import { profile } from "../data/portfolio";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-button/10 bg-brand-ink/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="max-w-full truncate text-base font-semibold text-white outline-none transition hover:text-brand-button focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink"
        >
          {profile.name}
        </Link>
        <nav
          aria-label="Main navigation"
          className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0"
        >
          <ul className="flex flex-wrap gap-2 text-sm font-medium text-brand-muted sm:min-w-max sm:flex-nowrap">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center rounded-lg px-3 py-2 outline-none transition hover:bg-brand-button/10 hover:text-brand-soft focus-visible:ring-2 focus-visible:ring-brand-button"
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
