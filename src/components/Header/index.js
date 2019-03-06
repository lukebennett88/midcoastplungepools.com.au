import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../../images/logo-white.svg';
import Background from '../../images/bg-alt.svg';

const handleClick = e => {
  e.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = ({ phone, phone_formatted }) => (
  <header className="flex flex-col font-display relative">
    <img className="absolute" src={Background} alt="" />
    <div className="md:flex max-w-2xl mx-auto relative w-full">
      <div className="flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center justify-center p-4">
            <img className="w-64" src={Logo} alt="" />
          </Link>
          <button
            className="flex md:hidden items-center justify-center p-4"
            type="button"
            onClick={handleClick}
          >
            <svg
              className="fill-current h-6 text-white w-6"
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
        className="hidden md:flex md:flex-1 md:items-center md:justify-end p-4 w-full md:w-auto"
      >
        <NavLink link="#about" title="About" />
        <NavLink link="#why-us" title="Why Us" />
        <NavLink link="#contact" title="Contact" button />
      </nav>
    </div>
    <section className="max-w-md mx-auto relative w-full">
      <h1 className="mb-6 text-white text-5xl">
        Ask us how to transform your backyard today!
      </h1>
      <p>
        <a className="button text-xl" href={phone}>
          {phone_formatted}
        </a>
      </p>
    </section>
  </header>
);

const NavLink = props => (
  <Link
    to={props.link}
    className={`block md:inline-block font-bold no-underline px-6 py-4 text-white tracking-wide uppercase ${
      props.button ? 'button' : ''
    }`}
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
