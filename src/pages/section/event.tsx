import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';

import EventCard from '@/pages/section/components/card/event-card';

const CampaignSection = () => {
  return (
    <section className='py-20'>
      <div className='layout'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <Typography as='h1' className='text-4xl font-semibold font-averta'>
              Event
            </Typography>
            <Typography as='p' className='text-typo-secondary mt-4'>
              Penghijauan mendorong kesadaran dan aksi melalui kegiatan dan
              edukasi lingkungan.
            </Typography>
          </div>
          <ButtonLink href='/event' className='border-none py-3'>
            Lihat Semua
          </ButtonLink>
        </div>

        <div className='flex mt-10 justify-between gap-10'>
          <EventCard
            deadline='28 Apr 2024'
            poin={100}
            count_person='20/100'
            name='Gowes to Kebun Binatang Surabaya'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
            image='/images/dummy-card.png'
          />
          <EventCard
            deadline='28 Apr 2024'
            poin={100}
            count_person='20/100'
            name='Gowes to Kebun Binatang Surabaya'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
            image='/images/dummy-card.png'
          />
          <EventCard
            deadline='28 Apr 2024'
            poin={100}
            count_person='20/100'
            name='Gowes to Kebun Binatang Surabaya'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
            image='/images/dummy-card.png'
          />
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
