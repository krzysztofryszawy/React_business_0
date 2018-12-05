import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundItem from "../../assets/images/photo-1464029902023-f42eba355bde.jpg"
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 6,
  },
  item: {
    padding: theme.spacing.unit * 2,
  }
});

const MainTop = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={24}>
        <Grid item xs={12}>
          <div className={classes.item}>
            <Typography variant="h5" component="h3">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </div>
        </Grid>
        <Grid item sm={3} xs={12} className={classes.left}>
            1
        </Grid>
        <Grid item sm={3} xs={12} className={classes.left}>
            2
        </Grid>
        <Grid item sm={3} xs={12} className={classes.left}>
            3
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(MainTop);