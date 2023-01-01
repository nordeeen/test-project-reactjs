import React from 'react';
import { useSelector } from 'react-redux';

const Jumbotron = (props) => {
  const {isEmpty} = useSelector(state => state);
  return (
    <div className='bg-blue-900 flex items-center py-10'>
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-white text-center text-2xl font-bold mb-5'>
          Find Images
        </h1>
        {props.children}
      </div>
    </div>
  );
}

export default Jumbotron;