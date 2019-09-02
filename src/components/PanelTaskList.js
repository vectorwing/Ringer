import React from 'react';
import Task from './Task.js';
import './PanelTaskList.css';

function PanelTaskList() {
  return (
    <div className="panel PanelTaskList">
      <Task text="Do the dishes" />
      <Task text="Vacuum the living room" />
      <Task text="Buy groceries" />
      <Task text="Do a backflip" />
    </div>
  );
}

export default PanelTaskList;