import React, { Component } from 'react';
import Tweets from './components/Tweets';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tweets />
      </div>
    );
  }
}

export default App;
