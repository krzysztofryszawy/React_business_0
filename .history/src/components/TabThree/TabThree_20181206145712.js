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