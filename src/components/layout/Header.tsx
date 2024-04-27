import Image from 'next/image';
import GreenActLogo from 'public/images/app-logo.png';
import * as React from 'react';

import { navbarLink } from '@/lib/content/navbar';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-20 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <Image
            src={GreenActLogo}
            alt='GreenAct Logo'
            width={100}
            height={100}
          />
        </UnstyledLink>
        <nav className='flex gap-12'>
          <ul className='flex items-center justify-between space-x-12'>
            {navbarLink.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='hover:text-gray-600 font-averta'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
          <ButtonLink href='/login' className='border-none'>
            Login
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
