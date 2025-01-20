import React, { useState } from 'react';
import volume from '../assets/volume.svg';

const VolumeControls = () => {
  const [value, setValue] = useState(50);

  return (
    <div className='flex-col flex items-center mt-6 pb-1.5'>
      <div className='w-96 flex justify-between gap-4'>
        <img src={volume} className='w-5' alt='Volume Icon'></img>
        <input
          type='range'
          min='0'
          max='100'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className='w-full cursor-pointer appearance-none rounded-lg bg-gray-300'
          style={{
            background: `linear-gradient(to right, #4B5563 ${value}%, #E5E7EB ${value}%)`,
            height: '8px'
          }}
        />
      </div>
      <style>
        {`
          input[type='range']::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #4B5563;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default VolumeControls;