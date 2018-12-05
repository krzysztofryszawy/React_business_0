import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'pink',
    height: '100vh',
  },
  item: {
    backgroundColor: 'lightblue',
    padding: '10rem',
    marginTop: '10rem',
  }
});

const Header = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="flex-end" spacing={24}>
        <Grid item xs={6}>
          <div className={classes.item}>Luxury homes for rental. Any country. Any time.
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(Header);