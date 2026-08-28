import { PageHeader } from "../../components/page-header";
import { profile } from "../../data/portfolio";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        title="Contact"
        description="A direct channel for web projects, collaboration, freelance inquiries, and opportunities connected to development or multimedia work."
      />

      <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
        <div className="motion-card rounded-2xl border border-brand-button/20 bg-brand-card/75 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26)] sm:p-6">
          <p className="text-sm font-semibold text-brand-button">
            Current status
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Open to remote web and multimedia work.
          </h2>
          <p className="mt-5 leading-7 text-brand-muted">
            Best fit: responsive websites, landing pages, funnels, UI/UX
            support, multimedia assets, and automation-assisted builds.
          </p>
        </div>

        <div className="grid gap-3">
          {[
            {
              label: "Email",
              href: `mailto:${profile.email}`,
              value: profile.email,
            },
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
              className="motion-card group rounded-xl border border-brand-button/15 bg-brand-card/65 p-5 font-semibold text-white outline-none transition hover:border-brand-button/45 focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink"
            >
              <span className="block text-sm font-medium text-brand-button">
                {item.label}
              </span>
              <span className="mt-3 block break-words text-base sm:text-lg">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
