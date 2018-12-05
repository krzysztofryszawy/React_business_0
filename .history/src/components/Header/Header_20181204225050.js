import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1464029902023-f42eba355bde.jpg"

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundImage: 'url('+ BackgroundHeader+')'
  },
  item: {
    backgroundColor: 'whitesmoke',
    padding: '10rem',
    marginTop: '10rem',
  }
});

const Header = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" spacing={24}>
        <Grid item xs={6}>
          <div className={classes.item}>Luxury homes for rental. Any country. Any time.
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(Header);