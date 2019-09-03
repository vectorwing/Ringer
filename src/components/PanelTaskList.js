import React from 'react';
import Task from './Task.js';
import './PanelTaskList.css';
import ButtonNewTask from './ButtonNewTask.js';

class PanelTaskList extends React.Component {
  renderTask(index) {
    return (
      <Task
        text={this.props.tasks[index]}
      />
    );
  }

  render() {
    return (
      <div className="panel PanelTaskList">
        <ul className="tasklist">
          {this.props.tasks.map((task, index) => this.renderTask(index))}
        </ul>
        <ButtonNewTask />
      </div>
    );
  }
}

export default PanelTaskList;