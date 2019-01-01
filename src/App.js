import React, { Component } from 'react';
import Header from './components/Header';
import Parallax from './components/Parallax';
import Description from './components/Description';
import Game from './components/Game';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Parallax />
        <Description />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
