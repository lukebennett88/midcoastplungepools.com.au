import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="max-w-2xl mx-auto px-4 py-8 w-full">
      <div className="max-w-md mx-auto w-full">
        <h1>Mid Coast Pluge Pools</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div className="max-w-sm mx-auto w-full">
          <Image />
        </div>
        <Link to="/style-sample/">Check out the Style Sample page</Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
