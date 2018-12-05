import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundItem from "../../assets/images/item1.jpg"

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '4rem'
  },
  left: {
    backgroundImage: 'url('+ BackgroundItem+')', backgroundWrap: 'nowrap',
    height: '40vh'
  }
});

const Intro = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" spacing={24}>
        <Grid item sm={6} xs={12} className={classes.left}>
           
        </Grid>
        <Grid sm={6} item xs={12}>
          <div className={classes.item}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.</div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(Intro);