import { projects } from "../../data/portfolio";

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Selected work
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-950">Projects</h1>
        <p className="mt-4 text-lg leading-8 text-stone-700">
          A starting collection of work samples. Replace these placeholders with
          your strongest real projects when you are ready.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded border border-stone-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-stone-950">
              {project.title}
            </h2>
            <p className="mt-3 flex-1 leading-7 text-stone-700">
              {project.description}
            </p>
            <p className="mt-4 border-l-2 border-amber-500 pl-3 text-sm font-medium leading-6 text-stone-800">
              {project.impact}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700"
                >
                  {item}
                </span>
              ))}
            </div>
            {project.links.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-teal-700 outline-none hover:text-teal-900 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
