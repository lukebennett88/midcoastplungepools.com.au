import React from 'react';

import Layout from '../components/layout';
import ContactForm from '../components/form';

const ContactPage = () => {
  return (
    <Layout>
      <div className="flex flex-1 flex-col max-w-2xl mx-auto px-4 py-8 w-full">
        <h1 className="mb-6">Contact Page</h1>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
