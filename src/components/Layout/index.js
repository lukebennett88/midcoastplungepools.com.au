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
      <div
        id="top"
        className="antialiased flex flex-col font-sans min-h-screen text-blue-grey-700"
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="flex flex-col flex-1 md:justify-start w-full">
          {children}
        </main>
        <footer className="p-4 text-center text-grey-500">
          © {new Date().getFullYear()} {data.site.siteMetadata.title} &bull;
          Website by{' '}
          <a href="https://www.lukebennett.com.au" rel="nofollow">
            Luke Bennett
          </a>
        </footer>
        <a
          href="#top"
          className="bg-teal-600 hidden md:flex fixed h-10 items-end justify-center leading-none mb-16 mr-16 no-underline opacity-75 pin-b pin-r rounded-full shadow-lg w-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-current text-teal-050 h-full w-full"
          >
            <path
              className="secondary"
              fillRule="evenodd"
              d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
            />
          </svg>
        </a>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
