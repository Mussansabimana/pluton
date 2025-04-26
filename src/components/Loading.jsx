// src/components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className='h-screen w-screen bg-white flex justify-center items-center'>
      <div className='relative border-l-2 border-b-2 transition-all animate-bounce duration-500 ease-in-out border-blue-600 size-12 rounded-full flex justify-center items-center'>
        <div className='absolute border-l-2 border-b-2 transition-all animate-spin duration-300 ease-in-out border-blue-600 size-10 rounded-full'></div>
      </div>
    </div>
  );
};

export default Loading;