import React from 'react';
import { NavLink } from 'react-router-dom'
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    a: {
      textDecoration: 'none',
      color: theme.palette.text.secondary
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: '80vw',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  activeLink: {
    fontWeight: 'bold',
  }
});


const footers = [
  {
    title: 'Services',
    description: [{name: 'Our offer', link: ''}, {name: 'Hair', link: 'Hair'}, {name: 'SPA', link: 'SPA'}],
  },
  {
    title: 'Our Story',
    description: [{name:'Our team', link:'OurTeam'}, {name: 'Contact', link: 'Contact'}],
  },
];

function Footer(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={0} justify="center">
          {footers.map(footer => (
            <Grid item xs={5} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item.name} variant="subtitle1" >
                  <Button activeClassName={classes.activeLink} component={NavLink} exact to={`/${item.link}`}>{item.name}</Button>
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
    </React.Fragment>
  );
}


export default withStyles(styles)(Footer);