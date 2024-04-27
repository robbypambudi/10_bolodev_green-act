import React from 'react';

import Button from '@/components/buttons/Button';
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
              className='text-4xl max-w-[40rem] font-semibold font-averta'
            >
              Kumpulkan poin dan tukar dengan hadiah atau voucher!
            </Typography>
          </div>
          <Button className='border-none py-3'>Lihat Semua</Button>
        </div>
        <div className='flex mt-10 justify-between'>
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
