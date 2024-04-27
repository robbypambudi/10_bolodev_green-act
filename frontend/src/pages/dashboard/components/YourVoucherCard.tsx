import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';

const YourVoucherCard = ({
  name,
  deadline,
}: {
  name: string;
  deadline: string;
}) => {
  return (
    <div className='bg-white border-2 cursor-pointer hover:border-0 rounded-2xl sm:w-[360px] p-5 w-full overflow-hidden hover:shadow-lg duration-150'>
      <Typography as='h3' color='danger' className='text-lg font-semibold'>
        {deadline}
      </Typography>
      <Typography as='h2' className='text-2xl mt-2'>
        {name}
      </Typography>
      <ButtonLink
        href='/'
        className='mt-4 bg-white text-black border-black hover:bg-primary-500 hover:border-white hover:text-white w-full'
      >
        Lihat Voucher
      </ButtonLink>
    </div>
  );
};

export default YourVoucherCard;
