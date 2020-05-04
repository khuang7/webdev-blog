import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TextField from '@material-ui/core/TextField';
import { getFirebase } from "../firebase";


// get the list of all ids
function generateID() {
  var dbRef = getFirebase().database().ref()
  
}


function addTopic(value) {
  if(value) {
    var dbRef = getFirebase().database().ref()
    dbRef.child("cssdata").child(value).set({'id':'1',
                                                'title': 'label',
                                              'children': false  })
  }
  window.location.reload();
}

function deleteTopic(topic) {
  var dbRef = getFirebase().database().ref()
  dbRef.child('cssdata').child(topic).remove()
  window.location.reload();
}


const useStyles = makeStyles({
  root: {
    height: 'auto',
    flexGrow: 1,
    maxWidth: 300,
    textAlign: 'left',
    marginTop: '5em',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'black'
  },
  content: {
      fontSize: '50px'
  },
  label: {
    backgroundColor: '#F19E8E',
    textAlign: 'center',
    fontSize: '15px',
    color: 'black',
    border: '1px solid transparent',

    '&:hover' :{
      border: '1px dotted black',
      backgroundColor: '#F19E8E'
    },

    '&:hover $addSubTopic': {
      color: 'black',
    },
    '&:hover $deleteButton': {
      color: 'black',
    },

  },
  labelTitle: {
    backgroundColor: '#58656D!important',
    fontSize: '15px',
    textAlign: 'center',
    color: 'white',
  },
  
  labelColor: {
    backgroundColor: 'white'
  },
  addButton: {
    textAlign: 'center',
    textDecoration: 'none',
    opacity: 0,
    '&:hover': {
      opacity: 1,
    },

  },
  textField: {
    textAlign: 'center',
    fontSize: '15px' ,
    textDecoration: 'none'

  },
  labelRoot: {
    textAlign: 'center',
    display: 'inline-block'
  },
  deleteButton: {
    float: 'right',
    marginRight: '-5%',
    color: 'white',
    '&:hover ~ $labelText': {
      textDecoration: 'line-through',
    },
  },
  labelText: {
    display: 'inline-block',
    margin:'0 auto',
    textAlign: 'center',
  },
  addSubTopic: {
    float: 'right',
    marginRight: '-10%',
    color: 'white',
  }
});

export default function Test() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const dbRef = getFirebase().database().ref()
    const [topicPosts, setTopicPosts] = useState([]);
    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleDelete = (param) => {
      deleteTopic(param)
    }

    console.log("rendering")
    if (loading && !topicPosts.length) {
      dbRef.child("cssdata")
      .orderByChild('id')
      .once("value")
      .then(snapshot => {
        let topics = [];
        snapshot.forEach(function(nodes) {
          topics.push([nodes.val().id, 
                      nodes.val().title,
                      nodes.val().children,
                      nodes.key])
        })
        setTopicPosts(topics);
        setLoading(false);
      })
    }
    if (loading) {
      return <h1> loading.... </h1>
  }

      const topicItems = [];
      topicItems.push(
        <div>
        <TreeItem classes={{ label: classes['labelTitle']}}
        key='root' 
        nodeId='root'
        label='css'
        >
        </TreeItem>
        </div>
      )
      topicPosts.forEach(element => topicItems.push(
        <TreeItem classes={{ label: classes['label']}}
        key={element[0]} 
        nodeId={element[0]} 
        label={
        <div>
          <div className={classes.addSubTopic}>+</div>
          <div className={classes.deleteButton} onClick={ () => handleDelete(element[3])}>x
          </div>
          <div className= {classes.labelText}>{element[3]}</div>
        </div>
        }
        >
        
        <TreeItem
        label="test">
        </TreeItem>
        
        </TreeItem>



      ))


      return (
      <div className={classes.root}>
      <TreeView
      className={classes.root}
      disableSelection
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      >
      {topicItems}
      <TreeItem classes={{ label: classes['addButton']}}
        label={
          <TextField
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              addTopic(value);
              ev.preventDefault();
            }
          }}
            fullWidth
            placeholder="new topic"
            className={classes.textField}
            value={value}
            InputProps={{ classes: { input: classes.textField } }}
            onChange={handleChange}
          />
        }
      />
  
      </TreeView>
      </div>
      );
  }


/*
const renderTree = (nodes) => (         
  <TreeItem classes={{ label: classes[nodes.title]}}
  nodeId={nodes.id} 
  label={nodes.name}
  >
    {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
  </TreeItem>
); 
*/