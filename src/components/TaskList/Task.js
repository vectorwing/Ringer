import React from 'react';
import './Task.css'

export default function Task({onClick, done, text}) {
  return (
    <li className="Task">
      <label>
        <input type="text" value={text} readOnly={true} />
        <button className="Task-remove">✕</button>
      </label>
    </li>
  );
}