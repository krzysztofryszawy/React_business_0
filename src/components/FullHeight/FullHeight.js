import React from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Spa from '@material-ui/icons/Spa';
import Button from '@material-ui/core/Button';
import BackgroundHeader from "../../assets/images/photo-1515172371186-85d50c9f1fc1.jpg"

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '70vh',
    backgroundImage: 'url('+ BackgroundHeader+')', backgroundSize: 'cover', backgroundPosition: 'center top',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center', 
  },
  container: {
    width: '700px',
    height: '400px',
    backgroundColor: 'white',
    opacity: '.9',
    textAlign: 'center',
    padding: '1rem',
    margin: '3rem',
    border: '1px solid #8b783f'
  }
  
});

const FullHeight = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid className={classes.container} container direction="row" justify="center" alignItems="center" >
              <Grid item xs={12}>
                <Spa style={{ fontSize: 50, color: '#8b783f' }}/>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" component="h4">
                  CASSIOPEIA SALON & SPA
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="h5">
                  Where the ART of color is the ultimate expression!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" className={classes.button} component={Link} to={`/Contact`}>
                  Contact
                </Button>
              </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}


export default withStyles(styles)(FullHeight);