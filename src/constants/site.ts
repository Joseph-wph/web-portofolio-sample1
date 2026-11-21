import type { NavItem, SocialLink } from '@/types';
import { ASSETS } from './assets';

export const SITE = {
  name: 'Joseph',
  fullName: 'Joseph Rahardja',
  title: 'Frontend Developer',
  description:
    'Frontend developer crafting visually polished, performance-optimized digital products with a consistent experience across all platforms.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  address: 'Jakarta, Indonesia',
  phone: '(+62) 1234567890',
} as const;

export const API_ROUTES = {
  contact: '/api/contact',
} as const;

export const SECTION_IDS = {
  top: 'top',
  about: 'about',
  skill: 'skill',
  projects: 'projects',
  faq: 'faq',
  contact: 'contact',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: `#${SECTION_IDS.about}` },
  { label: 'Skill', href: `#${SECTION_IDS.skill}` },
  { label: 'Projects', href: `#${SECTION_IDS.projects}` },
  { label: 'FAQ', href: `#${SECTION_IDS.faq}` },
  { label: 'Contact', href: `#${SECTION_IDS.contact}` },
];

const { social } = ASSETS.icons;

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Facebook', href: 'https://facebook.com', icon: social.facebook },
  { label: 'Instagram', href: 'https://instagram.com', icon: social.instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: social.linkedin },
  { label: 'TikTok', href: 'https://tiktok.com', icon: social.tiktok },
];
