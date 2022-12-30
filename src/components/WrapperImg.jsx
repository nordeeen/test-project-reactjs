import React from 'react'
// import Image from './Image';
import ImageModal from './ImageModal';

const WrapperImg = () => {
  return (
    <div>
      <h1 className='text-center mt-6 underline text-2xl'>Results for Cats</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
        <ImageModal/>
        <ImageModal/>
        <ImageModal/>
        <ImageModal/>
        <ImageModal/>
        <ImageModal/>
        <ImageModal/>
        <ImageModal/>
      </div>
    </div>
  );
}

export default WrapperImg