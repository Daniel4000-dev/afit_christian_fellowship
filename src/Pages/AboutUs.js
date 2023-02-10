import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <motion.div
    initial={{opacity: 0}} 
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h1 className="aboutUs">About Us</h1>
    </motion.div>
  )
}

export default AboutUs