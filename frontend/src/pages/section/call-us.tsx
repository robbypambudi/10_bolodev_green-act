import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';

const CallUsSection = () => {
  return (
    <section className='bg-primary-500 py-20'>
      <div className='layout'>
        <div className='flex justify-between items-center'>
          <Typography
            as='h1'
            className='md:text-7xl text-4xl text-white font-semibold'
          >
            Ajukan Crowdfunding Bersama{' '}
            <Typography className='md:text-7xl text-4xl text-black font-semibold italic'>
              greenAct!
            </Typography>
          </Typography>
          <ButtonLink
            href='/' // ke nomer wa
            className='border-none py-3 bg-white text-primary-500'
          >
            Hubungi Kami
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default CallUsSection;
