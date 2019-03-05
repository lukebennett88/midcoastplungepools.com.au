import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="max-w-2xl mx-auto px-4 py-8 w-full">
      <div className="max-w-md mx-auto w-full">
        <h1>{data.site.siteMetadata.title}</h1>
        <p>
          <Link to="/style-sample/">Check out the Style Sample page</Link>
        </p>
        <div className="w-full">
          <Image />
        </div>
      </div>
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
