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
            className="grid gap-5 rounded-xl border border-brand-button/15 bg-brand-card/65 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] md:grid-cols-[220px_1fr]"
          >
            <div>
              <p className="text-sm font-semibold text-brand-button">
                Experience {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-sm font-bold text-brand-soft">
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
              <h2 className="text-2xl font-semibold leading-tight text-white">
                {experience.role}
              </h2>
              <ul className="mt-5 grid gap-3 text-brand-muted">
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

      <div className="mt-12 border-t border-brand-button/10 pt-8">
        <h2 className="text-2xl font-semibold text-white">Education</h2>
        <div className="mt-5 grid gap-5">
          {education.map((item) => (
            <article
              key={`${item.degree}-${item.school}`}
              className="rounded-xl border border-brand-button/15 bg-brand-card/65 p-6 text-white"
            >
              <h3 className="text-xl font-semibold">
                {item.degree}
              </h3>
              <p className="mt-2 text-brand-muted">{item.school}</p>
              <p className="mt-2 text-sm font-semibold text-brand-soft">
                {item.period}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
