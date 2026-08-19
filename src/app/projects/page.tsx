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
    <div className="motion-card overflow-hidden rounded-xl border border-brand-button/15 bg-brand-ink/70 shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
      <div className="flex h-9 items-center gap-2 border-b border-brand-button/10 bg-brand-ink/85 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-button/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-soft/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
        <span className="ml-2 truncate text-xs text-brand-muted">
          {project.url.replace("https://", "").replace(/\/$/, "")}
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-brand-card">
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
  const [featuredProject, ...projectGrid] = projects;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <PageHeader
        eyebrow="Project index"
        title="Projects"
        description="A curated set of live websites across social growth, local service, ecommerce, marketing, mental health, and business support."
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          ["6 Live Projects", "Websites visitors can open and review."],
          ["6 Industries", "Different audiences and business goals."],
          ["Web + UI + Marketing", "Development, design, and funnel thinking."],
        ].map(([label, detail]) => (
          <div
            key={label}
            className="motion-card rounded-xl border border-brand-button/15 bg-brand-card/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
          >
            <p className="text-xl font-semibold text-white">{label}</p>
            <p className="mt-2 text-sm leading-6 text-brand-muted">{detail}</p>
          </div>
        ))}
      </div>

      <article className="motion-card mt-10 grid gap-6 rounded-2xl border border-brand-button/20 bg-brand-card/75 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.26)] sm:p-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:p-6">
        <ProjectPreview project={featuredProject} priority />
        <div className="self-center">
          <p className="text-sm font-semibold text-brand-button">
            Featured build
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {featuredProject.title}
          </h2>
          <p className="mt-3 text-sm text-brand-soft">
            {featuredProject.category}
          </p>
          <p className="mt-1 text-sm text-brand-muted">
            {featuredProject.role}
          </p>
          <p className="leading-7 text-brand-muted">
            {featuredProject.description}
          </p>
          <p className="mt-4 leading-7 text-brand-muted">
            {featuredProject.impact}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {featuredProject.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-brand-button/15 bg-brand-button/5 px-3 py-1 text-sm text-brand-muted"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <AnimatedButtonLink
              href={featuredProject.links[0].href}
              rel="noreferrer"
              target="_blank"
            >
              Visit site
            </AnimatedButtonLink>
          </div>
        </div>
      </article>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projectGrid.map((project) => (
          <article
            key={project.title}
            className="motion-card flex flex-col overflow-hidden rounded-xl border border-brand-button/15 bg-brand-card/65 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-button/45 hover:shadow-[0_18px_70px_rgba(127,255,212,0.10)]"
          >
            <ProjectPreview project={project} />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="text-sm font-medium text-brand-button">
                {project.category}
              </p>
              <h2 className="mt-3 text-xl font-semibold leading-tight text-white sm:text-2xl">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-brand-muted">{project.role}</p>
              <p className="mt-4 flex-1 leading-7 text-brand-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-button/15 bg-brand-button/5 px-3 py-1 text-sm text-brand-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex">
                <AnimatedButtonLink
                  href={project.links[0].href}
                  rel="noreferrer"
                  target="_blank"
                  variant="secondary"
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
