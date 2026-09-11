import { PageHeader } from "../../components/page-header";
import { education, experiences } from "../../data/portfolio";

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        title="Experience"
        description="Resume-style career history with responsibilities, business context, and practical delivery experience across development, design, media, and operations."
      />

      <div className="mt-8 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section aria-labelledby="career-history-heading" className="glass-panel min-w-0 rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6">
          <h2 id="career-history-heading" className="text-sm font-semibold text-brand-button">
            Resume Experience
          </h2>
          <div className="mt-6 divide-y divide-slate-200">
            {experiences.map((experience) => (
              <article
                key={`${experience.role}-${experience.organization}`}
                className="grid min-w-0 gap-4 py-7 text-brand-ink first:pt-0 last:pb-0 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8"
              >
                <div>
                  <p className="text-sm font-bold text-brand-ink">
                    {experience.period}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-brand-ink">
                    {experience.organization}
                  </p>
                  <p className="mt-1 text-sm text-brand-muted">
                    {experience.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-snug text-brand-ink">
                    {experience.role}
                  </h3>
                  <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-brand-muted marker:text-brand-button sm:text-base">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="pl-1 leading-7">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="education-heading" className="glass-panel min-w-0 rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6">
          <h2 id="education-heading" className="text-2xl font-semibold text-brand-ink">Education</h2>
          <div className="mt-5 grid gap-5">
            {education.map((item) => (
              <article key={`${item.degree}-${item.school}`}>
                <h3 className="text-lg font-semibold leading-7">{item.degree}</h3>
                <p className="mt-2 leading-7 text-brand-muted">{item.school}</p>
                <p className="mt-2 text-sm font-semibold text-brand-ink">
                  {item.period}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
