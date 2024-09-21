import React from 'react';
import Nav from '../Components/Nav';
import './Complete.css'  
function Week({ days }) {
  const today = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(today.getDate() - 7);
  const Tasks = days.filter(task => {
    const taskDate = new Date(task.id);
    return taskDate >= oneWeekAgo && taskDate <= today;
  });
  return (
    <div className='comp'>
      <Nav titile={"Week"}/>
      {Tasks.length === 0 ? (
        <p>No tasks added in the last week</p>
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
  );
}


export default Week;
