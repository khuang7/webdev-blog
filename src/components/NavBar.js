import React, { useContext }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getFirebase } from "../firebase";
import { store } from '../store.js';

const firebaseApp = getFirebase()
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
    login: {
      color: 'black',
      '&:hover' :{
        border: '1px solid black',
        paddingLeft: '5px',
        paddingRight: '5px'
      }
    },
    
}));

const NavBar = (props) => {
    const classes = useStyles();
    const globalState = useContext(store); // LOGIN STATE
    const { dispatch } = globalState;
    const {
      user,
      signOut,
      signInWithGoogle,
    } = props;


    if (globalState.state.loggedIn === false && user && user.email === "khuang771@gmail.com") {
      dispatch({ type: 'logged in' })
    }

    if (globalState.state.loggedIn === true && !user) {
      dispatch({ type: 'logged out' })
    }

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
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><Typography type="title" color="inherit">
                  webdev with kev
                </Typography> </Link>
              </Grid>
              <Grid item>
                {
                user ? 
                <Typography className = {classes.login} type="title" color="inherit" onClick={signOut}>Sign out</Typography>
              : <Typography className = {classes.login} type="title" color="inherit" onClick={signInWithGoogle}>Sign in with Google</Typography>
              }

              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }


const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(NavBar);
