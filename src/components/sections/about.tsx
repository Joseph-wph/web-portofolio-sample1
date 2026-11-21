import Image from 'next/image';
import { Reveal } from '@/components/common/reveal';
import { SocialLinks } from '@/components/common/social-links';
import { ABOUT, FEATURES } from '@/constants/content';
import { ASSETS } from '@/constants/assets';
import { SECTION_IDS, SITE } from '@/constants/site';

export function About() {
  return (
    <section id={SECTION_IDS.about} className='container-page py-16 lg:py-24'>
      <div className='grid gap-6 lg:grid-cols-12 lg:gap-y-0'>
        <p className='text-[18px] text-white/70 lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:text-right'>
          {ABOUT.label}
        </p>

        <Reveal className='lg:col-span-9 lg:row-span-2 lg:row-start-1'>
          <h2 className='text-[32px] leading-snug font-semibold tracking-tight lg:text-[40px] lg:leading-tight'>
            {ABOUT.headline}{' '}
            <span className='text-primary-300'>{ABOUT.highlight}</span>
          </h2>
        </Reveal>

        <SocialLinks className='lg:col-span-3 lg:col-start-10 lg:row-start-2 lg:justify-end lg:self-end' />
      </div>

      <div className='mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12'>
        <Reveal className='lg:col-span-5'>
          <div className='relative aspect-[4/3.6] overflow-hidden lg:aspect-[4/4.2]'>
            <Image
              src={ASSETS.images.about.photo}
              alt={`${SITE.fullName} working on a laptop`}
              fill
              sizes='(min-width: 1024px) 40vw, 100vw'
              className='object-cover'
            />
          </div>
        </Reveal>

        <ul className='grid content-center gap-8 sm:grid-cols-2 lg:col-span-7 lg:gap-x-12 lg:gap-y-10'>
          {FEATURES.map(({ title, description, icon: Icon }, index) => (
            <li key={title}>
              <Reveal delay={index * 0.08}>
                <Icon className='size-5 text-primary-300' />
                <h3 className='mt-3 text-sm font-semibold'>{title}</h3>
                <p className='mt-2 text-xs leading-5 text-white/60'>
                  {description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
