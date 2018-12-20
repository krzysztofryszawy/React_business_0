import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Spa from '@material-ui/icons/Spa';
import LocationCity from '@material-ui/icons/LocationCity';
import PhoneCallback from '@material-ui/icons/PhoneCallback';
import Divider from '../../Divider/Divider'
import ImageLeft from '../../ImageLeft/ImageLeft'
import ImageRight from '../../ImageRight/ImageRight'
import Decor from '../../Decor/Decor'


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

      <ImageRight 
        img={'photo-1516470930795-6ba2564824aa'} 
        topic={'Come in and treat yourself to any service and leave feeling refreshed and beautiful.'}>
          Grodzka 104, Kraków
          Tel: (12)293 60 48
          SALON HOURS
          Tues & Thurs 10 am - 5 pm | Wed & Fri 10 am - 8 pm |  Saturday 9 am - 4 pm 
      </ImageRight>
      <Decor/>
      <ImageLeft 
        img={'photo-1510115950941-b7c06c744133'} 
        topic={'A visit to CASSIOPEIA is more than getting your hair done.  Our clients are offered a selection of organic tea served from a fine china tea cup, flute of champagne or a signature CASSIOPEIA After Five cocktail to indulge while being pampered.'}>
      </ImageLeft>

    </React.Fragment>
  );
}


export default withStyles(styles)(TabFive);