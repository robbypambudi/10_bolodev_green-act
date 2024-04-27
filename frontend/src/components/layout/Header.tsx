import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import GreenActLogo from 'public/images/app-logo.png';
import * as React from 'react';
import { useState } from 'react';

import { navbarLink } from '@/lib/content/navbar';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import useAuthStore from '@/store/useAuthStore';

export default function Header() {
  const isAuth = useAuthStore.useIsAuthenticated();
  const user = useAuthStore.useUser();
  const logout = useAuthStore.useLogout();

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

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

        <nav className='flex gap-4 md:gap-12'>
          <ul className='hidden md:flex items-center justify-between space-x-12'>
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

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <div onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <X className='w-[28px] h-[28px] object-contain cursor-pointer' />
              ) : (
                <Menu className='w-[28px] h-[28px] object-contain cursor-pointer' />
              )}
            </div>

            <div
              className={`${!toggle ? 'hidden' : 'flex'
                } p-6 bg-slate-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navbarLink.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    <UnstyledLink
                      href={href}
                      className={`hover:text-gray-600 font-averta ${active === label ? 'text-white' : 'text-secondary'
                        }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(label);
                      }}
                    >
                      {label}
                    </UnstyledLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {isAuth ? (
            <div className='flex items-center space-x-2'>
              {
                user?.token === 'vendor' ? (
                  <ButtonLink href='/vendor/dashboard' className='border-none'>
                    Dashboard
                  </ButtonLink>
                ) : (
                  <ButtonLink href='/dashboard' className='border-none'>
                    Dashboard
                  </ButtonLink>
                )
              }
              <Button onClick={() => logout()} variant='outline'>
                Keluar
              </Button>
            </div>
          ) : (
            <ButtonLink href='/login'>Login</ButtonLink>
          )}
        </nav>
      </div>
    </header>
  );
}
