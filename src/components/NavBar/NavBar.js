import ReactDOM from 'react-dom';
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
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'whitesmoke',
    zIndex: '666',
    overflow: 'hidden',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    
  },
  activeLink: {
    backgroundColor: '#8b783f',
    color: 'white'
  },
  link: {
    padding: '1rem',
    '&:hover': {
      backgroundColor: '#8b783f',
      color: 'white',
      transform: 'translateY(-10px)',
    },
    textAlign: 'center',
    transition: 'all .3s ease-out',
  }
});



class NavBar extends React.Component {


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlescroll);
  }

  handleScroll = () => {
    this.setState({fixed: false})
    let offset = ReactDOM.findDOMNode(this).getBoundingClientRect()
    let winScrollY = window.scrollY
    var intViewportHeight = window.innerHeight;


    // console.log(this.state.fixed)
    // console.log('offset.y | ' + offset.y)
    // console.log('winScrollY | ' + winScrollY)
    // console.log('intViewportHeight | ' + intViewportHeight)
    // console.log(intViewportHeight-winScrollY)

    
    if (offset.y <= 0) {
      this.setState({fixed: true})
    }
  }
  
  state = {
    value: '0',
    fixed: false,
  };


  
  
  render() {
    const { classes } = this.props;

    return (
      

      <div className={classes.root} style={ this.state.fixed ? {position: 'fixed', top: '0'}: null }>
          <NavLink exact to="/" className={classes.link} activeClassName={classes.activeLink}>Our offer</NavLink>
          <NavLink to="/Hair" className={classes.link} activeClassName={classes.activeLink}>Hair</NavLink>
          <NavLink to="/SPA" className={classes.link} activeClassName={classes.activeLink}>SPA</NavLink>
          <NavLink to="/OurTeam" className={classes.link} activeClassName={classes.activeLink}>Our Team</NavLink>
          <NavLink to="/Contact" className={classes.link} activeClassName={classes.activeLink}>Contact</NavLink>
      </div>
    );
  }
}


export default withStyles(styles)(NavBar);