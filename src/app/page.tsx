import Image from "next/image";

import { AnimatedButtonLink } from "../components/animated-button-link";
import { StatCard } from "../components/stat-card";
import { ProjectSlideshow } from "../components/project-slideshow";
import { experiences, profile, projects, type Project } from "../data/portfolio";
import { skillGroups } from "../data/skills";
import { SkillIcon } from "../data/skills/skill-icons";
import styles from "./home.module.css";

export function FeaturedProjectCard({ project }: { project?: Project }) {
  return (
    <article className="glass-panel rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm">
      <p className="text-sm font-semibold text-brand-button">
        Featured project
      </p>
      {project ? (
        <>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-ink">
            {project.title}
          </h3>
          <p className="mt-3 leading-7 text-brand-muted">
            {project.description}
          </p>
          <p className="mt-4 text-sm font-semibold text-brand-ink">Outcome</p>
          <p className="mt-1 text-sm leading-6 text-brand-muted">
            {project.impact}
          </p>
        </>
      ) : (
        <>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-ink">
            Add your first project
          </h3>
          <p className="mt-3 leading-7 text-brand-muted">
            Add a project in src/data/portfolio.ts to feature it here.
          </p>
        </>
      )}
    </article>
  );
}

const serviceProof = [
  "Responsive websites and landing pages",
  "Conversion-focused project structure",
  "UI/UX, multimedia, and marketing support",
  "Remote collaboration with modern tools",
] as const;

export default function HomePage() {
  const featuredSkills = skillGroups
    .flatMap((group) => group.skills)
    .slice(0, 14);
  const recentExperience = experiences.slice(0, 2);
  const stats = [
    {
      label: "Experience",
      value: "4+ Years",
      detail: "Web, multimedia, digital marketing, and support operations.",
    },
    {
      label: "Portfolio",
      value: "6 Live Projects",
      detail: "Public websites across service, ecommerce, agency, and platform work.",
    },
    {
      label: "Work Style",
      value: "Remote-ready",
      detail: "Comfortable with async tools, AI-assisted development, and Vercel.",
    },
  ];

  return (
    <div className="bg-transparent">
      <section
        className={`${styles.hero} mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10`}
      >
        <div className="motion-surface">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-brand-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-brand-ink">
            {profile.role}
          </p>
          <p className="mt-2 text-base text-brand-muted">{profile.location}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-brand-muted sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <AnimatedButtonLink href="/projects">
              View Project Proof
            </AnimatedButtonLink>
            <AnimatedButtonLink
              href={`mailto:${profile.email}`}
              variant="secondary"
            >
              Email Mark
            </AnimatedButtonLink>
          </div>
        </div>

        <section
          aria-label="Animated identity motion graphic"
          className="glass-panel motion-card overflow-hidden rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6"
        >
          <div
            className={`${styles.heroImageWrap} ${styles.motionStage} relative mx-auto max-w-md rounded-lg`}
          >
            <Image
              alt="Purple isometric programming laptop illustration"
              className={styles.heroImage}
              height={4500}
              priority
              sizes="(min-width: 1024px) 448px, calc(100vw - 56px)"
              src="/images/971.jpg"
              width={6000}
            />
          </div>
        </section>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.value} {...stat} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-4 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-button">
              Project Proof
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-ink">
              Showcase work clients can open and inspect.
            </h2>
          </div>
          <a
            href="/projects"
            className="text-sm font-semibold text-brand-button underline-offset-4 hover:underline"
          >
            View all projects
          </a>
        </div>

        <ProjectSlideshow count={projects.length}>
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-panel flex flex-col rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm"
            >
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(min-width: 1600px) 327px, (min-width: 1024px) calc((100vw - 292px) / 4), (min-width: 640px) calc((100vw - 168px) / 2), calc(100vw - 74px)"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-brand-button">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-brand-ink">
                    {project.title}
                  </h3>
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
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title} website`}
                className="mt-auto inline-flex min-h-11 items-center pt-5 text-sm font-semibold text-brand-button underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-brand-button"
              >
                Visit site <span aria-hidden="true" className="ml-2">↗</span>
              </a>
            </article>
          ))}
        </ProjectSlideshow>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 sm:px-8 sm:py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="glass-panel motion-card rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6">
          <p className="text-sm font-semibold text-brand-button">
            Core Competencies
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {featuredSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-brand-muted"
              >
                <SkillIcon skill={skill} />
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="glass-panel motion-card rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm sm:p-6">
          <p className="text-sm font-semibold text-brand-button">
            Recent Experience
          </p>
          <div className="mt-5 grid gap-5">
            {recentExperience.map((experience) => (
              <article key={`${experience.role}-${experience.organization}`}>
                <h3 className="font-semibold text-brand-ink">
                  {experience.role} at {experience.organization}
                </h3>
                <p className="mt-1 text-sm text-brand-muted">
                  {experience.organization} | {experience.period}
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  {experience.highlights[0]}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="glass-panel rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold text-brand-button">
            Service Fit
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-brand-muted sm:grid-cols-2">
            {serviceProof.map((item) => (
              <li key={item} className="leading-6">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
