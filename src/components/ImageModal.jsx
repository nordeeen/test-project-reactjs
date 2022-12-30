import React, {useState} from 'react'
// import Img from '../assets/fake-img.jpg';

const ImageModal = (props) => {
    const [showModal, setShowModal] = useState(false);
    
  return (
    <div>
      <button type='button' onClick={() => setShowModal(true)}>
        <img
          src={props.photo}
          alt='logo'
          className='h-72 w-[300px] object-cover rounded-lg shadow-md'
        />
      </button>
      {showModal ? (
        <>
          <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                  <button
                    className='bg-transparent border-0 text-black float-right'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='text-red-600 opacity-7 h-6 w-6 text-xl'>
                      X
                    </span>
                  </button>
                  <button className='bg-gray-600 text-white text-sm text-center py-3 px-3 rounded-md'>
                    View Details
                  </button>
                </div>
                <img
                  src={props.photo}
                  alt='logo'
                  className='h-72 w-[500px] object-cover rounded-lg shadow-md'
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ImageModal