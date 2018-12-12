import React from 'react';
import { Route, Link } from 'react-router-dom'

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
});


const getDerivedStateFromProps(nextProps, prevState){
  if(nextProps.someValue!==prevState.someValue){
    return { someState: nextProps.someValue};
 }
 else return null;
}

componentDidUpdate(prevProps, prevState) {
 if(prevProps.someValue!==this.props.someValue){
   //Perform some operation here
   this.setState({someState: someValue});
   this.classMethod();
 }
}

class TabsWrappedLabel extends React.Component {
  state = {
    value: '0',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        
        <AppBar position="static" color="default">
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
        </AppBar>
        <Route path='/' exact component={TabOne} />
        <Route path='/Hair' exact component={TabTwo} />
        <Route path='/SPA' exact component={TabThree} />
        {/* <Route path='/OurTeam' exact component={''} />
        <Route path='/Contact' exact component={''} /> */}
      </div>
    );
  }
}


export default withStyles(styles)(TabsWrappedLabel);