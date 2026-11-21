'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ASSETS } from '@/constants/assets';
import { SITE } from '@/constants/site';

export function LanyardBadge() {
  return (
    <motion.div
      className='relative mx-auto mt-40 w-62.5 origin-top sm:w-75 lg:mt-0 lg:mr-0 lg:ml-auto lg:w-84.75'
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* strap + clip */}
      <div className='absolute bottom-full left-1/2 h-60 w-12 -translate-x-1/2 bg-neutral-950 lg:w-17' />
      <div className='absolute -top-2 left-1/2 z-10 h-9 w-16 -translate-x-1/2 rounded-b-2xl bg-neutral-950 ring-1 ring-white/10 lg:h-11 lg:w-20' />

      {/* card */}
      <div className='relative aspect-339/534 overflow-hidden rounded-[22px] bg-neutral-200'>
        <Image
          src={ASSETS.images.hero.brush}
          alt=''
          width={400}
          height={160}
          className='absolute top-[45%] left-0 w-[115%] max-w-none'
        />
        <Image
          src={ASSETS.images.hero.avatar}
          alt={`${SITE.fullName} portrait`}
          width={400}
          height={500}
          priority
          className='absolute -bottom-4 left-1/2 w-[110%] max-w-none -translate-x-1/2'
        />
      </div>
    </motion.div>
  );
}
