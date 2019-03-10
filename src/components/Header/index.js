import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/logo.svg';

const handleClick = ev => {
  ev.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = ({ siteTitle }) => (
  <header className="bg-white max-w-3xl mx-auto pin-t px-4 sticky w-full z-10">
    <div className="lg:flex">
      <div className="flex items-center border-b lg:border-b-0">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex items-center no-underline text-grey-darkest"
          >
            <img
              className="h-24 p-4 xxl:pl-0 mr-2"
              src={Logo}
              alt={siteTitle}
            />
          </Link>

          <button
            className="flex lg:hidden items-center justify-center p-4"
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
        className="border-b lg:border-none hidden lg:flex lg:flex-1 items-center lg:justify-end w-full lg:w-auto"
      >
        <NavLink link="/about/" title="About" />
        <NavLink link="/why-us/" title="Why&nbsp;Us" />
        <NavLink link="/products/" title="Products" />
        <NavLink link="/contact/" title="Contact" button />
      </nav>
    </div>
  </header>
);

const NavLink = props => (
  <Link
    to={props.link}
    className={`hover:bg-blue-vivid-600 hover:text-blue-vivid-050 block lg:inline-flex border-b lg:border-0 font-semibold no-underline p-4 text-blue-vivid-600 tracking-wide text-sm uppercase ${
      props.button
        ? 'button mb-2 lg:mb-0 ml-3 lg:ml-2 mr-4 xxl:mr-0 mt-2 lg:mt-0'
        : ''
    }`}
  >
    {props.title}
  </Link>
);

export default Header;
