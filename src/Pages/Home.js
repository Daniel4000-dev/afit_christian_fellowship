import React from 'react';
import './Home.css';
import video from '../video.mp4';
import Service from '../Service';
import Fruits from '../Fruits';
import Anouncement from '../Anouncement';
import Photos from '../Photos'

const Holder = () => {
  return (
    <div className='header'>
        <div className='header__top'>
          <figcaption>
            <video preload='true' autoPlay muted loop playsInline  className='header__video' src={video} />
            <div className='header__text'>
            <h1 className='header__h1-1'>Welcome to Afit</h1>
            <h1 className='header__h1-2'>Christian Fellowship</h1>
            <h4>We are arrows to our generation. We are a peculiar people. We are a people of God.</h4>
            </div>
          </figcaption>
        </div>

        <div className="header__body">
        <Photos />
        <Anouncement />
        <Fruits />
        <Service />
        </div>
    </div>
  )
}

export default Holder