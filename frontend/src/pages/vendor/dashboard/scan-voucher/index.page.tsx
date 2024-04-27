import withVendorAuth from '@/components/hoc/withVendorAuth';
import DashboardVendorLayout from '@/components/layout/vendor/DashboardVendorLayout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default withVendorAuth(ScanVoucherPage, 'all');
const HistoryCard = () => {
  return (
    <div className=''>
      <Typography as='h4' variant='h4' className=''>
        Nama
      </Typography>
      <Typography as='p' className=' text-secondary-500'>
        Benefit Voucher (Diskon berapa)
      </Typography>
      <Typography as='p' className='text-typo-tertiary mt-2'>
        Accepted at
      </Typography>
    </div>
  );
};

function ScanVoucherPage() {
  return (
    <DashboardVendorLayout>
      <Seo templateTitle='Dashboard Campaign' />
      <main className='dashboard-layout '>
        <Typography variant='j1' className='mt-8'>
          Scan Voucher
        </Typography>
        <section className='relative mt-4 flex rounded-md'>
          {/* SECTION KIRI */}
          <div className='w-2/3 flex flex-col'>
            <div className='bg-red w-full h-full'>
              <NextImage
                src='/images/campaign/dumy-detail.png'
                alt='Hero Image'
                width={300}
                height={700}
              />
            </div>
          </div>

          <div className='w-1 h-full bg-red-900' />

          {/* SECTION KANAN */}
          <div className='w-1/2'>
            <HistoryCard />
            <div className='w-3/4 my-4 h-[0.5px] bg-gray-400' />
            <HistoryCard />
            <div className='w-3/4 my-4 h-[0.5px] bg-gray-400' />
            <HistoryCard />
            <div className='w-3/4 my-4 h-[0.5px] bg-gray-400' />
            <HistoryCard />
            <div className='w-3/4 my-4 h-[0.5px] bg-gray-400' />
            <HistoryCard />
          </div>
        </section>
      </main>
    </DashboardVendorLayout>
  );
}

