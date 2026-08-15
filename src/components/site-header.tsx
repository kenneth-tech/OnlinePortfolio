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
    <header className="border-b border-brand-ink/10 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="w-fit text-base font-semibold text-brand-ink outline-none transition hover:text-brand-muted/70 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-muted focus-visible:ring-offset-4"
        >
          {profile.name}
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-2 text-sm font-medium text-brand-muted/75">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded px-3 py-2 outline-none transition hover:bg-brand-muted/5 hover:text-brand-ink focus-visible:ring-2 focus-visible:ring-brand-muted"
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
