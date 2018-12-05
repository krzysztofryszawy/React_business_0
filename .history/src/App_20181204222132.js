import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline/>
        <Header/>
        <Intro/>
      </div>
    );
  }
}

export default App;
