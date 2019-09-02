import React from 'react';
import PanelTimer from './PanelTimer.js';
import PanelTaskList from './PanelTaskList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <PanelTimer />
      <PanelTaskList />
    </div>
  );
}

export default App;
