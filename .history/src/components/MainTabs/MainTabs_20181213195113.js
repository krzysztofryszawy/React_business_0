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
import TabFive from './TabFive/TabFive'




function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: '80vw',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  activeLink: {
    backgroundColor: 'orange',
  }
});




class MainTabs extends React.Component {
  state = {
    value: '0',
  };


  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.TabsValue!==prevState.value){
      // return { value: nextProps.TabsValue};
      return null;
   }
   else return null;
  }
  

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
          {/* <AppBar position="static" color="default">
            <Tabs
              onChange={this.handleChange}
              value={value}
              fullWidth
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab value='0' label="Our offer" component={Link} to="/" />
              <Tab value='1' label="Hair" component={Link} to="/Hair" />
              <Tab value='2' label="SPA" component={Link} to="/SPA" />
              <Tab value='3' label="Our team" component={Link} to="/OurTeam" />
              <Tab value='4' label="Contact" component={Link} to="/Contact" />
            </Tabs>
          </AppBar> */}
        <Route path='/' exact component={TabOne} />
        <Route path='/Hair' exact component={TabTwo} />
        <Route path='/SPA' exact component={TabThree} />
        <Route path='/OurTeam' exact component={TabOne} />
        <Route path='/Contact' exact component={TabFive} />
      </div>
    );
  }
}


export default withStyles(styles)(MainTabs);