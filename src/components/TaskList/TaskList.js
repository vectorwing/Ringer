import React from 'react';
import Task from './Task.js';
import './TaskList.css';

export default function TaskList({list, onNewTask, onRenameTask, onRemoveTask}) {

  function renderTask(task, index) {
    return (
      <Task
        key={task.id}
        id={task.id}
        text={task.text}
        done={task.done}
        onRenameTask={onRenameTask}
        onRemoveTask={onRemoveTask}
      />
    );
  }

  return (
    <div className="PanelTaskList">
      <ul className="tasklist">
        {list.map((task) => renderTask(task))}
      </ul>
      <button className="button-new-task" onClick={() => onNewTask()}>
        + New Task
      </button>
    </div>
  );
}