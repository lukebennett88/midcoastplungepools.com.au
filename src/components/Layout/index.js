/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import '../../css/tailwind.css';
import '../../css/typography.css';
import '../../css/layout.css';

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
      <div className="antialiased flex flex-col font-sans min-h-screen text-blue-grey-700">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="flex flex-col flex-1 md:justify-start w-full">
          {children}
        </main>
        <footer className="p-4 text-center">
          © {new Date().getFullYear()} {data.site.siteMetadata.title} &bull;
          Website by{' '}
          <a href="https://www.lukebennett.com.au" rel="nofollow">
            Luke Bennett
          </a>
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
