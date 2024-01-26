import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader-container">
      <RotatingSquare
        color="#4fa94d"
        height={100}
        width={100}
        visible={true}
        ariaLabel="rotating-square-loading"
      />
    </div>
  );
};

export default Loader;
