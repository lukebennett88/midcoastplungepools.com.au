import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Image from '../components/Image';
import Logo from '../images/logo-white.svg';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `plunge pool port macquarie`,
        `plunge pools port macquarie`,
        `pool companies port macquarie`,
        `swimming pool builders port macquarie`,
        `concrete pool builders port macquarie`,
        `future pool company port macquarie`,
        `pools by design port macquarie`,
        `pool builders in port macquarie`,
      ]}
    />
    <div className="bg-white">
      <Hero
        title={data.site.siteMetadata.title}
        author={data.site.siteMetadata.author}
      />
      <Contact
        phone={data.site.siteMetadata.phone}
        phone_formatted={data.site.siteMetadata.phone_formatted}
        email={data.site.siteMetadata.email}
      />
    </div>
  </Layout>
);

const Hero = ({ title }) => (
  <div className="hero flex items-center max-w-3xl mx-auto overflow-hidden relative w-full">
    <div className="hero-container">
      <Image className="hero-img" />
    </div>
    <div className="max-w-sm mx-auto px-4 py-16 relative rounded text-center w-full">
      <Link to="/">
        <h1 className="text-5xl text-white">
          <img className="w-full" src={Logo} alt={title} />
        </h1>
      </Link>
    </div>
  </div>
);

const Contact = ({ phone, phone_formatted, email }) => (
  <div className="contact relative max-w-3xl pin-t pin-l pin-r pt-8 sm:pt-0 px-4 mx-auto w-full">
    <div className="flex flex-wrap items-center justify-between max-w-md mx-auto p-4">
      <div className="mb-2 sm:mb-0 mr-4">
        <p className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 mr-4"
          >
            <path
              className="fill-current text-white"
              d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z"
            />
            <path
              className="fill-current text-cyan-200"
              d="M14.7 10.7a1 1 0 0 1-1.4-1.4L17.58 5H15a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6.41l-4.3 4.3z"
            />
          </svg>
          <a className="text-white" href={`tel:${phone}`}>
            {phone_formatted}
          </a>
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 mr-4"
          >
            <path
              className="fill-current text-cyan-200"
              d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          <a className="text-white" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </div>
      <div className="my-2">
        <Link className="button mr-4" to="/contact/">
          Contact
        </Link>
      </div>
    </div>
  </div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        phone
        phone_formatted
        email
      }
    }
  }
`;

export default IndexPage;
