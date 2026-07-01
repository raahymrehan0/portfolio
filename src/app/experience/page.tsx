import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import { experience } from '@/lib/profileData';

export const metadata = {
  title: 'Experience'
};

const companyLogos: Record<string, { src: string; alt: string }> = {
  Wise: {
    src: '/images/logos/wise.jpeg',
    alt: 'Wise logo'
  },
  Computime: {
    src: '/images/logos/computime.jpeg',
    alt: 'Computime logo'
  }
};

export default function ExperiencePage() {
  return (
    <Layout
      title="Experience"
      subtitle="Jobs and applied engineering work. Projects live separately."
    >
      <div className="mx-auto max-w-6xl space-y-6">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="grid gap-6 rounded-lg border border-foreground/10 bg-white p-6 shadow-sm md:grid-cols-[0.85fr_1.15fr]"
          >
            <div>
              {companyLogos[item.company] && (
                <div className="mb-5 flex h-14 w-24 items-center justify-center overflow-hidden rounded-md border border-foreground/10 bg-white p-2">
                  <Image
                    src={companyLogos[item.company].src}
                    alt={companyLogos[item.company].alt}
                    width={160}
                    height={80}
                    className="h-full w-full object-contain"
                    sizes="96px"
                  />
                </div>
              )}
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/50">
                {item.date}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                {item.company}
              </h2>
              <p className="mt-2 text-base font-medium text-foreground/75">
                {item.role}
              </p>
              <p className="mt-1 text-sm text-foreground/55">{item.team}</p>
              <p className="mt-1 text-sm text-foreground/55">
                {item.location}
              </p>
              {item.href && (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-foreground underline underline-offset-4"
                >
                  Public project report
                </Link>
              )}
            </div>
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-foreground/80">
                {item.summary}
              </p>
              <ul className="space-y-3">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="border-l-2 border-foreground/20 pl-4 text-sm leading-relaxed text-foreground/70"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-xs font-medium text-foreground/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}
