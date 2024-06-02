import React from 'react';

const Logo = () => {
  return (
    <div className='flex items-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 text-blue-500'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 19l7-7 3 3-7 7-3-3z'></path>
        <path d='M18 13L8 3 3 8l10 10'></path>
        <path d='M3 22h6v-2H5v-4H3v6z'></path>
      </svg>
      <span className='ml-3 text-3xl font-serif text-gray-800'>
        Quill Space
      </span>
    </div>
  );
};

export default Logo;
