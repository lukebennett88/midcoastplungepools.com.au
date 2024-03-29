import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Logo from '../../images/logo.svg';

const handleClick = e => {
  e.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = ({ siteTitle }) => (
  <header className="header bg-white max-w-4xl mx-auto pin-t md:sticky w-full z-20">
    <div className="md:flex">
      <div className="flex items-center border-b md:border-b-0">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex items-center no-underline text-grey-darkest"
          >
            <img
              className="h-24 p-4 xxl:pl-0 mx-4"
              src={Logo}
              alt={siteTitle}
            />
          </Link>

          <button
            className="flex md:hidden items-center justify-center p-4"
            onClick={handleClick}
            type="button"
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <nav
        id="nav"
        className="bg-white border-b md:border-none hidden md:flex md:flex-1 items-center md:justify-end w-full md:w-auto"
      >
        <NavLink link="/#about" title="About" />
        <NavLink link="/#reasons-why" title="Reasons&nbsp;Why" />
        <NavLink link="/#products" title="Products" />
        <NavLink link="/#contact" title="Free Quote" button />
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

const NavLink = ({ link, button, title }) => (
  <Link
    to={link}
    className={`hover:bg-blue-vivid-600 block md:inline-flex border-b md:border-0 font-semibold no-underline p-4 tracking-wide text-sm hover:text-white uppercase ${
      button ? 'button mb-2 md:mb-0 ml-3 md:ml-2 mr-4 mt-2 md:mt-0' : ''
    }`}
  >
    {title}
  </Link>
);

NavLink.propTypes = {
  link: PropTypes.string,
  button: PropTypes.bool,
  title: PropTypes.string,
};

export default Header;
