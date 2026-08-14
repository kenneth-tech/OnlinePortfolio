import { PageHeader } from "../../components/page-header";
import { projects } from "../../data/portfolio";

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Project index"
        title="Projects"
        description="A focused view of web builds, funnel work, and multimedia assets that show how development and design come together in practical client-facing output."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="flex flex-col border border-brand-ink/15 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-ink/40 hover:shadow-lg"
          >
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-muted/60">
              Project {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-5 text-2xl font-black uppercase leading-tight text-brand-ink">
              {project.title}
            </h2>
            <p className="mt-4 flex-1 leading-7 text-brand-muted/80">
              {project.description}
            </p>
            <p className="mt-5 border-l-4 border-brand-ink pl-4 text-sm font-semibold leading-6 text-brand-ink">
              {project.impact}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-brand-ink/10 bg-brand-muted/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-muted"
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
