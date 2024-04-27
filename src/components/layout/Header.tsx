import Image from 'next/image';
import GreenActLogo from 'public/images/app-logo.png';
import * as React from 'react';

import { navbarLink } from '@/lib/content/navbar';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import useAuthStore from '@/store/useAuthStore';

export default function Header() {
  const isAuth = useAuthStore.useIsAuthenticated();
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
          {isAuth ? (
            <div className='flex items-center space-x-2'>
              <ButtonLink href='/dashboard' className='border-none'>
                Dashboard
              </ButtonLink>
              <Button className='border-none'>Keluar</Button>
            </div>
          ) : (
            <ButtonLink href='/login' className='border-none' variant='warning'>
              Login
            </ButtonLink>
          )}
        </nav>
      </div>
    </header>
  );
}
