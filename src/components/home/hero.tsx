import React from 'react';
import { profile } from '@/lib/profileData';

const stack = profile.stack.slice(0, 8);

export default function Hero() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-foreground px-6 py-20 text-white">
      <div className="max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/70">
          {profile.role}
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
          {profile.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          {profile.summary}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
