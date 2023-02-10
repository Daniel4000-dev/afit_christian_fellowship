import React from 'react';
import './ContactUs.css';
import { motion } from 'framer-motion';

function ContactUs() {
  return (
    <motion.div
    initial={{opacity: 1}} 
    animate={{opacity: 1}}
    exit={{opacity: 1}}
    >
       <h1 className="contactUs">Contact Us</h1>
    </motion.div>
  )
}

export default ContactUs