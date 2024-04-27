import React from 'react';

import Button from '@/components/buttons/Button';
import Typography from '@/components/typography/Typography';

import EventCard from '@/pages/section/components/card/event-card';

const CampaignSection = () => {
  return (
    <section className='bg-[#F0F2F5] py-20'>
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
          <Button className='border-none py-3'>Lihat Semua</Button>
        </div>
        <div className='flex mt-10 justify-between'>
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
