import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'


class App extends Component {
  render() {
    return (
      <React.Fragment className="App">
        <CssBaseline/>
        <Header/>
        <Intro/>
      </React.Fragment>
    );
  }
}

export default App;
