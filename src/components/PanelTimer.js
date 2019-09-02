import React from 'react';
import Timer from './Timer.js';
import logo from '../logo.svg'
import './PanelTimer.css';

function PanelTimer() {
  return (
    <div className="panel PanelTimer">
      <img src={logo} className="PanelTimer-ring" alt="Timer" />
      <Timer />
    </div>
  );
}

export default PanelTimer;