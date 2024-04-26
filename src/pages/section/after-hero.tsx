import { Book, Heart, Megaphone } from 'lucide-react';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import Typography from '@/components/typography/Typography';

const listData = [
  {
    title: 'Edukasi',
    description:
      'Menonton video memberikan akses mudah untuk memahami praktik-praktik penghijauan melalui media visual yang informatif.',
    bgColor: 'bg-secondary-100',
    icon: <Book size={24} className='text-secondary-400' />,
  },
  {
    title: 'Campaign',
    description:
      'Penghijauan mengajak pengguna untuk berpartisipasi dalam berbagai kegiatan penghijauan yang praktis dan bermakna, seperti penanaman pohon, pembersihan lingkungan, dan daur ulang.',
    bgColor: 'bg-primary-100',
    icon: <Megaphone size={24} className='text-primary-400' />,
  },
  {
    title: 'Event',
    description:
      'Berkolaborasi dengan berbagai perusahaan untuk menyelenggarakan tantangan, memotivasi peserta untuk mengambil tindakan nyata dalam mendukung lingkungan hidup.',
    bgColor: 'bg-[#bfbaff]',
    icon: <Heart size={24} className='text-[#4E46B4]' />,
  },
];

const List = ({
  title,
  description,
  icon,
  bgColor,
}: {
  title: string;
  description: string;
  icon: ReactElement;
  bgColor: string;
}) => {
  return (
    <div className='flex gap-10'>
      <div className='flex items-center'>
        <span className={`p-4 rounded-full ${bgColor}`}>{icon}</span>
      </div>
      <div className='flex flex-col'>
        <Typography as='h2' className='text-2xl'>
          {title}
        </Typography>
        <Typography
          as='p'
          className='text-lg mt-2 font-light text-typo-secondary'
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

const AfterHeroSection = () => {
  return (
    <section className='layout my-32 flex gap-10'>
      <div className='w-1/3 flex items-center justify-center'>
        <Image
          src='/images/plant.png'
          alt='Hero Image'
          width={400}
          height={500}
        />
      </div>
      <div className='w-2/3 flex flex-col items-start'>
        {/* ====== SECTION KIRI ======= */}
        <Typography as='h1' className='text-4xl font-semibold font-averta'>
          Hijaukan Bumi kita!
        </Typography>
        <Typography as='p' className='text-lg mt-5 mb-10'>
          Hijaukan Bumi Kita! Mulai sekarang, mari kita beraksi untuk
          menyelamatkan planet kita bersama-sama dengan:
        </Typography>
        {/* ====== SECTION KANAN ======= */}
        {listData.map((item, index) => (
          <>
            <List
              key={index}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
              icon={item.icon}
            />
            {index < 2 && <div className='h-[1px] w-full bg-gray-100 my-5' />}
          </>
        ))}
      </div>
    </section>
  );
};

export default AfterHeroSection;
