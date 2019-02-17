import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ siteTitle }) => (
  <footer className="flex items-baseline justify-center leading-normal p-4">
    <p>
      <span>
        © {new Date().getFullYear()} {siteTitle}
      </span>
      <span className="mx-2">&bull;</span>
      <span>Website by</span>
      <a
        className="hover:bg-teal-lighte inline-flex no-underline px-1 text-grey-darkest hover:text-teal-darker"
        href="https://lukebennett.com.au"
      >
        Luke Bennett
      </a>
    </p>
    <a
      href="#top"
      className="bg-teal-lighter hidden md:flex fixed h-10 items-end justify-center leading-none mb-16 mr-16 no-underline pin-b pin-r rounded-full shadow-lg w-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-current text-teal-darker h-full w-full"
      >
        <path
          className="secondary"
          fill-rule="evenodd"
          d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
        />
      </svg>
    </a>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

export default Footer;
