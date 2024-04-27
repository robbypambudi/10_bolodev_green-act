import { Heart, Play } from 'lucide-react';
import Link from 'next/link';

import NextImage from '@/components/NextImage';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

const EduVideoCard = ({
  poin,
  name,
  description,
  image,
}: {
  poin: number;
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <Link href='/edu-video/1'>
      <div className='flex flex-col sm:w-[480px] cursor-pointer group'>
        <div className='w-full flex items-center justify-center relative rounded-2xl overflow-hidden'>
          <NextImage
            src={image}
            alt='Hero Image'
            width={1200}
            height={1200}
            className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300'
          />
          <span className='rounded-full p-4 absolute z-10 bg-typo-divider cursor-pointer hidden group-hover:block transition-transform duration-300'>
            <Play size={24} className='text-secondary-400' />
          </span>
          <div className='absolute inset-0 flex items-center justify-center bg-black opacity-50'>
            {/* overlay content */}
          </div>
        </div>
        <div className='flex mt-4 gap-4'>
          <Tag leftIcon={Heart} color='secondary'>
            {poin} Poin
          </Tag>
        </div>
        <Typography as='h1' variant='h2' className='mt-4 text-gray-600'>
          {name}
        </Typography>
        <Typography as='p' className='mt-2 text-gray-400 line-clamp-3'>
          {description}
        </Typography>
      </div>
    </Link>
  );
};

export default EduVideoCard;
