import React from 'react';
import './PanelTimer.css';

export default function TimerDisplay(props) {
  function updateCanvas() {
    const ctx = this.refs.timer.getContext('2d');

    ctx.font = '72px Segoe UI';
    ctx.fillStyle = `#ffffff`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.getTimeFromSeconds(25*60), 200, 200);

    ctx.lineWidth = 16;
    ctx.strokeStyle = `#61dafb`;
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, 2 * Math.PI);
    ctx.stroke();
  }
  
  function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function getTimeFromSeconds(seconds) {
    const minute = minTwoDigits(seconds / 60)
    const second = minTwoDigits(seconds % 60)
    return Math.floor(minute) + ':' + second;
  }

  return (
    <div className="TimerDisplay">
      <p>{getTimeFromSeconds(props.time)}</p>
    </div>
  );
}