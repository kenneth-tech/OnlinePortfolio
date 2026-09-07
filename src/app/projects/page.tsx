import Image from "next/image";

import { AnimatedButtonLink } from "../../components/animated-button-link";
import { PageHeader } from "../../components/page-header";
import { projects, type Project } from "../../data/portfolio";

function ProjectPreview({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white text-brand-ink shadow-sm">
      <div className="flex h-9 items-center gap-2 border-b border-slate-200 bg-slate-50 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="ml-2 truncate text-xs text-brand-muted">
          {project.url.replace("https://", "").replace(/\/$/, "")}
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-slate-100">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1440}
          height={950}
          priority={priority}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        title="Projects"
        description="Live client-ready work samples with role, outcome, technology stack, and direct links for fast review."
      />

      <section className="motion-card mt-8 rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6">
        <p className="text-sm font-semibold text-brand-button">
          Project Showcase
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            ["6 Live Projects", "Published websites clients can inspect."],
            ["6 Industries", "Work adapted to different audiences."],
            ["Clear Role + Outcome", "ATS-readable project evidence."],
          ].map(([label, detail]) => (
            <div key={label} className="rounded-lg bg-slate-50 p-4">
              <p className="text-lg font-semibold text-brand-ink">{label}</p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="motion-card grid gap-5 rounded-lg border border-slate-200 bg-white p-4 text-brand-ink shadow-sm sm:p-5 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <ProjectPreview project={project} priority={index === 0} />
            <div className="flex flex-col self-center">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-brand-button">
                    {project.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold leading-tight text-brand-ink">
                    {project.title}
                  </h2>
                </div>
                <p className="text-sm font-medium text-brand-muted">
                  {project.year}
                </p>
              </div>
              <p className="mt-2 text-sm text-brand-muted">{project.role}</p>
              <p className="mt-4 leading-7 text-brand-muted">
                {project.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-ink">
                Outcome
              </p>
              <p className="mt-1 text-sm leading-6 text-brand-muted">
                {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-brand-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <AnimatedButtonLink
                  href={project.links[0].href}
                  rel="noreferrer"
                  target="_blank"
                  variant={index === 0 ? "primary" : "secondary"}
                >
                  Visit site
                </AnimatedButtonLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
