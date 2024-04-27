import NextImage from '@/components/NextImage';
import Navigation from '@/components/layout/dashboard/Navigation';
import * as React from 'react';



export default function DesktopNavigation() {
  return (
    <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
      <div className='fixed inset-x-0 top-0 flex min-h-[4rem] flex-shrink-0 items-center px-4'>
        <NextImage
          src='/images/app-logo.png'
          alt='logo'
          width={120}
          height={40}
          className='w-auto h-8'
        />
      </div>
      <div className='mt-16 flex flex-grow flex-col overflow-y-auto'>
        <nav className='flex-1 space-y-1 pb-4'>
          <Navigation />
        </nav>
      </div>
    </div>
  );
}