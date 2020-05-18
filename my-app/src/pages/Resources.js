import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: '#EFEFEF',
      minHeight: '100vh',
      paddingBottom: '50px'
    }
}));

export default function Resources() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
    <h1> RESOURCES PAGE</h1>
    </div>
    )


}