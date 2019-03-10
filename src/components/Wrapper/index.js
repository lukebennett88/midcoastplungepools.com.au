import React from 'react';

const Wrapper = ({ children }) => (
  <main className="bg-white flex flex-col flex-1 md:justify-start w-full">
    <div className="py-8">{children}</div>
  </main>
);

export default Wrapper;
