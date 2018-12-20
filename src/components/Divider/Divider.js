import React from 'react';
import {Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    padding: '2rem',
    backgroundColor: 'whitesmoke',
  },
  item: {
    padding: '1rem',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const Divider = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="center">
        <Grid item sm={6} xs={12}>
          <div className={classes.item}>
            <Typography variant="h5" component="h3">
              Get to Know Us
            </Typography>
            <Typography component="p">
            Promising Excellence in Everything We Do Since 1982, CASSIOPEIA SALON & SPA has grown to be one of the most prominent spots in the Kraków, guaranteeing quality and professionalism to all of our customers. 
            We will continue to be one of the leading professional beauty salons because of the quality service and the personal touch that we provide to each and every customer. 
            </Typography>
          </div>
        </Grid>

        <Grid item sm={3} xs={12}>
          <div className={classes.item}>
            <Typography variant="h5" component="h3">
            <Button variant="outlined" className={classes.button} component={Link} to={`/OurTeam`}>
              Get to Know Us
            </Button>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(Divider);