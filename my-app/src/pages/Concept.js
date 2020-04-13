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
    const [blogPosts, setBlogPosts] = useState([]);
    const classes = useStyles();
    //let { slug } = useParams();

    if (loading && !blogPosts.length) {
        getFirebase()
          .database()
          .ref()
          .child("posts")
          .child("page1")
          .once("value")
          .then(snapshot => {
            let posts = [];
            const snapshotVal = snapshot.val();
            for (let slug in snapshotVal) {
                console.log("slug" + slug)
              posts.push(snapshotVal[slug]);
              console.log("hi there?")
            }


            setBlogPosts(posts);
            setLoading(false);
          });
      }

    if (loading) {
        return <h1> loading.... </h1>
    }

    return (
        <div className={classes.root}>
        <NavBar/>
          {blogPosts.map(blogPost => (
            <div className = {classes.centerContainer}>
            <Typography className={classes.title} > WYYYT </Typography>
            <Typography className={classes.blog} > testing </Typography>
            </div>
          ))}
        </div>
      );
    };

/*
        return (
            <div className={classes.root}>
            <NavBar/>
                <div className = {classes.centerContainer}> 
                <Typography className={classes.title} > title </Typography>
                <Typography className={classes.blog} > "hi </Typography>
                <div className = {classes.image}> code section! </div>
                <Typography className={classes.blog}> "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</Typography>
                </div>
            </div>
        )


            if (loading && !blogPosts.length) {
        const databaseRef = getFirebase().database().ref('posts');
        const allofit = databaseRef.child("page1");
        allofit.once('value').then(snapshot => {
            let posts = [];
            const snapshotVal = snapshot.val();
    
        posts.push(snapshot.val().title);
        posts.push(snapshot.val().content);

        setBlogPosts(posts);
        setLoading(false);

*/