import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1521590832167-7bcbfaa6381f.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({

  root: {
    flexGrow: 1,
    height: '30vh',
    backgroundColor: '#b89a6a',
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
  item: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 10,
  }
});

const Divider = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item sm={9}>
          <div className={classes.item}>
            <Typography component="p">
              Whether you have a question or would like to make an appointment, feel free to send us a note.  
              For a faster response, please call the salon at 951-371-3410.
            </Typography>
          </div>
        </Grid>

        <Grid item sm={3}>
          <div className={classes.item}>
            <Typography component="p">
              <button>CONTACT</button>
            </Typography>
          </div>
        </Grid>

      </Grid>
    </div>
    </React.Fragment>
  );
}


export default withStyles(styles)(Divider);