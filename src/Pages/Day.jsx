import React from 'react'
import Nav from '../Components/Nav';
import './Complete.css'







\
function Day({ days }) {
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  const Tasks = days.filter(task => {
    const taskDate = new Date(task.id);
    return (
      taskDate.getDate() === todayDate &&
      taskDate.getMonth() === todayMonth &&
      taskDate.getFullYear() === todayYear
    );
  });
  return (
    <div className='comp'>
      <Nav titile={"Day"}/>
{Tasks.length === 0 ? (
        <p>No tasks added today</p>
      ) : (
        <ul>
          {Tasks.map(task => (
            <li key={task.id}>
              {task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Day
