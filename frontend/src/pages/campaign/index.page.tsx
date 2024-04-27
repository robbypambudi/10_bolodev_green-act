import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import CampaignCard from '@/pages/section/components/card/campaign-card';

const CampaignPage = () => {
  return (
    <Layout>
      <Seo templateTitle='Browse Campaign' />

      <main>
        <Header />
        <div className='bg-[#F0F2F5]'>
          <div className='layout pb-20 pt-10'>
            <div className='flex flex-col items-start'>
              <Breadcrumb crumbs={['/', '/campaign']} className='mb-4' />
              <Typography
                as='h1'
                className='text-4xl font-semibold font-averta'
              >
                Campaign
              </Typography>
              <Typography as='p' className='text-typo-secondary mt-4'>
                Campaign penghijauan yang sedang berlangsung
              </Typography>
            </div>

            <div className='mt-10 flex flex-wrap gap-5 gap-y-16'>
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
      </main>
    </Layout>
  );
};

export default CampaignPage;
