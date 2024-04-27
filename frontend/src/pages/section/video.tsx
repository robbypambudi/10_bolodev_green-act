import { HeartIcon } from 'lucide-react';
import React from 'react';
import YouTube from 'react-youtube';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
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

const opts = {
  height: '550',
  width: '900',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

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
      <ButtonLink href='edu-video/1' className='bg-white text-black py-2'>
        Lihat Video
      </ButtonLink>
    </div>
  );
};

const VideoSection = () => {
  return (
    <section className='layout py-10 md:py-32 flex md:flex-row flex-col gap-10'>
      {/* ====== SECTION KIRI ======= */}
      <div className='w-full md:w-3/5 h-full flex items-center justify-center relative rounded-2xl overflow-hidden'>
        <YouTube videoId='htaPGUSkrPc' opts={opts} />
      </div>
      {/* ====== SECTION KANAN ======= */}
      <div className='w-full md:w-2/5 flex flex-col items-start justify-center'>
        <Typography as='h1' className='text-2xl md:text-4xl font-semibold'>
          Hijaukan Bumi kita!
        </Typography>
        <Typography as='p' className='text-base md:text-lg mt-5 mb-10'>
          Hijaukan Bumi Kita! Mulai sekarang, mari kita beraksi untuk
          menyelamatkan planet kita bersama-sama dengan:
        </Typography>
        {listData.map((item, index) => (
          <div key={index} className='w-full'>
            <List title={item.title} poin={item.poin} />
            <div className='h-[1px] w-full bg-gray-100 my-5' />
          </div>
        ))}

        <UnderlineLink
          href='edu-video'
          className='text-base text-primary-500 duration-150 cursor-pointer'
        >
          Lihat Semua Video
        </UnderlineLink>
      </div>
    </section>
  );
};

export default VideoSection;
