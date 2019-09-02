import React from 'react';
import './Task.css'

class Task extends React.Component {
  render() {
    return (
      <div className="Task">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Task;