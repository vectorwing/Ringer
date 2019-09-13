import React, { useEffect } from 'react';
import './PanelTimer.css';

export default function TimerDisplay(props) {
  
  const canvasRef = React.useRef(null);

  function updateCanvas(ctx) {
    ctx.clearRect(0, 0, 400, 400)
    ctx.font = '72px Segoe UI';
    ctx.fillStyle = `#ffffff`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(getTimeFromSeconds(props.time), 200, 200);

    var angle = (2 * Math.PI * props.time) / props.baseTime;
    var offset = 1.5 * Math.PI;

    ctx.beginPath();
    var start = offset;
    var end = angle + offset;

    ctx.lineWidth = 16;
    ctx.strokeStyle = `#61dafb`;
    ctx.arc(200, 200, 150, start, end);
    ctx.stroke();
    ctx.restore();
  }

  function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function getTimeFromSeconds(seconds) {
    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;
    return minTwoDigits(minute) + ':' + minTwoDigits(second);
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d');
    updateCanvas(ctx);
  }, [props.time]);

  return (
    <div className="TimerDisplay">
      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
}