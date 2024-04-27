import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import VoucherCard from '@/pages/section/components/card/voucher-card';

const voucherData = [
  {
    name: 'Diskon 10% KBS Night Zoo',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 5% Tunggang Gajah',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 10% Feeding Jrapah',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 5% KBS Night Zoo',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 10% KBS Night Zoo',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 5% Tunggang Gajah',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 10% Feeding Jrapah',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 5% KBS Night Zoo',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 5% KBS Night Zoo',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 10% KBS Night Zoo',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 5% Tunggang Gajah',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 10% Feeding Jrapah',
    deadline: '28 Apr 2024',
    poin: 400,
  },
  {
    name: 'Diskon 5% KBS Night Zoo',
    deadline: '28 Apr 2024',
    poin: 400,
  },
];

const VoucherPage = () => {
  return (
    <Layout>
      <Seo templateTitle='Browse Voucher' />

      <main>
        <Header />
        <div className=''>
          <div className='layout pb-20 pt-10'>
            <div className='flex flex-col items-start'>
              <Breadcrumb crumbs={['/', '/voucher']} className='mb-4' />
              <Typography
                as='h1'
                className='text-4xl font-semibold font-averta'
              >
                Voucher
              </Typography>
              <Typography as='p' className='text-typo-secondary mt-4'>
                Kumpulkan poin dan tukar dengan hadiah atau voucher!
              </Typography>
            </div>

            <div className='mt-10 flex flex-wrap gap-5 gap-y-16'>
              {voucherData.map((item, index) => (
                <VoucherCard
                  key={index}
                  name={item.name}
                  deadline={item.deadline}
                  poin={item.poin}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default VoucherPage;
