import { profile } from "../../data/portfolio";

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
          Get in touch
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-brand-ink">Contact</h1>
        <p className="mt-4 text-lg leading-8 text-brand-muted">
          Use this page for your email and professional profiles. A backend form
          can be added later when the site needs one.
        </p>
      </div>

      <div className="rounded border border-brand-muted/20 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand-ink">
          Let&apos;s connect
        </h2>
        <p className="mt-3 leading-7 text-brand-muted">
          I am open to web projects, collaboration, and opportunities to keep
          building useful digital experiences.
        </p>
        <div className="mt-6 grid gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded border border-brand-accent/45 bg-brand-surface px-4 py-3 font-semibold text-brand-ink outline-none transition hover:border-brand-accent focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replaceAll(" ", "")}`}
            className="rounded border border-brand-muted/20 px-4 py-3 font-semibold text-brand-ink outline-none transition hover:border-brand-accent hover:bg-brand-surface focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
          >
            {profile.phone}
          </a>
          {profile.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-brand-muted/20 px-4 py-3 font-semibold text-brand-ink outline-none transition hover:border-brand-accent hover:bg-brand-surface focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
