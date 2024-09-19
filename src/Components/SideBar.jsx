import React from 'react'
import Images from '../Assets/shaheen8.png'
import Images1 from '../Assets/icons8-checkbox-50.png'
import Images2 from '../Assets/icons8-alert-50.png'
import Images3 from '../Assets/icons8-calender-64.png'
import Images4 from '../Assets/icons8-reserch-64.png'
import Images6 from '../Assets/icons8-question-50.png'
import Images5 from '../Assets/icons8-update-left-rotation-30.png'
import 'bootstrap/dist/css/bootstrap.css';
import './SideBar.css'

function SideBar() {
  return (
    <div className='main'>
        <div className="up-container">
            <a href=""><img className='pro' src={Images} alt="" /></a>
            <a href=""><img className='ic' src={Images1} alt="" /></a>
            <a href=""><img className='ic' src={Images3} alt="" /></a>
            <a href=""><img className='ic' src={Images4} alt="" /></a>
        </div>
        <div className="dn-container">
            <a href=""><img className='ic' src={Images5} alt="" /></a>
            <a href=""><img className='ic' src={Images2} alt="" /></a>
            <a href=""><img className='ic' src={Images6} alt="" /></a>
        </div>
    </div>
  )
}

export default SideBar
