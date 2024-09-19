import React from 'react'

function Complete({lists}) {
    const completedTasks = lists.filter(task => task.status);
    return (
    <div>
        <h2>Completed Tasks</h2>
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
