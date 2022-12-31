import React from 'react'
import Jumbotron from './components/Jumbotron'
import WrapperImg from './components/WrapperImg'
import DetailPage from './components/DetailPage'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Jumbotron />} />
      </Routes>
      <WrapperImg />
      <Routes>
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App
