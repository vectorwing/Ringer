import React from 'react';
import Timer from './Timer.js';
import './PanelTimer.css';

function PanelTimer() {
  return (
    <div className="panel PanelTimer">
      <Timer />
      <div className="timer-controls">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default PanelTimer;