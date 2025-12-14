import React, { useRef, useEffect, useState } from 'react';

const icons = [
  '/images/techstack/aws-logo.png',
  '/images/techstack/azure-logo.png',
  '/images/techstack/docker-logo.png',
  '/images/techstack/git-logo.png',
  '/images/techstack/java-logo.png',
  '/images/techstack/postgres-logo.png',
  '/images/techstack/python-logo.png',
  '/images/techstack/react-logo.png',
  '/images/techstack/typescript-logo.png',
];

const size = 880; // overall wheel size (px) — much bigger
const radius = 320; // orbit radius (px) — larger orbit to match size

export default function TechStackOrbit() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [rotation, setRotation] = useState(0);
  const [displayRotation, setDisplayRotation] = useState(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      if (!wheelRef.current) return;
      const scrollDelta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      setRotation(prev => prev + scrollDelta * 0.06);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoothly interpolate displayed rotation toward actual rotation
  useEffect(() => {
    let raf = 0;
    const step = () => {
      setDisplayRotation(prev => {
        const diff = rotation - prev;
        const next = prev + diff * 0.12; // smoothing factor
        return Math.abs(diff) < 0.01 ? rotation : next;
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [rotation]);

  return (
    <div className="relative flex h-[520px] w-[520px] items-center justify-center mx-auto">
      
      {/* Orbiting icons + paths (SVG inside wheel so lines rotate with icons) */}
      <div
        ref={wheelRef}
        style={{
          transform: `translate(-50%, -50%) rotate(${displayRotation}deg)`,
          left: '50%',
          top: '50%',
          position: 'absolute',
          height: `${size}px`,
          width: `${size}px`,
          transition: 'transform 0.18s cubic-bezier(.22,.9,.32,1)',
          zIndex: 2
        }}
        className={`absolute left-1/2 top-1/2 h-[${size}px] w-[${size}px] -translate-x-1/2 -translate-y-1/2`}
      >
        {/* lines are rendered inside the rotating wheel container so they move with icons */}
        <svg width={size} height={size} className="absolute left-0 top-0">
          {icons.map((_, i) => {
            const angle = (2 * Math.PI * i) / icons.length;
            const center = size / 2;
            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;
            // perpendicular vector for control points
            const perpX = -Math.sin(angle);
            const perpY = Math.cos(angle);
            const amp = 40; // curve amplitude
            // two control points to make an S-like curve
            const c1x = center + Math.cos(angle) * (radius * 0.25) + perpX * amp;
            const c1y = center + Math.sin(angle) * (radius * 0.25) + perpY * amp;
            const c2x = center + Math.cos(angle) * (radius * 0.75) - perpX * amp;
            const c2y = center + Math.sin(angle) * (radius * 0.75) - perpY * amp;
            return (
              <path
                key={i}
                d={`M ${center} ${center} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x} ${y}`}
                stroke="#00BFFF"
                strokeWidth="0.8"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />
            );
          })}
        </svg>

        {icons.map((src, i) => {
          const angle = (2 * Math.PI * i) / icons.length;
          const center = size / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <img
              key={i}
              src={src}
              alt="tech icon"
              className="absolute object-contain shadow-md transition-transform duration-700 ease-out hover:scale-110"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                width: i === 4 ? '160px' : '128px',
                height: i === 4 ? '160px' : '128px',
                transform: `translate(-50%, -50%) rotate(${ -displayRotation }deg)`
              }}
            />
          );
        })}
      </div>
      {/* Center circle */}
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200 shadow-lg z-10 flex items-center justify-center text-xl font-bold">
        Tech Stack
      </div>
    </div>
  );
}