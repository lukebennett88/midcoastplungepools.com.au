import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/icon.svg';

const handleClick = ev => {
  ev.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = ({ siteTitle }) => (
  <header>
    <div className="md:flex max-w-2xl mx-auto w-full">
      <div className="flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex items-center no-underline px-4 text-grey-darkest"
          >
            <img className="h-8 mr-2 w-8" src={Logo} alt="" />
            <span className="font-bold">{siteTitle}</span>
          </Link>

          <button
            className="flex md:hidden items-center justify-center p-4"
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
        className="hidden md:flex md:flex-1 md:items-center md:justify-end w-full md:w-auto"
      >
        <NavLink link="/" title="Home" />
        <NavLink link="/style-sample/" title="Style&nbsp;Sample" />
        <NavLink link="/contact/" title="Contact" />
      </nav>
    </div>
  </header>
);

const NavLink = props => (
  <Link
    to={props.link}
    className="block md:inline-flex border-t md:border-0 font-bold no-underline px-6 py-4 uppercase text-grey-darkest"
  >
    {props.title}
  </Link>
);

export default Header;
