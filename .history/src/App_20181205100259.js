import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssB1aseline';

import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import MainTop from './components/MainTop/MainTop'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline/>
        <Header/>
        <Intro/>
        <MainTop/>
      </div>
    );
  }
}

export default App;
