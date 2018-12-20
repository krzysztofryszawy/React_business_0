import React from 'react';
import { Route, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BackgroundHeader from "../../assets/images/photo-1521590832167-7bcbfaa6381f.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Spa from '@material-ui/icons/Spa';



const styles = theme => ({

  root: {
    flexGrow: 1,
  },
  item: {
    padding: '.2rem',
    textAlign: 'center',
    marginTop: '-3rem',
    boxSizing: 'content-box',
  },
  line: {
    borderBottom: '1px solid gainsboro',
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
});

const Decor = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10}>
            <div className={classes.line}></div>
          <div className={classes.item}>
            <Spa style={{color: '#8b783f', border: '1rem solid white', backgroundColor: 'white' }}/>
            <Spa style={{color: '#8b783f', border: '1rem solid white', backgroundColor: 'white' }}/>
            <Spa style={{color: '#8b783f', border: '1rem solid white', backgroundColor: 'white' }}/>
          </div>
        </Grid>
      </Grid>
    </div>
    </React.Fragment>
  );
}


export default withStyles(styles)(Decor);