import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop: '3%',
      marginLeft: '5%',
      marginRight: '5%',
    },
    title: {
      flexGrow: 1,
    },
}));

const NavBar = (props) => {
    const classes = useStyles(props);
    return(
        <div className={classes.root}>
        <AppBar elevation={0} color="transparent" position="static">
          <Toolbar>
            <Grid
              justify="space-between" // Add it here :)
              container 
              spacing={24}
            >
              <Grid item>
                <Typography type="title" color="inherit">
                  webdev with kev -- p gh 
                </Typography>
              </Grid>
              <Grid item>
                <Typography type="title" color="inherit">
                  topics
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
}
export default NavBar;