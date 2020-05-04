import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Link } from 'react-router-dom';


import { getFirebase } from "../firebase";

const htmldata = {
  id: 'root',
  name: 'html',
  title: 'labelTitle',
  children: [
    {
      id: '1',
      name: 'tbc',
      title: 'label',
    },

  ],
};

const cssdata = {
  id: 'root',
  name: 'css',
  title: 'labelTitle',
  children: [
    {
      id: '1',
      name: 'flexbox',
      title: 'label',
    },

    { 
      id: '2',
      name: 'grid',
      title: 'label'
    },

    {
      id: '3',
      name: 'styled components',
      title: 'label',
    },
    
  ],
};








const jsdata = {
  id: 'root',
  name: 'js',
  title: 'labelTitle',
  children: [
    {
      id: '1',
      name: 'react',
      title: 'label',
      children: [
        {
          id: '5',
          name: 'react-concept1',
          title: 'label',
        }
      ]
    },

    { 
      id: '2',
      name: 'mui',
      title: 'label'
    },

    {
      id: '3',
      name: 'firebase',
      title: 'label',
    },
  ],
};

// a temp method for now.. lol
const string2map = {
  'htmldata' : htmldata,
  'cssdata' : cssdata, 
  'jsdata' : jsdata, 
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
      fontFamily: 'monospace',
      fontSize: '15px',
      textAlign: 'center',
      color: 'black'
    },
    labelTitle: {
      backgroundColor: '#58656D!important',
      fontFamily: 'monospace',
      fontSize: '15px',
      textAlign: 'center',
      color: 'white',
    },
    
    labelColor: {
      backgroundColor: 'white'
    }
  });

function addDB() {
  // get the db ref
  var dbRef = getFirebase().database().ref()
  dbRef.child("text").set("some value")
  dbRef.push().set("what happens here?")

}



const TopicsTree = (props) => {
  const classes = useStyles();
  const [cssentries, setCssentries] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading && !cssentries.length){
    const dbRef = getFirebase().database().ref()
    dbRef
    .child("cssdata")
    .child("children")
    .once("value")
    .then(snapshot => {
      let data = [];
      const snapshotVal = snapshot.val();

      for (let slug in snapshotVal) {
          data.push(snapshotVal[slug]);
      }
      setCssentries(data);
      setLoading(false);
      });
    }

      if (loading) {
        return <h1> beep boop </h1>
    }
//<Link to={"/concept/" + nodes.name} style={{ textDecoration: 'none', color: 'black' }} > 
// </Link>

    const renderTree = (nodes) => (         
        <TreeItem 
        classes={{ label: classes[nodes.title]}}
        key={nodes.id} 
        nodeId={nodes.id} 
        label={nodes.name}
        >
          {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}

        </TreeItem>
      ); 

      

        return (              
            <div>
              <TreeView
              className={classes.root}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpanded={['root']}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {renderTree(string2map[props.data])}
            </TreeView>

            </div>
            )
          }

export default TopicsTree   



/* DB PULL METHOD... tyr later!
    const treeItems = [];
    
    treeItems.push( 
      <TreeItem classes={{ label: classes['labelTitle']}}
      key='root'
      nodeId='root'
      label='html'
      >
      </TreeItem>
    )

    cssentries.forEach(element => treeItems.push(
    <TreeItem classes={{ label: classes[element.list.title]}}
      key={element.list.id} 
      nodeId={element.list.id} 
      label={element.list.name}
      >
        {Array.isArray(element.list.children) ? element.list.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  ));

*/