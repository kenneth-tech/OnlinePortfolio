import Link from "next/link";

import { profile, projects, skillGroups, type Project } from "../data/portfolio";

export function FeaturedProjectCard({ project }: { project?: Project }) {
  return (
    <div className="rounded border border-brand-muted/20 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
        Featured project
      </p>
      {project ? (
        <>
          <h2 className="mt-3 text-2xl font-semibold text-brand-ink">
            {project.title}
          </h2>
          <p className="mt-3 leading-7 text-brand-muted">
            {project.description}
          </p>
        </>
      ) : (
        <>
          <h2 className="mt-3 text-2xl font-semibold text-brand-ink">
            Add your first project
          </h2>
          <p className="mt-3 leading-7 text-brand-muted">
            Add a project in src/data/portfolio.ts to feature it here.
          </p>
        </>
      )}
    </div>
  );
}

export default function HomePage() {
  const featuredSkills = skillGroups.flatMap((group) => group.skills).slice(0, 8);
  const featuredProject = projects.at(0);

  return (
    <div className="bg-brand-surface/45">
      <section className="mx-auto grid min-h-[calc(100vh-168px)] w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {profile.role}
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-brand-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded bg-brand-accent px-5 py-3 text-sm font-semibold text-brand-ink outline-none transition hover:bg-brand-surface focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded border border-brand-muted/30 px-5 py-3 text-sm font-semibold text-brand-ink outline-none transition hover:border-brand-accent hover:bg-brand-surface focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <FeaturedProjectCard project={featuredProject} />
          <div className="rounded border border-brand-muted/20 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
              Core skills
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featuredSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-brand-accent/35 bg-brand-surface px-3 py-1 text-sm font-medium text-brand-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
