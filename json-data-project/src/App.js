import React, { Component } from 'react';
import Data from './data.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Data />
      </div>
    );
  }
}

export default App;
