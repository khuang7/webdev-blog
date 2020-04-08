import React from 'react';
import NavBar from '../components/NavBar';
import { makeStyles, Typography, List, ListItem, ListItemText, Button } from '@material-ui/core/';

const data = {
  steps: ["1. learn web development",
          "2. make a website to learn web dev",
          "3. teach others in the process",
          "4. ...",
        ]
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#EFEFEF',
    minHeight: '100vh'
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
    marginTop: '50px',
  }
}));

export default function Home() {
  const classes = useStyles();
  const stepsTaken = data.steps.map(list =>
    <ListItemText className = {classes.listItems} primary={list}> </ListItemText>
  )
  return (
    <div className={classes.root}>
      <NavBar/>
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

            <Button className={classes.button} variant="outlined">
            View Topics
            </Button>
            <Button className={classes.button} variant="outlined">
            View Resources
            </Button>
          </div>
        </div>
    </div>
  );
}
