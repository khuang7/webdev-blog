import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import { Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import PopUpForm from '../components/PopUpForm'
import DeleteForm from '../components/DeleteForm'
// firebase essentials
import { getFirebase } from "../firebase";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#EFEFEF',
        minHeight: '100vh',

    },
    centerContainer: {
        verticalAlign: 'middle',
        position: 'relative',
        paddingTop: '10%',

      },
    title: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'light',
        fontFamily: 'monospace',
        textDecoration: 'underline'
    },
    deleteButton: {
        display:'inline-block',
        marginLeft: '79%',
        marginRight: 'auto',
        position: 'relative',
        '&:hover ~ $blog': {
            textDecoration: 'line-through',
          },
          '&:hover ~ $title': {
            textDecoration: 'line-through',
          }
    },

    blog: {
        fontSize: '1.5em',
        fontFamily: 'monospace',
        marginTop: '',
        maxWidth: '45%',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: '40px',
        textAlign: 'center'
    },    
    image: {
        height: '300px',
        width: '500px',
        backgroundColor: 'grey',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3em'
    },

    addBar: {
        height: '20px',
        width: '2%',
        backgroundColor: '#EFEFEF',
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: '2em',

        '&:hover': {
            backgroundColor: 'black'
        }
    },

    addButton: {
        marginTop: '5%'
    },

});




// add specific highlight code here maybe?!?


export default function Concept() {
    const [loading, setLoading] = useState(true);
    const [entryExists, setEntryExists] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);
    const classes = useStyles();
    let { slug } = useParams();
    const [childClicked, setChildClicked] = useState (false)
    const dbRef = getFirebase().database().ref()

    const toggleClick = () => {
        setChildClicked(prevState => ({
            check: !prevState.check
          }))
    }

    // check if entry exists


    if (loading && !blogPosts.length) {
        dbRef.child("posts").child(slug)
        .once("value")
        .then(snapshot => {
            let posts = [];
            snapshot.forEach(function(childNodes) {
                posts.push([childNodes.val().content, 
                            childNodes.val().type,
                            childNodes.key])
            })
            setBlogPosts(posts);
            setLoading(false);
        });
      }
    //TODO: EMPTY CASE
    if(entryExists) {
        return(
            <div className={classes.root}>
            <NavBar/>
                <div className = {classes.centerContainer}>
                <Typography  className={classes.title} > {slug} </Typography>
                <p> This page is fresh, add new content below please  </p>
                <PopUpForm checkClick={toggleClick()} page={slug}/>
                </div>
            </div>
        )
    }
    if (loading) {
        return <h1> loading.... </h1>
    }

    console.log("blogposts is now" + blogPosts)
    // inject the blogposts into our html via blogposts array
    console.log(blogPosts)
    const blogposts = []
    blogPosts.forEach(element => blogposts.push(
        <div>
        <div className={classes.deleteButton} ><DeleteForm deleteKey={element[2]}/></div>
        <Typography className={classes[element[1]]}> {element[0]} </Typography>
        
        </div>
    ))    

    return (
        <div className={classes.root}>
        <NavBar/>
            <div className = {classes.centerContainer}>
            <Typography  className={classes.title} > {slug} </Typography>
            {blogposts}

            <div className={classes.addButton}>
            <PopUpForm className={classes.addButton}/>
            </div>
            </div>





        </div>
      );
    };