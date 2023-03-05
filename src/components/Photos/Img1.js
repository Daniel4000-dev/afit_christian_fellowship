import React from 'react';
import './Img1.css';
import img1 from './pictures/04.jpg';
import img2 from './pictures/07.jpg';
import img3 from './pictures/08.jpg';
import img4 from './pictures/12.jpg';
import img5 from './pictures/00012.jpg';
import img6 from './pictures/15.jpg';
import img7 from './pictures/00016.jpg';
import img8 from './pictures/55.jpg';
import img9 from './pictures/89.jpg';
import img10 from './pictures/99.jpg';
import img11 from './pictures/63d.jpeg';
import img12 from './pictures/62.jpeg';

function Img1() {
  return (
    <div className='img1'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img className='img3' src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img className='img6' src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img className='img10' src={img10} alt="" />
        <img src={img11} alt="" />
        <img src={img12} alt="" />
    </div>
  )
}

export default Img1