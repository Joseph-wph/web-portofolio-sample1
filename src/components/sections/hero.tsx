import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanyardBadge } from '@/components/sections/lanyard-badge';
import { SECTION_IDS, SITE } from '@/constants/site';

export function Hero() {
  return (
    <section id={SECTION_IDS.top} className='relative overflow-hidden'>
      <div
        className='bg-hero-glow pointer-events-none absolute inset-0'
        aria-hidden
      />
      <div
        className='bg-grid pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom_right,black,transparent_70%)]'
        aria-hidden
      />

      <div className='container-page relative grid items-center gap-10 pt-28 pb-12 lg:min-h-225 lg:grid-cols-2 lg:pt-24 lg:pb-0'>
        <div className='order-2 lg:order-1'>
          <p className='text-[16px] text-white/70 lg:text-[20px]'>
            Hi. I&apos;m {SITE.fullName}
          </p>
          <h1 className='mt-4 text-[56px] leading-[0.95] font-bold tracking-tight lg:text-[96px]'>
            FRONT<span className='font-display font-normal italic'>END</span>
            <br />
            DEVELOPER
          </h1>
          <p className='mt-6 max-w-130 text-sm leading-7 text-white/60 lg:mt-8 lg:text-[18px]'>
            Passionate about frontend development, I focus on crafting digital
            products that are visually polished, performance-optimized, and
            deliver a consistent experience across all platforms.
          </p>
          <Button
            asChild
            variant='dark'
            size='lg'
            className='mt-8 w-full lg:mt-12 lg:w-71.75'
          >
            <a href={`#${SECTION_IDS.contact}`}>
              <Mail />
              Hire Me
            </a>
          </Button>
        </div>

        <div className='order-1 lg:order-2'>
          <LanyardBadge />
        </div>
      </div>
    </section>
  );
}
