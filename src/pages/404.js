import React from 'react';

// import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <div className="flex flex-col h-screen items-center justify-center max-w-2xl mx-auto p-8 text-blue-grey-800 w-full">
    <SEO title="404: Not found" />
    <h1>404: PAGE NOT FOUND</h1>
  </div>
);

export default NotFoundPage;
