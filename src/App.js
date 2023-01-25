import React, { Component } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './Pages/Home';
import Navbar from '../src/Navbar/Navbar';
import Footer from './Footer';
import { Route, Routes }from 'react-router-dom';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className='app'>
      <>
        <Navbar />
       <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
       </div>
      </>
      <Footer />
    </div>
  );
}

export default App;
