import React from 'react';
import Image from './Image';

const Products = () => (
  <div className="flex flex-wrap max-w-4xl mx-auto w-full" id="products">
    <div className="header-spacer px-4 w-full md:w-1/2">
      <div className="max-w-sm mx-auto">
        <h3>Rectangular Pools</h3>
        <div className="overflow-x-auto">
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
        </div>

        <p>Note: height is to top of pool coping</p>
        <p>
          Guidelines for fencing requirements can be obtained from your local
          council.
        </p>
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
