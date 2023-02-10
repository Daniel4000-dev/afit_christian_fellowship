import React, {useState} from 'react';
import {  KeyboardDoubleArrowUpOutlined } from '@mui/icons-material';
import { Button } from './Styles';
import './Styles.js';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10){
      setVisible(true)
    } 
    else if (scrolled <= 10){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button variant="contained" className="button">
     <KeyboardDoubleArrowUpOutlined onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default ScrollButton;