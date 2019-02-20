import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import TemperatureDisplay from './Components/TemperatureDisplay';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TemperatureDisplay />
      </div>
    );
  }
}

export default App;
