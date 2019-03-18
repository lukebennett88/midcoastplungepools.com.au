import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Image from './Image';
import Logo from '../../images/logo-white.svg';

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
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
      <div className="hero flex items-center max-w-4xl mx-auto overflow-hidden relative w-full">
        <div className="image-container opacity-50">
          <Image />
        </div>
        <div className="max-w-sm mx-auto pb-32 pt-16 px-4 relative rounded text-center w-full">
          <Link to="/">
            <img
              className="h-32 md:h-48 w-auto"
              src={Logo}
              alt={data.site.siteMetadata.title}
            />
          </Link>
          <h1 className="normal-case text-3xl md:text-5xl text-white">
            Transform&nbsp;your backyard&nbsp;today!
          </h1>
          <Link
            className="hover:bg-blue-vivid-600 block md:inline-flex border-b md:border-0 font-semibold no-underline p-4 tracking-wide text-sm hover:text-white uppercase button mb-2 md:mb-0 mr-4 xxl:mr-0 mt-2 md:mt-0"
            to="/#contact"
          >
            Free quote
          </Link>
        </div>
        <div className="contact absolute max-w-4xl pin-b pin-l pin-r px-4 w-full z-10">
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
              <a
                className="text-white"
                href={`tel:${data.site.siteMetadata.phone}`}
              >
                {data.site.siteMetadata.phone_formatted}
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
              <a
                className="text-white"
                href={`mailto:${data.site.siteMetadata.email}`}
              >
                {data.site.siteMetadata.email}
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
                  Contact us
                </a>
              </p>
            </p>
          </div>
        </div>
      </div>
    )}
  />
);

export default Hero;
