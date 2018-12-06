import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundItem from "../../assets/images/photo-1464029902023-f42eba355bde.jpg"
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import PersonPin from '@material-ui/icons/PersonPin';
import Feedback from '@material-ui/icons/Feedback';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 6,
  },
  item: {
    // padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    
  }
});

const TabThree = (props) => {
  const { classes } = props;

  return (
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
          <PersonPin />
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
            An excellent “lunch time peel.” This peel helps decrease hyperpigmentation, improve skin texture and soften fine lines. It’s the perfect peel for beginners or anyone who wants to maintain a healthy glow.
            Glycolic Peel
            Glycolic peels help you achieve fresher looking skin while diminishing the look of fine lines and wrinkles.
            Teen/Acne Facial
            The teen facial is customized to help diminish congested skin and cystic acne. It also will help keep your skin balanced and hydrated.
            Salicylic Acid Peel
            Salicylic acid peels are more vigorous than our other peels and is suggested for those who have blemished, thick, or oily skin with hyperpigmentation.
          </Typography>
        </Grid>

        <Grid className={classes.item} item sm={5} xs={12}>
          <Feedback/>
          <Typography variant="h5" component="h3">
              For your application.
          </Typography>
          <Typography component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.
            </Typography>
        </Grid>

      </Grid>
    </div>
  );
}


export default withStyles(styles)(TabThree);