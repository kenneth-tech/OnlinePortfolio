import { PageHeader } from "../../components/page-header";
import { education, experiences } from "../../data/portfolio";

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        title="Experience"
        description="Resume-style career history with responsibilities, business context, and practical delivery experience across development, design, media, and operations."
      />

      <section className="glass-panel motion-card mt-8 rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6">
        <p className="text-sm font-semibold text-brand-button">
          Resume Experience
        </p>
        <div className="mt-6 space-y-6">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.organization}`}
              className="grid gap-4 border-b border-slate-200 bg-white pb-6 text-brand-ink last:border-b-0 last:pb-0 md:grid-cols-[240px_1fr]"
            >
              <div>
                <p className="text-sm font-bold text-brand-ink">
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
                <h2 className="text-xl font-semibold leading-tight text-brand-ink">
                  {experience.role}
                </h2>
                <ul className="mt-4 grid gap-2 text-sm text-brand-muted sm:text-base">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="leading-7">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-8 rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6">
        <h2 className="text-2xl font-semibold text-brand-ink">Education</h2>
        <div className="mt-5 grid gap-5">
          {education.map((item) => (
            <article key={`${item.degree}-${item.school}`}>
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="mt-2 text-brand-muted">{item.school}</p>
              <p className="mt-2 text-sm font-semibold text-brand-ink">
                {item.period}
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
