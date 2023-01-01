import React from 'react';

const SearchImages = ({onSubmit, onChange, value}) => {
  return (
    <div>
      <form onSubmit={onSubmit} className='flex'>
        <input type='text' className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none
       focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl'
          placeholder='Search your images...'
          value={value}
          onChange={onChange}/>
        <button className='bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400'
          type='submit' disabled={!value}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchImages;