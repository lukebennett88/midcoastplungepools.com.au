import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../../images/logo.png';

const handleClick = e => {
  e.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = ({ siteTitle }) => (
  <header className="font-display">
    <div className="md:flex max-w-2xl mx-auto w-full">
      <div className="flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex items-center no-underline px-4 text-grey-darkest"
          >
            <img className="h-8 mr-2 w-8" src={Logo} alt="" />
            <span className="uppercase">{siteTitle}</span>
          </Link>

          <button
            className="flex md:hidden items-center justify-center p-4"
            type="button"
            onClick={handleClick}
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
        className="border-b border-blue-grey-100 md:border-transparent hidden md:flex md:flex-1 md:items-center md:justify-end w-full md:w-auto"
      >
        <NavLink link="/" title="Home" />
        <NavLink link="/style-sample/" title="Style&nbsp;Sample" />
      </nav>
    </div>
  </header>
);

const NavLink = props => (
  <Link
    to={props.link}
    className="block md:inline-block border-blue-grey-100 border-t md:border-0 font-medium no-underline px-6 py-4 tracking-wide text-sm uppercase"
  >
    {props.title}
  </Link>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
