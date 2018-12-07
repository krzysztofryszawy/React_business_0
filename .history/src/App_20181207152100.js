import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import FullPage from './FullPage/FullPage'

// '#b89a6a'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <FullPage/>
      </BrowserRouter>
    );
  }
}

export default App;
