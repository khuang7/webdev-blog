import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import { Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'

// firebase essentials
import { getFirebase } from "../firebase";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#EFEFEF',
        minHeight: '100vh'
    },
    centerContainer: {

        verticalAlign: 'middle',
        position: 'relative',
        paddingTop: '2%'
      },
    title: {
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'light',
        fontFamily: 'monospace',
        textDecoration: 'underline'
    },
    blog: {
        fontSize: '1.5em',
        fontFamily: 'monospace',
        marginTop: '2%',
        maxWidth: '45%',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: '40px',
    },
    image: {
        height: '300px',
        width: '500px',
        backgroundColor: 'grey',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3em'
    }
});


// add specific highlight code here maybe?!?
export default function Concept() {
    const [loading, setLoading] = useState(true);
    const [entryExists, setEntryExists] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);
    const classes = useStyles();
    let { slug } = useParams();
    var counter = 0;
    if (loading && !blogPosts.length) {
        const dbRef = getFirebase().database().ref()

        dbRef
        .child("posts")
        .child(slug)
        .once("value")
        .then(snapshot => {
        let posts = [];
        const snapshotVal = snapshot.val();
        if (!snapshot.exists()) {
            setEntryExists(false)
        }
        for (let slug in snapshotVal) {
            posts.push(snapshotVal[slug]);
        }
        setBlogPosts(posts);
        setLoading(false);
        });
      }
  

    

    if (loading) {
        return <h1> loading.... </h1>
    }

    if(!entryExists) {
        return <h1>page does not exist </h1> 
    }
    
    const blogposts = []
    blogPosts[0].forEach(element => blogposts.push(
        <Typography className={classes.blog}> {element.list.content} </Typography>
    ));

    // console.log(element.list.type)
    // console.log(element.list.content)

    return (
        <div className={classes.root}>
        <NavBar/>
            <div className = {classes.centerContainer}>
            <Typography className={classes.title} > {blogPosts[1]} </Typography>
            {blogposts}
            </div>
        </div>
      );
    };

