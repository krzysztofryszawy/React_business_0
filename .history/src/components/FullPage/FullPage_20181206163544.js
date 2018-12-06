import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1521590832167-7bcbfaa6381f.jpg"
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
    backgroundImage: 'url('+ BackgroundHeader+')', backgroundSize: 'cover', backgroundPosition: 'center top',
  },
  item: {
    backgroundColor: 'white',
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 10,
    opacity: '.8',
    '&:hover': {
      backgroundColor: '#b89a6a', 
    },
  }
});

const Header = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item sm={12}>
          <div className={classes.item}>
            <Typography variant="h2" component="h2">
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


export default withStyles(styles)(Header);