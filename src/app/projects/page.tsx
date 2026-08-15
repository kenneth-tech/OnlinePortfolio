import { AnimatedButtonLink } from "../../components/animated-button-link";
import { PageHeader } from "../../components/page-header";
import { projects, type Project } from "../../data/portfolio";

function ProjectPreview({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div className="border border-brand-ink/15 bg-white">
      <div className="flex items-center gap-2 border-b border-brand-ink/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-brand-ink/30" />
        <span className="h-2 w-2 rounded-full bg-brand-ink/20" />
        <span className="h-2 w-2 rounded-full bg-brand-ink/10" />
        <span className="ml-auto truncate text-xs font-semibold text-brand-muted/50">
          {project.url.replace("https://", "").replace("www.", "")}
        </span>
      </div>
      <div
        className={`grid border-b border-brand-ink/10 bg-brand-ink text-white ${
          compact ? "min-h-36 p-5" : "min-h-56 p-7"
        }`}
      >
        <p className="text-xs font-black uppercase tracking-[0.24em] text-white/55">
          {project.category}
        </p>
        <h3
          className={`self-end font-black uppercase leading-none ${
            compact ? "text-3xl" : "text-5xl"
          }`}
        >
          {project.title}
        </h3>
      </div>
      <div className="grid grid-cols-3 divide-x divide-brand-ink/10">
        <div className="px-4 py-3">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-muted/45">
            Year
          </p>
          <p className="mt-1 text-sm font-bold text-brand-ink">{project.year}</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-muted/45">
            Role
          </p>
          <p className="mt-1 truncate text-sm font-bold text-brand-ink">
            {project.role.split("|")[0].trim()}
          </p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-muted/45">
            Type
          </p>
          <p className="mt-1 truncate text-sm font-bold text-brand-ink">
            {project.category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [featuredProject, ...projectGrid] = projects;

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <PageHeader
        eyebrow="Project index"
        title="Projects"
        description="A curated showcase of live websites across social growth, local service, ecommerce, marketing, mental health, and business support."
      />

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          ["6 Live Projects", "Real websites visitors can open and review."],
          ["6 Industries", "Different markets, audiences, and conversion goals."],
          [
            "Web + UI + Marketing",
            "Development, design, content, and funnel thinking.",
          ],
        ].map(([label, detail]) => (
          <div key={label} className="border border-brand-ink/15 bg-white p-5">
            <p className="text-2xl font-black uppercase leading-none text-brand-ink">
              {label}
            </p>
            <p className="mt-3 text-sm leading-6 text-brand-muted/70">{detail}</p>
          </div>
        ))}
      </div>

      <article className="mt-10 grid gap-6 border border-brand-ink bg-brand-ink p-4 text-white lg:grid-cols-[1.1fr_0.9fr]">
        <ProjectPreview project={featuredProject} />
        <div className="flex flex-col justify-between p-3 sm:p-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-white/55">
              Featured case study
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl">
              {featuredProject.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              {featuredProject.description}
            </p>
            <p className="mt-5 border-l-4 border-white pl-4 text-sm font-semibold leading-6 text-white">
              {featuredProject.impact}
            </p>
          </div>
          <div className="mt-7">
            <div className="mb-5 flex flex-wrap gap-2">
              {featuredProject.stack.map((item) => (
                <span
                  key={item}
                  className="border border-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
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

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projectGrid.map((project, index) => (
          <article
            key={project.title}
            className="grid gap-5 border border-brand-ink/15 bg-white p-5 transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-brand-ink/40"
          >
            <ProjectPreview project={project} compact />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-muted/60">
                Project {String(index + 2).padStart(2, "0")} | {project.category}
              </p>
              <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-brand-ink">
                {project.title}
              </h2>
              <p className="mt-3 leading-7 text-brand-muted/80">
                {project.description}
              </p>
              <p className="mt-4 border-l-4 border-brand-ink pl-4 text-sm font-semibold leading-6 text-brand-ink">
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
