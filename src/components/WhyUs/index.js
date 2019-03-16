import React from 'react';
import Image from './Image';

const WhyUs = () => (
  <div className="flex flex-wrap-reverse max-w-4xl mx-auto w-full" id="why-us">
    <div className="flex h-64 md:h-auto w-full md:w-1/2">
      <div className="bg-blue-vivid-700 h-full w-full relative">
        <div className="image-container opacity-75">
          <Image />
        </div>
      </div>
    </div>
    <div className="header-spacer px-4 w-full md:w-1/2">
      <div className="max-w-sm mx-auto">
        <h2 className="text-3xl md:text-5xl uppercase">
          Reasons to buy a plunge pool
        </h2>
        <ul className="list-reset">
          <li className="mb-6">
            <h3>Make an impression</h3>
            <p>
              Plunge pools look great, they make an excellent feature to your
              garden or entertainment area.
            </p>
          </li>
          <li className="mb-6">
            <h3>Fun for the whole family</h3>
            <p>
              They’re not just there to look pretty, pools are meant to be
              enjoyed. Your friends and family are sure to love it.
            </p>
          </li>
          <li className="mb-6">
            <h3>Fantastic value</h3>
            <p>
              Because our pools come prefabricated you’ll save money on
              installation costs while at the same time increase the aesthetic
              and resale value of your home.
            </p>
          </li>
          <li className="mb-6">
            <h3>Low maintenance</h3>
            <p>
              It’s simple math, smaller pools mean smaller areas for you to
              maintain, and because they’re built with premium materials, there
              are fewer things that can go wrong.
            </p>
          </li>
          <li className="mb-6">
            <h3>Size matters!</h3>
            <p>
              Plunge pools don’t take up the whole backyard, so you get the
              enjoyment of having a pool, whilst still appreciating the rest of
              your backyard.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default WhyUs;
