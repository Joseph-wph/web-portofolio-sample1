'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageSquareText } from 'lucide-react';
import { CarouselControls } from '@/components/common/carousel-controls';
import { SectionHeading } from '@/components/common/section-heading';
import { useCarousel } from '@/hooks/use-carousel';
import { ASSETS } from '@/constants/assets';
import { FAQ_CONTENT } from '@/constants/content';
import { SECTION_IDS } from '@/constants/site';
import { cn } from '@/lib/utils';

export function Faq() {
  const { attach, canPrev, canNext, prev, next } = useCarousel();
  const [activeId, setActiveId] = useState<string>(FAQ_CONTENT.defaultActiveId);

  return (
    <section id={SECTION_IDS.faq} className='container-page py-16 lg:py-24'>
      <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
        <SectionHeading
          align='left'
          title={FAQ_CONTENT.title}
          description={FAQ_CONTENT.description}
        />
        <CarouselControls
          canPrev={canPrev}
          canNext={canNext}
          onPrev={prev}
          onNext={next}
        />
      </div>

      <div
        ref={attach}
        className='scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto lg:mt-14 lg:-mr-35 lg:gap-6'
      >
        {FAQ_CONTENT.items.map((item) => {
          const active = item.id === activeId;
          return (
            <button
              key={item.id}
              type='button'
              aria-expanded={active}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              className={cn(
                'flex min-h-75 w-[75%] shrink-0 snap-start flex-col justify-between border p-5 text-left transition-colors duration-300 sm:w-[44%] lg:w-70',
                active
                  ? 'border-primary-300 bg-primary-400'
                  : 'border-white/10 bg-surface'
              )}
            >
              <div className='flex items-start justify-between'>
                {active ? (
                  <Image
                    src={ASSETS.images.faq.avatar}
                    alt=''
                    width={40}
                    height={40}
                    className='size-10 rounded-full object-cover'
                  />
                ) : (
                  <span />
                )}
                <MessageSquareText
                  className='size-4 text-white/70'
                  aria-hidden
                />
              </div>

              <div>
                <h3 className='text-base leading-snug font-semibold'>
                  {item.question}
                </h3>
                {active && (
                  <p className='mt-3 text-xs leading-5 text-white/80'>
                    {item.answer}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
