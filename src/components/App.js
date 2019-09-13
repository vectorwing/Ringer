import React from 'react';
import PanelTimer from './PanelTimer/PanelTimer.js';
import PanelTaskList from './PanelTaskList.js';
import './App.css';

export default function App(props) {
  return (
    <div className="App">
      <PanelTimer baseTime={60*25}/>
      <PanelTaskList/>
    </div>
  );
}