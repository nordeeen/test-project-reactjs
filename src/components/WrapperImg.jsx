import React from 'react';
import ImageModal from './ImageModal';
import { useSelector } from 'react-redux';

const WrapperImg = () => {
  const { images, isLoading } = useSelector((state) => state);

  return (
    <div>
        <div className='grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-10 max-w-7xl mx-auto px-4'>
          {isLoading ? (
            <p>Loading...!!!</p>
          ) : (
            images.map((val, i) => (
              <ImageModal key={i} photo={val.urls.small} pict={val.urls.small} id={val.id}/>
            ))
          )}
        </div>
    </div>
  );
}

export default WrapperImg;