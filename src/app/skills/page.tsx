import { skillGroups } from "../../data/portfolio";

export default function SkillsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Capabilities
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-950">Skills</h1>
        <p className="mt-4 text-lg leading-8 text-stone-700">
          Group your strongest tools and professional strengths so visitors can
          scan your fit quickly.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="rounded border border-stone-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-stone-950">
              {group.title}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700"
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
