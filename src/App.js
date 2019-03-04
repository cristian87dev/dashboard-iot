import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import Button from '@material-ui/core/Button';

import Card from './components/Card';

import './App.css';

const socket = openSocket('ws://localhost:8081');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { distance: 0 };

    this.switchOnBuzzer = this.switchOnBuzzer.bind(this);
    this.switchOffBuzzer = this.switchOffBuzzer.bind(this);

    socket.on(
      'distance',
      distance => this.setState({ distance })
    );
  }

  switchOnBuzzer() {
    console.log('Buzzer On');
    socket.emit('buzzer', 'ON');
  }

  switchOffBuzzer() {
    console.log('Buzzer Off');
    socket.emit('buzzer', 'OFF');
  }

  render() {
    return (
      <div className="App">
        <Card>
          <p className="paragraph">This is a Paragraph. Distance: { parseInt(this.state.distance) }</p>
        </Card>
        <Card>
          <p className="paragraph">This is a Paragraph 2.</p>
        </Card>
        <div className="actions">
          <Button variant="contained" color="primary" onClick={this.switchOnBuzzer}>Buzzer On</Button>
          <Button variant="contained" color="primary" onClick={this.switchOffBuzzer}>Buzzer Off</Button>
        </div>
      </div>
    );
  }
}

export default App;
