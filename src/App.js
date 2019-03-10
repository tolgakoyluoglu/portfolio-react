import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects'
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        < Banner />
        < About />
        < Projects />
        < Footer />
      </div >
    );
  }
}

export default App;
