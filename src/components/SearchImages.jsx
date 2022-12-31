import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import { findImg } from '../store/reducers';


const SearchImages = () => {
  const [dataImg, setDataImg] = useState('');
  const dispath = useDispatch();

  const searchChangeImg = (e) => {
    setDataImg(e.target.value);
    console.log('input img :', e.target.value);
  }

  const btnSearchHandler = (e) => {
    e.preventDefault();
    dispath(findImg({ query: dataImg, page: 1 }));
    console.log('data img :', dataImg);
    setDataImg('')
  }

  return (
    <div>
      <form onSubmit={btnSearchHandler} className='flex'>
        <input
          type='text'
          className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none
       focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl'
          placeholder='Search your images...'
          value={dataImg}
          onChange={searchChangeImg}/>
        <button className='bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400'
          type='submit' disabled={!dataImg}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchImages