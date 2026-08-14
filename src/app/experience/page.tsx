import { education, experiences } from "../../data/portfolio";

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
          Background
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-brand-ink">
          Experience
        </h1>
        <p className="mt-4 text-lg leading-8 text-brand-muted">
          A simple timeline for your work, learning, and collaboration history.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.organization}`}
            className="grid gap-5 rounded border border-brand-muted/20 bg-white p-6 shadow-sm md:grid-cols-[220px_1fr]"
          >
            <div>
              <p className="text-sm font-semibold text-brand-muted">
                {experience.period}
              </p>
              <p className="mt-2 text-sm text-brand-muted/80">
                {experience.organization}
              </p>
              <p className="mt-1 text-sm text-brand-muted/80">
                {experience.location}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-brand-ink">
                {experience.role}
              </h2>
              <ul className="mt-4 space-y-3 text-brand-muted">
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

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-brand-ink">Education</h2>
        <div className="mt-5 grid gap-5">
          {education.map((item) => (
            <article
              key={`${item.degree}-${item.school}`}
              className="rounded border border-brand-muted/20 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-brand-ink">
                {item.degree}
              </h3>
              <p className="mt-2 text-brand-muted">{item.school}</p>
              <p className="mt-2 text-sm font-semibold text-brand-muted">
                {item.period}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
