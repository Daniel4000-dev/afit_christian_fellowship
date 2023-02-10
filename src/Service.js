import React from 'react';
import './Service.css';
import { EventNote } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openEventCalendar } from './features/counter/eventSlice';


function Service() {
    const dispatch = useDispatch();

  return (
    <div className='service'>
        <div className="service__head">
        <h3>Worship With Us</h3>
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
    </div>
  )
}

export default Service