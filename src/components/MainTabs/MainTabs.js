import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Divider from '../Divider/Divider'
import TabOne from './TabOne/TabOne'
import TabTwo from './TabTwo/TabTwo'
import TabThree from './TabThree/TabThree'
import TabFour from './TabFour/TabFour'
import TabFive from './TabFive/TabFive'








const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '3rem'
  },
});




class MainTabs extends React.Component {
  state = {
    value: '0',
  };


  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Route path='/' exact component={TabOne} />
        <Route path='/Hair' exact component={TabTwo} />
        <Route path='/SPA' exact component={TabThree} />
        <Route path='/OurTeam' exact component={TabFour} />
        <Route path='/Contact' exact component={TabFive} />
      </div>
    );
  }
}


export default withStyles(styles)(MainTabs);