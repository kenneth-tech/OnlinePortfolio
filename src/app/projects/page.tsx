import { AnimatedButtonLink } from "../../components/animated-button-link";
import { PageHeader } from "../../components/page-header";
import { projects } from "../../data/portfolio";

export default function ProjectsPage() {
  const [featuredProject, ...projectGrid] = projects;

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Project index"
        title="Projects"
        description="A curated set of live websites across social growth, local service, ecommerce, marketing, mental health, and business support."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["6 Live Projects", "Websites visitors can open and review."],
          ["6 Industries", "Different audiences and business goals."],
          ["Web + UI + Marketing", "Development, design, and funnel thinking."],
        ].map(([label, detail]) => (
          <div
            key={label}
            className="rounded-xl border border-brand-button/15 bg-brand-card/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
          >
            <p className="text-xl font-semibold text-white">{label}</p>
            <p className="mt-2 text-sm leading-6 text-brand-muted">{detail}</p>
          </div>
        ))}
      </div>

      <article className="mt-10 grid gap-8 rounded-2xl border border-brand-button/20 bg-brand-card/75 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.26)] lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold text-brand-button">
            Featured build
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-white">
            {featuredProject.title}
          </h2>
          <p className="mt-3 text-sm text-brand-soft">
            {featuredProject.category}
          </p>
          <p className="mt-1 text-sm text-brand-muted">
            {featuredProject.role}
          </p>
        </div>
        <div>
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
          <div className="mt-6">
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

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projectGrid.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-brand-button/15 bg-brand-card/65 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-button/45 hover:shadow-[0_18px_70px_rgba(127,255,212,0.10)]"
          >
            <p className="text-sm font-medium text-brand-button">
              {project.category}
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
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
            <div className="mt-6">
              <AnimatedButtonLink
                href={project.links[0].href}
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                Visit site
              </AnimatedButtonLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
