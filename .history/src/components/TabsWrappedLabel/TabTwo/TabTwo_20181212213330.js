import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Favorite from '@material-ui/icons/Favorite';
import FilterVintage from '@material-ui/icons/FilterVintage';
import Divider from '../../Divider/Divider'
import ImageLeft from '../../ImageLeft/ImageLeft'
import ImageRight from '../../ImageRight/ImageRight'
import WallpaperLeft from '../../WallpaperLeft/WallpaperLeft'


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

const TabTwo = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={24}>
          <Grid className={classes.item} item xs={10} >
              <Typography variant="h5" component="h3">
                Hair Treatments
              </Typography>
              <Typography component="p">
                Are you looking for a Beauty Salon that guarantees exceptional services? Our highly qualified staff are fully equipped to provide you with professional services. There’s nowhere in Norco where you can get better Hair Treatments. Come by today or schedule an appointment at your earliest convenience. We’re here for you.
              </Typography>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <Favorite style={{ fontSize: 50, color: 'rosybrown' }}/>
            <Typography variant="h5" component="h3">
              Hair Cut and Style
            </Typography>
            <Typography component="p">
              All types of haircuts and styles for all hair types using the most current cut and style techniques. Ask our stylists for the type of cut and style that best suits your style!

              Hair Extensions

              Our stylists are certified in various methods such as tape in, sew in wefts, I-Tip, micro-tip, keratin bond, etc. A consultation is required, and a payment for the hair is required upfront to place your order. Payment for labor will be made once your extensions are put in.
            </Typography>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <FilterVintage style={{ fontSize: 50, color: 'rosybrown' }}/>
            <Typography variant="h5" component="h3">
            Other Women’s Hair Services Include:
            </Typography>
            <Typography component="p">              
              
              Balayage | Corrective Color
              GK Hair Smoothing Treatment
              Hair Color | Hair Highlights
              Ombre and Sombre
              Perms | Weaves
              Special Occasion Styling
              Trendy Color and Styles
              </Typography>
          </Grid>
        </Grid>
      </div>
      <WallpaperLeft
        img={'photo-1500350124139-04a90e4ce9f6'}/>
      <ImageRight
        img={'item6'}/>
      <Divider/>
      <ImageLeft
        img={'item8'}/>
    </React.Fragment>
  );
}


export default withStyles(styles)(TabTwo);