import React, { useEffect } from 'react';
import './Service.css';
import { EventNote } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openEventCalendar } from './features/counter/eventSlice';
import { animations, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'


function Service() {
    const dispatch = useDispatch();

    const {ref, inView} = useInView({
        threshold: 0.02
    });
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    duration: 0.2,
                    when: "beforeChildren"
                }
            })
        }
        if(!inView){
            animation.start({x: '-80vw'})
        }
        console.log("use effect hook, inview", inView); 
    }, [inView])
    

  return (
    <motion.div 
        className='service'
        ref={ref}
        animate={animation}
    >
        <div className="service__head">
        <motion.h3 varian={animations} style={{opacity: inView ? 1 : 0}} >Worship With Us</motion.h3>
        </div>
        <table className="service-">
            <tbody className='service__tbody'>
            <tr className="service__sunday">
                <td>SUNDAY</td>
                <td>SUNDAY SERVICE</td> 
                <td>8.00AM</td>
            </tr>
            <tr className="service__sunday2">
                <td>      </td>
                <td>DISCIPLESHIP CLASS</td>
                <td>6.OOPM</td>
            </tr>
            <tr className='service__tuesday'>
                <td>TUESDAY</td>
                <td>PRAYER MEETING</td> 
                <td>7.00PM</td>
            </tr>
            <tr className='service__thursday'>
                <td>THURSDAY</td>
                <td>UNIT MEETING</td>
                <td>5.00PM</td>
            </tr>
            <tr className='service__friday'>
                <td>FRIDAY</td>
                <td>PADRE HOUR</td> 
                <td>12.45PM</td>
            </tr>
            </tbody>
        </table>

        <Button 
        className="service__event"
        variant="contained"
        sx={{
            ':hover': {
              bgcolor: 'pink', 
              color: 'white',
            },
          }}
        onClick ={() => dispatch(openEventCalendar())}
        >
            <EventNote className="event" />
        </Button>
    </motion.div>
  )
}

export default Service