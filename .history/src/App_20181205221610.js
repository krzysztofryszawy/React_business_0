import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Intro2 from './components/Intro2/Intro2'
import TabsWrappedLabel from './components/TabsWrappedLabel/TabsWrappedLabel'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header/>
        <Intro2/>
        <Intro/>
        <TabsWrappedLabel/>
        <Intro/>
      </div>
    );
  }
}

export default App;
