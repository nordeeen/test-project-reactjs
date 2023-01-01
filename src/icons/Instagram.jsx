import React from 'react';
import Ig from '../assets/instagram.png';

const Instagram = (props) => {
  return (
    <div className='flex'>
      <img
        src={Ig}
        alt='logo-instagram'
        className='w-[24px] h-[24px] object-contain mr-3'
      />
      <p className='text-base text-black font-bold'>{props.nameIg}</p>
    </div>
  );
}

export default Instagram;