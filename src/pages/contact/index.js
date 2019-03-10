import React from 'react';
import { graphql, Link } from 'gatsby';
import LazyLoad from 'react-lazyload';

import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import SEO from '../../components/SEO';
import ContactForm from '../../components/Form';

const ContactPage = ({ data }) => (
  <Layout>
    <Wrapper>
      <SEO title="Contact" />
      <div className="max-w-2xl mx-auto w-full">
        <div className="max-w-md p-4 pb-0">
          <Link to="/accounting/">
            <h1 className="text-5xl">Contact</h1>
          </Link>
          <hr />
        </div>
        <div className="flex flex-wrap w-full">
          <div className="p-4 w-full md:w-1/2">
            {/* Contact Info */}
            <div className="mb-8">
              <h2>Contact Information</h2>
              {/* Phone */}
              <p className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 mr-4"
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
                <a href={`tel:${data.site.siteMetadata.phone}`}>
                  {data.site.siteMetadata.phone_formatted}
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
                    className="secondary"
                    d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>
                <a href={`mailto:${data.site.siteMetadata.email}`}>
                  {data.site.siteMetadata.email}
                </a>
              </p>
              {/* Address */}
              <p className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 mr-4"
                >
                  <path
                    className="primary"
                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    className="secondary"
                    d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"
                  />
                </svg>
                <a href="https://goo.gl/maps/69hMRTZKCWL2">
                  1/68 Clarence St,
                  <br />
                  Port Macquarie NSW 2444
                </a>
              </p>
            </div>
            {/* Business Hours */}
            <h2>Business Hours</h2>
            <table className="max-w-sm">
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>8:30am&nbsp;–&nbsp;5:00pm</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>8:30am&nbsp;–&nbsp;5:00pm</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>8:30am&nbsp;–&nbsp;5:00pm</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>8:30am&nbsp;–&nbsp;5:00pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>8:30am&nbsp;–&nbsp;5:00pm</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 w-full md:w-1/2">
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 w-full">
        <LazyLoad height={450}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.4379793479056!2d152.90489191528476!3d-31.429607281399704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff27b4a5c0d1%3A0x3066d77ceefc527!2sSprague+%26+Associates!5e0!3m2!1sen!2sau!4v1550451566066"
            allowFullScreen
            className="w-full"
            frameBorder={0}
            height={450}
            style={{ border: 0 }}
            title="location"
          />
        </LazyLoad>
      </div>
    </Wrapper>
  </Layout>
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

export default ContactPage;
