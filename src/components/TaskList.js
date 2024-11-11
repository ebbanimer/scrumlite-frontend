import React, { useEffect, useState } from 'react';
import { getTasks } from '../api';

function TaskList({ sprintId }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (sprintId) {
            getTasks(sprintId).then(setTasks);
        }
    }, [sprintId]);

    return (
        <div>
            <h3>Tasks</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title} - {task.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
