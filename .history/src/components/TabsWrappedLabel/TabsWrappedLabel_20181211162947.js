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
    position: 'fixed',
    bottom: 0
  },
});

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
          </Tabs>
        </AppBar>
        <Route path='/' exact component={TabOne} />
        <Route path='/Hair' exact component={TabTwo} />
        <Route path='/SPA' exact component={TabThree} />
      </div>
    );
  }
}


export default withStyles(styles)(TabsWrappedLabel);