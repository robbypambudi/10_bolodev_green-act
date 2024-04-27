import { Book, DollarSign, Heart, Megaphone } from 'lucide-react';
import React, { ReactElement } from 'react';

import NextImage from '@/components/NextImage';
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
      'Kegiatan berkelompok dari beberapa individu untuk melaksanakan aksi bersama dalam menyelesaikan tantangan lingkungan hidup. Layanan ini juga dapat berkolaborasi dengan perusahaan dalam pelaksanaannya.',
    bgColor: 'bg-[#bfbaff]',
    icon: <Heart size={24} className='text-[#4E46B4]' />,
  },

  {
    title: 'Crowdfunding',
    description:
      'Kegiatan penggalangan dana dengan upaya untuk mengumpulkan dana dari berbagai sumber, baik individu maupun lembaga, dengan tujuan menyelesaikan berbagai permasalah lingkungan hidup.',
    bgColor: 'bg-yellow-100',
    icon: <DollarSign size={24} className='text-yellow-500' />,
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
    <div className='flex gap-5 md:gap-10'>
      <div className='flex items-start md:items-center'>
        <span className={`p-4 rounded-full ${bgColor}`}>{icon}</span>
      </div>
      <div className='flex flex-col'>
        <Typography as='h2' className='text-xl md:text-2xl'>
          {title}
        </Typography>
        <Typography
          as='p'
          className='text-base md:text-lg mt-2 font-light text-typo-secondary'
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className='layout my-16 md:my-32 flex md:gap-10'>
      {/* ====== SECTION KIRI ======= */}

      <div className='w-0 md:w-1/3 flex items-center justify-center'>
        <NextImage
          src='/images/plant.png'
          alt='Hero Image'
          width={400}
          height={500}
        />
      </div>
      {/* ====== SECTION KANAN ======= */}
      <div className='w-full md:w-2/3 flex flex-col items-start'>
        <Typography as='h1' className='text-2xl md:text-4xl font-semibold'>
          Hijaukan Bumi kita!
        </Typography>
        <Typography as='p' className='text-base md:text-lg mt-5 mb-10'>
          Hijaukan Bumi Kita! Mulai sekarang, mari kita beraksi untuk
          menyelamatkan planet kita bersama-sama dengan:
        </Typography>
        {listData.map((item, index) => (
          <div key={index}>
            <List
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
              icon={item.icon}
            />
            {index < 3 && <div className='h-[1px] w-full bg-gray-100 my-5' />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
