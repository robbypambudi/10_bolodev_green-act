import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default withAuth(CampaignPage, 'all');

function CampaignPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard Campaign' />
      <main>
        <section className='dashboard-layout flex-col relative mt-4 flex rounded-md'>
          <Typography variant='j1' className='mt-8'>
            Riwayat Campaign
          </Typography>
        </section>
      </main>
    </DashboardLayout>
  );
}
