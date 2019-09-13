import React from 'react';
import './Timer.css'

class TimerCanvas extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
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

  minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  }

  getTimeFromSeconds(seconds) {
    const minute = this.minTwoDigits(seconds / 60)
    const second = this.minTwoDigits(seconds % 60)
    return Math.floor(minute) + ':' + second;
  }

  render() {
    return (
      <div className="Timer">
        <canvas ref="timer" width={400} height={400} />
      </div>
    );
  }
}

export default TimerCanvas;