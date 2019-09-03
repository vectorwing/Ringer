import React from 'react';
import './Task.css'

class Task extends React.Component {
  render() {
    const id = this.props.id;
    const text = this.props.text;
    return (
      <li>
        <label for={id} className="Task">
          <p>{text}</p>
          <p className="Task-remove">✕</p>
        </label>
      </li>
    );
  }
}

export default Task;