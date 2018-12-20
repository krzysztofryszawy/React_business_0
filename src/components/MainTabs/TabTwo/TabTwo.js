import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import FilterVintage from '@material-ui/icons/FilterVintage';
import Divider from '../../Divider/Divider'
import ImageLeft from '../../ImageLeft/ImageLeft'
import ImageRight from '../../ImageRight/ImageRight'
import WallpaperLeftOne from '../../WallpaperLeftOne/WallpaperLeftOne'


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
            <Favorite style={{ fontSize: 50, color: '#8b783f' }}/>
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
            <FilterVintage style={{ fontSize: 50, color: '#8b783f' }}/>
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
      <WallpaperLeftOne
        img={'photo-1500350124139-04a90e4ce9f6'}/>
      <ImageRight
          img={'item6'} 
          topic={'A visit to CASSIOPEIA is more than getting your hair done.  Our clients are offered a selection of organic tea served from a fine china tea cup.'}>
            When clients come to Aspen Grove Salon to have their hair cut or colored, skin rejuvenated and nails beautiful and we want them to leave looking and feeling their very best. Our team of industry professionals works toward this goal every day. We have experienced hair stylists trained in Matix, Framesi, Redkin, Kevin Murphy, Aveda, Sassoon, Paul Mitchell, Eufora, Alfaparf, and Onesta in the United States and internationally.
      </ImageRight>
      <Divider/>
      <ImageLeft
        img={'item8'} topic={'Paper can be used to build surface or other elements for your application.'}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.
      </ImageLeft>
    </React.Fragment>
  );
}


export default withStyles(styles)(TabTwo);