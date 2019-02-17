import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />
    <div className="flex flex-1 items-center justify-center w-full">
      <h1 className="text-5xl">Hello World!</h1>
    </div>
  </Layout>
);

export default IndexPage;
