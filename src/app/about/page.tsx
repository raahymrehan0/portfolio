import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import { education, experience, featuredProjects, profile } from '@/lib/profileData';

export const metadata = {
  title: 'About'
};

export default function About() {
  const wise = experience[0];

  return (
    <Layout
      title="About"
      subtitle="I build software, AI systems and data products with a bias toward real use."
    >
      <div className="mx-auto max-w-7xl space-y-20">
        <section className="mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/50">
                {profile.location}
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
                I am Raahym. I like building software that feels useful after the demo ends.
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/75">
                I am a third year Computer Science student at UCL. I work across full stack software, AI agents and data engineering.
              </p>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/75">
                At Wise, I work on quantitative FX risk and market data infrastructure. Outside that, I build tools that connect backend systems to clear user interfaces.
              </p>
            </div>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              <div className="rounded-lg border border-foreground/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/50">
                  Current work
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {wise.company}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {wise.summary}
                </p>
              </div>
              <div className="rounded-lg border border-foreground/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/50">
                  Best work
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {featuredProjects[0].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {featuredProjects[0].summary}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-white"
              >
                Selected projects
              </Link>
              <Link
                href="/experience"
                className="rounded-full border border-foreground/15 px-5 py-3 text-sm font-semibold text-foreground"
              >
                Experience
              </Link>
            </div>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-foreground/10 bg-white shadow-sm">
              <Image
                src="/images/about/main-station-raahym.png"
                alt="Raahym in front of Main Street Station at night"
                width={1024}
                height={1536}
                priority
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/50">
              Focus
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              The kind of work I keep returning to.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {profile.focus.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-foreground/10 bg-white p-5 text-lg font-medium text-foreground shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/50">
              Education
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              UCL robotics and technical depth.
            </h2>
          </div>
          <div className="space-y-4">
            {education.map((item) => (
              <article
                key={item.school}
                className="rounded-lg border border-foreground/10 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.school}
                  </h3>
                  <p className="text-sm font-medium text-foreground/55">
                    {item.date}
                  </p>
                </div>
                <p className="mt-2 font-medium text-foreground/75">
                  {item.detail}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm leading-relaxed text-foreground/65"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
