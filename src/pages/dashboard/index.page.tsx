import Seo from '@/components/Seo';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import PointSummaryCard from '@/pages/dashboard/component/PointSummaryCard';
import { Heart, Users } from 'lucide-react';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard' />
      <section className='dashboard-layout relative mt-4 flex rounded-md'>
        <div className='flex justify-between w-full'>
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

        <div></div>
      </section>
    </DashboardLayout>
  );
}
