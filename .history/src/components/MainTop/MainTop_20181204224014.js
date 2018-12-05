import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  item: {
    backgroundColor: 'whitesmoke',
    padding: '4rem',
    height: '100vh'
  }
});

const MainTop = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <div className={classes.item}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi exercitationem placeat eaque. Officiis quas optio accusantium nostrum unde culpa molestiae totam perspiciatis reiciendis. Quis repellendus sed molestiae, fugit libero dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolorem at aspernatur aliquid, minima commodi suscipit ratione. Sequi, pariatur? Obcaecati exercitationem nemo id voluptatem cupiditate alias itaque, cum corporis illo!</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.item}>pic</div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(MainTop);