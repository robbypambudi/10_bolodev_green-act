import { ChevronLeft } from 'lucide-react';

import UnderlineLink from '@/components/links/UnderlineLink';
import Typography from '@/components/typography/Typography';

import CampaignCard from '@/pages/section/components/card/campaign-card';

const CampaignPage = () => {
  return (
    <div className='bg-[#F0F2F5]'>
      <div className='layout py-20'>
        <div className='flex flex-col items-start'>
          <Typography as='h1' className='text-4xl font-semibold font-averta'>
            Campaign
          </Typography>
          <Typography as='p' className='text-typo-secondary mt-4'>
            Campaign penghijauan yang sedang berlangsung
          </Typography>
          <UnderlineLink
            href='/'
            className='text-primary-400 mt-4 border-primary-400'
          >
            <ChevronLeft /> Back to main page
          </UnderlineLink>
        </div>

        <div className='mt-12 flex flex-wrap justify-between gap-5'>
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
          <CampaignCard
            image='/images/dummy-card.png'
            name='Campaign Title'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias odit ipsa consequuntur similique, minima pariatur est beatae esse aspernatur quia accusamus facilis. Ut minima aut ratione, voluptates recusandae iste.'
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
