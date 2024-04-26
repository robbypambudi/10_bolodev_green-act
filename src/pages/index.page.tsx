import { Flower } from 'lucide-react';
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import EventSection from '@/pages/landing/section/event';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <Header />
          <EventSection />
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <Flower size={40} className='text-primary-500' />

            <Typography as='h1' variant='j1' className='mt-2'>
              Aether Design System
            </Typography>
            <Typography variant='b3' color='tertiary'>
              Inspired by{' '}
              <UnderlineLink href='https://moon.io'>moon.io</UnderlineLink>,
              adjusted to our needs
            </Typography>
            <Typography variant='b3' className='mt-6' color='secondary'>
              <ArrowLink href='https://github.com/theodorusclarence/aether-design-system'>
                See the repository
              </ArrowLink>
            </Typography>
          </div>
          <Footer />
        </section>
      </main>
    </Layout>
  );
}
