import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { makeStyles, Typography, List, ListItem, ListItemText, Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';

const data = {
  steps: ["1. learn web development",
          "2. make a website to learn web dev",
          "3. teach others in the process",
          "4. ...",
        ]
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#EFEFEF',
    minHeight: '100vh',
    paddingBottom: '50px'
  },

  '@keyframes blinker': {
    "0%": {
      opacity: 1
    },
    "49%": {
      opacity: 1
    },
    "60%": {
      opacity: 0
    },
    "99%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    },

  },
  title: {
    fontSize: '25px',

  },

  thePlan: {
    fontSize: '15px',
    lineHeight: '20px',
    paddingTop: '3em',
    textDecoration: 'underline',
  },
  centerContainer: {
    textAlign: 'center',
    verticalAlign: 'middle',
    position: 'relative',
    paddingTop: '10%'
  },

  list: {
    width: 'auto',
    textAlign: 'left',
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  blink: {
    animationName: '$blinker',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount:'infinite',
  },

  button: {
    fontFamily: 'monospace',
    marginTop: '50px',
    color: 'black',
    borderColor: 'black',
    marginRight: '5px',
    marginLeft: '5px'
  }
}));

export default function Home() {
  const classes = useStyles();
  const stepsTaken = data.steps.map(list =>
    <ListItemText className = {classes.listItems} primary={list}> </ListItemText>
  )



  return (
    <div className={classes.root}>
      <NavBar parentCallBack = {null} />
        <div className = {classes.centerContainer}>
        <Typography className={classes.title} > just a web development blog.</Typography>
        <Typography className={classes.thePlan}> the plan: </Typography>
        <div>
            <List>
                <ListItem className={classes.list}>
                {stepsTaken}
                <ListItemText className = {classes.blink} primary="5. $$$"></ListItemText>
                </ListItem>
            </List>

            <Link to="/topics" style={{ textDecoration: 'none' }}><Button className={classes.button} variant="outlined">
            View Topics
            </Button></Link>
            <Button className={classes.button} variant="outlined">
            View Resources
            </Button>
          </div>
        </div>
    </div>
  );
}