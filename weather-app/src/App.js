import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const key = "bfa684b454290ae3a58a66e0281b00d9";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: "manila",
      description: ""
    }
  }

  componentDidMount() {
    this.getWeather(this.state.city);

  }

  getWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${key}&q=${city}`)
      .then(response => response.json())
      .then(json => {
        this.setState({description: json.weather[0].description})
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather App</h1>
        </header>
        <h1>{this.state.city}</h1>
        <h2>{this.state.description}</h2>
      </div>
    );
  }
}

export default App;
