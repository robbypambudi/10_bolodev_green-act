import Image from 'next/image';
import DummyImage from 'public/images/panduan-kompres-foto/pilih-gambar.jpg';
import React from 'react';

import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

const EventDetail = () => {
  return (
    <div className='p-24'>
      <Image
        src={DummyImage}
        alt='Dummy Image'
        className='object-cover m-10 absolute z-10 h-[30rem] w-[20rem] rounded-xl'
      />
      <div className='flex gap-10 bg-green-300 py-10'>
        <span className='w-1/4'></span>
        <div className='w-3/4 flex flex-col'>
          <Typography as='h1' className='text-4xl'>
            Event Name
          </Typography>
          <div className='flex mt-4 gap-5'>
            <Tag color='primary'>Event Tag</Tag>
            <Tag color='secondary'>Event Tag</Tag>
          </div>
          <Typography as='p' className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur, nunc nec efficitur ultrices, mi neque aliquet purus, et
            aliquam libero metus in libero. Curabitur in turpis nec elit
            sollicitudin fermentum.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
