import React from 'react';
import logo from '../logo.png';
import './Navbar.css';
import { Menu } from '@mui/icons-material';
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className='navbar'>
    <div className="navbar__logo">
      <img
        src={logo}
        alt="" 
      />
      <div className="navbar__link">
      <Link className='nav-link' to="/">Home</Link>
      <Link className='nav-link' to="/about">About Us</Link>
      </div>
      <Menu />
    </div>
    </nav>
  )
}

export default Navbar