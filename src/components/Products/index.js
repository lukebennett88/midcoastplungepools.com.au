import React from 'react';
import Image from './Image';

const Products = () => (
  <div className="flex flex-wrap max-w-4xl mx-auto w-full" id="products">
    <div className="header-spacer px-4 w-full md:w-1/2">
      <div className="max-w-sm mx-auto">
        <h2 className="text-3xl md:text-5xl uppercase">Products</h2>
        <p>
          Mid Coast Plunge Pools takes the stress out of achieving your backyard
          vision.
        </p>
        <p>
          Our pools are made from solid concrete, manufactured to strict quality
          standards right here in Australia — we don’t cut any corners!
        </p>
        <p>We will:</p>
        <ul>
          <li>Fully design your pool</li>
          <li>Get the approvals and meet the regulations</li>
          <li>Construct your pool (and any other works)</li>
        </ul>
        <p>All of our pools come standard with the following features:</p>
        <ul>
          <li>Full ceramic mosaic tiling in many different colours</li>
          <li>Stone coping in a range of options</li>
          <li>Solid concrete floors & walls, with in built seats</li>
          <li>Multi-coloured LED light</li>
          <li>Jets and skimmer</li>
          <li>Range of pool pump and filtration packages</li>
        </ul>
        <p>We also offer the following optional premium upgrades</p>
        <ul>
          <li>External textured paint, tiles or polish</li>
          <li>Pool pump and filtration packages</li>
          <li>Heating and installation solutions</li>
          <li>Solar thermal blankets</li>
        </ul>
        <p>
          Mid Coast Plunge Pools offer both round and rectangular pools in the
          following sizes:
        </p>
        <h3>Round Pools</h3>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Height</th>
              <th>Width</th>
              <th>Seat Height</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5,200L</td>
              <td>1,430mm</td>
              <td>2,500mm</td>
              <td>650mm</td>
              <td>5,200kg</td>
            </tr>
            <tr>
              <td>12,200L</td>
              <td>1,430mm</td>
              <td>3,480mm</td>
              <td>650mm</td>
              <td>7,200kg</td>
            </tr>
            <tr>
              <td>14,000L</td>
              <td>1,830mm</td>
              <td>3,480mm</td>
              <td>1050mm</td>
              <td>9,000kg</td>
            </tr>
          </tbody>
        </table>
        <h3>Rectangular Pools</h3>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Height</th>
              <th>Width</th>
              <th>Length</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,300L</td>
              <td>1,600mm</td>
              <td>2,480mm</td>
              <td>4,800mm</td>
              <td>10,000kg</td>
            </tr>
          </tbody>
        </table>

        <p>Note: height is to top of pool coping</p>
        <p>
          Guidelines for fencing requirements can be obtained from your local
          council.
        </p>
      </div>
    </div>
    <div className="flex w-full md:w-1/2">
      <div className="bg-blue-vivid-700 h-full w-full relative">
        <div className="image-container opacity-75">
          <Image />
        </div>
      </div>
    </div>
  </div>
);

export default Products;
