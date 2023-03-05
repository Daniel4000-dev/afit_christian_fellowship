import React from 'react';
import logo from '../logo.png';
import './Navbar.css';
import { Menu } from '@mui/icons-material';
import { Link } from "react-router-dom";
import AnimatedRoutes from '../AnimatedRoutes';
import { useState, useEffect } from 'react';
import { useEffect, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [ sticky, setSticky ] = useState(false);
  const [ navcolor, setNavColor ] = useState()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY  >= 90){
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    console.log(location.pathname)
  }, [location])

  const Links = (
    <div className="navbar__link">
        <ul>
          <li>
            <Link className='nav-link' to="/">Home</Link>
          </li>
          <li>
            <Link className='nav-link' to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul> 
    </div>
  );

  return (
    <nav className={sticky ? 'navbar navbar-bg' : 'navbar'}>
      <div className="navbar">
      <div className="navbar__logo">
      <img
        src={logo}
        alt="" 
      />
      {Links}
      <Menu />
      </div>
      </div>
    </nav>
  )
}

export default Navbar