import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
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

const EventPage = () => {
  return (
    <Layout>
      <Seo templateTitle='Browse Event' />

      <main>
        <Header />
        <div className='layout pb-20 pt-10'>
          <div className='flex flex-col items-start'>
            <Breadcrumb crumbs={['/', '/event']} className='mb-4' />
            <Typography as='h1' className='text-4xl font-semibold font-averta'>
              Event
            </Typography>
            <Typography as='p' className='text-typo-secondary mt-4'>
              Penghijauan mendorong kesadaran dan aksi melalui kegiatan dan
              edukasi lingkungan.
            </Typography>
          </div>

          <div className='mt-10 flex flex-wrap gap-10 gap-y-16'>
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
      </main>
    </Layout>
  );
};

export default withAuth(EventPage, 'optional');
