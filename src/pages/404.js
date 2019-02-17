import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex flex-1 items-center justify-center text-center w-full">
      <Link className="flex flex-col no-underline" to="/">
        <h1 className="font-condensed text-grey-darkest text-5xl uppercase">
          404: Page not found
        </h1>
        <p className="font-bold no-underline text-teal-dark text-lg">
          Click to return to the home page
        </p>
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
