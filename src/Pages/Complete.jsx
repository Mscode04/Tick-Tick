import React from 'react'
import Nav from '../Components/Nav';
import './Complete.css'

function Complete({lists}) {
    const completedTasks = lists.filter(task => task.status);
    return (
    <div className='comp'>
        <Nav titile={"Completed Tasks"}/>
        {completedTasks.length === 0 ? (
        <p>No tasks</p>
        ) : (
        <ul>
            {completedTasks.map(task => (
            <li key={task.id}>
                {task.text}
            </li>
            ))}
        </ul>
        )}
    </div>
    )
}

export default Complete
