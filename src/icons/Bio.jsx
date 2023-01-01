import React from 'react';

const Bio = (props) => {
  return (
    <div className='w-[400px] h-auto mx-auto'>
      <p className='text-base text-center text-gray-900 font-mono tracking-wide leading-4 mt-3 px-2'>
        {props.bioUser}
      </p>
    </div>
  );
}

export default Bio;