import { PageHeader } from "../../components/page-header";
import { SkillIcon, skillGroups } from "../../data/skills";

export default function SkillsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        title="Skills"
        description="A structured overview of the tools, platforms, design capabilities, and automation strengths behind the work."
      />

      <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <section
            key={group.title}
            className="motion-card rounded-xl border border-brand-button/30 bg-white p-5 text-brand-ink shadow-[0_18px_60px_rgba(0,0,0,0.18)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-4 border-b border-brand-button/10 pb-4">
              <h2 className="text-xl font-semibold text-brand-ink">
                {group.title}
              </h2>
              <span className="shrink-0 text-sm font-medium text-brand-card">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-button/25 bg-white px-3 py-2 text-sm font-medium text-brand-card shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <SkillIcon skill={skill} />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
