import Link from "next/link";

import { profile, projects, skillGroups, type Project } from "../data/portfolio";

export function FeaturedProjectCard({ project }: { project?: Project }) {
  return (
    <div className="rounded border border-stone-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
        Featured project
      </p>
      {project ? (
        <>
          <h2 className="mt-3 text-2xl font-semibold text-stone-950">
            {project.title}
          </h2>
          <p className="mt-3 leading-7 text-stone-700">
            {project.description}
          </p>
        </>
      ) : (
        <>
          <h2 className="mt-3 text-2xl font-semibold text-stone-950">
            Add your first project
          </h2>
          <p className="mt-3 leading-7 text-stone-700">
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
    <div className="bg-stone-50">
      <section className="mx-auto grid min-h-[calc(100vh-168px)] w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            {profile.role}
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-stone-950 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded bg-teal-700 px-5 py-3 text-sm font-semibold text-white outline-none transition hover:bg-teal-800 focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-4"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-950 outline-none transition hover:border-amber-500 hover:bg-amber-50 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <FeaturedProjectCard project={featuredProject} />
          <div className="rounded border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Core skills
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featuredSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-teal-100 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-900"
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
