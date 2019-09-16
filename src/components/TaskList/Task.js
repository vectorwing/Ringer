import React from 'react';
import './Task.css'

export default function Task({id, text, done, onRenameTask, onRemoveTask}) {
  const handleChange = (event) => {
    const newName = event.target.value;
    onRenameTask(id, newName);
  }
  return (
    <li className="Task" key={id}>
      <label>
        {/* <input type="text" value={text} onChange={() => onRenameTask(id, )}/> */}
        <input type="text" value={text} onChange={handleChange}/>
      </label>
      <button className="Task-remove" onClick={() => onRemoveTask(id)}>✕</button>
    </li>
  );
}