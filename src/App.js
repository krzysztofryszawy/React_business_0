import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import FullPage from './FullPage/FullPage'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

// '#b89a6a'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <FullPage/>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
