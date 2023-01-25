import React from 'react';
import './Service.css';

function Service() {
  return (
    <div className='service'>
        <div className="service__head">
        <h3>Join us for service</h3>
        </div>
        <div className="service-">
            <div className="service__about">
                <h4>Day</h4>
                <h4>Time</h4>
                <h4>Venue</h4>
            </div>
        </div>
        <div className="service--">
            <div className="service__time">
                <h4>Sunday</h4>
                <h4>(08:00 - 11:000)am</h4>
                <h4>Ibrahim Alpha Hall</h4>
        </div>
        </div>
        <div className="service---">
            <div className="service__time1">
                <h4>Friday</h4>
                <h4>(12:45 - 02:30)am</h4>
                <h4>Ibrahim Alpha Hall</h4>
            </div>
        </div>

       
    </div>
  )
}

export default Service