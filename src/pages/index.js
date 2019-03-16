import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Products from '../components/Products';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `plunge pool port macquarie`,
        `plunge pools port macquarie`,
        `pool companies port macquarie`,
        `swimming pool builders port macquarie`,
        `concrete pool builders port macquarie`,
        `future pool company port macquarie`,
        `pools by design port macquarie`,
        `pool builders in port macquarie`,
      ]}
    />
    <Hero />
    <About />
    <WhyUs />
    <Products />
    <Contact />
  </Layout>
);

export default IndexPage;
