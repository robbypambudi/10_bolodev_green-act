import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CallUsSection from '@/pages/section/call-us';
import CampaignSection from '@/pages/section/campaign';
import CSRSection from '@/pages/section/csr';
import EventSection from '@/pages/section/event';
import FeatureSection from '@/pages/section/feature';
import HeroSection from '@/pages/section/hero';
import VideoSection from '@/pages/section/video';
import VoucherSection from '@/pages/section/voucher';

export default withAuth(HomePage, 'optional');
function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <Header />
          <HeroSection />
          <FeatureSection />
          <VoucherSection />
          <CampaignSection />
          <CSRSection />
          <VideoSection />
          <EventSection />
          <CallUsSection />
          <Footer />
        </section>
      </main>
    </Layout>
  );
}
