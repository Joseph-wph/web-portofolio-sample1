'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SECTION_IDS, SITE } from '@/constants/site';

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (event: KeyboardEvent) =>
      event.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className='fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:pt-8'>
      <div className='mx-auto flex max-w-360 lg:justify-center'>
        <nav
          aria-label='Main'
          className='flex h-16 w-full items-center justify-between rounded-2xl bg-black/50 px-4 backdrop-blur-md lg:h-14 lg:w-auto lg:gap-12 lg:rounded-full lg:px-6'
        >
          <a
            href={`#${SECTION_IDS.top}`}
            className='text-xl font-bold tracking-tight'
          >
            {SITE.name}
          </a>

          <ul className='hidden items-center gap-10 text-[16px] text-white/80 lg:flex'>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className='transition-colors hover:text-primary-100'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type='button'
            className='lg:hidden'
            aria-label='Open menu'
            aria-expanded={open}
            aria-controls='mobile-menu'
            onClick={() => setOpen(true)}
          >
            <Menu className='size-6' />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id='mobile-menu'
            role='dialog'
            aria-modal='true'
            aria-label='Menu'
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-4 z-60 flex flex-col rounded-2xl bg-linear-to-b from-primary-400/50 via-black/60 to-black/90 p-4 backdrop-blur-2xl lg:hidden'
          >
            <div className='flex h-8 items-center justify-between'>
              <span className='text-xl font-bold tracking-tight'>
                {SITE.name}
              </span>
              <button
                type='button'
                aria-label='Close menu'
                onClick={() => setOpen(false)}
              >
                <X className='size-6' />
              </button>
            </div>

            <ul className='mt-8 flex flex-col gap-7'>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className='text-base'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
