import React, { useState } from 'react';
import { addSprint } from '../api';

function AddSprint({ onSprintAdded }) {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSprint = { name, startDate, endDate };
        await addSprint(newSprint);
        onSprintAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Sprint Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            <button type="submit">Add Sprint</button>
        </form>
    );
}

export default AddSprint;
