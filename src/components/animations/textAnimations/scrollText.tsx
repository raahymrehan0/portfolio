import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const raahym = 'Raahym ';
const rehan = 'Rehan';
const sentence3 = 'UCL';

function getRandomSpeed() {
  const randomDecimal = Math.random();
  return 0.8 + randomDecimal * (1.5 - 0.8); // Increased speed range
}
function getRandomRotation() {
  return Math.random() * 60 - 30; // Random rotation between -30 and 30 degrees
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>, upOnly = false) => {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll('.letter');

  letterElements.forEach((letter: Element, index: number) => {
    gsap.to(letter, {
      y: (i, el) => {
        const base = (1 - parseFloat(el.getAttribute('data-speed')))
          * ScrollTrigger.maxScroll(window);
        return upOnly ? -Math.abs(base) : base;
      },
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        invalidateOnRefresh: true,
        scrub: 0.5
      },
      rotation: getRandomRotation()
    });
  });
};

function LetterDisplay({ word, upOnly = false }: { word: string, upOnly?: boolean }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    animateLettersOnScroll({ current: containerRef.current }, upOnly);
  }, [upOnly]);
  return (
    <div ref={containerRef} style={{ display: 'flex' }}>
      {word.split('').map((letter, index) => (
        <div
          key={index}
          className="letter text-6xl font-semibold xs:text-[90px] xs:leading-none md:text-[120px] lg:text-[150px] xl:text-[210px] "
          data-speed={getRandomSpeed()}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export function LetterCollision() {
  return (
    <div className="ml-8 scroll-smooth">
      <div className="-mt-28 mb-36 flex h-screen flex-col justify-end lg:mb-24">
        <div className="flex flex-wrap p-0">
          <LetterDisplay word={raahym} />
          <LetterDisplay word={rehan} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <LetterDisplay word={sentence3} upOnly />
      </div>
    </div>
  );
}
