import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import AfterHeroSection from '@/pages/section/after-hero';
import CampaignSection from '@/pages/section/campaign';
import CSRSection from '@/pages/section/csr';
import EventSection from '@/pages/section/event';
import HeroSection from '@/pages/section/hero';
import VideoSection from '@/pages/section/video';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <Header />
          <HeroSection />
          <AfterHeroSection />
          <CampaignSection />
          <CSRSection />
          <VideoSection />
          <EventSection />
          <Footer />
        </section>
      </main>
    </Layout>
  );
}
