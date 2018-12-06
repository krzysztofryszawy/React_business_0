import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header'
import ImageLeft from './components/ImageLeft/ImageLeft'
import ImageRight from './components/ImageRight/ImageRight'
import TabsWrappedLabel from './components/TabsWrappedLabel/TabsWrappedLabel'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header/>
        <ImageRight
          img={'item5'}/>
        <ImageLeft
          img={'item6'}/>
        <TabsWrappedLabel/>
        <ImageRight
          img={'item7'}/>
      </div>
    );
  }
}

export default App;
