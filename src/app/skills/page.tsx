import { PageHeader } from "../../components/page-header";
import { skillGroups } from "../../data/portfolio";

export default function SkillsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Capability matrix"
        title="Skills"
        description="A structured overview of the tools, platforms, design capabilities, and automation strengths behind the work."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <section
            key={group.title}
            className="rounded-xl border border-brand-button/15 bg-brand-card/65 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-brand-button/10 pb-4">
              <h2 className="text-xl font-semibold text-white">
                {group.title}
              </h2>
              <span className="text-sm font-medium text-brand-button">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-brand-button/15 bg-brand-button/5 px-3 py-2 text-sm font-medium text-brand-muted"
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
