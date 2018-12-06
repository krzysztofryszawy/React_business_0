import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1515172371186-85d50c9f1fc1.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Spa from '@material-ui/icons/Spa';

const styles = theme => ({
    html: {
      [theme.breakpoints.up("xs")]: {
        fontSize: 12,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 14
      },
      [theme.breakpoints.up("me")]: {
        fontSize: 16
      }
    },
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundImage: 'url('+ BackgroundHeader+')', backgroundSize: 'cover', backgroundPosition: 'center top',
    padding: '12vw'
  },
  item: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing.unit * 12,
    margin: theme.spacing.unit * 2,
    height: '50vh',
    opacity: '.9',
    '&:hover': {
      opacity: '.8',
    },
    textAlign: 'center'
  }
});

const FullPage = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
       
      </Grid>
    </div>
    </React.Fragment>
  );
}


export default withStyles(styles)(FullPage);