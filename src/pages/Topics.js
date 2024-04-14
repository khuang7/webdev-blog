import React from 'react';
import { makeStyles, Typography } from '@material-ui/core/';
import TopicsTree from '../components/TopicsTree'
import NavBar from '../components/NavBar'


const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: '#FBD589',
      minHeight: '100vh',
      paddingBottom: '10%'
    },

    centerContainer: {
        textAlign: 'center',
        verticalAlign: 'middle',
        position: 'relative',
        paddingTop: '10%'
      },

    title: {
        fontSize: '20px',
        color: 'black',
        fontFamily: 'monospace'
               
      },
    titleText: {
        fontFamily: 'monospace',
        fontSize: '15px',
        lineHeight: '1em',
        paddingTop: '1em',
        color: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '50%'

      }, 
      table : {
          paddingTop: '10%',
            display: 'inline-block',
            marginLeft: 'auto',
            marginRight: 'auto',
          maxWidth: '650px',
          color: 'white !important'
      },
}));

export default function Topics() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar/>
            <div className = {classes.centerContainer}>
            <Typography className={classes.title} > <p>the more you know ... </p></Typography>
            <TopicsTree data={'htmldata'}/>
            <TopicsTree data={'cssdata'}/>
            <TopicsTree data={'jsdata'}/>
            </div>
        </div>
    )
}