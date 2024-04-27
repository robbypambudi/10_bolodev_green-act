import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import EduVideoCard from '@/pages/section/components/card/edu-video-card';

const CrowdfundingSection = () => {
  return (
    <Layout>
      <Seo templateTitle='Browse Video' />

      <main>
        <Header />
        <div className=''>
          <div className='layout pb-20 pt-10'>
            <div className='flex flex-col items-start'>
              <Breadcrumb crumbs={['/', '/edu-video']} className='mb-4' />
              <Typography
                as='h1'
                className='text-4xl font-semibold font-averta'
              >
                Edu Video
              </Typography>
              <Typography as='p' className='text-typo-secondary mt-4'>
                Edu Video penghijauan yang sedang berlangsung
              </Typography>
            </div>

            <div className='mt-10 flex flex-wrap gap-5 gap-y-16'>
              <EduVideoCard
                poin={100}
                name='Video Title'
                description='Video Tentang Gowes ke Kebun Binatang Surabaya'
                image='/images/dummy-card.png'
              />
              <EduVideoCard
                poin={100}
                name='Video Title'
                description='Video Tentang Gowes ke Kebun Binatang Surabaya'
                image='/images/dummy-card.png'
              />
              <EduVideoCard
                poin={100}
                name='Video Title'
                description='Video Tentang Gowes ke Kebun Binatang Surabaya'
                image='/images/dummy-card.png'
              />
              <EduVideoCard
                poin={100}
                name='Video Title'
                description='Video Tentang Gowes ke Kebun Binatang Surabaya'
                image='/images/dummy-card.png'
              />
              <EduVideoCard
                poin={100}
                name='Video Title'
                description='Video Tentang Gowes ke Kebun Binatang Surabaya'
                image='/images/dummy-card.png'
              />
              <EduVideoCard
                poin={100}
                name='Video Title'
                description='Video Tentang Gowes ke Kebun Binatang Surabaya'
                image='/images/dummy-card.png'
              />
              <EduVideoCard
                poin={100}
                name='Video Title'
                description='Video Tentang Gowes ke Kebun Binatang Surabaya'
                image='/images/dummy-card.png'
              />
              <EduVideoCard
                poin={100}
                name='Video Title'
                description='Video Tentang Gowes ke Kebun Binatang Surabaya'
                image='/images/dummy-card.png'
              />
              <EduVideoCard
                poin={100}
                name='Video Title'
                description='Video Tentang Gowes ke Kebun Binatang Surabaya'
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
