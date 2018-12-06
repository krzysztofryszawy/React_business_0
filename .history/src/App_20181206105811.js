import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header'
import ImageLeft from './components/ImageLeft/ImageLeft'
import Intro2 from './components/Intro2/Intro2'
import TabsWrappedLabel from './components/TabsWrappedLabel/TabsWrappedLabel'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header/>
        <Intro2
          img={'item2'}/>
        <ImageLeft
          img={'item1'}/>
        <TabsWrappedLabel/>
        <Intro2
          img={'item4'}/>
      </div>
    );
  }
}

export default App;
