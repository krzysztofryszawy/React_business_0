import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonPin from '@material-ui/icons/PersonPin';
import Accessible from '@material-ui/icons/Accessible';
import Divider from '../../Divider/Divider'
import ImageLeft from '../../ImageLeft/ImageLeft'
import ImageRight from '../../ImageRight/ImageRight'
import WallpaperLeftTwo from '../../WallpaperLeftTwo/WallpaperLeftTwo'

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

const TabThree = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={24}>
          <Grid className={classes.item} item xs={10} >
              <Typography variant="h5" component="h3">
                Skin and Nail Services
              </Typography>
              <Typography component="p">
                We all know how great it feels to walk out of a Beauty Salon and be satisfied with the service we received. Our highly trained staff are here to tackle all your needs with a professional consultations that will leave you looking and feeling phenomenal. Come in and give us an hour of your time — you’ll be glad you did!
              </Typography>
          </Grid>

          <Grid className={classes.item} item sm={5} xs={12}>
            <PersonPin  style={{ fontSize: 50, color: '#8b783f' }}/>
            <Typography variant="h5" component="h3">
              Convenience of an ever-growing menu of spa indulgences.
            </Typography>
            <Typography component="p">
              Waxing
              Back  |  Bikini  |  Brazilian  |  Chest  |  Eyebrows  |  Face  |  Full Arm
              Full Leg  |  Half Arm  |  Half Leg  |  Lip  |  Underarm
              Special Occasion Makeup
              Our team of professional makeup artists will provide services at our salon or come to you! Please contact the salon for your personalized consultation.
              Facials
              Enzyme Peel
              The enzyme facial is great for every skin type. This facial helps to smooth fine lines and hydrate your skin leaving you with glowing skin.
              Lactic Peel
            </Typography>
          </Grid>

          <Grid className={classes.item} item sm={5} xs={12}>
            <Accessible style={{ fontSize: 50, color: '#8b783f' }}/>
            <Typography variant="h5" component="h3">
              TCA and Jessner’s Peels
            </Typography>
            <Typography component="p">
              Jessner’s peel will produce dramatic results. This is ideal for aging, sun damaged skin and is effective on all skin types. The TCA peel is great for thin fragile or sun damaged skin. It helps to strengthen your skin as well as providing you with noticeably smoother and fresher looking skin.
              Microdermabrasion
              This treatment reduces the appearance of fine lines, wrinkles, premature aging, acne scarring, and hyperpigmentation. Half hour or one hour micro-current treatments are available.

              Our nail technicians are well-qualified to give you a variety of nail care services that include:
              Acrylic Nails  |  Gel Nails  |  Manicures  |  Pedicures
              </Typography>
          </Grid>

        </Grid>
      </div>
      <WallpaperLeftTwo
        img={'photo-1487412947147-5cebf100ffc2'}/>
      <ImageRight
          img={'item1'} 
          topic={'A visit to CASSIOPEIA is more than getting your hair done.  Our clients are offered a selection of organic tea served from a fine china tea cup.'}>
            When clients come to Aspen Grove Salon to have their hair cut or colored, skin rejuvenated and nails beautiful and we want them to leave looking and feeling their very best. Our team of industry professionals works toward this goal every day. We have experienced hair stylists trained in Matix, Framesi, Redkin, Kevin Murphy, Aveda, Sassoon, Paul Mitchell, Eufora, Alfaparf, and Onesta in the United States and internationally.
      </ImageRight>
      <Divider/>
      <ImageLeft
        img={'item2'}topic={'Paper can be used to build surface or other elements for your application.'}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.
      </ImageLeft>
  </React.Fragment>
  );
}


export default withStyles(styles)(TabThree);