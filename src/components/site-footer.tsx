import Link from "next/link";

import { profile } from "../data/portfolio";

const footerNavItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
] as const;

const serviceItems = [
  "Responsive web development",
  "UI/UX and landing page design",
  "Multimedia production",
  "Automation-assisted workflows",
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  const phoneHref = `tel:${profile.phone.replaceAll(" ", "")}`;

  return (
    <footer className="border-t border-brand-button/20 bg-black text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.7fr_0.8fr]">
        <section className="max-w-xl">
          <Link
            href="/"
            className="inline-flex w-fit text-lg font-semibold tracking-normal outline-none transition hover:text-brand-button focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            {profile.name}
          </Link>
          <p className="mt-3 text-sm font-semibold text-brand-button">
            {profile.role}
          </p>
          <p className="mt-1 text-sm text-brand-muted">{profile.location}</p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-brand-muted">
            Building refined web interfaces, conversion-focused pages, and
            multimedia experiences for brands that need clear digital presence.
          </p>
        </section>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold uppercase text-brand-button">
            Explore
          </h2>
          <ul className="mt-4 grid gap-3 text-sm text-brand-muted">
            {footerNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex outline-none transition hover:text-brand-button focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <h2 className="text-xs font-semibold uppercase text-brand-button">
            Contact
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-brand-muted">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex outline-none transition hover:text-brand-button focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              {profile.email}
            </a>
            <a
              href={phoneHref}
              className="inline-flex outline-none transition hover:text-brand-button focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              {profile.phone}
            </a>
          </div>

          <ul className="mt-6 grid gap-2 text-sm text-brand-muted">
            {serviceItems.map((item) => (
              <li
                key={item}
                className="border-l border-brand-button/35 pl-3 leading-6"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="border-t border-brand-button/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-5 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>(c) {year} Mark Kenneth R. Rillamas. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="outline-none transition hover:text-brand-button focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
