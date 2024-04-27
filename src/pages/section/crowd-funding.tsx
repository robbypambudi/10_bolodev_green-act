import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';

import CrowdfundingCard from '@/pages/section/components/card/crowdfunding-card';

const CrowdfundingSection = () => {
  return (
    <section className='py-10 md:py-20'>
      <div className='layout'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <Typography as='h1' className='text-4xl font-semibold font-averta'>
              Crowdfunding
            </Typography>
            <Typography as='p' className='text-typo-secondary mt-4'>
              Penghijauan mendorong kesadaran dan aksi melalui kegiatan dan
              edukasi lingkungan.
            </Typography>
          </div>
          <ButtonLink href='/crowd-funding' className='border-none py-3'>
            Lihat Semua
          </ButtonLink>
        </div>

        <div className='flex flex-col md:flex-row mt-10 justify-between gap-10'>
          <CrowdfundingCard
            deadline='28 Apr 2024'
            name='Gowes to Kebun Binatang Surabaya'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
            image='/images/dummy-card.png'
          />
          <CrowdfundingCard
            deadline='28 Apr 2024'
            name='Gowes to Kebun Binatang Surabaya'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
            image='/images/dummy-card.png'
          />
          <CrowdfundingCard
            deadline='28 Apr 2024'
            name='Gowes to Kebun Binatang Surabaya'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
            image='/images/dummy-card.png'
          />
        </div>
      </div>
    </section>
  );
};

export default CrowdfundingSection;
