import { PageHeader } from "../../components/page-header";
import { profile } from "../../data/portfolio";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Availability signal"
        title="Contact"
        description="A direct channel for web projects, collaboration, freelance inquiries, and opportunities connected to development or multimedia work."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border border-brand-ink bg-brand-ink p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">
            Current status
          </p>
          <h2 className="mt-5 text-3xl font-black uppercase leading-tight">
            Open to remote web and multimedia work.
          </h2>
          <p className="mt-5 leading-7 text-white/75">
            Best fit: responsive websites, landing pages, funnels, UI/UX
            support, multimedia assets, and automation-assisted builds.
          </p>
        </div>

        <div className="grid gap-3">
          {[
            { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
            {
              label: "Phone",
              href: `tel:${profile.phone.replaceAll(" ", "")}`,
              value: profile.phone,
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.value}
              className="group border border-brand-ink/15 bg-white p-5 font-semibold text-brand-ink outline-none transition hover:border-brand-ink hover:bg-brand-muted/10 focus-visible:ring-2 focus-visible:ring-brand-muted focus-visible:ring-offset-4"
            >
              <span className="block text-xs font-black uppercase tracking-[0.24em] text-brand-muted/60">
                {item.label}
              </span>
              <span className="mt-3 block break-words text-lg">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
