
import React from 'react'
import Nav from '../Components/Nav'
import './Complete.css'  
function Trash({ deletedItems }) {
  return (
    <div className='comp'>
        <Nav titile={"Trash"}/>
            {deletedItems.length > 0 ? (
                deletedItems.map((item) => (
                    <ul key={item.id}>
                        <li>{item.text}</li>
                    </ul>
                ))
            ) : (
                <p>No deleted tasks</p>
            )}
    </div>
  )
}

export default Trash
