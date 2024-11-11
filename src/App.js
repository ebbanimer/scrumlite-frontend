import React, { useState } from 'react';
import SprintList from './components/SprintList';
import TaskList from './components/TaskList';
import AddSprint from './components/AddSprint';
import AddTask from './components/AddTask';

function App() {
    const [selectedSprint, setSelectedSprint] = useState(null);

    return (
        <div>
            <h1>ScrumLite</h1>
            <AddSprint onSprintAdded={() => window.location.reload()} />
            <SprintList onSelectSprint={setSelectedSprint} />
            {selectedSprint && (
                <>
                    <TaskList sprintId={selectedSprint} />
                    <AddTask sprintId={selectedSprint} onTaskAdded={() => window.location.reload()} />
                </>
            )}
        </div>
    );
}

export default App;
