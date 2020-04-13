import React from 'react';
import { makeStyles, Typography } from '@material-ui/core/';
import TopicsTree from '../components/TopicsTree'





const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#EFEFEF',
      minHeight: '100vh'
    },

    centerContainer: {
        textAlign: 'center',
        verticalAlign: 'middle',
        position: 'relative',
        paddingTop: '5%'
      },

    title: {
        fontSize: '20px',
        color: '#FEA993'
      },
    titleText: {
        fontSize: '15px',
        lineHeight: '20px',
        paddingTop: '2em',
        color: 'black'
      }, 
      table : {
          paddingTop: '5%',
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
            <div className = {classes.centerContainer}>
            <Typography className={classes.title} > topics</Typography>
            <Typography className={classes.titleText}> chosen topics for this specific course. Generally concept that are a bit foreign to me</Typography>
            <Typography className={classes.titleText}> ! = important</Typography>
            <TopicsTree data={'htmldata'}/>
            <TopicsTree data={'cssdata'}/>
            </div>
        </div>
    )
}