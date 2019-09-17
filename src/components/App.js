import React, { useState } from 'react';
import Timer from './Timer/Timer.js';
import TaskList from './TaskList/TaskList.js';
import './App.css';

export default function App() {
  const [rings, setRings] = useState(0);
  const [tasks, setTasks] = useState([]);

  const handleRenameTask = (key, newName) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex(item => item.id === key);
    newTasks[index].text = newName;
    setTasks(newTasks);
  }

  const handleNewTask = () => {
    const newTask = {
      id: Date.now(),
      text: '',
      done: false,
    };
    setTasks(tasks.concat(newTask));
  }

  const handleRemoveTask = (key) => {
    const changedTask = tasks.filter(item => item.id !== key);
    setTasks(changedTask);
  }

  return (
    <div className="App">
      <div className="panel panel-timer">
        <Timer
          baseTime={25*60}
          onTimerFinish={() => setRings(rings => rings + 1)}
          rings={rings}/>
      </div>
      <div className="panel panel-tasklist">
        <TaskList
          list={tasks}
          onNewTask={handleNewTask}
          onRenameTask={handleRenameTask}
          onRemoveTask={handleRemoveTask}/>
      </div>
    </div>
  );
}