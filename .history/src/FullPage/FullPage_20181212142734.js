import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../components/Header/Header'
import FullHeight from '../components/FullHeight/FullHeight'
// import Divider from '../components/Divider/Divider'
// import ImageLeft from '../components/ImageLeft/ImageLeft'
import ImageRight from '../components/ImageRight/ImageRight'
import TabsWrappedLabel from '../components/TabsWrappedLabel/TabsWrappedLabel'
import Footer from '../components/Footer/Footer'
import Quotation from '../components/Quotation/Quotation'
import WallpaperLeft from '../components/WallpaperLeft/WallpaperLeft'

// '#b89a6a'

class FullPage extends Component {

  state = {
    TabsValue: '1',
  };

  tabsChangeHandler = (tabId) => {
    this.setState({TabsValue: tabId})
    console.log(tabId.toString())
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header/>
        <TabsWrappedLabel
          TabsValue={this.state.TabsValue}/>
        <Quotation/>
        <Footer
          click={this.tabsChangeHandler}/>
      </React.Fragment>
    );
  }
}

export default FullPage;
