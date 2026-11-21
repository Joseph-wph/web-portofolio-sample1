'use client';

import Image from 'next/image';
import { Briefcase } from 'lucide-react';
import {
  CarouselControls,
  CarouselProgress,
} from '@/components/common/carousel-controls';
import { SectionHeading } from '@/components/common/section-heading';
import { useCarousel } from '@/hooks/use-carousel';
import { JOURNEY } from '@/constants/content';

export function Journey() {
  const { attach, canPrev, canNext, progress, ratio, prev, next } =
    useCarousel();

  return (
    <section className='container-page py-16 lg:py-24'>
      <SectionHeading
        align='left'
        title={JOURNEY.title}
        description={JOURNEY.description}
      />

      <div
        ref={attach}
        className='scrollbar-none mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto lg:-mr-35'
      >
        {JOURNEY.items.map((item) => (
          <article
            key={item.company}
            className='flex w-[85%] shrink-0 snap-start flex-col border border-white/20 bg-black px-3 py-4 sm:w-[60%] lg:w-[42%]'
          >
            {/* header: teal accent + title/period + icon, divider below */}
            <header className='flex items-start justify-between border-b border-white/15 pb-3'>
              <div className='relative'>
                <span
                  aria-hidden
                  className='absolute top-0 -left-3.25 h-full w-0.75 bg-primary-300'
                />
                <h3 className='text-sm font-semibold'>{item.role}</h3>
                <p className='mt-2 text-xs text-white/70'>{item.period}</p>
              </div>
              <Briefcase className='size-4 text-white/80' aria-hidden />
            </header>

            <p className='mt-4 text-xs leading-6 text-white/60'>
              {item.description}
            </p>

            <Image
              src={item.logo}
              alt={item.company}
              width={96}
              height={28}
              className='mt-6 h-7 w-auto self-start'
            />
          </article>
        ))}
      </div>

      <div className='mt-7 lg:mr-0'>
        <CarouselProgress progress={progress} ratio={ratio} />
      </div>

      <div className='mt-8'>
        <CarouselControls
          canPrev={canPrev}
          canNext={canNext}
          onPrev={prev}
          onNext={next}
        />
      </div>
    </section>
  );
}
