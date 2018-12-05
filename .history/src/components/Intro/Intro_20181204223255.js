import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    
  },
  item: {
    backgroundColor: 'papayawhip',
  }
});

const Intro = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <div className={classes.item}>xs=6</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.item}>xs=6</div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(Intro);