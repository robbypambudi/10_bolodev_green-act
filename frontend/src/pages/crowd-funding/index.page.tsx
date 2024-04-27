import Breadcrumb from '@/components/Breadcrumb';
import withAuth from '@/components/hoc/withAuth';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import CrowdfundingCard from '@/pages/section/components/card/crowdfunding-card';

const crowdfundings = [
  {
    name: 'Lindungi Alam, Hidupkan Harapan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-1.png',
    deadline: '28 Apr 2024',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Perlindungan Hutan Mangrove di Surabaya',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-2.png',
    deadline: '28 Apr 2024',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Perlindungan Satwa Terancam Punah',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-1.png',
    deadline: '28 Apr 2024',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Perlindungan Hutan Mangrove di Surabaya',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-2.png',
    deadline: '28 Apr 2024',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Perlindungan Satwa Terancam Punah',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-1.png',
    deadline: '28 Apr 2024',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Lindungi Alam, Hidupkan Harapan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-1.png',
    deadline: '28 Apr 2024',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Perlindungan Hutan Mangrove di Surabaya',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-2.png',
    deadline: '28 Apr 2024',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Perlindungan Satwa Terancam Punah',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-1.png',
    deadline: '28 Apr 2024',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Perlindungan Hutan Mangrove di Surabaya',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-2.png',
    deadline: '28 Apr 2024',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Perlindungan Satwa Terancam Punah',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-1.png',
    deadline: '28 Apr 2024',
    currentNominal: 4230000,
    total: 15000000,
  },
];

const CrowdFundingPage = () => {
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
              {crowdfundings.map((crowdfunding, index) => (
                <CrowdfundingCard
                  key={index}
                  name={crowdfunding.name}
                  description={crowdfunding.description}
                  image={crowdfunding.image}
                  deadline={crowdfunding.deadline}
                  currentNominal={crowdfunding.currentNominal}
                  total={crowdfunding.total}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default withAuth(CrowdFundingPage, 'optional');
