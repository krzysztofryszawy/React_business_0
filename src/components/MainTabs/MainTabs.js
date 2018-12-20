import React from 'react';
import { Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
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

  render() {
    const { classes } = this.props;

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