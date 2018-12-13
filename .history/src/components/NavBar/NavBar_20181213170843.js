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




class NavBar extends React.Component {
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
          <NavLink exact to="/" activeClassName={classes.activeLink}>Our offer</NavLink>
          <NavLink to="/Hair" activeClassName={classes.activeLink}>HAIR</NavLink>
          <NavLink to="/SPA" activeClassName={classes.activeLink}>SPA</NavLink>
      </div>
    );
  }
}


export default withStyles(styles)(NavBar);