import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1515172371186-85d50c9f1fc1.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Spa from '@material-ui/icons/Spa';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '60vh',
    backgroundImage: 'url('+ BackgroundHeader+')', backgroundSize: 'cover', backgroundPosition: 'center top',
    padding: '22vw',
    [theme.breakpoints.up("sm")]: {
    height: '80vh'
    },
    [theme.breakpoints.up("md")]: {
    height: '100vh'
    }
  },
  container: {
    backgroundColor: 'white',
    opacity: '.9',
    textAlign: 'center',
    height: '30vh',
    padding: '1rem',
    borderRadius: '25px'
  }
});

const FullPage = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
    <div className={classes.root}>
      <Grid className={classes.container} container direction="row" justify="center" alignItems="center" >
            <Grid item sm={12}>
              <Spa/>
            </Grid>

            <Grid item sm={12}>
              <Typography variant="h4" component="h4">
                CASSIOPEIA SALON & SPA
              </Typography>
            </Grid>

            <Grid item sm={12}>
              <Typography variant="h5" component="h5">
                Where the ART of color is the ultimate expression!
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Button variant="outlined" className={classes.button}>
                Contact
              </Button>
            </Grid>
      </Grid>
    </div>
    </React.Fragment>
  );
}


export default withStyles(styles)(FullPage);