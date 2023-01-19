import React from 'react';
import './Footer.css';
import logo from './logo.png'


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

            <div className="footer__text">
                <h3></h3>
            </div>
        </div>
    </div>
  )
}

export default Footer