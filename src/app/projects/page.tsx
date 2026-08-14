import { projects } from "../../data/portfolio";

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
          Selected work
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-brand-ink">Projects</h1>
        <p className="mt-4 text-lg leading-8 text-brand-muted">
          A starting collection of work samples. Replace these placeholders with
          your strongest real projects when you are ready.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded border border-brand-muted/20 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-brand-ink">
              {project.title}
            </h2>
            <p className="mt-3 flex-1 leading-7 text-brand-muted">
              {project.description}
            </p>
            <p className="mt-4 border-l-2 border-brand-muted pl-3 text-sm font-medium leading-6 text-brand-ink">
              {project.impact}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded bg-brand-muted/10 px-3 py-1 text-xs font-semibold text-brand-muted"
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
                    className="text-sm font-semibold text-brand-muted outline-none hover:text-brand-ink focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-muted focus-visible:ring-offset-4"
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
