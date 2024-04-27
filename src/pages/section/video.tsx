import { HeartIcon, Play } from 'lucide-react';
import React from 'react';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

const listData = [
  {
    title: 'Peran Keanekaragaman Hayati',
    poin: 150,
  },
  {
    title: 'Memanfaatkan Energi Terbarukan',
    poin: 200,
  },
  {
    title: 'Mengenal Dampak Perubahan Iklim',
    poin: 100,
  },
];

const List = ({ title, poin }: { title: string; poin: number }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col gap-3'>
        <div className='text-secondary-400 flex gap-2 cursor-pointer'>
          <HeartIcon size={20} fill='#F4AE5F' />
          <Typography
            as='p'
            className='text-sm text-secondary-400 font-semibold'
          >
            {poin} poin
          </Typography>
        </div>
        <Typography as='h1' className='text-xl font-semibold font-averta'>
          {title}
        </Typography>
      </div>
      <Button className='border-none py-2'>Tonton Video</Button>
    </div>
  );
};

const VideoSection = () => {
  return (
    <section className='layout my-32 flex gap-10'>
      {/* ====== SECTION KIRI ======= */}
      <div className='w-3/5 h-full flex items-center justify-center relative rounded-2xl overflow-hidden'>
        <NextImage
          src='/images/dummy-card.png'
          alt='Hero Image'
          width={1200}
          height={1200}
          className='w-full h-full object-contain'
        />
        <span className='rounded-full p-4 absolute z-50 bg-typo-divider cursor-pointer'>
          <Play size={24} className='text-primary-400' />
        </span>
        <div className='absolute inset-0 flex items-center justify-center bg-black opacity-50'>
          {/* overlay content */}
        </div>
      </div>
      {/* ====== SECTION KANAN ======= */}
      <div className='w-2/5 flex flex-col items-start justify-center'>
        <Typography as='h1' className='text-4xl font-semibold'>
          Hijaukan Bumi kita!
        </Typography>
        <Typography as='p' className='text-lg mt-5 mb-10'>
          Hijaukan Bumi Kita! Mulai sekarang, mari kita beraksi untuk
          menyelamatkan planet kita bersama-sama dengan:
        </Typography>
        {listData.map((item, index) => (
          <div key={index} className='w-full'>
            <List title={item.title} poin={item.poin} />
            <div className='h-[1px] w-full bg-gray-100 my-5' />
          </div>
        ))}

        <UnstyledLink
          href='/'
          className='text-base text-primary-500 hover:text-primary-600 duration-150 w-full cursor-pointer text-center'
        >
          Lihat Semua Video
        </UnstyledLink>
      </div>
    </section>
  );
};

export default VideoSection;
