'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  highlight?: boolean;
}

const journeyData: TimelineItem[] = [
  {
    year: 'Now',
    title: 'Third year CS student and builder',
    company: 'UCL',
    description:
      'I am entering my third year at UCL and building AI, data and software products with an interest in finance and market data. My work has connected research, product delivery and practical engineering.',
    highlight: true
  },
  {
    year: '2026',
    title: 'Software Engineering Intern',
    company: 'Wise',
    description:
      'I worked on FX risk and market data infrastructure in Java and Python. My work supported real time monitoring, pricing workflows and quantitative analysis for currency exposure across the business.'
  },
  {
    year: '2025',
    title: 'AI and Data Engineer',
    company: 'Microsoft and IFRC',
    description:
      'I built a full stack humanitarian intelligence platform with Django, React and LangGraph. The work combined live crisis data, AI analysis and structured reporting for responders.'
  },
  {
    year: '2025',
    title: 'AI Research and Engineering Intern',
    company: 'Computime',
    description:
      'I developed forecasting and IoT workflows for a smart home energy system. I used scikit-learn, time series data and APIs to improve energy saving decisions.'
  },
  {
    year: '2025',
    title: 'Web Developer',
    company: 'UCL Entrepreneurs',
    description:
      'I helped maintain the society website for over 250 monthly visitors. I focused on responsive design, SEO and better audience engagement.'
  },
  {
    year: '2024',
    title: 'BSc Computer Science',
    company: 'UCL',
    description: 'I started my degree at UCL with a minor in Robotics. My studies have covered machine learning, algorithms, software engineering and computer architecture.'
  }
];

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const items = itemsRef.current;
    if (!items.length) return;

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          delay: i * 0.05
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="space-y-1">
        {journeyData.map((item, i) => {
          const isLastItem = i === journeyData.length - 1;

          return (
            <div
              key={i}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              className="group relative"
            >
              {/* Timeline item - clean horizontal layout */}
              <div
                className={`grid py-4 sm:grid-cols-[60px_1fr] sm:gap-4 sm:py-6 ${
                  isLastItem ? '' : 'border-b border-foreground/10'
                }`}
              >
                {/* Year */}
                <div className="items-start px-2">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                      item.highlight
                        ? 'bg-primary/10 text-primary'
                        : 'bg-foreground/5 text-foreground/60'
                    }`}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      {item.title}
                    </h3>
                    {item.companyUrl ? (
                      <Link
                        href={item.companyUrl}
                        className="text-sm font-medium text-primary transition-colors hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{item.company} ↗
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-foreground/50">
                        @{item.company}
                      </span>
                    )}
                  </div>
                  <p className="max-w-2xl text-foreground/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
