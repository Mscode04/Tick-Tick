import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './MidilBar.css'
import Images1 from '../Assets/icons8-day-24.png'
import Images2 from '../Assets/icons8-trash-24.png'
import Images3 from '../Assets/icons8-minus-1-week-24.png'
import Images4 from '../Assets/icons8-inbox-30.png'
import Images5 from '../Assets/icons8-checkbox-24.png'
import { Link } from 'react-router-dom';

function MidilBar() {
return (
    <div className='midlbox'>
        <div className="up-container2">
            
            <Link to='Dy'><div className='day com'><img src={Images1} alt="" />Day</div></Link>
            <Link to='Wk'><div className='week com'><img src={Images3} alt="" />Week</div></Link>
            <Link to='/'><div className='inbox com'><img src={Images4} alt="" />Inbox</div></Link>
            
            
            

        </div>
        <div className="dn-container1">
            <Link to='Cm'><div className='completed com'><img src={Images5} alt=""/>Completed</div></Link>
            <Link to='Tr'><div className='trsh com'><img src={Images2} alt="" />Trash</div></Link>
            
            
        </div>
    </div>
)   
}

export default MidilBar
