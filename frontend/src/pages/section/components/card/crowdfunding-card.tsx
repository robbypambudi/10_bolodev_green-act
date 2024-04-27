import Image from 'next/image';
import Link from 'next/link';

import { formatToRupiah } from '@/lib/currency';

import ProgressBar from '@/components/ProgressBar';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

const ProgressNominal = ({
  currentNominal,
  total,
}: {
  currentNominal: number;
  total: number;
}) => {
  return (
    <div className='flex mt-4'>
      <Typography
        as='h2'
        variant='s1'
        className='text-lg md:text-2xl font-semibold text-secondary-500'
      >
        {formatToRupiah(currentNominal)}
      </Typography>
      <Typography
        as='h2'
        variant='s1'
        className='text-lg md:text-2xl text-typo-tertiary mx-2'
      >
        /
      </Typography>
      <Typography
        as='h2'
        variant='s1'
        className='text-lg md:text-2xl text-typo-tertiary'
      >
        {formatToRupiah(total)}
      </Typography>
    </div>
  );
};

const CrowdfundingCard = ({
  deadline,
  name,
  description,
  image,
  currentNominal,
  total,
}: {
  deadline: string;
  name: string;
  description: string;
  image: string;
  currentNominal: number;
  total: number;
}) => {
  return (
    <Link href='/crowd-funding/1'>
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
          <Tag color='danger'>{deadline}</Tag>
        </div>
        <Typography as='h1' variant='h2' className='mt-4 text-gray-600'>
          {name}
        </Typography>
        <Typography as='p' className='mt-2 mb-4 text-gray-400 line-clamp-3'>
          {description}
        </Typography>
        <ProgressBar progress={(currentNominal / total) * 100} />
        <ProgressNominal currentNominal={currentNominal} total={total} />
      </div>
    </Link>
  );
};

export default CrowdfundingCard;
