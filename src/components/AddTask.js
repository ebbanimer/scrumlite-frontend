import React, { useState } from 'react';
import { addTask } from '../api';

function AddTask({ sprintId, onTaskAdded }) {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (sprintId) {
            await addTask({ title }, sprintId);
            onTaskAdded();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
