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
        return <h1> loading.... </h1>
    }

    const treeItems = [];
    
    treeItems.push( 
      <TreeItem
      key='root'
      nodeId=1
      label='html'
      >
        html
      </TreeItem>
    )

    cssentries.forEach(element => treeItems.push(
    <TreeItem classes={{ label: classes[element.list.title]}}
      key={element.list.id} 
      nodeId={element.list.id} 
      label={element.list.name}
      >
    </TreeItem>

  ));

    const renderTree = (nodes) => (
        <Link to={"/concept/" + nodes.name} style={{ textDecoration: 'none', color: 'black' }} > 
        <TreeItem classes={{ label: classes[nodes.title]}}
        key={nodes.id} 
        nodeId={nodes.id} 
        label={nodes.title}
        >
          {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
        </Link>
      );
        return (              
              <TreeView
              className={classes.root}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpanded={['root']}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {treeItems}
            </TreeView>)
          }
        
export default TopicsTree   

// {renderTree(string2map[props.data])}
