import { formatToRupiah } from '@/lib/currency';
import { formatLocaleDate } from '@/lib/date';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import AvatarCard from '@/components/cards/AvatarCard';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import ProgressBar from '@/components/ProgressBar';
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

const ProgressNominal = ({
  currentNominal,
  total,
}: {
  currentNominal: number;
  total: number;
}) => {
  return (
    <div className='flex mb-2'>
      <Typography
        as='h2'
        variant='s1'
        className='text-lg md:text-2xl font-semibold text-secondary-500'
      >
        {formatToRupiah(currentNominal)}
      </Typography>
      <Typography
        as='h2'
        variant='s1'
        className='text-lg md:text-2xl text-typo-tertiary mx-2'
      >
        /
      </Typography>
      <Typography
        as='h2'
        variant='s1'
        className='text-lg md:text-2xl text-typo-tertiary'
      >
        {formatToRupiah(total)}
      </Typography>
    </div>
  );
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
                  Tanam Mangrove untuk Restorasi Lingkungan dan Kesejahteraan
                  Masyarakat
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

            <div className='p-4'>
              <div className='mt-4'>
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
              <ProgressNominal currentNominal={4230000} total={15000000} />
              <ProgressBar progress={30} />

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
        Sebuah kampanye yang bertujuan untuk memobilisasi masyarakat dalam upaya
        restorasi ekosistem mangrove guna memperbaiki lingkungan dan
        meningkatkan kesejahteraan komunitas lokal. Melalui kampanye ini, kami
        berkomitmen untuk mengedukasi dan menginspirasi masyarakat tentang
        pentingnya menjaga dan memulihkan ekosistem mangrove yang rusak. Dengan
        fokus pada penanaman mangrove, kami mengajak individu, kelompok, dan
        organisasi untuk turut serta dalam kegiatan restorasi.
        <br />
        <br />
        Kami percaya bahwa penanaman mangrove bukan hanya akan membantu
        memulihkan ekosistem yang terganggu, tetapi juga akan memberikan manfaat
        jangka panjang bagi lingkungan dan masyarakat sekitar. Ekosistem
        mangrove memiliki peran penting dalam melindungi pantai dari abrasi dan
        badai, menyediakan habitat bagi berbagai spesies, serta menjaga
        keseimbangan ekologi perairan. Selain mengorganisir kegiatan langsung
        seperti penanaman mangrove, kampanye ini juga akan menyelenggarakan
        berbagai kegiatan pendukung seperti sosialisasi, pelatihan, dan
        lokakarya tentang pentingnya konservasi mangrove dan praktik-praktik
        pengelolaan yang berkelanjutan.
        <br />
        <br />
        Dengan meningkatkan pemahaman dan kesadaran masyarakat, kami berharap
        dapat menciptakan budaya pelestarian lingkungan yang kuat dan
        berkelanjutan. Kampanye "Tanam Mangrove untuk Restorasi Lingkungan dan
        Kesejahteraan Masyarakat" juga akan mengedepankan partisipasi aktif
        masyarakat dalam pengelolaan dan pemantauan ekosistem mangrove setelah
        proses penanaman selesai. Dengan demikian, kampanye ini tidak hanya
        bertujuan untuk menghasilkan perubahan fisik, tetapi juga untuk
        membangun kapasitas lokal dan meningkatkan keterlibatan masyarakat dalam
        pengelolaan lingkungan mereka sendiri. Melalui kolaborasi dan kerja sama
        antara berbagai pihak, kami yakin bahwa kampanye ini akan memberikan
        dampak yang positif bagi lingkungan dan kesejahteraan masyarakat lokal.
        Mari bergabung bersama kami dalam kampanye ini dan bersama-sama kita
        tanam mangrove untuk masa depan yang lebih hijau dan berkelanjutan.
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
