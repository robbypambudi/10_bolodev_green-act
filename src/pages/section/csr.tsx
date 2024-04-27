import { FileCheck2, FileSearch2, ThumbsUp } from 'lucide-react';
import React, { ReactElement } from 'react';

import Typography from '@/components/typography/Typography';

import CSRForm from '@/pages/section/components/form/csr-form';

const listData = [
  {
    title: 'Mudah',
    bgColor: 'bg-primary-100',
    icon: <ThumbsUp size={24} className='text-primary-500' />,
  },
  {
    title: 'Transparan',
    icon: <FileCheck2 size={24} className='text-primary-500' />,
  },
  {
    title: 'Berkelanjutan',
    icon: <FileSearch2 size={24} className='text-primary-500' />,
  },
];

const List = ({ title, icon }: { title: string; icon: ReactElement }) => {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <div className='flex items-center'>
        <span className='p-4 rounded-full bg-primary-100'>{icon}</span>
      </div>
      <div className='flex flex-col'>
        <Typography as='h2' className='text-2xl text-white'>
          {title}
        </Typography>
      </div>
    </div>
  );
};

const CSRSection = () => {
  return (
    <section className='bg-primary-500 py-32'>
      <div className='layout flex gap-10'>
        <div className='w-2/3 flex flex-col items-start justify-center'>
          {/* ====== SECTION KIRI ======= */}
          <Typography as='h1' className='text-7xl text-white font-semibold'>
            Jalankan Program CSR Bersama{' '}
            <Typography className='text-7xl text-black font-semibold italic'>
              greenAct!
            </Typography>
          </Typography>
          <div className='flex mt-14'>
            {listData.map((item, index) => (
              <div className='flex' key={index}>
                <List title={item.title} icon={item.icon} />
                {index < 2 && (
                  <div className='w-[0.5px] h-2/3 bg-gray-100 mx-20' />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* ====== SECTION KANAN ======= */}
        <div className='w-1/3 bg-white rounded-xl flex items-center justify-center py-10'>
          <CSRForm />
        </div>
      </div>
    </section>
  );
};

export default CSRSection;
