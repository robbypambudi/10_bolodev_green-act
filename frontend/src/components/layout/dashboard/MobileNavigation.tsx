import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import * as React from 'react';

import Navigation from '@/components/layout/dashboard/Navigation';
import NextImage from '@/components/NextImage';

type MobileNavigationProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNavigation({
  sidebarOpen,
  setSidebarOpen,
}: MobileNavigationProps) {
  return (
    <Transition.Root show={sidebarOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-40 flex md:hidden'
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={React.Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white'>
            <Transition.Child
              as={React.Fragment}
              enter='ease-in-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='absolute top-0 right-0 pt-2 -mr-12'>
                <button
                  type='button'
                  className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className='sr-only'>Close sidebar</span>
                  <X className='text-white' size={24} aria-hidden='true' />
                </button>
              </div>
            </Transition.Child>
            <div className='flex flex-shrink-0 items-center px-6'>
              <NextImage
                src='/images/logo/app-logo.png'
                alt='Logo'
                width={120}
                height={32}
                layout='fixed'
              />
            </div>
            <div className='flex-1 h-0 mt-1 overflow-y-auto'>
              <nav className='px-2 space-y-1'>
                <Navigation />
              </nav>
            </div>
          </div>
        </Transition.Child>
        <div className='flex-shrink-0 w-14' aria-hidden='true'>
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
}