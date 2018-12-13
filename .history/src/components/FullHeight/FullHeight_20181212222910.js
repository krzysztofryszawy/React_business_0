import React from 'react';
import { Route, Link } from 'react-router-dom'
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
    padding: '10vw',
    [theme.breakpoints.up("md")]: {
    height: '90vh',
    padding: '15vw',
    },
  },
  container: {
    backgroundColor: 'white',
    opacity: '.9',
    textAlign: 'center',
    minHeight: '40vh',
    padding: '1rem',
    border: '1px solid #8b783f'
    // borderRadius: '25px'
  }
});

const FullHeight = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid className={classes.container} container direction="row" justify="center" alignItems="center" >
              <Grid item sm={12}>
                <Spa style={{ fontSize: 50, color: '#8b783f' }}/>
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
                <Button variant="outlined" className={classes.button} component={Link} to={`/OurTeam`}>
                  Contact
                </Button>
              </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}


export default withStyles(styles)(FullHeight);