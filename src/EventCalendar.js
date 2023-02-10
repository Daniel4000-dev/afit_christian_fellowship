import { Close } from '@mui/icons-material';
import React from 'react';
import './EventCalendar.css';
import { useDispatch } from 'react-redux';
import { closeEventCalendar } from './features/counter/eventSlice';

function EventCalendar() {

  const dispatch = useDispatch();

  return (
    <div className="eventCalendar">
      <div className="eventCalendar__body">
        <div className="yoo">
        <h4>2023 year's calendar</h4>
        <Close 
        onClick={ () => dispatch(closeEventCalendar())}
        className="eventCalendar__close" 
        />
        </div>
      </div>
    </div>
  )
}

export default EventCalendar