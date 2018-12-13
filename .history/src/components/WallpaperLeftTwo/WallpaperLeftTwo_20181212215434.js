import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import BackgroundPhoto from "../../assets/images/item4.jpg"



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'whitesmoke',

    // padding: theme.spacing.unit * 3,
  },
  item: {
    padding: theme.spacing.unit * 5,
  },
  columnImage: {
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    minHeight: '25vh',
    height: '100%',
  }

});


const WallpaperLeftTwo = (props) => {
    
  const { classes } = props;


  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch" spacing={0}>
        <Grid item sm={6} xs={12}>
            <div style={{backgroundImage: 'url(' + require(`../../assets/images/${props.img}.jpg`) + ')'}} className={classes.columnImage}>
            </div>
        </Grid>
        <Grid sm={6} item xs={12}>
          <div className={classes.item}>
            <Typography variant="h5" component="h5">
              We all know how great it feels to walk out of a Beauty Salon and be satisfied with the service we received.
            </Typography>
            
            <Typography component="h6" variant="body1" gutterBottom>
              <ul>
                <li>Waxing Back</li>
                <li>Bikini</li>
                <li>Brazilian</li>
                <li>Eyebrows</li>
                <li>BLOW-DRY & UP-STYLES</li>
                 |  |  | Chest | 
              </ul>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(WallpaperLeftTwo);