import React from 'react';
import Image from './Image';

const Products = () => (
  <div
    className="flex flex-wrap-reverse max-w-4xl mx-auto w-full"
    id="products"
  >
    <div className="flex h-64 md:h-auto w-full md:w-1/2">
      <div className="bg-blue-vivid-700 h-full w-full relative">
        <div className="image-container opacity-75">
          <Image />
        </div>
      </div>
    </div>
    <div className="header-spacer px-4 w-full md:w-1/2">
      <div className="max-w-sm mx-auto">
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
      </div>
    </div>
  </div>
);

export default Products;
