import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundItem from "../../assets/images/photo-1464029902023-f42eba355bde.jpg"
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ThumbUp from '@material-ui/icons/ThumbUp';
import WatchLater from '@material-ui/icons/WatchLater';
import LocalOffer from '@material-ui/icons/LocalOffer';


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

const TabOne = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={24}>
        <Grid className={classes.item} item xs={10} >
            <Typography variant="h5" component="h3">
              Paper can be used.
            </Typography>
            <Typography component="p">
            Experience the difference at Cassiopeia SALOON & SPA! Our professional team is committed to providing you with expert, personalized attention from head to toe.
            </Typography>
        </Grid>
        <Grid className={classes.item} item sm={3} xs={12}>
          <ThumbUp/>
          <Typography variant="h5" component="h3">
              Build surface or other elements.
          </Typography>
          <Typography component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.
            </Typography>
        </Grid>
        <Grid className={classes.item} item sm={3} xs={12}>
          <WatchLater/>
          <Typography variant="h5" component="h3">
              For your application.
          </Typography>
          <Typography component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.
            </Typography>
        </Grid>
        <Grid className={classes.item} item sm={3} xs={12}>
          <LocalOffer/>
          <Typography variant="h5" component="h3">
              Or other elements for your application.
          </Typography>
          <Typography component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(TabOne);