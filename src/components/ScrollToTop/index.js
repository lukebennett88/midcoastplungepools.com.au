import React from 'react';

const ScrollToTop = () => (
  <a
    aria-label="Scroll to top button"
    href="#top"
    className="bg-white border-2 border-blue-vivid-600 flex md:hidden fixed h-10 items-end justify-center leading-none mb-16 mr-4 no-underline pin-b pin-r rounded-full w-10 z-10"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="fill-current text-blue-vivid-600 h-full w-full"
    >
      <path
        fillRule="evenodd"
        d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
      />
    </svg>
  </a>
);

export default ScrollToTop;
