import React, { useEffect } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import video from '../video.mp4';
import Service from '../Service';
import Fruits from '../Fruits';
import Anouncement from '../Anouncement';
import Photos from '../components/Photos/Img1';
import EventCalendar from '../EventCalendar';
import { useSelector } from 'react-redux';
import { selectEventCalendarIsOpen } from '../features/counter/eventSlice';
import AnimatedText from '../components/AnimatedText';

const Holder = () => {
  const eventCalendarIsOpen = useSelector(selectEventCalendarIsOpen)
  useEffect(() => {
    <AnimatedText />
  }, [])

  return (
    <div 
    className='header'
    initial={{opacity: 0}} 
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
        <div className='header__top'>
          <figcaption>
            <video preload='true' autoPlay muted loop playsInline  className='header__video' src={video} />
            <div className='header__text'>
            <h1 className='header__h1-1'>Welcome to Afit</h1>
            <h1 className='header__h1-2'>Christian Fellowship</h1>
            <h4>We are arrows to our generation. We are a peculiar people. We are a people of God.</h4>
             <AnimatedText 
            className="animatedText"
            text='We are arrows to our generation. We are a peculiar people. We are a people of God.'
            />
            </div>
          </figcaption>
        </div>

        <div className="header__body">
          <Photos />
        <Anouncement />
        <Fruits />
        <Service />
        {eventCalendarIsOpen && <EventCalendar />}
        </div>
    </div>
  )
}

export default Holder