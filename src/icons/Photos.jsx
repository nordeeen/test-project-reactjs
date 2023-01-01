import React from 'react';
import Foto from '../assets/photo-camera.png';

const Photos = (props) => {
  return (
    <div className='flex'>
      <img
        src={Foto}
        alt='logo-photos'
        className='w-[24px] h-[24px] object-contain mr-2'/>
      <p className='text-base text-black font-bold'>
        {props.photos}
      </p>
    </div>
  );
}

export default Photos;