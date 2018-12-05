import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundItem from "../../assets/images/photo-1464029902023-f42eba355bde.jpg"

const styles = theme => ({
  root: {
    flexGrow: 1,
    
  },
  item: {
    padding: theme.spacing.unit * 2,
  },
  left: {

  }
});

const Intro = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
            <img src="../../assets/images/item1.jpg" alt=""/>
      <Grid container spacing={24}>
        <Grid item sm={6} xs={12} className={classes.left}>
          <div className={classes.item}>
          </div>
        </Grid>
        <Grid sm={6} item xs={12}>
          <div className={classes.item}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.</div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(Intro);