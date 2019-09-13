import React, { useState } from 'react';
import PanelTimer from './PanelTimer/PanelTimer.js';
import PanelTaskList from './PanelTaskList.js';
import './App.css';

export default function App(props) {
  const [rings, setRings] = useState(0);

  return (
    <div className="App">
      <p>Rings: {rings}</p>
      <PanelTimer baseTime={10} onTimerFinish={() => setRings(rings => rings + 1)}/>
      <PanelTaskList/>
    </div>
  );
}