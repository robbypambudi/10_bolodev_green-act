import { HeartIcon, Play } from 'lucide-react';
import React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const listData = [
  {
    title: 'Peran Keanekaragaman Hayati',
    poin: 150,
  },
  {
    title: 'Memanfaatkan Energi Terbarukan',
    poin: 200,
  },
  {
    title: 'Mengenal Dampak Perubahan Iklim',
    poin: 100,
  },
  {
    title: 'Peran Keanekaragaman Hayati',
    poin: 150,
  },
  {
    title: 'Memanfaatkan Energi Terbarukan',
    poin: 200,
  },
  {
    title: 'Mengenal Dampak Perubahan Iklim',
    poin: 100,
  },
  {
    title: 'Peran Keanekaragaman Hayati',
    poin: 150,
  },
  {
    title: 'Memanfaatkan Energi Terbarukan',
    poin: 200,
  },
  {
    title: 'Mengenal Dampak Perubahan Iklim',
    poin: 100,
  },
];

const List = ({ title, poin }: { title: string; poin: number }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col gap-3'>
        <div className='text-secondary-400 flex gap-2 cursor-pointer'>
          <HeartIcon size={20} fill='#F4AE5F' />
          <Typography
            as='p'
            className='text-sm text-secondary-400 font-semibold'
          >
            {poin} poin
          </Typography>
        </div>
        <Typography as='h1' className='text-xl font-semibold font-averta'>
          {title}
        </Typography>
      </div>
      <ButtonLink href='edu-video/1' className='border-none py-2'>
        Tonton Video
      </ButtonLink>
    </div>
  );
};

const ECoursePage = () => {
  return (
    <Layout>
      <Seo templateTitle='Browse Edu Video' />

      <main>
        <Header />
        <div className='flex flex-col layout mt-8 mb-16'>
          <Breadcrumb crumbs={['/', 'edu-video/[id]']} className='mb-4' />

          <section className='flex gap-10'>
            {/* ====== SECTION KIRI ======= */}
            <div className='flex flex-col w-8/12 gap-8'>
              <div className='flex items-center justify-center relative rounded-2xl overflow-hidden'>
                <NextImage
                  src='/images/dummy-card.png'
                  alt='Hero Image'
                  width={1200}
                  height={1200}
                  className='w-full h-full object-contain'
                />
                <span className='rounded-full p-4 absolute z-50 bg-typo-divider cursor-pointer'>
                  <Play size={24} className='text-primary-400' />
                </span>
                <div className='absolute inset-0 flex items-center justify-center bg-black opacity-50'>
                  {/* overlay content */}
                </div>
              </div>

              <Typography as='h1' variant='j1'>
                Video Title
              </Typography>

              <Typography
                as='p'
                className='prose max-w-none text-typo-secondary'
              >
                Sed ipsum morbi est eu. Commodo elementum eget nulla non magnis
                malesuada pharetra ut. Id eu vestibulum faucibus venenatis. At
                aliquam laoreet viverra adipiscing eu in lorem integer a. Ante
                nibh porttitor enim enim. Bibendum eget augue libero est leo
                ante diam egestas. Pellentesque etiam sit leo sed. In non eu
                senectus aliquam rhoncus egestas sit vitae. Nec platea amet
                ipsum sit nec.
                <br />
                <br />
                Feugiat in tempor amet magna sem tellus maecenas convallis
                etiam. Quisque duis pretium tellus elementum. Non pretium proin
                lorem congue nec sed. Scelerisque scelerisque viverra in
                fermentum luctus. Senectus vitae sollicitudin tortor vitae eu
                dis bibendum nisl. Eu vulputate quam augue ultrices eget.
                Aliquet venenatis blandit rhoncus tristique ornare cum lectus
                iaculis ut. Mi accumsan viverra massa a imperdiet faucibus.
                Pulvinar metus egestas dapibus ullamcorper viverra in velit
                congue. Ac egestas nibh proin etiam cursus tristique. At
                condimentum nisl tristique malesuada urna. Vulputate sagittis
                arcu lacinia feugiat amet
                <br />
                <br />
                Consequat donec sem porttitor sed arcu cras faucibus id potenti.
                Ac viverra ultrices risus vitae nulla tempor proin venenatis.
                Habitant lectus accumsan donec fermentum eu sit egestas. Quam
                vulputate et sed eu morbi id luctus. Enim tellus ut aliquam eu.
                Gravida pulvinar fringilla laoreet netus. Eu quis feugiat ipsum
                elementum id bibendum ac. Maecenas nunc lectus nibh hendrerit.
                Interdum lacinia id in cursus neque justo. Sit donec dignissim
                ultrices imperdiet viverra. Nam eros quis erat sem elit vitae
                placerat convallis tempor. Orci etiam risus condimentum amet
                pellentesque id accumsan. Tempus nunc et vulputate enim nibh a
                nisl tempor tellus. Aliquam pulvinar purus a lorem blandit id
                non cras. Ut lorem elit mollis neque malesuada in. Blandit
                ornare.
              </Typography>
            </div>

            {/* ====== SECTION KANAN ======= */}
            <div className='w-4/12 flex flex-col items-start'>
              {listData.map((item, index) => (
                <div key={index} className='w-full'>
                  <List title={item.title} poin={item.poin} />
                  <div className='h-[1px] w-full bg-gray-100 my-5' />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default ECoursePage;