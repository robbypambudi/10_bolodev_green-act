import React from 'react';

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className='w-full bg-gray-200 h-2 rounded-full'>
      <div
        className='bg-primary-500 h-full rounded-full'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
