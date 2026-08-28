import { PageHeader } from "../../components/page-header";
import { ScrollReveal } from "../../components/scroll-reveal";
import { education, experiences } from "../../data/portfolio";

export default function ExperiencePage() {
  return (
    <ScrollReveal as="section" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        title="Experience"
        description="A progression through web development, multimedia design, digital marketing, and technical operations work across remote and on-site teams."
      />

      <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
        {experiences.map((experience, index) => (
          <ScrollReveal
            as="article"
            key={`${experience.role}-${experience.organization}`}
            className="motion-card grid gap-5 rounded-xl border border-brand-button/15 bg-brand-card/65 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] sm:p-6 md:grid-cols-[220px_1fr]"
            delay={(index % 2) * 90}
          >
            <div>
              <p className="text-sm font-bold text-brand-soft">
                {experience.period}
              </p>
              <p className="mt-2 text-sm text-brand-muted">
                {experience.organization}
              </p>
              <p className="mt-1 text-sm text-brand-muted">
                {experience.location}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                {experience.role}
              </h2>
              <ul className="mt-5 grid gap-3 text-sm text-brand-muted sm:text-base">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="leading-7"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-10 border-t border-brand-button/10 pt-8 sm:mt-12">
        <h2 className="text-2xl font-semibold text-white">Education</h2>
        <div className="mt-5 grid gap-5">
          {education.map((item, index) => (
            <ScrollReveal
              as="article"
              key={`${item.degree}-${item.school}`}
              className="motion-card rounded-xl border border-brand-button/15 bg-brand-card/65 p-5 text-white sm:p-6"
              delay={index * 90}
            >
              <h3 className="text-xl font-semibold">
                {item.degree}
              </h3>
              <p className="mt-2 text-brand-muted">{item.school}</p>
              <p className="mt-2 text-sm font-semibold text-brand-soft">
                {item.period}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </ScrollReveal>
  );
}
