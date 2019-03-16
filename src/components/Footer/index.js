import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
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
                  <FooterLink title="Why Us" link="/#why-us" />
                  <FooterLink title="Products" link="/#products" />
                  <FooterLink title="Contact" link="/#contact" />
                  <FooterLink title="Sitemap" link="/sitemap.xml" />
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
                  <Link className="text-white" to="/contact/">
                    Contact form
                  </Link>
                </p>
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

const FooterLink = props => (
  <li className="mb-2">
    <Link className="flex items-center text-white" to={props.link}>
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
      <span>{props.title}</span>
    </Link>
  </li>
);

export default Footer;
