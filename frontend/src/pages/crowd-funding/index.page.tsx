import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import CrowdfundingCard from '@/pages/section/components/card/crowdfunding-card';

const CrowdfundingSection = () => {
  return (
    <Layout>
      <Seo templateTitle='Browse Crowdfunding' />

      <main>
        <Header />
        <div className=''>
          <div className='layout pb-20 pt-10'>
            <div className='flex flex-col items-start'>
              <Breadcrumb crumbs={['/', '/crowd-funding']} className='mb-4' />
              <Typography
                as='h1'
                className='text-4xl font-semibold font-averta'
              >
                Crowdfunding
              </Typography>
              <Typography as='p' className='text-typo-secondary mt-4'>
                Crowdfunding penghijauan yang sedang berlangsung
              </Typography>
            </div>

            <div className='mt-10 flex flex-wrap gap-5 gap-y-16'>
              <CrowdfundingCard
                deadline='28 Apr 2024'
                name='Gowes to Kebun Binatang Surabaya'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
                image='/images/dummy-card.png'
              />
              <CrowdfundingCard
                deadline='28 Apr 2024'
                name='Gowes to Kebun Binatang Surabaya'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
                image='/images/dummy-card.png'
              />
              <CrowdfundingCard
                deadline='28 Apr 2024'
                name='Gowes to Kebun Binatang Surabaya'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
                image='/images/dummy-card.png'
              />
              <CrowdfundingCard
                deadline='28 Apr 2024'
                name='Gowes to Kebun Binatang Surabaya'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
                image='/images/dummy-card.png'
              />
              <CrowdfundingCard
                deadline='28 Apr 2024'
                name='Gowes to Kebun Binatang Surabaya'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
                image='/images/dummy-card.png'
              />
              <CrowdfundingCard
                deadline='28 Apr 2024'
                name='Gowes to Kebun Binatang Surabaya'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
                image='/images/dummy-card.png'
              />
              <CrowdfundingCard
                deadline='28 Apr 2024'
                name='Gowes to Kebun Binatang Surabaya'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
                image='/images/dummy-card.png'
              />
              <CrowdfundingCard
                deadline='28 Apr 2024'
                name='Gowes to Kebun Binatang Surabaya'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
                image='/images/dummy-card.png'
              />
              <CrowdfundingCard
                deadline='28 Apr 2024'
                name='Gowes to Kebun Binatang Surabaya'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.'
                image='/images/dummy-card.png'
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CrowdfundingSection;
