import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import TabOne from '../TabOne/TabOne'
import TabTwo from '../TabTwo/TabTwo'
import TabThree from '../TabThree/TabThree'

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

class TabsWrappedLabel extends React.Component {
  state = {
    value: 'one',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
            <Tab value="one" label="Our offer" />
            <Tab value="two" label="For Your Comfort" />
            <Tab value="three" label="For Your Pleasure" />
          </Tabs>


        {value === 'one' && <TabOne/>}
        {value === 'two' && <TabTwo/>}
        {value === 'three' && <TabThree/>}
        </Paper>
      </div>
    );
  }
}


export default withStyles(styles)(TabsWrappedLabel);