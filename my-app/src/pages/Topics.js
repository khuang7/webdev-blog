import React from 'react';
import { makeStyles, Typography } from '@material-ui/core/';
import TopicsTree from '../components/TopicsTree'
import NavBar from '../components/NavBar'

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#98756F',
      minHeight: '100vh'
    },

    centerContainer: {
        textAlign: 'center',
        verticalAlign: 'middle',
        position: 'relative',
        paddingTop: '10%'
      },

    title: {
        fontSize: '25px',
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
            <Typography className={classes.title} > <p>some interesting topics </p></Typography>
            <TopicsTree data={'htmldata'}/>
            <TopicsTree data={'cssdata'}/>
            <TopicsTree data={'jsdata'}/>
            </div>
        </div>
    )
}