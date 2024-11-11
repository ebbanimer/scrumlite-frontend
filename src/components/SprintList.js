import React, { useEffect, useState } from 'react';
import { getSprints } from '../api';

function SprintList({ onSelectSprint }) {
    const [sprints, setSprints] = useState([]);

    useEffect(() => {
        getSprints().then(setSprints);
    }, []);

    return (
        <div>
            <h3>Sprints</h3>
            <ul>
                {sprints.map(sprint => (
                    <li key={sprint.id} onClick={() => onSelectSprint(sprint.id)}>
                        {sprint.name} (Start: {sprint.startDate}, End: {sprint.endDate})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SprintList;
