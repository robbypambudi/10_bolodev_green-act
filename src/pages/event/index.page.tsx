import { ChevronLeft } from 'lucide-react';

import UnderlineLink from '@/components/links/UnderlineLink';
import Typography from '@/components/typography/Typography';

import EventCard from '@/pages/section/components/card/event-card';

const EventPage = () => {
  return (
    <div className='bg-[#F0F2F5]'>
      <div className='layout py-20'>
        <div className='flex flex-col items-start'>
          <Typography as='h1' className='text-4xl font-semibold font-averta'>
            Event
          </Typography>
          <Typography as='p' className='text-typo-secondary mt-4'>
            Penghijauan mendorong kesadaran dan aksi melalui kegiatan dan
            edukasi lingkungan.
          </Typography>
          <UnderlineLink
            href='/'
            className='text-primary-400 mt-4 border-primary-400'
          >
            <ChevronLeft /> Back to main page
          </UnderlineLink>
        </div>

        <div className='mt-12 flex flex-wrap justify-between gap-5'>
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
    </div>
  );
};

export default EventPage;
