import { Clock, Heart } from 'lucide-react';

import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

import TukarPoinModal from '@/pages/section/components/TukarPoinModal';

const VoucherCard = ({
  name,
  deadline,
  poin,
}: {
  name: string;
  deadline: string;
  poin: number;
}) => {
  return (
    <div className='bg-white border-2 cursor-pointer hover:border-0 rounded-2xl sm:w-[360px] p-5 w-full overflow-hidden hover:shadow-lg duration-150'>
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
      <Typography as='h2' className='text-2xl font-semibold mt-4'>
        {name}
      </Typography>

      <TukarPoinModal>
        {({ openModal }) => (
          <Typography
            onClick={openModal}
            className='text-primary-400 mt-4 border-primary-400 underline decoration-dashed hover:decoration-solid'
          >
            Tukar Poin
          </Typography>
        )}
      </TukarPoinModal>
    </div>
  );
};

export default VoucherCard;
