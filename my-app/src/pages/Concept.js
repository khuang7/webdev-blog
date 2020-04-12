import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import { Typography } from '@material-ui/core'

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
const classes = useStyles();
    return (
        <div className={classes.root}>
        <NavBar/>
            <div className = {classes.centerContainer}> 


            <Typography className={classes.title} > HTML CONCEPT 1 </Typography>
            <Typography className={classes.blog} > "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</Typography>
            <div className = {classes.image}> code section! </div>
            <Typography className={classes.blog} > "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</Typography>
            
            </div>
        </div>
    )
}
