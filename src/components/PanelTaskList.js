import React from 'react';
import Task from './Task.js';
import './PanelTaskList.css';

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
        {this.props.tasks.map((task, index) => this.renderTask(index))}
      </div>
    );
  }
}

export default PanelTaskList;