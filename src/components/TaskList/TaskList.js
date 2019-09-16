import React from 'react';
import Task from './Task.js';
import './TaskList.css';

export default function TaskList({list, onNewTask, onRemoveTask}) {

  function renderTask(task, index) {
    return (
      <Task
        text={list[index]}
      />
    );
  }

  return (
    <div className="PanelTaskList">
      <ul className="tasklist">
        {list.map((task, index) => renderTask(task, index))}
      </ul>
      <button className="button-new-task" onClick={() => onNewTask()}>
        + New Task
      </button>
    </div>
  );
}