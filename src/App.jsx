import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './Pages/Home/Home'
// import NavModalContextProvider from './contexts/NavModalContext';

function App() {


  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
