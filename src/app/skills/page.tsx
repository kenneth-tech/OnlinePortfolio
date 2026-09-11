import { PageHeader } from "../../components/page-header";
import { SkillIcon, skillGroups } from "../../data/skills";

export default function SkillsPage() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        title="Skills"
        description="A scannable skills matrix for recruiters and clients reviewing technical fit, platform experience, design capability, and marketing support."
      />

      <section aria-labelledby="skills-matrix-heading" className="mt-8">
        <h2 id="skills-matrix-heading" className="text-sm font-semibold text-brand-button">
          Skills Matrix
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className="glass-panel min-w-0 rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6 lg:p-8"
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                <h3 className="min-w-0 text-xl font-semibold leading-7 text-brand-ink">
                  {group.title}
                </h3>
                <span className="shrink-0 pt-1 text-xs font-medium text-brand-muted">
                  {group.skills.length} skills
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex min-w-0 max-w-full items-center gap-2.5 rounded-lg border border-slate-200 bg-brand-card/50 px-3 py-2.5 text-sm font-medium text-brand-muted"
                  >
                    <span className="shrink-0"><SkillIcon skill={skill} /></span>
                    <span className="break-words">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </section>
  );
}
