import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Logo from '../images/logo.svg';

import '../css/tailwind.css';
import '../css/typography.css';
import '../css/layout.css';

const IndexPage = ({ data }) => (
  <div className="flex flex-col h-screen items-center justify-center max-w-2xl mx-auto p-8 text-blue-grey-800 w-full">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <img className="max-w-sm mb-6 w-full" src={Logo} alt="" />
    <p>Website coming soon!</p>
    <p>
      <a className="button border-2" href={data.site.siteMetadata.phone}>
        {data.site.siteMetadata.phone_formatted}
      </a>
    </p>
  </div>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        phone
        phone_formatted
      }
    }
  }
`;

export default IndexPage;
