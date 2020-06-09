import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import { Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import PopUpForm from '../components/PopUpForm'
import DeleteForm from '../components/DeleteForm'
// firebase essentials
import { getFirebase } from "../firebase";
import Prism from "prismjs"

import 'firebase/auth';
import { store } from '../store.js';
import '../components/CodeEditor.css'

const TestCode = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim()

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
        textAlign: 'center',

    },
    code: {
        maxWidth: '35%',
        width: 'auto',
        marginLeft: '35%',
        marginRight: 'auto',
        lineHeight: '40px',
        backgroundColor: '#1c1c1c',


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

    addMessage: {
        textAlign: 'center',
        lineHeight: '40px',
        marginTop: '20px',
        marginBottom: '20px',
        opacity: '0.5'
    }

});

export default function Concept() {
    setTimeout(() => Prism.highlightAll(), 0)
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);
    const classes = useStyles();
    let { slug } = useParams();
    const dbRef = getFirebase().database().ref()

    // LOGIN INFO
    const globalState = useContext(store);
    var editMode = globalState.state.loggedIn


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
    if (loading) {
        return <h1> loading.... </h1>
    }

    // inject the blogposts into our html via blogposts array
    const blogposts = []
    blogPosts.forEach(element => blogposts.push(
        <div>
        { editMode ? 
        <div className={classes.deleteButton} ><DeleteForm deleteKey={element[2]}/></div>
        : null}  


        { element[1] === "code" ?
        <div className={classes[element[1]]}>
          <pre className="line-numbers">
            <code className="language-js">
            { element[0]} 
            </code>
        </pre>
        </div>

        : <Typography className={classes[element[1]]}> {element[0]} </Typography>
            
        
        
        }



        </div>
    ))
    
    // checks if the blog post is empty
    if (blogPosts.length === 0) {
        return (
            <div className={classes.root}>
            <NavBar/>
                <div className = {classes.centerContainer}>
                <Typography  className={classes.title} > {slug} </Typography>
                {editMode ?
                <React.Fragment>
                <Typography className={classes.addMessage}> Feed me please by adding content :)   </Typography>
                 <PopUpForm page={slug}/>
                 </React.Fragment>
                : <Typography className={classes.addMessage}> Page is currently empty  </Typography>}
                </div>
            </div>
        )
    }
    return (
        <div className={classes.root}>
        <NavBar/>
            <div className = {classes.centerContainer}>
            <Typography  className={classes.title} > {slug} </Typography>
            {blogposts}

            <div className={classes.addButton}>
            {editMode ? <PopUpForm className={classes.addButton} page={slug}/>
                : null}
            </div>
            </div>
        </div>
      );
    };
    
