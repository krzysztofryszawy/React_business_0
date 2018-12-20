import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1521590832167-7bcbfaa6381f.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  wrapper: {
    [theme.breakpoints.up("xs")]: {
      fontSize: '.8rem',
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up("md")]: {
      fontSize: '2.5rem'
    },
  },
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundImage: 'url('+ BackgroundHeader+')', backgroundSize: 'cover', backgroundPosition: 'center top',
  },
  item: {
    backgroundColor: 'white',
    transition: 'all 1.3s ease-out',
    color: theme.palette.text.primary,
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 10,
    opacity: '.8',
    '&:hover': {
      color: '#8b783f',
    },
  }
});

const Header = (props) => {
  const { classes } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <div className={classes.item}>
              <h1>
                CASSIOPEIA SALON & SPA
              </h1>
              <h4>
                Where the ART of color is the ultimate expression!
              </h4>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


export default withStyles(styles)(Header);