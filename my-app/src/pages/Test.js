import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
    root: {
      height: 'auto',
      flexGrow: 1,
    },

    title1: {
      '&:hover ~ $title2': {
        backgroundColor: 'red',
      }
    },
    title2: {}
    
});

export default function Test() {
    const classes = useStyles();

      return (
      <div className={classes.root}>
        
      <h1 className={classes.title1}> testing hover</h1>
      <h2 className={classes.title2}> I wnt this tohover </h2>
      </div>

      );
  }


