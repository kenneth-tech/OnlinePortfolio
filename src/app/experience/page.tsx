import { PageHeader } from "../../components/page-header";
import { education, experiences } from "../../data/portfolio";

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Career timeline"
        title="Experience"
        description="A progression through web development, multimedia design, digital marketing, and technical operations work across remote and on-site teams."
      />

      <div className="mt-10 space-y-6">
        {experiences.map((experience, index) => (
          <article
            key={`${experience.role}-${experience.organization}`}
            className="grid gap-5 border-t border-brand-ink/10 pt-6 md:grid-cols-[220px_1fr]"
          >
            <div>
              <p className="text-sm font-semibold text-brand-muted/70">
                Experience {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-sm font-bold text-brand-muted">
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
              <h2 className="text-2xl font-semibold leading-tight text-brand-ink">
                {experience.role}
              </h2>
              <ul className="mt-5 grid gap-3 text-brand-muted/85">
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
          </article>
        ))}
      </div>

      <div className="mt-12 border-t border-brand-ink/10 pt-8">
        <h2 className="text-2xl font-semibold text-brand-ink">Education</h2>
        <div className="mt-5 grid gap-5">
          {education.map((item) => (
            <article
              key={`${item.degree}-${item.school}`}
              className="border border-brand-ink/10 bg-white p-6 text-brand-ink"
            >
              <h3 className="text-xl font-semibold">
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
