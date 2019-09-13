import React, { useState, useEffect } from 'react';
import './PanelTimer.css';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';

export default function PanelTimer(props) {

  const [time, setTime] = useState(props.baseTime);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTime(props.baseTime);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      props.onTimerFinish();
      reset();
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="panel PanelTimer">
      <TimerDisplay
        baseTime={props.baseTime}
        time={time}
      />
      <TimerControls
        isActive={isActive}
        toggle={() => toggle()}
        reset={() => reset()}
      />
    </div>
  );
}