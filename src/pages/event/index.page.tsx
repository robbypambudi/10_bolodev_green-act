import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import EventCard from '@/pages/section/components/card/event-card';

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

          <div className='mt-10 flex flex-wrap justify-between gap-10 gap-y-16'>
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
      </main>
    </Layout>
  );
};

export default EventPage;
