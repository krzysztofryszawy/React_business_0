import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Spa from '@material-ui/icons/Spa';
import ImageLeft from '../../ImageLeft/ImageLeft'
import ImageRight from '../../ImageRight/ImageRight'
import FullHeight from '../../FullHeight/FullHeight'
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
    margin: theme.spacing.unit * 2,
  }
});

const TabFour = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={24}>
          <Grid className={classes.item} item xs={10} >
            <Spa style={{ fontSize: 50, color: '#8b783f' }}/>
            <Typography variant="h5" component="h3">
              Each of our team members specialize in particular areas of hair cutting and color, nails and skin care. 
            </Typography>
            <Typography component="p">
              When clients come to Aspen Grove Salon to have their hair cut or colored, skin rejuvenated and nails beautiful and we want them to leave looking and feeling their very best. Our team of industry professionals works toward this goal every day. We have experienced hair stylists trained in Matix, Framesi, Redkin, Kevin Murphy, Aveda, Sassoon, Paul Mitchell, Eufora, Alfaparf, and Onesta in the United States and internationally.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <ImageLeft 
        img={'hairdresser-1516214_1920'} 
        topic={'Leia Organa - Master Stylist and Owner'}>
          Raised and educated in England. Trained in London and New York with Vidal Sassoon, Toni & Guy and Chris Sorby amongst others. Certified 
      </ImageLeft>
      <Decor/>
      <ImageRight 
        img={'barber-2507843_1920'} 
        topic={'Anakin Skywalker - Senior Hair Stylist'}>
          With over 2 decades of experience as a master stylist, Toni & Guy and Vidal Sassoon trained, Anakin is an extremely versatile and talented artist. 
      </ImageRight>
      <Decor/>
      <ImageLeft 
        img={'photo-1541705897117-dc56b6637c9e'} 
        topic={'Boba Fett - Junior Hair Stylist'}>
          Haircut $52. Color Starting at $87. Having trained and graduated with Toni & Guy 12 years ago, I learned at a young age I genuinely loved being 
      </ImageLeft>
      <FullHeight/>
    </React.Fragment>
  );
}


export default withStyles(styles)(TabFour);