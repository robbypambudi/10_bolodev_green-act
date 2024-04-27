import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
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
];

const VoucherSection = () => {
  return (
    <section className='py-20'>
      <div className='layout'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <Typography
              as='h1'
              className='text-xl md:text-4xl max-w-[40rem] font-semibold font-averta'
            >
              Kumpulkan poin dan tukar dengan hadiah atau voucher!
            </Typography>
          </div>
          <ButtonLink
            href='/voucher'
            className='border-none py-1 md:py-3 md:text-base text-sm'
          >
            Lihat Semua
          </ButtonLink>
        </div>
        <div className='flex flex-col md:flex-row gap-5 md:gap-0 mt-10 justify-between'>
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
    </section>
  );
};

export default VoucherSection;
