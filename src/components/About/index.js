import React from 'react';
import Image from './Image';

const About = () => (
  <div className="flex flex-wrap max-w-4xl mx-auto w-full" id="about">
    <div className="header-spacer px-4 w-full md:w-1/2">
      <div className="max-w-sm mx-auto">
        <h2>About</h2>
        <p>
          Mid Coast Plunge Pools is a professional and innovative young company
          dedicated to helping you transform your backyard into a stylish and
          enjoyable space.
        </p>

        <p>
          We service the entire Mid North Coast, from Newcastle to the Ballina.
        </p>

        <p>Call us today to make your dream of owning a pool a reality!</p>
      </div>
    </div>
    <div className="flex h-64 md:h-auto w-full md:w-1/2">
      <div className="bg-blue-vivid-700 h-full w-full relative">
        <div className="image-container opacity-75">
          <Image />
        </div>
      </div>
    </div>
  </div>
);

export default About;
