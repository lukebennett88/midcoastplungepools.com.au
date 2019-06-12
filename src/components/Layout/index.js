/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import '../../css/tailwind.css';
import '../../css/typography.css';
import '../../css/global.css';

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
      <div className="flex flex-col font-sans min-h-screen relative text-grey-darkest">
        <Helmet>
          <script src="/google-tag-manager.js" />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NXJF3KS"
              height="0"
              width="0"
              style={{ display: `none`, visibility: `hidden` }}
            />
          </noscript>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
