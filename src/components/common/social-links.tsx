import Image from 'next/image';
import { SOCIAL_LINKS } from '@/constants/site';
import { cn } from '@/lib/utils';

type SocialLinksProps = {
  className?: string;
  /** Circle outline around each icon (used in the footer). */
  bordered?: boolean;
};

export function SocialLinks({ className, bordered = false }: SocialLinksProps) {
  return (
    <ul
      className={cn(
        'flex items-center',
        bordered ? 'gap-2.5' : 'gap-5',
        className
      )}
    >
      {SOCIAL_LINKS.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={social.label}
            className={cn(
              'block transition-opacity hover:opacity-100',
              bordered
                ? 'grid size-7 place-items-center rounded-full border border-white/20 hover:border-white/50'
                : 'opacity-90'
            )}
          >
            <Image
              src={social.icon}
              alt=''
              width={16}
              height={16}
              className='size-4'
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
