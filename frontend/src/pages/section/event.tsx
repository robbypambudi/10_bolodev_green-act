import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';

import EventCard from '@/pages/section/components/card/event-card';

const events = [
  {
    name: 'Gowes to Kebun Binatang Surabaya',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/dummy-event.png',
    poin: 100,
    deadline: '28 Apr 2024',
    count_person: '20/100',
  },
  {
    name: 'Gowes to Kebun Binatang Surabaya',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/dummy-event.png',
    poin: 100,
    deadline: '28 Apr 2024',
    count_person: '20/100',
  },
  {
    name: 'Gowes to Kebun Binatang Surabaya',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/dummy-event.png',
    poin: 100,
    deadline: '28 Apr 2024',
    count_person: '20/100',
  },
];

const EventSection = () => {
  return (
    <section className='py-10 md:py-20'>
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

        <div className='flex flex-col md:flex-row mt-10 justify-between gap-10'>
          {events.map((event, index) => (
            <EventCard
              key={index}
              name={event.name}
              description={event.description}
              image={event.image}
              poin={event.poin}
              deadline={event.deadline}
              count_person={event.count_person}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
