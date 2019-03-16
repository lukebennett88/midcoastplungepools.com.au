import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Form from '../Form';
import Image from './Image';

const Contact = () => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
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
    `}
    render={data => (
      <div className="max-w-4xl mx-auto w-full" id="contact">
        <div className="flex flex-wrap-reverse w-full">
          <div className="flex h-48-rem md:h-auto w-full md:w-1/2">
            <div className="bg-blue-vivid-700 h-full w-full relative">
              <div className="image-container opacity-75">
                <Image />
              </div>
            </div>
          </div>
          <div className="header-spacer p-4 w-full md:w-1/2">
            <div className="max-w-sm mx-auto">
              <h2 className="text-3xl md:text-5xl uppercase">Contact</h2>
              {/* Contact Info */}
              <div className="mb-8">
                <h3>Contact information</h3>
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
                  <a
                    className="underline"
                    href={`tel:${data.site.siteMetadata.phone}`}
                  >
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
                      className="tertiary"
                      d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                  </svg>
                  <a
                    className="underline"
                    href={`mailto:${data.site.siteMetadata.email}`}
                  >
                    {data.site.siteMetadata.email}
                  </a>
                </p>
              </div>
              {/* Contact Form */}
              <Form />
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default Contact;
