import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../components/Header/Header'
import FullHeight from '../components/FullHeight/FullHeight'
// import Divider from '../components/Divider/Divider'
// import ImageLeft from '../components/ImageLeft/ImageLeft'
import ImageRight from '../components/ImageRight/ImageRight'
import MainTabs from '../components/MainTabs/MainTabs'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Quotation from '../components/Quotation/Quotation'

// '#b89a6a'

class FullPage extends Component {

  state = {
    TabsValue: '0',
  };

  tabsChangeHandler = (tabId) => {
    this.setState({TabsValue: tabId.toString()})
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header/>
        <NavBar/>
        <MainTabs
          TabsValue={this.state.TabsValue}/>
        <Quotation
          quotation={'I think that the most important thing a woman can have - next to talent, of course - is her hairdresser.'}
          author={'Joan Crawford'}/>
        <Footer
          click={this.tabsChangeHandler}/>
      </React.Fragment>
    );
  }
}

export default FullPage;
