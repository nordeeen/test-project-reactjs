import React, { useRef, useState} from 'react';
import useModal from '../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDetailArr } from '../store/reducers';

const ImageModal = ({photo, pict, id}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const modalRef = useRef();
    const { images } = useSelector((state) => state);
    const [showModal, setShowModal] = useState(false);
    useModal(modalRef, () => setShowModal(false));

    const handleDetail = (e) => {
      e.preventDefault();
      const temp = [];
      const arrayDetail = images.find((item) => item.id === id);
      temp.push(arrayDetail);
      dispatch(setDetailArr(temp));
      navigate(`/detail/${id}`);
    }
  return (
    <div>
      <button type='button' onClick={() => setShowModal(true)}>
        <div className='rounded-lg'>
          <img
            src={photo}
            alt='logo'
            className='h-72 w-[300px] object-cover rounded-lg shadow-md'
          />
        </div>
      </button>
      {showModal && (
        <div className='bg-transparent flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
          <div
            ref={modalRef}
            className='relative w-auto my-6 mx-auto max-w-3xl'>
            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
              <img
                src={pict}
                alt='logo'
                className='h-[500px] w-[500px] object-cover rounded-lg shadow-md'/>
              <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'>
                <button
                  className='bg-transparent border-0 text-black float-right'
                  onClick={() => setShowModal(false)}>
                  <span className='text-red-600 opacity-7 h-6 w-6 text-xl font-bold uppercase'>
                    X
                  </span>
                </button>
                <button className='bg-gray-900 text-white text-sm text-center py-3 px-3 rounded-md' onClick={handleDetail}>
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageModal;