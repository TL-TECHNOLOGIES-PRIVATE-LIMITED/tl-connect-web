// LoadingSpinner.js
import React from 'react';
import logo from '../img/Logo-TL.png'
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-white z-50">
      <div className="w-20 h-20  animate-pulse rounded-full ">
        <img src={logo} alt="logo tl" className='h-full w-auto ' />
      </div>
    </div>
  );
};

export default LoadingSpinner;
