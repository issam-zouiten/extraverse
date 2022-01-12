import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import CustomerSupport from 'sections/customer-support';
import Feature from 'sections/feature';
import VideoOne from 'sections/video-one';
import Pricing from 'sections/pricing';
// import CallToAction from 'sections/call-to-action';
import BoostAgencies from 'sections/boost-agencies';
import FAQ from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="MetaNord" />
          <Banner />
          <Services />
          <BoostAgencies />
          <VideoOne />
          <Testimonials />
          <CustomerSupport />
          {/* <Feature /> */}
          <Pricing />
          {/* <CallToAction /> */}
          <FAQ />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
