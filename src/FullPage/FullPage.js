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

// #b89a6a
// #8b783f
class FullPage extends Component {





  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header/>
        <NavBar/>
        <MainTabs/>
        <Quotation
          quotation={'I think that the most important thing a woman can have - next to talent, of course - is her hairdresser.'}
          author={'Joan Crawford'}/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default FullPage;
