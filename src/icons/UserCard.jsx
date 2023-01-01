import React from 'react';

const UserCard = (props) => {
  return (
    <div className='flex mx-auto'>
      <img
        src={props.imgUser}
        alt='logo-user'
        className='w-[64px] h-[64px] object-cover rounded-full'/>  
      <div className='flex flex-col px-10'>
        <p className='text-black text-2xl font-semibold text-center uppercase'>
          {props.nameUser}
        </p>
        <a
          href={props.portfolio}
          target='_blank'
          rel='noreferrer'
          className='text-red-600 underline text-sm font-semibold text-center'
        >
          {props.portfolio}
        </a>
      </div>
    </div>
  );
}

export default UserCard;