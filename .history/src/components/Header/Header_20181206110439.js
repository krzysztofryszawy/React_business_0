import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1521590832167-7bcbfaa6381f.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundImage: 'url('+ BackgroundHeader+')', backgroundSize: 'cover', backgroundPosition: 'center top',
  },
  item: {
    backgroundColor: 'whitesmoke',
    padding: theme.spacing.unit * 10,
    marginTop: theme.spacing.unit * 10,
  }
});

const Header = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
    
      <Grid container direction="row" justify="center" alignItems="center" spacing={24}>
        <Grid item sm={12}>
          <div className={classes.item}>
            <Typography variant="h3" component="h1">
                Luxury homes for rental. Any country. Any time.
            </Typography>
            <Typography component="p">
                Paper can be used to build surface or other elements for your application.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(Header);