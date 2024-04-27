import Image from 'next/image';
import GreenActLogo from 'public/images/app-logo-white.png';

import { footerData } from '@/lib/content/footer';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/typography/Typography';

export default function Footer() {
  return (
    <footer className='relative bg-black print:hidden'>
      <span className='sr-only'>Footer</span>
      <div className='layout py-16'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            <Image
              src={GreenActLogo}
              alt='GreenAct Logo'
              width={200}
              height={200}
            />
          </div>
          <div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            {footerData.map((navItem) => (
              <div key={navItem.name}>
                <Typography
                  as='h1'
                  variant='h6'
                  color='white'
                  className='font-semibold uppercase tracking-widest'
                  font='averta'
                >
                  {navItem.name}
                </Typography>
                <ul role='list' className='mt-4 space-y-4'>
                  {navItem.children?.map((item) => (
                    <li key={item.name}>
                      <UnstyledLink href={item.href}>
                        <Typography
                          variant='b2'
                          font='averta'
                          className='hover:text-typo-secondary text-typo-tertiary'
                        >
                          {item.name}
                        </Typography>
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-12 border-t border-typo-tertiary pt-8'>
          <Typography
            variant='b2'
            font='averta'
            className='xl:text-center text-typo-tertiary'
          >
            &copy; {new Date().getFullYear()} greenAct. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
