import React, { Component } from 'react';
import './App.css';
import KittenGallery from './components/KittenGallery';

class App extends Component {
    render () {
        return (
          <div className="App">
            <KittenGallery />
          </div>
        );
    }
}

export default App;
