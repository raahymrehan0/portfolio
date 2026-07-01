'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SlidingImages from '@/components/home/SlidingImages';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import { LetterCollision } from '@/components/animations/textAnimations/scrollText';
import Magnetic from '@/components/animations/magnetic';
import Hero from '@/components/home/hero';
import Description from '@/components/home/Description/description';
import { featuredProjects } from '@/lib/profileData';

const slider1 = [
  {
    color: '#07111f',
    src: 'projects/foresight-logo.png'
  },
  {
    color: '#fff7ed',
    src: 'projects/ifrc-vsr.png'
  },
  {
    color: '#082f49',
    src: 'projects/aidr-dashboard.svg'
  },
  {
    color: '#111827',
    src: 'projects/campnav-screenshot.jpeg'
  }
];
const slider2 = [
  {
    color: '#e0f2fe',
    src: 'profile.jpg'
  },
  {
    color: '#f8fafc',
    src: 'techstack/python-logo.png'
  },
  {
    color: '#f8fafc',
    src: 'techstack/azure-logo.png'
  },
  {
    color: '#f8fafc',
    src: 'techstack/typescript-logo.png'
  }
];

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(true);
  const scrollContainerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 0) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    // Custom smooth scroll to control duration (slower)
    const start = window.scrollY || window.pageYOffset;
    const rect = heroSection.getBoundingClientRect();
    const target = start + rect.top;
    const duration = 1800;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, Math.round(start + (target - start) * eased));
      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div ref={scrollContainerRef} className="overflow-x-hidden">
      <LetterCollision />
      {showScrollButton && (
        <Magnetic>
          <div
            className="fixed bottom-4 right-8 flex cursor-pointer items-center space-x-2 text-3xl font-semibold sm:bottom-8"
            onClick={scrollToHero}
          >
            <p>Scroll</p>

            <ArrowDownRight strokeWidth={3} className="size-6" />
          </div>
        </Magnetic>
      )}
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      <Description />
      <section className="mx-auto mt-28 max-w-7xl px-6 sm:px-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground/50">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-5xl">
              Four projects that explain my work best.
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-foreground underline underline-offset-4"
          >
            View all projects
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="group overflow-hidden rounded-lg border border-foreground/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] bg-foreground/5">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                    {project.kicker}
                  </p>
                  <span className="rounded-full border border-foreground/10 px-2 py-1 text-[11px] text-foreground/60">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/65">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SlidingImages slider1={slider1} slider2={slider2} />
      <ContrastCursor isActive={false} text={'Go to project'} />
    </div>
  );
}
