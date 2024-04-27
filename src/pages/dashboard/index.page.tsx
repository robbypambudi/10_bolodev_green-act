import { Heart, Users } from 'lucide-react';

import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import PointSummaryCard from '@/pages/dashboard/component/PointSummaryCard';
import EventCard from '@/pages/section/components/card/event-card';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard' />
      <section className='dashboard-layout flex-col relative mt-4 flex rounded-md'>
        <div className='flex gap-5 w-full'>
          <PointSummaryCard
            title='Point'
            description='100 Points'
            icon={Heart}
            color='primary'
          />
          <PointSummaryCard
            title='Total Campaign'
            description='12 Campaigns'
            icon={Users}
            color='secondary'
          />
          <PointSummaryCard
            title='Total Event'
            description='11 Events'
            icon={Users}
            color='warning'
          />
        </div>

        <Typography variant='h1' className='mt-16'>
          Event Sedang Berlangsung
        </Typography>

        <div className='mt-4 flex flex-wrap gap-20 gap-y-16'>
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
      </section>
    </DashboardLayout>
  );
}
