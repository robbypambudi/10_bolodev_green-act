import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';

import CrowdfundingCard from '@/pages/section/components/card/crowdfunding-card';

const crowdfundings = [
  {
    name: 'Lindungi Alam, Hidupkan Harapan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-1.png',
    deadline: '2 hari lagi',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Perlindungan Hutan Mangrove di Surabaya',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-2.png',
    deadline: '2 hari lagi',
    currentNominal: 4230000,
    total: 15000000,
  },
  {
    name: 'Perlindungan Satwa Terancam Punah',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque voluptates sint deleniti at repellendus assumenda atque fuga natus exercitationem temporibus eveniet repudiandae modi culpa obcaecati, quos nesciunt dolorem odit.',
    image: '/images/crowdfunding/crowdfunding-1.png',
    deadline: '2 hari lagi',
    currentNominal: 4230000,
    total: 15000000,
  },
];

const CrowdfundingSection = () => {
  return (
    <section className='py-10 md:py-20'>
      <div className='layout'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <Typography as='h1' className='text-4xl font-semibold font-averta'>
              Crowdfunding
            </Typography>
            <Typography as='p' className='text-typo-secondary mt-4'>
              Penghijauan mendorong kesadaran dan aksi melalui kegiatan dan
              edukasi lingkungan.
            </Typography>
          </div>
          <ButtonLink href='/crowd-funding' className='border-none py-3'>
            Lihat Semua
          </ButtonLink>
        </div>

        <div className='flex flex-col md:flex-row mt-10 justify-between gap-10'>
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
    </section>
  );
};

export default CrowdfundingSection;
