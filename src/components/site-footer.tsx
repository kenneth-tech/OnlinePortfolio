import { profile } from "../data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-muted/20 bg-brand-ink text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-white/70">
            {profile.role} based in {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/80">
          {profile.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="outline-none transition hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink"
            >
              {link.label}
            </a>
          ))}
          <span className="text-white/55">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
