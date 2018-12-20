import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
      width: 'auto',
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: '80vw',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
  },
  item: {
    padding: theme.spacing.unit * 2,
  }
});

const ImageLeft = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={24}>
      <Grid item xs={12} sm={6} md={4}  >
            <img style={{maxWidth: '100%'}} src={require(`../../assets/images/${props.img.toLowerCase()}.jpg`)} alt=""/>
        </Grid>
        <Grid sm={6} item xs={12}>
          <div className={classes.item}>
            <Typography gutterBottom variant="h5" component="h5">
              {props.topic}
            </Typography>
            <Typography component="p">
              {props.children}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(ImageLeft);