import React, { Component } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from '../src/Home/Header';
import Navbar from '../src/Navbar/Navbar';
import Footer from './Footer';
import Service from './Home/Service';
import Fruits from './Home/Fruits';
import Anouncement from './Home/Anouncement';

function App() {
  return (
    <div className='gradient_bg'>
      <div className='boy'>
        <Navbar />
        <Header />
      </div>
      <Anouncement />
      <Fruits />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
