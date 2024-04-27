import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';

import CampaignCard from '@/pages/section/components/card/campaign-card';

const CampaignSection = () => {
  return (
    <section className='bg-[#F0F2F5] py-10 md:py-20'>
      <div className='layout'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <Typography
              as='h1'
              className='text-2xl md:text-4xl font-semibold font-averta'
            >
              Campaign
            </Typography>
            <Typography
              as='p'
              className='text-typo-secondary md:text-base text-sm mt-2 md:mt-4'
            >
              Campaign penghijauan yang sedang berlangsung
            </Typography>
          </div>
          <ButtonLink
            href='/campaign'
            className='border-none py-1 md:py-3 md:text-base text-sm'
          >
            Lihat Semua
          </ButtonLink>
        </div>

        <div className='flex flex-col md:flex-row mt-10 gap-5 md:gap-0 justify-between'>
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
