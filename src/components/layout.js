import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import '../css/tailwind.css';
import '../css/typography.css';
import '../css/global.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="flex flex-col flex-1 md:justify-start w-full">
          {children}
        </main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
