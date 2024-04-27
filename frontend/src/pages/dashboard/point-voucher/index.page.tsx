import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import YourVoucherCard from '@/pages/dashboard/components/YourVoucherCard';
import VoucherCard from '@/pages/section/components/card/voucher-card';

export default withAuth(PointVoucherPage, 'optional');

function PointVoucherPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard Point & Voucher' />
      <main>
        <section className='dashboard-layout flex-col relative flex rounded-md'>
          <Typography variant='j1' className='mt-8'>
            Voucher Anda
          </Typography>

          <div className='mt-4 flex flex-wrap gap-5'>
            <YourVoucherCard name='Voucher Title' deadline='28 Apr 2024' />
            <YourVoucherCard name='Voucher Title' deadline='28 Apr 2024' />
            <YourVoucherCard name='Voucher Title' deadline='28 Apr 2024' />
            <YourVoucherCard name='Voucher Title' deadline='28 Apr 2024' />
          </div>

          <Typography variant='j1' className='mt-16'>
            Voucher Terbaru
          </Typography>

          <div className='mt-4 flex flex-wrap gap-5'>
            <VoucherCard
              name='Voucher Title'
              deadline='28 Apr 2024'
              poin={100}
            />
            <VoucherCard
              name='Voucher Title'
              deadline='28 Apr 2024'
              poin={100}
            />
            <VoucherCard
              name='Voucher Title'
              deadline='28 Apr 2024'
              poin={100}
            />
            <VoucherCard
              name='Voucher Title'
              deadline='28 Apr 2024'
              poin={100}
            />
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
