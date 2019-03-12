import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import SEO from '../components/SEO';

const SuccessPage = () => (
  <Layout>
    <Wrapper>
      <SEO title="Success: message sent" />
      <div className="max-w-2xl mx-auto w-full">
        <div className="max-w-md p-4">
          <h1>Message sent</h1>
          <hr />
          <p>Thank you for your message.</p>
          <p>
            <Link className="button" to="/">
              Return to home
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  </Layout>
);

export default SuccessPage;
