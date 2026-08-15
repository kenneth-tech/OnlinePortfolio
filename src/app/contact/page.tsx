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
        <div className="border border-brand-ink/10 bg-white p-6">
          <p className="text-sm font-semibold text-brand-muted/70">
            Current status
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-ink">
            Open to remote web and multimedia work.
          </h2>
          <p className="mt-5 leading-7 text-brand-muted/80">
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
              className="group border border-brand-ink/10 bg-white p-5 font-semibold text-brand-ink outline-none transition hover:border-brand-ink/30 focus-visible:ring-2 focus-visible:ring-brand-muted focus-visible:ring-offset-4"
            >
              <span className="block text-sm font-medium text-brand-muted/70">
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
