import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';







const styles = theme => ({
  root: {
    position: 'fixed',
    top: 0,
    flexGrow: 1,
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


  render() {
    const { classes } = this.props;

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