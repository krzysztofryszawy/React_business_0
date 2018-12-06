import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1515172371186-85d50c9f1fc1.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

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
    backgroundImage: 'url('+ BackgroundHeader+')', backgroundSize: 'cover', backgroundPosition: ' top',
    padding: '12vw'
  },
  item: {
    backgroundColor: 'white',
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    height: '50vh',
    opacity: '.8',
    '&:hover': {
      opacity: '.9', 
    },
  }
});

const FullPage = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item sm={12}>
          <div className={classes.item}>
            <Typography variant="h4" component="h4">
              CASSIOPEIA SALON & SPA
            </Typography>
            <Typography variant="h5" component="h5">
              Where the ART of color is the ultimate expression!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
    </React.Fragment>
  );
}


export default withStyles(styles)(FullPage);