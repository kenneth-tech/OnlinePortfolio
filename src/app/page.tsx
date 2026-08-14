import Link from "next/link";

import { StatCard } from "../components/stat-card";
import { profile, projects, skillGroups, type Project } from "../data/portfolio";

export function FeaturedProjectCard({ project }: { project?: Project }) {
  return (
    <div className="border border-brand-ink/15 bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-muted/65">
        Featured project
      </p>
      {project ? (
        <>
          <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-brand-ink">
            {project.title}
          </h2>
          <p className="mt-3 leading-7 text-brand-muted/80">
            {project.description}
          </p>
        </>
      ) : (
        <>
          <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-brand-ink">
            Add your first project
          </h2>
          <p className="mt-3 leading-7 text-brand-muted/80">
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
      <section className="mx-auto grid min-h-[calc(100vh-168px)] w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="border border-brand-ink/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-brand-ink">
              {profile.role}
            </span>
            <span className="border border-brand-ink/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-brand-ink">
              {profile.location}
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-none tracking-normal text-brand-ink sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted/85">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded bg-brand-button px-5 py-3 text-sm font-semibold text-brand-ink outline-none transition hover:bg-brand-button/80 focus-visible:ring-2 focus-visible:ring-brand-button focus-visible:ring-offset-4"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded border border-brand-muted/30 px-5 py-3 text-sm font-semibold text-brand-ink outline-none transition hover:border-brand-muted hover:bg-brand-muted/10 focus-visible:ring-2 focus-visible:ring-brand-muted focus-visible:ring-offset-4"
            >
              Contact Me
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <StatCard key={stat.value} {...stat} />
            ))}
          </div>
        </div>

        <aside className="border border-brand-ink bg-brand-ink p-3 text-white shadow-xl">
          <div className="border border-white/15 p-5">
            <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/65">
                Portfolio console
              </p>
              <span className="h-2 w-2 rounded-full bg-brand-button" />
            </div>
            <div className="mt-5 grid gap-4">
              <FeaturedProjectCard project={featuredProject} />
              <div className="border border-white/15 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-muted/65">
                  Core skills
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredSkills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-brand-ink/15 bg-brand-muted/10 px-3 py-1 text-sm font-semibold text-brand-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border border-white/15 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/65">
                  Contact signal
                </p>
                <p className="mt-3 break-words text-sm font-semibold text-white">
                  {profile.email}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
