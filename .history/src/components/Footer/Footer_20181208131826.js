import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
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
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});


const footers = [
  {
    title: 'Company',
    description: [{name: 'Our offer', link: ''}, {name: 'Hair', link: 'Hair'}, {name: 'SPA', link: 'SPA'}],
  },
  {
    title: 'Features',
    description: [{name:'Cool stuff', link:''}, {name: 'Random feature', link: ''}, {name: 'Team feature', link: ''}],
  },
];

function Footer(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={0} justify="center">
          {footers.map(footer => (
            <Grid item xs={3} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item.name} variant="subtitle1" color="textSecondary">
                  <Button component={Link} to={`/${item.link}`}>{item.name}</Button>
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