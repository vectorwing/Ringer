import React, { useEffect } from 'react';
import './Task.css'

export default function Task({id, text, done, onNewTask, onRenameTask, onRemoveTask}) {
  const handleChange = (event) => {
    const newName = event.target.value;
    onRenameTask(id, newName);
  }

  const detectEnter = (ev) => {
    if (ev.key === 'Enter') {
      onNewTask();
      ev.preventDefault();
    }
  }

  useEffect(() => {
    const inputs = [...document.querySelectorAll('input')]
    inputs[inputs.length - 1].focus();
  }, []);

  return (
    <li className="Task" key={id}>
      <label>
        <input className={`task-input`} type="text" value={text} onChange={handleChange} onKeyPress={detectEnter}/>
      </label>
      <button className="Task-remove" onClick={() => onRemoveTask(id)}>✕</button>
    </li>
  );
}