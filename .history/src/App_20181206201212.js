import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header'
import FullPage from './components/FullPage/FullPage'
import Divider from './components/Divider/Divider'
import ImageLeft from './components/ImageLeft/ImageLeft'
import ImageRight from './components/ImageRight/ImageRight'
import TabsWrappedLabel from './components/TabsWrappedLabel/TabsWrappedLabel'

// '#b89a6a'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Header/>
          <TabsWrappedLabel/>
          
          <FullPage/>
          <ImageRight
            img={'item7'}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
