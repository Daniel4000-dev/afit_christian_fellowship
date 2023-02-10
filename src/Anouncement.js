import React from 'react';
import './Anouncement.css';
import photo from './photo.png'

function Anouncement() {
  return (
    <div className='anouncement'>
      <div className="anouncement__content">
        <img src={photo} alt="" />
      </div>
    </div>
  )
}

export default Anouncement