import { formatLocaleDate } from '@/lib/date';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import AvatarCard from '@/components/cards/AvatarCard';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/tabs/Tabs';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

type KetentuanTabsType = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export default function DetailCrowdfundingPage() {
  const KETENTUAN_TABS: KetentuanTabsType[] = [
    {
      id: 'umum',
      label: 'Top Donatur',
      content: <ListDonatur />,
    },
    {
      id: 'khusus',
      label: 'Donatur Terkini',
      content: <ListDonatur />,
    },
  ];

  const CROWDFUNDING_TABS: KetentuanTabsType[] = [
    {
      id: 'cerita',
      label: 'Cerita',
      content: <ContentTabs />,
    },
    {
      id: 'update',
      label: 'Update',
      content: <ContentTabs />,
    },
    {
      id: 'pencairan-dana',
      label: 'Pencairan Dana',
      content: <ContentTabs />,
    },
  ];

  return (
    <Layout>
      <Seo templateTitle='Detail Crowdfunding' />

      <main>
        <Header />
        <section className='layout'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-x-4'>
            <div className='col-span-2'>
              <Breadcrumb
                crumbs={['/crowd-funding', '/crowd-funding/[id]']}
                className='mb-4'
              />
              <div className='relative w-full md:h-[640px] h-[320px]'>
                <NextImage
                  src='/images/campaign/dumy-detail.png'
                  alt='Detail Crowdfunding'
                  className='w-full'
                  layout='fill'
                />
              </div>

              <div className='mt-4'>
                <div className='flex items-center space-x-2 mb-4'>
                  <Tag color='danger'>2 hari lagi</Tag>
                </div>
                <Typography as='h1' variant='j1'>
                  Crowdfunding Title
                </Typography>
                <Typography
                  as='h2'
                  className='mt-4 text-typo-secondary text-xl'
                >
                  Kebon Binatang Surabaya
                </Typography>
              </div>
              <Tabs className='space-y-4 mt-4' defaultValue='cerita'>
                <TabsList className='flex w-full flex-wrap justify-center text-start'>
                  {CROWDFUNDING_TABS.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className='justify-start sm:justify-center w-1/3'
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {CROWDFUNDING_TABS.map((tab) => (
                  <TabsContent
                    key={tab.id}
                    value={tab.id}
                    className='prose max-w-none'
                  >
                    {tab.content}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            <div>
              <div className='p-4 mt-4'>
                <Typography as='h3' variant='h3'>
                  Donatur <span className='text-primary-500'>(120+)</span>
                </Typography>
                <Tabs className='space-y-4 mt-4' defaultValue='umum'>
                  <TabsList className='flex w-full flex-wrap justify-center text-start'>
                    {KETENTUAN_TABS.map((tab) => (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className='justify-start sm:justify-center w-1/2'
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {KETENTUAN_TABS.map((tab) => (
                    <TabsContent
                      key={tab.id}
                      value={tab.id}
                      className='max-w-none'
                    >
                      {tab.content}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
              <Typography
                as='h2'
                variant='s1'
                className='mt-4 text-lg text-typo-tertiary'
              >
                Dana Terkumpul
              </Typography>
              <div className='flex'>
                <Typography
                  as='h2'
                  variant='s1'
                  className='text-2xl font-semibold text-secondary-500'
                >
                  Rp423.000
                </Typography>
                <Typography
                  as='h2'
                  variant='s1'
                  className='text-2xl text-typo-tertiary mx-2'
                >
                  /
                </Typography>
                <Typography
                  as='h2'
                  variant='s1'
                  className='text-2xl text-typo-tertiary'
                >
                  Rp15.000.000
                </Typography>
              </div>
              <Button className='mt-4 w-full border-none' variant='primary'>
                Donasi
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ListDonatur() {
  return (
    <div className='space-y-2 mt-4'>
      {USER_PARTICIPANTS.map((user) => (
        <AvatarCard
          key={user.id}
          name={user.name}
          imageUrl={user.imageUrl}
          particapateDate={formatLocaleDate(
            user.particapateDate,
            'FULL_DATE_WITH_DAY',
          )}
        />
      ))}
    </div>
  );
}

function ContentTabs() {
  return (
    <div className='mt-4'>
      <Typography as='p' className='prose max-w-none'>
        Sed ipsum morbi est eu. Commodo elementum eget nulla non magnis
        malesuada pharetra ut. Id eu vestibulum faucibus venenatis. At aliquam
        laoreet viverra adipiscing eu in lorem integer a. Ante nibh porttitor
        enim enim. Bibendum eget augue libero est leo ante diam egestas.
        Pellentesque etiam sit leo sed. In non eu senectus aliquam rhoncus
        egestas sit vitae. Nec platea amet ipsum sit nec.
        <br />
        <br />
        Feugiat in tempor amet magna sem tellus maecenas convallis etiam.
        Quisque duis pretium tellus elementum. Non pretium proin lorem congue
        nec sed. Scelerisque scelerisque viverra in fermentum luctus. Senectus
        vitae sollicitudin tortor vitae eu dis bibendum nisl. Eu vulputate quam
        augue ultrices eget. Aliquet venenatis blandit rhoncus tristique ornare
        cum lectus iaculis ut. Mi accumsan viverra massa a imperdiet faucibus.
        Pulvinar metus egestas dapibus ullamcorper viverra in velit congue. Ac
        egestas nibh proin etiam cursus tristique. At condimentum nisl tristique
        malesuada urna. Vulputate sagittis arcu lacinia feugiat amet
        <br />
        <br />
        Consequat donec sem porttitor sed arcu cras faucibus id potenti. Ac
        viverra ultrices risus vitae nulla tempor proin venenatis. Habitant
        lectus accumsan donec fermentum eu sit egestas. Quam vulputate et sed eu
        morbi id luctus. Enim tellus ut aliquam eu. Gravida pulvinar fringilla
        laoreet netus. Eu quis feugiat ipsum elementum id bibendum ac. Maecenas
        nunc lectus nibh hendrerit. Interdum lacinia id in cursus neque justo.
        Sit donec dignissim ultrices imperdiet viverra. Nam eros quis erat sem
        elit vitae placerat convallis tempor. Orci etiam risus condimentum amet
        pellentesque id accumsan. Tempus nunc et vulputate enim nibh a nisl
        tempor tellus. Aliquam pulvinar purus a lorem blandit id non cras. Ut
        lorem elit mollis neque malesuada in. Blandit ornare.
      </Typography>
    </div>
  );
}

const USER_PARTICIPANTS = [
  {
    id: 1,
    name: 'User 1',
    imageUrl: '/images/campaign/avatar.png',
    particapateDate: new Date('2021-09-01'),
  },
  {
    id: 2,
    name: 'User 2',
    imageUrl: '/images/campaign/avatar.png',
    particapateDate: new Date('2021-09-01'),
  },
];
