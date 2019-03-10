import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        < About />
        < Projects />
      </div >
    );
  }
}

export default App;
