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
      subtitle="Selected projects that showcase my work"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        <section className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group flex min-h-[520px] flex-col overflow-hidden rounded-lg border border-foreground/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="relative h-44 bg-foreground/5 sm:h-52"
                style={{ backgroundColor: project.colour }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-6 p-5 sm:p-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">
                      {project.kicker}
                    </p>
                    {project.label && (
                      <span className="rounded-full border border-foreground/10 px-3 py-1 text-xs font-medium text-foreground/50">
                        {project.label}
                      </span>
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                      {project.summary}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/65">
                    {project.description}
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/65">
                    {project.contribution}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-2.5 py-1 text-[11px] font-medium text-foreground/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex min-h-10 items-center justify-center gap-4 border-t border-foreground/10 pt-4">
                    {project.href ? (
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-foreground underline underline-offset-4"
                      >
                        Public report
                      </Link>
                    ) : project.label ? (
                      <span className="text-sm font-medium text-foreground/55">
                        {project.label}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="border-t border-foreground/10 pt-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/50">
                More projects
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                Smaller public repos and experiments.
              </h2>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {smallerProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-foreground/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold leading-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-foreground/[0.04] px-2.5 py-1 text-[11px] font-medium text-foreground/60"
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
