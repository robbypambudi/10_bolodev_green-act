import Image from 'next/image';
import DummyImage from 'public/images/panduan-kompres-foto/pilih-gambar.jpg';
import React from 'react';

import Typography from '@/components/typography/Typography';

const EventCard = () => {
  return (
    <div className='flex flex-col'>
      <div className='rounded-lg bg-red-200'>
        <Image
          src={DummyImage}
          alt='Dummy Image'
          className='object-cover h-[30rem] w-[28rem] rounded-lg'
        />
      </div>
      <Typography as='h1' variant='h2' className='mt-4 text-gray-600'>
        Event Name
      </Typography>
    </div>
  );
};

export default EventCard;
