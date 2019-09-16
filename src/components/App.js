import React, { useState } from 'react';
import Timer from './Timer/Timer.js';
import TaskList from './TaskList/TaskList.js';
import './App.css';

export default function App() {
  const [rings, setRings] = useState(0);
  const [tasks, setTasks] = useState([]);

  const handleNewTask = () => {
    setTasks(tasks.concat("Hello"));
  }

  const handleRemoveTask = () => {
    // TODO: Code to remove a given task
  }

  return (
    <div className="App">
      <div className="panel">
        <Timer
          baseTime={25*60}
          onTimerFinish={() => setRings(rings => rings + 1)}
          rings={rings}/>
      </div>
      <div className="panel">
        <TaskList
          list={tasks}
          onNewTask={handleNewTask}
          onRemoveTask={handleRemoveTask}/>
      </div>
    </div>
  );
}