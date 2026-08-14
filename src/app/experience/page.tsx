import { experiences } from "../../data/portfolio";

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Background
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-950">
          Experience
        </h1>
        <p className="mt-4 text-lg leading-8 text-stone-700">
          A simple timeline for your work, learning, and collaboration history.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.organization}`}
            className="grid gap-5 rounded border border-stone-200 bg-white p-6 shadow-sm md:grid-cols-[220px_1fr]"
          >
            <div>
              <p className="text-sm font-semibold text-teal-700">
                {experience.period}
              </p>
              <p className="mt-2 text-sm text-stone-500">
                {experience.organization}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-stone-950">
                {experience.role}
              </h2>
              <ul className="mt-4 space-y-3 text-stone-700">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="leading-7">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
