import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import type { IconType } from "react-icons";

import { PageHeader } from "../../components/page-header";
import { profile, type ProfileLink } from "../../data/portfolio";

const socialIcons: Partial<Record<ProfileLink["label"], IconType>> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
};

export default function ContactPage() {
  const phoneHref = `tel:${profile.phone.replaceAll(" ", "")}`;

  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        title="Contact"
        description="Direct contact details for project inquiries, freelance work, collaboration, and remote web or multimedia opportunities."
      />

      <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
        <div className="glass-panel motion-card rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6">
          <p className="text-sm font-semibold text-brand-button">
            Project Inquiry
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-brand-ink sm:text-3xl">
            Open to web development, UI support, and multimedia projects.
          </h2>
          <p className="mt-5 leading-7 text-brand-muted">
            Best fit: responsive websites, landing pages, funnels, UI/UX
            support, multimedia assets, automation-assisted builds, and ongoing
            site improvements.
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
              href: phoneHref,
              value: profile.phone,
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.value}
              className="glass-panel motion-card group rounded-lg border border-slate-200 bg-white p-5 font-semibold text-brand-ink outline-none shadow-sm transition hover:border-brand-button focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-white"
            >
              <span className="block text-sm font-medium text-brand-muted">
                {item.label}
              </span>
              <span className="mt-3 block break-words text-base sm:text-lg">
                {item.value}
              </span>
            </a>
          ))}

          <div className="glass-panel motion-card rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm">
            <p className="text-sm font-semibold text-brand-button">
              Professional Links
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {profile.links.map((link) => {
                const Icon = socialIcons[link.label];

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-brand-ink outline-none transition hover:border-brand-button hover:bg-brand-soft focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                  >
                    {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
