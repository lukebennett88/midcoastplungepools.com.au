import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const SuccessPage = () => (
  <Layout>
    <SEO title="Success: message sent" />
    <div className="flex flex-1 items-center justify-center text-center w-full">
      <Link className="flex flex-col no-underline" to="/">
        <h1 className="font-condensed text-grey-darkest text-5xl uppercase">
          Message sent
        </h1>
        <p>Thank you for your message.</p>
        <p className="underline">Click here to return to the home page.</p>
      </Link>
    </div>
  </Layout>
);

export default SuccessPage;
