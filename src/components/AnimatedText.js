import React, { Component } from 'react';
import './AnimatedText.css';
import { motion } from 'framer-motion';
import Radium, { StyleRoot } from 'radium';

const style = { 
    overflow: "hidden", 
    display: "flex", 
    fontize: "2rem", 
    mrginLeft: "0.1rem", 
}

function AnimatedText({ text }) {

    const letters = Array.from(text);

    const container = {
    hidden: { opacity: 0 },
    visible: (i = 1 ) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 4 * i},
    }),
    };

    const child = {
    visible:{
        opacity: 1,
        x: 0,
        transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        }
    },
    hidden: {
        opacity: 0,
        x: 20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    }
    }
  return (
    // <StyleRoot>
    <motion.div 
    className='name'
    style={style}
     variants={container} 
     initial="hidden" 
     animate="visible"
     >
         {letters.map((letter,index) => (
            <motion.span 
            className="names"
            style={{
                color: "#12a2e1",
                fontFamily: "'Reggae One', cursive",
                textlign: "center",
                mrgiLeft: "0.1rem"
            }}
            variants={child}
            key={index}>
                {letter ===" "? "\u00A0":letter}
            </motion.span>
        ))}
    </motion.div>
    // </StyleRoot>
  )
}

export default Radium(AnimatedText)