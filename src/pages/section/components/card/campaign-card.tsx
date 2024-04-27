import { HeartIcon } from 'lucide-react';
import Image from 'next/image';

import UnderlineLink from '@/components/links/UnderlineLink';
import Typography from '@/components/typography/Typography';

const CampaignCard = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <div className='bg-white rounded-2xl sm:w-[360px] w-full overflow-hidden hover:shadow-lg duration-300'>
      <div className='relative w-full h-[230px]'>
        <Image
          src={image}
          width={150}
          height={100}
          alt='project_image'
          className='w-full h-full object-cover '
        />

        <div className='absolute inset-0 flex justify-start m-3 card-img_hover gap-1'>
          <div className='bg-white text-secondary-400 h-10 px-5 rounded-3xl flex gap-2 justify-center items-center cursor-pointer'>
            <HeartIcon size={20} fill='#F4AE5F' />
            <Typography
              as='p'
              className='text-sm text-secondary-400 font-semibold'
            >
              100 poin
            </Typography>
          </div>
        </div>
      </div>

      <div className='mt-5 px-5'>
        <Typography as='h2' className='text-2xl font-semibold'>
          {name}
        </Typography>
        <Typography
          as='p'
          className='mt-2 text-typo-tertiary text-[14px] line-clamp-3'
        >
          {description}
        </Typography>
        <UnderlineLink
          href='/'
          className='text-primary-400 mt-4 border-primary-400'
        >
          Lihat Detail
        </UnderlineLink>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'></div>
    </div>
  );
};

export default CampaignCard;
