import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormatQuote from '@material-ui/icons/FormatQuote';


const styles = theme => ({
  root: {
    flexGrow: 1,
    // height: '30vh',
    padding: '2rem',
    backgroundColor: 'whitesmoke',
  },
  item: {
    padding: '1rem',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const Quotation = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container direction="row" justify="flex-start" alignItems="baseline">
        <Grid item sm={3} xs={3}>
              <Typography align='right' variant="h1" component="h1">
                <FormatQuote style={{ fontSize: 50 }}/>
              </Typography>
          </Grid>
          <Grid item sm={6} xs={9}>
            <div className={classes.item}>
              <Typography variant="h6" component="h6">
                {props.quotation}
              </Typography>
              <Typography component="p">
                {props.author}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}


export default withStyles(styles)(Quotation);