import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => (
  <main className="bg-white flex flex-col flex-1 md:justify-start w-full">
    <div className="py-8">{children}</div>
  </main>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
