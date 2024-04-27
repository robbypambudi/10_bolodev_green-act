import { Clock, Heart, UsersRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

const EventCard = ({
  deadline,
  poin,
  count_person,
  name,
  description,
  image,
}: {
  deadline: string;
  poin: number;
  count_person: string;
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <Link href='/event/1'>
      <div className='flex flex-col sm:w-[480px] cursor-pointer group'>
        <div className='rounded-xl overflow-hidden'>
          <Image
            src={image}
            alt='Dummy Image'
            className='rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out'
            width={500}
            height={250}
          />
        </div>
        <div className='flex mt-4 gap-4'>
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
          <Tag leftIcon={UsersRound} color='danger'>
            {count_person}
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

export default EventCard;
