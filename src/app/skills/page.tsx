import { PageHeader } from "../../components/page-header";
import { SkillIcon, skillGroups } from "../../data/skills";

export default function SkillsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        title="Skills"
        description="A scannable skills matrix for recruiters and clients reviewing technical fit, platform experience, design capability, and marketing support."
      />

      <section className="motion-card mt-8 rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6">
        <p className="text-sm font-semibold text-brand-button">
          Skills Matrix
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-lg border border-slate-200 bg-white p-5 text-brand-ink"
            >
              <h2 className="text-xl font-semibold text-brand-ink">
                {group.title}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-brand-muted"
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
    </section>
  );
}
