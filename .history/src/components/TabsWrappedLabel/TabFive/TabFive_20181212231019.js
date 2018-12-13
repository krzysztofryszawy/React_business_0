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
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: 'auto',
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: '80vw',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
              Come in and treat yourself to any service and leave feeling refreshed and beautiful.
              </Typography>
              <Typography component="p">
              Salon is located on one of Krakows’s most picturesque street’s, Grodzka Street.  Which is minutes from the famous Five Ways and The Intersection. 
              </Typography>
          </Grid>

        </Grid>
      </div>
      <Divider/>
      <ImageLeft 
        img={'photo-1510115950941-b7c06c744133'} 
        topic={'A visit to CASSIOPEIA is more than getting your hair done.  Our clients are offered a selection of organic tea served from a fine china tea cup, flute of champagne or a signature CASSIOPEIA After Five cocktail to indulge while being pampered.'}>
          <p>Grodzka 104, Kraków</p>
          <p>T: 02 9360 4877</p>
          <p>SALON HOURS</p>
          <p>Tues & Thurs 10 am - 5 pm | Wed & Fri 10 am - 8 pm |  Saturday 9 am - 4 pm</p>
      </ImageLeft>

    </React.Fragment>
  );
}


export default withStyles(styles)(TabFive);