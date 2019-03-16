import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import SEO from '../components/SEO';

const SuccessPage = () => (
  <Layout>
    <Wrapper>
      <SEO title="Success: message sent" />
      <div className="flex items-center justify-center mx-auto w-full">
        <div className="max-w-sm p-4">
          <h1>Message sent</h1>
          <p>
            Thank you for your message. We will get back to you as soon as we
            can.
          </p>
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
