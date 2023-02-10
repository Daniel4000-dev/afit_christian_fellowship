import React from 'react';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import { Router, Route, Routes, useLocation }from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>

    <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes