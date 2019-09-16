import React, { useState, useEffect } from 'react';
import './Timer.css';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';

export default function Timer({baseTime, onTimerFinish, rings}) {

  const [time, setTime] = useState(baseTime);
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }

  function handleReset() {
    setTime(baseTime);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      if (onTimerFinish) {
        onTimerFinish();
      }
      handleReset();
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="PanelTimer">
      <TimerDisplay
        baseTime={baseTime}
        currentTime={time}
      />
      <TimerControls
        isActive={isActive}
        onToggle={() => handleToggle()}
        onReset={() => handleReset()}
      />
      <p>Rings: {rings}</p>
    </div>
  );
}