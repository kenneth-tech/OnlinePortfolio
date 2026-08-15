import { AnimatedButtonLink } from "../components/animated-button-link";
import { StatCard } from "../components/stat-card";
import { profile, projects, skillGroups, type Project } from "../data/portfolio";

export function FeaturedProjectCard({ project }: { project?: Project }) {
  return (
    <article className="border border-brand-ink/10 bg-white p-5">
      <p className="text-sm font-semibold text-brand-muted/70">
        Featured project
      </p>
      {project ? (
        <>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-ink">
            {project.title}
          </h3>
          <p className="mt-3 leading-7 text-brand-muted/80">
            {project.description}
          </p>
        </>
      ) : (
        <>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-ink">
            Add your first project
          </h3>
          <p className="mt-3 leading-7 text-brand-muted/80">
            Add a project in src/data/portfolio.ts to feature it here.
          </p>
        </>
      )}
    </article>
  );
}

export default function HomePage() {
  const featuredSkills = skillGroups.flatMap((group) => group.skills).slice(0, 10);
  const featuredProjects = projects.slice(0, 3);
  const stats = [
    {
      label: "Experience",
      value: "4+ Years",
      detail: "Across web, multimedia, and digital marketing work.",
    },
    {
      label: "Focus",
      value: "Web + Multimedia",
      detail: "Responsive sites, funnels, UI/UX, graphics, and video.",
    },
    {
      label: "Work mode",
      value: "Remote-ready",
      detail: "Experienced with async tools, AI workflows, and deployment.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-muted/70">
            {profile.role}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-brand-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-muted/85">
            {profile.summary}
          </p>
          <p className="mt-4 text-base text-brand-muted/75">
            {profile.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AnimatedButtonLink href="/projects">
              View Projects
            </AnimatedButtonLink>
            <AnimatedButtonLink href="/contact" variant="secondary">
              Contact Me
            </AnimatedButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl border-t border-brand-ink/10 px-5 py-12 sm:px-8">
        <h2 className="text-2xl font-semibold text-brand-ink">Highlights</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.value} {...stat} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 border-t border-brand-ink/10 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold text-brand-ink">
              Selected work
            </h2>
            <a
              href="/projects"
              className="text-sm font-semibold text-brand-muted underline-offset-4 hover:text-brand-ink hover:underline"
            >
              View all
            </a>
          </div>
          <div className="mt-6 grid gap-4">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="border border-brand-ink/10 bg-white p-5"
              >
                <p className="text-sm text-brand-muted/70">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-brand-ink">
                  {project.title}
                </h3>
                <p className="mt-2 leading-7 text-brand-muted/80">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-brand-ink">Core skills</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {featuredSkills.map((skill) => (
              <span
                key={skill}
                className="border border-brand-ink/10 px-3 py-2 text-sm font-medium text-brand-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
