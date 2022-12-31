import React, { useEffect, useState } from 'react';
import ImageModal from './ImageModal';
import { getImg } from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';

const WrapperImg = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state);

  console.log('tes :', images);

  useEffect(() => {
    dispatch(getImg());

  }, [dispatch]);


  return (
    <div>
      <h1 className='text-center mt-6 underline text-2xl'>Results for</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
        {images?.map((val, i) => {
          return (
            <ImageModal key={i} photo={val.urls.full}/>
          )
        })}
      </div>
    </div>
  );
}

export default WrapperImg;