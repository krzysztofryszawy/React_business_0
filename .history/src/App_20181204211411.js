import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div className={classes.paper}>xs=12</div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>xs=12 sm=6</div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>xs=12 sm=6</div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.paper}>xs=6 sm=3</div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.paper}>xs=6 sm=3</div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.paper}>xs=6 sm=3</div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.paper}>xs=6 sm=3</div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
