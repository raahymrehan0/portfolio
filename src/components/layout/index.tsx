import React, { PropsWithChildren } from 'react';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import { clsx } from 'clsx';

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function Layout({
  children,
  title,
  subtitle,
  center
}: PropsWithChildren<Props>) {
  return (
    <div className="mt-28 px-6 py-14 sm:mt-36 sm:px-8 sm:py-20">
      <div className={clsx('max-w-7xl pb-16', center ? 'mx-auto text-center' : '')}>
        <h1
          className={clsx(
            'max-w-full break-words text-5xl font-medium leading-[0.95] tracking-normal sm:text-7xl lg:text-[clamp(5rem,12vw,10rem)]',
            center ? 'items-center' : ''
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={clsx(
              'mt-6 max-w-3xl text-base leading-relaxed text-foreground/70 sm:text-xl lg:mt-8 lg:text-2xl',
              center ? 'mx-auto' : ''
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {children}
      <ContrastCursor isActive={false} text={''} />
    </div>
  );
}
