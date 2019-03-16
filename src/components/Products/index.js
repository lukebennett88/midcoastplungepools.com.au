import React from 'react';
import Image from './Image';

const Products = () => (
  <div className="flex flex-wrap max-w-4xl mx-auto w-full" id="products">
    <div className="header-spacer px-4 w-full md:w-1/2">
      <div className="max-w-sm mx-auto">
        <h2>Products</h2>
        <p>
          Mid Coast Plunge Pools takes the stress out of achieving your backyard
          vision.
        </p>
        <p>
          Our pools are made from solid concrete, manufactured to strict quality
          standards right here in Australia — we don’t cut any corners!
        </p>
        <p className="mb-0">We will:</p>
        <ul>
          <li>Fully design your pool</li>
          <li>Get the approvals and meet the regulations</li>
          <li>Construct your pool (and any other works)</li>
        </ul>
        <p className="mb-0">
          All of our pools come standard with the following features:
        </p>
        <ul>
          <li>Full ceramic mosaic tiling in many different colours</li>
          <li>Stone coping in a range of options</li>
          <li>Solid concrete floors &amp; walls, with in built seats</li>
          <li>Multi-coloured LED light</li>
          <li>Jets and skimmer</li>
          <li>Range of pool pump and filtration packages</li>
        </ul>
        <p className="mb-0">
          We also offer the following optional premium upgrades
        </p>
        <ul>
          <li>External textured paint, tiles or polish</li>
          <li>Pool pump and filtration packages</li>
          <li>Heating and installation solutions</li>
          <li>Solar thermal blankets</li>
        </ul>
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

export default Products;
