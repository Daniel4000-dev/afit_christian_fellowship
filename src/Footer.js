import { Facebook, Instagram } from '@mui/icons-material';
import React, { useEffect } from 'react';
import './Footer.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'


function Footer() {

  const {ref, inView} = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        y:0,
        opacity: 1,
        transition: {
          duration: 2.5
        }
      })
    }
    if(!inView){
      animation.start({
        y: '-5vw', 
        opacity: 0
      })
    }
    console.log('footer is currently inview', inView)
  }, [inView])
  return (
    <motion.div 
      className='footer'
      ref={ref}
    >
      <motion.div animate={animation}>
        <div className="footer__top-container">
        <div className="footer__top">
            <img  src={logo} alt="" />
            <h3>AFIT CHRISTIAN FELLOWSHIP</h3>
        </div>
        </div>

        <div className="footer__copy-right">
            <div className="footer__copy-right_logo">
                <h3>© Copyright ACF 2023. All Rights Reserved. Designed and Developed by ACF MEDIA DEPERTMENT</h3>
            </div>

            <div className="footer__social">
               <a href="https://www.google.com" target="_blank"> 
               <Facebook /> 
               </a>
               <a href="https://www.google.com" target="_blank"> 
               <Instagram /> 
               </a>
            </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer