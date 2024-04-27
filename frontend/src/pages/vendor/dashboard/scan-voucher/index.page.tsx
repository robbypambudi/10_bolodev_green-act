import withVendorAuth from '@/components/hoc/withVendorAuth';
import DashboardVendorLayout from '@/components/layout/vendor/DashboardVendorLayout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const historyVouchers = [
  {
    name: 'Benedion',
    benefit: 'Diskon 10% KBS Night Zoo',
    acceptedAt: 'Accepted at 11.44, 27 Apr 2024',
  },
  {
    name: 'Benedion 1',
    benefit: 'Diskon 10% Feeding Jerapah',
    acceptedAt: 'Accepted at 11.44, 27 Apr 2024',
  },
  {
    name: 'Benedion 2',
    benefit: 'Diskon 5% KBS Night Zoo',
    acceptedAt: 'Accepted at 11.44, 27 Apr 2024',
  },
];

export default withVendorAuth(ScanVoucherPage, 'optional');

const HistoryCard = ({
  nama,
  benefit,
  acceptedAt,
}: {
  nama: string;
  benefit: string;
  acceptedAt: string;
}) => {
  return (
    <div className=''>
      <Typography as='h4' variant='h4' className=''>
        {nama}
      </Typography>
      <Typography as='p' className=' text-secondary-500'>
        {benefit}
      </Typography>
      <Typography as='p' className='text-typo-tertiary mt-2'>
        {acceptedAt}
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
                src='/images/scan-qr.png'
                alt='Hero Image'
                width={500}
                height={1000}
              />
            </div>
          </div>

          <div className='w-10 h-full bg-red-900' />

          {/* SECTION KANAN */}
          <div className='w-1/2'>
            {historyVouchers.map((voucher, index) => (
              <div key={index}>
                <HistoryCard
                  nama={voucher.name}
                  benefit={voucher.benefit}
                  acceptedAt={voucher.acceptedAt}
                />
                {index !== historyVouchers.length - 1 && (
                  <div className='w-3/4 my-4 h-[0.5px] bg-gray-400' />
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </DashboardVendorLayout>
  );
}
