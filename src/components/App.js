import React from 'react';
import PanelTimer from './PanelTimer.js';
import PanelTaskList from './PanelTaskList.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        'Do the dishes',
        'Mow the lawn',
        'Take out the trash',
        'Mockup Ringer interface',
        'Do a cool backflip',
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <PanelTimer />
        <PanelTaskList/>
      </div>
    );
  }
}

export default App;
