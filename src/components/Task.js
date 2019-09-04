import React from 'react';
import './Task.css'

export default function Task(props) {
  const id = props.id;
  const text = props.text;

  return (
    <li>
      <label for={id} className="Task">
        <p>{text}</p>
        <button className="Task-remove">✕</button>
      </label>
    </li>
  );
}