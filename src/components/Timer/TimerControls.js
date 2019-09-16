import React from 'react';
import './Timer.css';

export default function TimerControls({isActive, onToggle, onReset}) {
  return (
    <div className="TimerControls">
      <button className="button-start" onClick={() => onToggle()}>
        { isActive ? 'Stop' : 'Start'}
      </button>
      <button className="button-reset" onClick={() => onReset()}>
        Reset
      </button>
    </div>
  );
}