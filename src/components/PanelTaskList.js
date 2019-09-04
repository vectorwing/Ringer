import React, { useState } from 'react';
import Task from './Task.js';
import './PanelTaskList.css';

export default function PanelTaskList(props) {

  const [tasks, setTasks] = useState([]);

  function renderTask(index) {
    return (
      <Task
        text={tasks[index]}
      />
    );
  }

  return (
    <div className="panel PanelTaskList">
      <ul className="tasklist">
        {tasks.map((task, index) => renderTask(index))}
      </ul>
      <button className="button-new-task" onClick={() => setTasks(tasks.concat("Hello"))}>
        + New Task
      </button>
    </div>
  );
}