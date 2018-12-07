import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../components/Header/Header'
// import FullHeight from '../components/FullHeight/FullHeight'
// import Divider from '../components/Divider/Divider'
// import ImageLeft from '../components/ImageLeft/ImageLeft'
import ImageRight from '../components/ImageRight/ImageRight'
import TabsWrappedLabel from '../components/TabsWrappedLabel/TabsWrappedLabel'
import Footer from '../components/Footer/Footer'

// '#b89a6a'

class FullPage extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div>
          <Header/>
          <TabsWrappedLabel/>
          
          <FullPage/>
          <ImageRight
            img={'item7'}/>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

export default FullPage;
