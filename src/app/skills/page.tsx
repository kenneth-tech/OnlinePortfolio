import { skillGroups } from "../../data/portfolio";

export default function SkillsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
          Capabilities
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-brand-ink">Skills</h1>
        <p className="mt-4 text-lg leading-8 text-brand-muted">
          Group your strongest tools and professional strengths so visitors can
          scan your fit quickly.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="rounded border border-brand-muted/20 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-brand-ink">
              {group.title}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-brand-muted/20 bg-brand-muted/10 px-3 py-2 text-sm font-medium text-brand-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
