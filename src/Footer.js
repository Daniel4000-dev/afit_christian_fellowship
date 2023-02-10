import { Facebook, Instagram } from '@mui/icons-material';
import React from 'react';
import './Footer.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
        <div className="footer__top-container">
        <div className="footer__top">
            <img src={logo} alt="" />
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
    </div>
  )
}

export default Footer