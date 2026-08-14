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
            className="relative grid gap-5 border border-brand-ink/15 bg-white p-6 shadow-sm md:grid-cols-[220px_1fr]"
          >
            <span className="absolute left-0 top-6 h-10 w-1 bg-brand-ink" />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-muted/60">
                Step {String(index + 1).padStart(2, "0")}
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
              <h2 className="text-2xl font-black uppercase leading-tight text-brand-ink">
                {experience.role}
              </h2>
              <ul className="mt-5 grid gap-3 text-brand-muted/85">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="border-l border-brand-ink/20 pl-4 leading-7"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 border border-brand-ink bg-brand-ink p-6 text-white">
        <h2 className="text-2xl font-black uppercase">Education</h2>
        <div className="mt-5 grid gap-5">
          {education.map((item) => (
            <article
              key={`${item.degree}-${item.school}`}
              className="border border-white/15 bg-white p-6 text-brand-ink"
            >
              <h3 className="text-xl font-black uppercase">
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
