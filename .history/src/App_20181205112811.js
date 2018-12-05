import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Intro from './components/Intro2/Intro2'
import MainTop from './components/MainTop/MainTop'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header/>
        <Intro/>
        <Intro2/>
        <MainTop/>
      </div>
    );
  }
}

export default App;
