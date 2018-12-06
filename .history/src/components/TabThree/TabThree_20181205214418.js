import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundItem from "../../assets/images/photo-1464029902023-f42eba355bde.jpg"
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

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
      <Grid container direction="row" justify="space-evenly" alignItems="stretch" spacing={24}>
        <Grid className={classes.item} item xs={10} >
            <Typography variant="h5" component="h3">
              Paper can be used.
            </Typography>
            <Typography component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.
            </Typography>
        </Grid>
        <Grid className={classes.item} item xs={10} >
            <img style={{maxWidth: '100%', justifyContent: 'center'}} src={require('../../assets/images/item3.jpg')} alt=""/>
        </Grid>
        <Grid className={classes.item} item sm={5} xs={12}>
          <Chip
              avatar={<Avatar>🎷</Avatar>}
              label='ITEM1'
              className={''}
              color="primary"
          />
          <Typography variant="h5" component="h3">
              Build surface or other elements.
          </Typography>
          <Typography component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique aperiam distinctio dolor repellat ipsam nam repellendus aliquam. Unde saepe, perferendis rem veniam dignissimos quibusdam! Voluptatum ducimus amet, possimus, incidunt iusto commodi qui ipsa vitae doloremque pariatur officia tenetur magnam alias quisquam molestiae. Animi amet nobis dolorem vitae nostrum non debitis. Enim amet fuga perspiciatis.
            </Typography>
        </Grid>
        <Grid className={classes.item} item sm={5} xs={12}>
          <Chip
              avatar={<Avatar>🎧</Avatar>}
              label='ITEM2'
              className={''}
              color="primary"
          />
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