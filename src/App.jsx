import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DetailPage from './pages/DetailPage'


function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path='/' />
      <Route element={<DetailPage />} path='/detail/:id' />
    </Routes>
  );
}

export default App
