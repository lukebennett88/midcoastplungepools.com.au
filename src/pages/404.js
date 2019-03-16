import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <SEO title="404: Not found" />
      <div className="flex items-center justify-center mx-auto w-full">
        <div className="max-w-sm p-4">
          <h1>404: Page not found</h1>
          <p>The page you were looking for can not be found.</p>
          <p className="py-4">
            <Link to="/" className="button">
              Return to home
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
