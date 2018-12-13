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

const TabOne = (props) => {
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
              Looking for a beauty salon which provides you expert hair and beauty services at reasonable prices in a highly pampering ambiance? Experience the difference at Cassiopeia SALOON & SPA. Our professional team is committed to providing you with expert, personalized attention from head to toe. 
              </Typography>
          </Grid>

          <Grid className={classes.item} item sm={3} xs={12}>
            <Spa style={{ fontSize: 50, color: '#8b783f' }}/>
            <Typography variant="h5" component="h3">
              Be your own kind of beautiful
            </Typography>
            <Typography component="p">
              Then check into Cassiopeia SALOON & SPA, one of the most preferred salons for both men and women in Kraków. Get a refreshing image makeover from our beauty experts and feel the difference today!
            </Typography>
          </Grid>
          
          <Grid className={classes.item} item sm={3} xs={12}>
            <LocationCity style={{ fontSize: 50, color: '#8b783f' }}/>
            <Typography variant="h5" component="h3">
              Who We Are
            </Typography>
            <Typography component="p">
              A Full-Service Beauty Salon, Here for You At Cassiopeia SALOON & SPA, your satisfaction is our number one priority. For over 30 years, we’ve provided the city of Kraków with a wide range of quality personalized Beauty Salon services that are catered specifically to your needs. We are fueled by the desire to have you feeling and looking great. Swing by to start looking and feeling amazing!
              </Typography>
          </Grid>

          <Grid className={classes.item} item sm={3} xs={12}>
            <Group style={{ fontSize: 50, color: '#8b783f' }}/>
            <Typography variant="h5" component="h3">
              The Team
            </Typography>
            <Typography component="p">
                Looking to get professional insight on a look that would be perfect for you? Speak with our experts for any input or guidance. Stop by today — you won’t believe you waited until now to look this good!
              </Typography>
          </Grid>
        </Grid>
      </div>
      <ImageLeft
        img={'item3'} topic={'Paper can be used to build surface or other elements for your application.'}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.
      </ImageLeft>
      <Divider/>
      <ImageRight
          img={'item5'} 
          topic={'A visit to CASSIOPEIA is more than getting your hair done.  Our clients are offered a selection of organic tea served from a fine china tea cup.'}>
            When clients come to Aspen Grove Salon to have their hair cut or colored, skin rejuvenated and nails beautiful and we want them to leave looking and feeling their very best. Our team of industry professionals works toward this goal every day. We have experienced hair stylists trained in Matix, Framesi, Redkin, Kevin Murphy, Aveda, Sassoon, Paul Mitchell, Eufora, Alfaparf, and Onesta in the United States and internationally.
      </ImageRight>
      <FullHeight/>
      <ImageRight
          img={'item7'} 
          topic={'A visit to CASSIOPEIA is more than getting your hair done.  Our clients are offered a selection of organic tea served from a fine china tea cup.'}>
            When clients come to Aspen Grove Salon to have their hair cut or colored, skin rejuvenated and nails beautiful and we want them to leave looking and feeling their very best. Our team of industry professionals works toward this goal every day. We have experienced hair stylists trained in Matix, Framesi, Redkin, Kevin Murphy, Aveda, Sassoon, Paul Mitchell, Eufora, Alfaparf, and Onesta in the United States and internationally.
      </ImageRight>
    </React.Fragment>
  );
}


export default withStyles(styles)(TabOne);