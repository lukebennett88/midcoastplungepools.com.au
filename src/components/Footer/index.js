import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import ScrollToTop from '../ScrollToTop';
import Logo from '../../images/logo-white.svg';

const Footer = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <footer className="bg-white flex pin-b relative text-white w-full">
        <div className="bg-blue-vivid-600 max-w-4xl mx-auto w-full">
          {/* Main section */}
          <div className="max-w-3xl mb-12 mx-auto w-full">
            <div className="cards max-w-2xl w-full">
              {/* About Us */}
              <div className="hidden md:flex items-center justify-center mx-auto p-4">
                <img className="max-w-xs pt-8 w-full" src={Logo} alt="" />
              </div>
              {/* Navigation */}
              <div className="mx-auto p-4">
                <h3 className="text-white">Site Navigation</h3>
                <hr className="bg-blue-vivid-200 my-2" />
                <ul className="list-reset">
                  <FooterLink title="Home" link="/" />
                  <FooterLink title="About" link="/#about" />
                  <FooterLink title="Reasons Why" link="/#reasons-why" />
                  <FooterLink title="Products" link="/#products" />
                  <FooterLink title="Contact" link="/#contact" />
                  <li className="mb-2">
                    <a
                      className="flex items-center text-white"
                      href="/sitemap.xml"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 mr-4"
                      >
                        <path
                          className="secondary"
                          d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
                        />
                        <path
                          className="primary"
                          d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
                        />
                      </svg>
                      <span>Sitemap</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Contact */}
              <div className="mx-auto p-4">
                <h3 className="text-white">Contact</h3>
                <hr className="bg-blue-vivid-200 my-2" />
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
                  <a
                    className="text-white"
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
                {/* Contact Form */}
                <p className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 mr-4"
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
                  <Link className="text-white" to="/#contact">
                    Contact form
                  </Link>
                </p>
                <div className="my-12 md:my-4 py-4">
                  <h3 className="text-white">Social Links</h3>
                  <hr className="bg-blue-vivid-200 my-2" />
                  {/* Facebook */}
                  <p className="flex items-center mb-2">
                    <svg
                      className="fill-current w-6 mr-4"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="1.41421"
                      viewBox="0 0 19 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fillRule="nonzero">
                        <path d="m17.531 3.106c-.469-1.209-1.424-2.165-2.633-2.632-.699-.263-1.438-.404-2.186-.42-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054c-.746.015-1.485.156-2.184.42-1.21.467-2.165 1.423-2.633 2.632-.263.7-.404 1.438-.419 2.186-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187.469 1.208 1.424 2.164 2.634 2.632.696.272 1.435.426 2.185.45.963.042 1.268.055 3.71.055s2.755 0 3.71-.055c.747-.015 1.486-.157 2.186-.419 1.209-.469 2.164-1.424 2.633-2.633.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71c-.013-.758-.153-1.509-.421-2.217zm-1.218 9.532c-.007.576-.111 1.147-.311 1.688-.305.787-.926 1.409-1.712 1.711-.535.199-1.099.303-1.67.311-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055-.569-.007-1.135-.112-1.669-.311-.789-.301-1.414-.923-1.719-1.711-.196-.534-.302-1.099-.311-1.669-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655.007-.576.111-1.146.311-1.687.305-.789.93-1.41 1.719-1.712.534-.198 1.1-.303 1.669-.311.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055c.571.007 1.135.112 1.67.311.786.303 1.407.925 1.712 1.712.196.534.302 1.099.311 1.669.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                        <path d="m11.084 17.992v-6.374h2.151l.32-2.496h-2.471v-1.59c0-.72.201-1.213 1.235-1.213h1.309v-2.225c-.637-.069-1.277-.101-1.918-.099-1.901 0-3.206 1.16-3.206 3.291v1.831h-2.136v2.496h2.141v6.379z" />
                      </g>
                    </svg>
                    <a
                      className="text-white"
                      href="https://www.facebook.com/Mid-Coast-Plunge-Pools-875506859462129/"
                    >
                      Facebook
                    </a>
                  </p>
                  {/* Instagram */}
                  <p className="flex items-center mb-2">
                    <svg
                      className="fill-current w-6 mr-4"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="1.41421"
                      viewBox="0 0 19 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m8.997 4.372c-2.554 0-4.623 2.07-4.623 4.623 0 2.554 2.069 4.624 4.623 4.624 2.552 0 4.623-2.07 4.623-4.624 0-2.553-2.071-4.623-4.623-4.623zm0 7.627c-1.659 0-3.004-1.345-3.004-3.003 0-1.659 1.345-3.003 3.004-3.003s3.002 1.344 3.002 3.003c0 1.658-1.343 3.003-3.002 3.003z"
                        fillRule="nonzero"
                      />
                      <circle cx="13.804" cy="4.202" r="1.078" />
                      <path
                        d="m17.531 3.106c-.469-1.209-1.424-2.165-2.633-2.632-.699-.263-1.438-.404-2.186-.42-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054c-.746.015-1.485.156-2.184.42-1.21.467-2.165 1.423-2.633 2.632-.263.7-.404 1.438-.419 2.186-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187.469 1.208 1.424 2.164 2.634 2.632.696.272 1.435.426 2.185.45.963.042 1.268.055 3.71.055s2.755 0 3.71-.055c.747-.015 1.486-.157 2.186-.419 1.209-.469 2.164-1.424 2.633-2.633.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71c-.013-.758-.153-1.509-.421-2.217zm-1.218 9.532c-.007.576-.111 1.147-.311 1.688-.305.787-.926 1.409-1.712 1.711-.535.199-1.099.303-1.67.311-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055-.569-.007-1.135-.112-1.669-.311-.789-.301-1.414-.923-1.719-1.711-.196-.534-.302-1.099-.311-1.669-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655.007-.576.111-1.146.311-1.687.305-.789.93-1.41 1.719-1.712.534-.198 1.1-.303 1.669-.311.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055c.571.007 1.135.112 1.67.311.786.303 1.407.925 1.712 1.712.196.534.302 1.099.311 1.669.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                        fillRule="nonzero"
                      />
                    </svg>

                    <a
                      className="text-white"
                      href="https://www.instagram.com/mcplungepools/"
                    >
                      Instagram
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Byline */}
          <p className="bg-blue-vivid-900 flex flex-wrap font-semibold items-center justify-center mb-0 p-4 text-center text-white w-full">
            <span className="flex-no-shrink w-full md:w-auto">
              © {new Date().getFullYear()} {data.site.siteMetadata.title}
            </span>
            <span className="hidden md:block mx-2 w-full md:w-auto">
              &bull;
            </span>
            <span className="flex-no-shrink w-full md:w-auto">
              Website by
              <a
                className="font-black inline-flex px-1 text-white underline"
                href="https://lukebennett.com.au"
                rel="nofollow"
              >
                Luke Bennett
              </a>
            </span>
          </p>
          <ScrollToTop />
        </div>
      </footer>
    )}
  />
);

const FooterLink = ({ link, title }) => (
  <li className="mb-2">
    <Link className="flex items-center text-white" to={link}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 mr-4"
      >
        <path
          className="secondary"
          d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
        />
        <path
          className="primary"
          d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
        />
      </svg>
      <span>{title}</span>
    </Link>
  </li>
);

FooterLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

export default Footer;
