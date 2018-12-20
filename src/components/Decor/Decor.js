import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Spa from '@material-ui/icons/Spa';



const styles = theme => ({

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
    </React.Fragment>
  );
}


export default withStyles(styles)(Decor);