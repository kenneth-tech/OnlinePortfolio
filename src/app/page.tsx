import { CreativeIconCloud } from "../components/creative-icon-cloud";
import { AnimatedButtonLink } from "../components/animated-button-link";
import { StatCard } from "../components/stat-card";
import { profile, projects, type Project } from "../data/portfolio";
import { skillGroups } from "../data/skills";
import styles from "./home.module.css";

export function FeaturedProjectCard({ project }: { project?: Project }) {
  return (
    <article className="rounded-xl border border-brand-button/30 bg-white p-5 text-brand-ink shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
      <p className="text-sm font-semibold text-brand-card">
        Featured project
      </p>
      {project ? (
        <>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-ink">
            {project.title}
          </h3>
          <p className="mt-3 leading-7 text-brand-card/75">
            {project.description}
          </p>
        </>
      ) : (
        <>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-ink">
            Add your first project
          </h3>
          <p className="mt-3 leading-7 text-brand-card/75">
            Add a project in src/data/portfolio.ts to feature it here.
          </p>
        </>
      )}
    </article>
  );
}

export default function HomePage() {
  const featuredSkills = skillGroups
    .flatMap((group) => group.skills)
    .slice(0, 10);
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
    <div className="bg-transparent">
      <section className={`${styles.hero} relative overflow-hidden`}>
        <div className="relative mx-auto grid min-h-[calc(100svh-88px)] w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-24">
          <div className="motion-surface text-center sm:text-left">
            <p className="mx-auto w-fit rounded-full border border-brand-button/25 bg-brand-button/10 px-4 py-2 text-sm font-medium text-brand-soft sm:mx-0">
              {profile.role}
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:mx-0 sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <h2 className="mt-5 text-xl font-semibold text-brand-soft sm:text-2xl">
              Premium digital experiences
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-brand-muted sm:mx-0 sm:text-lg sm:leading-8">
              {profile.summary}
            </p>
            <p className="mt-4 text-base text-brand-muted">
              {profile.location}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-start">
              <AnimatedButtonLink href="/projects">
                View Projects
              </AnimatedButtonLink>
              <AnimatedButtonLink href="/contact" variant="secondary">
                Contact Me
              </AnimatedButtonLink>
            </div>
          </div>

          <aside className="motion-card rounded-2xl border border-brand-button/30 bg-white p-4 text-brand-ink shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:p-6">
            <div className="flex items-start justify-between gap-4 border-b border-brand-button/10 pb-5">
              <div>
                <p className="text-sm font-semibold text-brand-card">
                  Creative engineering
                </p>
                <h2 className="mt-2 text-xl font-semibold text-brand-ink sm:text-2xl">
                  Web, design, and multimedia in one workflow.
                </h2>
              </div>
              <span className="h-10 w-10 shrink-0 rounded-full border border-brand-button/30 bg-brand-button/10 shadow-[0_0_30px_rgba(127,255,212,0.22)]" />
            </div>
            <CreativeIconCloud />
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl border-t border-brand-button/10 px-4 py-10 sm:px-8 sm:py-12">
        <h2 className="text-2xl font-semibold text-white">Highlights</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.value} {...stat} />
          ))}
        </div>
      </section>

      <section
        aria-label="Selected work and core skills"
        className="mx-auto w-full max-w-6xl space-y-8 border-t border-brand-button/10 px-4 py-10 sm:px-8 sm:py-12"
      >
        <div className="min-w-0">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-white">Selected work</h2>
            <a
              href="/projects"
              className="text-sm font-semibold text-brand-button underline-offset-4 hover:text-brand-soft hover:underline"
            >
              View all
            </a>
          </div>
          <div
            aria-label="Selected work previews"
            className="mt-6 grid gap-5 lg:grid-cols-3"
          >
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="motion-card flex min-h-[220px] flex-col rounded-xl border border-brand-button/30 bg-white p-5 text-brand-ink transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-button/60 hover:shadow-[0_18px_70px_rgba(127,255,212,0.10)]"
              >
                <p className="text-sm font-medium text-brand-card">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-brand-ink">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-brand-card/75">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside className="motion-card rounded-2xl border border-brand-button/30 bg-white p-5 text-brand-ink shadow-[0_24px_90px_rgba(0,0,0,0.22)] sm:p-6">
          <h2 className="text-2xl font-semibold text-brand-ink">Core skills</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {featuredSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-brand-button/25 bg-white px-3 py-2 text-sm font-medium text-brand-card shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
