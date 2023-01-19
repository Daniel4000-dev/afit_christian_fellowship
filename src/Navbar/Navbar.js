import React from 'react';
import logo from '../logo.png';
import './Navbar.css';
import { Menu } from '@mui/icons-material';

const Links = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About Us</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
    </>
  )

function Navbar() {
    
  return (
    <div className='navbar'>
      <div className="navbar__links">
        <div className="navbar__logo">
          <img
           src={logo}
           alt="" 
          />
        </div>
        <div className="navbar__links-container">
          <Links />
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Navbar