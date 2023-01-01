import React from 'react';
import locMaps from '../assets/pin.png';

const PinLocation = (props) => {
  return (
    <div className='flex'>
      <img
        src={locMaps}
        alt='logo-location'
        className='w-[24px] h-[24px] object-contain mr-3'
      />
      <p className='text-base text-black font-bold'>{props.location}</p>
    </div>
  );
}

export default PinLocation;