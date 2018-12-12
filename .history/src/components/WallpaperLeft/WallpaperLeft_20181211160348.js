import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import BackgroundPhoto from "../../assets/images/photo-1487412947147-5cebf100ffc2.jpg"

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'whitesmoke',

    // padding: theme.spacing.unit * 3,
  },
  item: {
    padding: theme.spacing.unit * 2,
  },
  columnImage: {
    backgroundImage: 'url('+ BackgroundPhoto+')', backgroundSize: 'cover', backgroundPosition: 'center',
    height: '30vh'
  }

});

const WallpaperLeft = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch" spacing={24}>
        <Grid item sm={6} xs={12}>
            <div className={classes.columnImage}>
              xxxxxxxxxx
            </div>
        </Grid>
        <Grid sm={6} item xs={12}>
          <div className={classes.item}>
            <Typography variant="h5" component="h5">
              To sculpt a head of hair with scissors is an art form. It's in pursuit of art. Vidal Sassoon
            </Typography>
            <Typography component="p">
              <ul>
                <li>HAIRCUTS</li>
                <li>BALAYAGE</li>
                <li>FOIL HIGHLIGHTS
</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(WallpaperLeft);