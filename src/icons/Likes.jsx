import React from 'react';
import like from '../assets/like.png';

const Likes = (props) => {
  return (
    <div className='flex'>
      <img
        src={like}
        alt='logo-like'
        className='w-[24px] h-[24px] object-contain mr-2'/>
      <p className='text-base text-black font-bold'>{props.countLikes}</p>
    </div>
  );
}

export default Likes;