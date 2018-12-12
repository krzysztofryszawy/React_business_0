import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1521590832167-7bcbfaa6381f.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import FormatQuote from '@material-ui/icons/FormatQuote';
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
        <Grid container direction="row" justify="center" alignItems="flex-end">
        

        <Grid item sm={3} xs={3}>
              <Typography align='right' variant="h1" component="h1">
                <FormatQuote style={{ fontSize: 50, color: '#8b783f' }}/>
              </Typography>
          </Grid>

          <Grid item sm={6} xs={9}>
            <div className={classes.item}>
              <Typography variant="h6" component="h6">
                I think that the most important thing a woman can have - next to talent, of course - is her hairdresser.
              </Typography>
              <Typography component="p">
                Joan Crawford
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}


export default withStyles(styles)(Divider);