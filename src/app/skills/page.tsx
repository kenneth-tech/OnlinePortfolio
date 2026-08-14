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
            className="border border-brand-ink/15 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4 border-b border-brand-ink/10 pb-4">
              <h2 className="text-xl font-black uppercase text-brand-ink">
                {group.title}
              </h2>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-brand-muted/50">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-brand-ink/15 bg-brand-muted/10 px-3 py-2 text-sm font-semibold text-brand-ink"
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
