import React from 'react';
import NavBar from '../components/NavBar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#D8DCD6',
        minHeight: '100vh'
    }
}));

export default function Resources() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <NavBar/>
    <h1> RESOURCES PAGE</h1>
    </div>
    )
}