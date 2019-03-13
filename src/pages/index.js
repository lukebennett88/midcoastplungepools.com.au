import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeroImage from '../components/Image';
import ContactForm from '../components/Form';
import About from '../components/About';
import ContactImage from '../components/Image/Contact';
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
      <HeroContact
        phone={data.site.siteMetadata.phone}
        phone_formatted={data.site.siteMetadata.phone_formatted}
        email={data.site.siteMetadata.email}
      />
      <About />
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
    <div className="image-container opacity-50">
      <HeroImage />
    </div>
    <div className="max-w-sm mx-auto px-4 py-16 relative rounded text-center w-full">
      <Link to="/">
        <img className="w-full" src={Logo} alt={title} />
      </Link>
      <h1 className="normal-case text-3xl md:text-5xl text-white">
        Transform&nbsp;your backyard&nbsp;today!
      </h1>
    </div>
  </div>
);

const HeroContact = ({ phone, phone_formatted, email }) => (
  <div className="contact relative max-w-3xl pin-t pin-l pin-r pt-8 sm:pt-0 px-4 mx-auto w-full">
    <div className="flex flex-wrap items-center justify-around p-4">
      {/* Phone */}
      <p className="flex items-center mb-2 md:m-0 w-full md:w-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="flex-no-shrink mr-4 w-6"
        >
          <path
            className="primary"
            d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z"
          />
          <path
            className="secondary"
            d="M14.7 10.7a1 1 0 0 1-1.4-1.4L17.58 5H15a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6.41l-4.3 4.3z"
          />
        </svg>
        <a className="text-white" href={`tel:${phone}`}>
          {phone_formatted}
        </a>
      </p>

      {/* Email */}
      <p className="flex items-center mb-2 md:m-0 w-full md:w-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="flex-no-shrink mr-4 w-6"
        >
          <path
            className="secondary"
            d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
        <a className="text-white" href={`mailto:${email}`}>
          {email}
        </a>
      </p>

      {/* Contact form */}
      <p className="flex items-center mb-2 md:m-0 w-full md:w-auto">
        <p className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="flex-no-shrink mr-4 w-6"
          >
            <path
              className="primary"
              d="M5 5h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2zm3 7a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H8z"
            />
            <path
              className="secondary"
              d="M15 4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6c0-1.1.9-2 2-2 0-1.1.9-2 2-2h2a2 2 0 0 1 2 2z"
            />
          </svg>
          <a className="text-white" href="/contact/">
            Contact form
          </a>
        </p>
      </p>
    </div>
  </div>
);

const Contact = ({ phone, phone_formatted, email }) => (
  <div className="max-w-3xl mx-auto w-full" id="contact">
    <div className="flex flex-wrap w-full">
      <div className="header-spacer p-4 w-full md:w-1/2">
        <h2>Contact</h2>
        {/* Contact Info */}
        <div className="mb-8">
          <h3>Contact Information</h3>
          {/* Phone */}
          <p className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 mr-4"
            >
              <path
                className="secondary"
                d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z"
              />
              <path
                className="tertiary"
                d="M14.7 10.7a1 1 0 0 1-1.4-1.4L17.58 5H15a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6.41l-4.3 4.3z"
              />
            </svg>
            <a className="underline" href={`tel:${phone}`}>
              {phone_formatted}
            </a>
          </p>
          {/* Email */}
          <p className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 mr-4"
            >
              <path
                className="tertiary"
                d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            <a className="underline" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        </div>
        {/* Contact Form */}
        <ContactForm />
      </div>
      <div className="bg-blue-vivid-700 relative w-full md:w-1/2">
        <div className="image-container opacity-75">
          <ContactImage />
        </div>
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
