import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Spa from '@material-ui/icons/Spa';
import LocationCity from '@material-ui/icons/LocationCity';
import Group from '@material-ui/icons/Group';
import Divider from '../../Divider/Divider'
import ImageLeft from '../../ImageLeft/ImageLeft'
import ImageRight from '../../ImageRight/ImageRight'
import FullHeight from '../../FullHeight/FullHeight'


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  item: {
    // padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
  }
});

const TabFive = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={24}>
          <Grid className={classes.item} item xs={10} >
              <Typography variant="h5" component="h3">
                Be your own kind of beautiful
              </Typography>
              <Typography component="p">
              Salon is located on one of Krakows’s most picturesque street’s, Florianska Street.  Which is minutes from the famous Five Ways and The Intersection. 
              </Typography>
          </Grid>

        </Grid>
      </div>
      <ImageLeft
        img={'photo-1510115950941-b7c06c744133'}/>
      <Divider/>
      <ImageRight
            img={'item5'}/>
      <FullHeight/>
      <ImageRight
        img={'item7'}/>
    </React.Fragment>
  );
}


export default withStyles(styles)(TabFive);