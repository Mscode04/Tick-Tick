import React from 'react'
import Images1 from '../Assets/icons8-menu-24.png';
import Images2 from '../Assets/icons8-sort-24.png';
import Images3 from '../Assets/icons8-more-30.png';
import './Nav.css'
function Nav({titile}) {
  return (
    <div className='inn'>
      <div className="nav">
            <div className="lt">
            <img src={Images1} alt="" /><span>{titile}</span>
            </div>
            <div className="Rt">
            <img src={Images2} alt="" />
            <img src={Images3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav
