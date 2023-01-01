import React from 'react';
import twitter from '../assets/twitter.png';

const Twitter = (props) => {
  return (
    <div className='flex'>
      <img src={twitter} alt='logo-twitter' className='w-[24px] h-[24px] object-contain mr-3'/>
      <p className='text-base text-black font-bold'>{props.nameTwitter}</p>
    </div>
  );
}

export default Twitter;