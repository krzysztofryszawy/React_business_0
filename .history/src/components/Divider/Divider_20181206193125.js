import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1521590832167-7bcbfaa6381f.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

const styles = theme => ({

  root: {
    flexGrow: 1,
    // height: '30vh',
    padding: '2rem',
    backgroundColor: 'whitesmoke',
    [theme.breakpoints.up("xs")]: {
    fontSize: 12,
    },
    [theme.breakpoints.up("sm")]: {
    fontSize: 14
    },
    [theme.breakpoints.up("md")]: {
    fontSize: 16
    }
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
    <React.Fragment>
    <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="center">
        <Grid item sm={6} xs={12}>
          <div className={classes.item}>
            <Typography variant="h5" component="h3">
              Get to Know Us
            </Typography>
            <Typography component="p">
            Promising Excellence in Everything We Do Since 1982, DEFINITIONS SALON & SPA has grown to be one of the most prominent spots in the Norco, guaranteeing quality and professionalism to all of our customers. Definitions Salon & Spa has been serving Norco, Eastvale and the Inland Empire for more than three decades!
            Over the years, we’ve always been committed to making our devoted customers look stunning and feel their best.
            We will continue to be one of the leading professional beauty salons because of the quality service and the personal touch that we provide to each and every customer. 
            </Typography>
          </div>
        </Grid>

        <Grid item sm={3} xs={12}>
          <div className={classes.item}>
            <Typography variant="h5" component="h3">
            <Button variant="outlined" className={classes.button}>
              Contact
            </Button>
            </Typography>
          </div>
        </Grid>

      </Grid>
    </div>
    </React.Fragment>
  );
}


export default withStyles(styles)(Divider);