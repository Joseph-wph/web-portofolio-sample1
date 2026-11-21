import Image from 'next/image';
import { ContactForm } from '@/components/forms/contact-form';
import { SocialLinks } from '@/components/common/social-links';
import { ASSETS } from '@/constants/assets';
import { CONTACT_CONTENT } from '@/constants/content';
import { SECTION_IDS, SITE } from '@/constants/site';

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className='border-b border-white/10 pb-6 last:border-b-0 last:pb-0'>
      <h3 className='text-[16px] lg:text-[20px] font-semibold'>{label}</h3>
      <div className='mt-3 text-[14px] lg:text-[16px] text-white/60'>
        {children}
      </div>
    </div>
  );
}

/** Contact section + site footer. Background = `bg-footer` color + glass-board image. */
export function Footer() {
  return (
    <footer
      id={SECTION_IDS.contact}
      className='bg-footer relative overflow-hidden'
    >
      <Image
        src={ASSETS.images.footer.glassBoard}
        alt=''
        fill
        sizes='100vw'
        className='glass-board-fade pointer-events-none object-cover object-bottom'
        aria-hidden
      />

      <div className='container-page relative grid gap-12 pt-16 pb-8 lg:grid-cols-2 lg:gap-24 lg:pt-24 lg:pb-12'>
        {/* Left: black card (heading + description + form) */}
        <div className='border border-neutral-900 bg-black px-6 py-10'>
          <h2 className='text-[30px] lg:text-[45px] leading-tight font-bold tracking-tight lg:text-4xl'>
            {CONTACT_CONTENT.title}{' '}
            <span className='text-primary-300'>
              {CONTACT_CONTENT.highlight}
            </span>{' '}
            {CONTACT_CONTENT.titleEnd}
          </h2>
          <p className='mt-4 max-w-sm text-[14px] lg:text-[16px] leading-5 text-white/60'>
            {CONTACT_CONTENT.description}
          </p>
          <ContactForm />
        </div>

        {/* Right: info blocks with dividers + big text at the bottom */}
        <div className='flex flex-col justify-between gap-12'>
          <div className='flex flex-col gap-6'>
            <InfoBlock label='Address'>{SITE.address}</InfoBlock>
            <InfoBlock label='Contact'>{SITE.phone}</InfoBlock>
            <InfoBlock label='Social Media'>
              <SocialLinks bordered />
            </InfoBlock>
          </div>

          <p
            aria-hidden
            className='text-4xl font-bold tracking-tight text-white lg:text-5xl'
          >
            {CONTACT_CONTENT.bigText}
          </p>
        </div>
      </div>
    </footer>
  );
}
