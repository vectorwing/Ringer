import React from 'react';
import './PanelTimer.css';

export default function TimerControls(props) {
  return (
    <div className="TimerControls">
      <button className="button-start" onClick={() => props.toggle()}>
        { props.isActive ? 'Stop' : 'Start'}
      </button>
      <button className="button-start" onClick={() => props.reset()}>
        Reset
      </button>
    </div>
  );
}