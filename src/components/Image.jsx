import React from 'react'
import fakeImg from '../assets/fake-img.jpg'

const Image = () => {
  return (
    <a href='/#'>
      <img src={fakeImg} alt='logo-img' className="h-72 w-full object-cover rounded-lg shadow-md" />
    </a>
  )
}

export default Image