import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import FullPage from './FullPage/FullPage'

// '#b89a6a'

class App extends Component {
  render() {
    return (
      <StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <FullPage/>
      </BrowserRouter>
      </StrictMode>
    );
  }
}

export default App;
