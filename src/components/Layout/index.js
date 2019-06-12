import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

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
