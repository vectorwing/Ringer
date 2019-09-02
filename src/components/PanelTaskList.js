import React from 'react';
import PanelTitle from './PanelTitle.js';
import Task from './Task.js';
import './PanelTaskList.css';

function PanelTaskList() {
  return (
    <div className="panel PanelTaskList">
      <PanelTitle title="Task List"/>
      <Task text="Do the dishes" />
      <Task text="Vacuum the living room" />
      <Task text="Buy groceries" />
      <Task text="Do a backflip" />
    </div>
  );
}

export default PanelTaskList;