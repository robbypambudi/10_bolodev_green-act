import { Clock, Heart } from 'lucide-react';
import Image from 'next/image';

import UnderlineLink from '@/components/links/UnderlineLink';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

const CampaignCard = ({
  name,
  description,
  image,
  poin,
  deadline,
}: {
  name: string;
  description: string;
  image: string;
  poin: number;
  deadline: string;
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
      </div>

      <div className='mt-5 px-5'>
        <div className='flex gap-3'>
          <Tag
            leftIcon={Clock}
            color='DEFAULT'
            className='text-[#4E46B4] bg-[#bfbaff]'
          >
            {deadline}
          </Tag>
          <Tag leftIcon={Heart} color='secondary'>
            {poin} Poin
          </Tag>
        </div>
        <Typography as='h2' className='text-2xl mt-4 font-semibold'>
          {name}
        </Typography>
        <Typography
          as='p'
          className='mt-2 text-typo-tertiary text-[14px] line-clamp-3'
        >
          {description}
        </Typography>
        <UnderlineLink
          href='/campaign/1'
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
