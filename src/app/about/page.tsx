'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSpotify } from '@/hooks/useSpotify';
import { useGitHub } from '@/hooks/useGithub';
import Layout from '@/components/layout';
import AnimatedSection from '@/components/about/AnimatedSection';
import TextReveal from '@/components/about/TextReveal';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import SpotifyPlaylists from '@/app/about/spotifyPlaylists';
import RoundedButton from '@/components/animations/roundedButton';
import OpenSourceShowcase from '@/components/about/OpenSourceShowcase';
import CompactGitHubWidget from '@/components/about/Widgets/CompactGitHubWidget';
import IMessageWidget from '@/components/about/Widgets/IMessageWidget';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';

export default function About() {
  const {
    playlists,
    isLoading: spotifyLoading,
    error: spotifyError
  } = useSpotify();

  const { githubData, isLoading: githubLoading, error: githubError } = useGitHub();

  return (
    <div className="relative overflow-hidden">
      <Layout
        title="About Me"
        subtitle="Software engineer, builder, and design-minded problem solver."
      >
        <div className="space-y-16">
          <section className="grid gap-8 py-8 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <AnimatedSection animation="fade-right" className="lg:self-start">
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
                <Image
                  src="/images/profile2.jpg"
                  alt="Raahym Rehan"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection animation="fade-up">
                <TextReveal
                  text="I’m Raahym — a software engineer who likes building polished products at the intersection of code, design, and product thinking."
                  className="text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl"
                  as="p"
                  highlightWords={['design', 'product']}
                  scrub={false}
                />
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    What I do
                  </h3>
                  <p className="leading-relaxed text-foreground/70">
                    I enjoy turning ambitious ideas into useful digital products,
                    from front-end experiences to full-stack systems and AI-powered
                    tools.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Where I’ve been
                  </h3>
                  <p className="leading-relaxed text-foreground/70">
                    My work has spanned startups, product teams, and experimental
                    builds that combine engineering rigour with thoughtful user
                    experience.
                  </p>
                </div>
              </AnimatedSection>

              {!githubLoading && !githubError && githubData && (
                <AnimatedSection animation="fade-up" delay={0.3}>
                  <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-5">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
                      GitHub activity
                    </p>
                    <p className="mt-2 text-foreground/80">
                      {githubData.totalContributions} contributions in the last
                      year.
                    </p>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </section>

          <section className="py-4">
            <AnimatedSection animation="fade-up">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  Where I&apos;ve been
                </h2>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="min-w-0 lg:col-span-1">
                  <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                    <JourneyTimeline />
                  </div>

                  <section className="py-16">
                    <AnimatedSection animation="fade-up">
                      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
                          Education & recognition
                        </h2>
                        <p className="mb-6 text-foreground/70">
                          I have built products across creative, technical, and
                          startup environments, with a focus on clarity, craft,
                          and strong execution.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Link href="/projects/m31">
                            <RoundedButton>Selected work</RoundedButton>
                          </Link>
                          <Link href="/projects/axo">
                            <RoundedButton>More projects</RoundedButton>
                          </Link>
                        </div>
                      </div>
                    </AnimatedSection>
                  </section>
                </div>

                <div className="min-w-0 lg:col-span-1">
                  <div className="space-y-4 lg:sticky lg:top-32">
                    <AnimatedSection animation="fade-up">
                      <CompactGitHubWidget />
                    </AnimatedSection>
                    <AnimatedSection animation="fade-up">
                      <OpenSourceShowcase />
                    </AnimatedSection>
                    <AnimatedSection animation="fade-up">
                      <IMessageWidget />
                    </AnimatedSection>
                    {!spotifyLoading && !spotifyError && playlists.length > 0 && (
                      <AnimatedSection animation="fade-up">
                        <SpotifyPlaylists playlists={playlists} />
                      </AnimatedSection>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </div>
      </Layout>

      <ContrastCursor isActive={false} text="" />
    </div>
  );
}
