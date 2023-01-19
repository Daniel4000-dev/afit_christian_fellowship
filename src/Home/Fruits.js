import React from 'react'
import './Fruits.css'
import fruits from './fruits.png'

function Fruits() {
  return (
    <div className='fruits'>
        <img src={fruits} alt="" />
        <div className="fruits-offering">
            <div className="fruits-offering_title">
                <h4>Online Giving</h4>
            </div>
            <div className="fruits-offering_body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit odio dignissimos architecto tempora fuga vitae. Expedita, impedit quidem ipsa, quaerat, distinctio iusto maxime corporis est consequuntur minima pariatur animi?
            </div>
            
        </div>
    </div>
  )
}

export default Fruits