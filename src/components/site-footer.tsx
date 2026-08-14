import { profile } from "../data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-stone-400">
            {profile.role} based in {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-stone-300">
          {profile.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="outline-none transition hover:text-teal-300 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-950"
            >
              {link.label}
            </a>
          ))}
          <span className="text-stone-500">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
