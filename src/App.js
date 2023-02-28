import React, { Component, Fragment } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from '../src/Navbar/Navbar';
import Footer from './Footer';
import AnimatedRoutes from './AnimatedRoutes';
import ScrollButton from './components/ScrollButton';
import Radium, { StyleRoot } from 'radium';
import { Content, Heading } from './components/Styles';


function App() {

  return (
    <StyleRoot>
    <div className='app'>
      <>
        <Navbar />
       <div className='container'>
        <AnimatedRoutes />
       </div>
      </>
      <ScrollButton />
      <Footer />
    </div>
    </StyleRoot>
  );
}

export default Radium(App)
