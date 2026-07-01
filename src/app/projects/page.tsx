import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import { featuredProjects, smallerProjects } from '@/lib/profileData';

export const metadata = {
  title: 'Projects'
};

export default function ProjectsHome() {
  return (
    <Layout
      title="Projects"
      subtitle="Flagship case studies first. Smaller public repos sit below them."
    >
      <div className="mx-auto max-w-7xl space-y-20">
        <section className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="grid overflow-hidden rounded-lg border border-foreground/10 bg-white shadow-sm lg:grid-cols-[1fr_1.08fr]"
            >
              <div
                className="relative min-h-[280px] bg-foreground/5"
                style={{ backgroundColor: project.colour }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-contain p-6"
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/50">
                      {project.kicker}
                    </span>
                    <span className="rounded-full border border-foreground/10 px-3 py-1 text-xs font-medium text-foreground/60">
                      {project.status}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold text-foreground sm:text-5xl">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-foreground/75">
                      {project.summary}
                    </p>
                  </div>
                  <p className="leading-relaxed text-foreground/70">
                    {project.description}
                  </p>
                  <p className="leading-relaxed text-foreground/70">
                    {project.contribution}
                  </p>
                </div>
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-xs font-medium text-foreground/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.href ? (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-sm font-semibold text-foreground underline underline-offset-4"
                    >
                      Read public report
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-foreground/55">
                      Private source. Public case study only.
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/50">
              More projects
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-4xl">
              Smaller public repos and experiments.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {smallerProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-foreground/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-foreground/[0.04] px-3 py-1 text-xs font-medium text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
