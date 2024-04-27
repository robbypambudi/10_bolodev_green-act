import React from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

const HeroSection = () => {
  return (
    <section className='layout my-5 flex rounded-lg bg-primary-50'>
      <div className='flex flex-col p-8 h-[80vh] justify-center items-start w-3/5'>
        <Typography as='h1' className='text-6xl font-semibold'>
          Be The Enviromental Hero!
        </Typography>
        <Typography as='h1' className='text-6xl font-semibold text-primary-500'>
          Act Now!
        </Typography>
        <Typography as='p' className='text-lg mt-4'>
          Hijaukan tindakan, selamatkan bumi.
        </Typography>
        <Button className='mt-8 flex bg-primary-500 border-none'>
          Selengkapnya
        </Button>
      </div>
      <div className='flex items-end'>
        <NextImage
          src='/images/hero-image.png'
          alt='Hero Image'
          width={700}
          height={700}
        />
      </div>
    </section>
  );
};

export default HeroSection;
