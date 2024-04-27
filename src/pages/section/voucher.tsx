import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';

import VoucherCard from '@/pages/section/components/card/voucher-card';

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
            href=''
            className='border-none py-1 md:py-3 md:text-base text-sm'
          >
            Lihat Semua
          </ButtonLink>
        </div>
        <div className='flex flex-col md:flex-row gap-5 md:gap-0 mt-10 justify-between'>
          <VoucherCard name='Voucher Title' deadline='28 Apr 2024' poin={100} />
          <VoucherCard name='Voucher Title' deadline='28 Apr 2024' poin={100} />
          <VoucherCard name='Voucher Title' deadline='28 Apr 2024' poin={100} />
          <VoucherCard name='Voucher Title' deadline='28 Apr 2024' poin={100} />
        </div>
      </div>
    </section>
  );
};

export default VoucherSection;
