import React from 'react';

import Typography from '@/components/typography/Typography';

import EventCard from '@/pages/section/components/card/event-card';

const EventSection = () => {
  return (
    <section className='layout my-10'>
      <Typography as='h1' variant='j1'>
        Event Now
      </Typography>
      <div className='flex gap-10 justify-center mt-8'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
};

export default EventSection;
