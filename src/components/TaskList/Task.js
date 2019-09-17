import React, { useEffect } from 'react';
import './Task.css'

export default function Task({id, text, done, onRenameTask, onRemoveTask}) {
  const handleChange = (event) => {
    const newName = event.target.value;
    onRenameTask(id, newName);
  }

  useEffect(() => {
    const inputs = [...document.querySelectorAll('input')]
    inputs[inputs.length - 1].focus();
  }, []);

  return (
    <li className="Task" key={id}>
      <label>
        <input className={`task-input`} type="text" value={text} onChange={handleChange}/>
      </label>
      <button className="Task-remove" onClick={() => onRemoveTask(id)}>✕</button>
    </li>
  );
}