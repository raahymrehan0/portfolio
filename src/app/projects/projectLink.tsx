'use client';
import React, { useContext } from 'react';
import { ModalContext } from '@/app/projects/modalContext';

interface Props {
  index: number;
  title: string;
  tag: string;
  description?: string;
}

export default function ProjectLink({ index, title, tag, description }: Props) {
  const { setModal } = useContext(ModalContext);

  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="align-center flex w-full cursor-pointer flex-col gap-3 border-b border-b-gray-600 px-5 py-10 transition-all duration-200 hover:opacity-50 sm:flex-row sm:items-end sm:justify-between"
    >
      <div className="max-w-3xl">
        <h2 className="m-0 text-xl font-normal transition-all duration-300 hover:translate-x-[-10px] lg:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm font-light text-foreground/70 transition-all duration-300 hover:translate-x-[4px]">
            {description}
          </p>
        )}
      </div>
      <p className="text-sm font-light transition-all duration-300 hover:translate-x-[10px]">
        {tag}
      </p>
    </div>
  );
}
