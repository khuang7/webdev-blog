import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const htmldata = {
  id: 'root',
  name: 'html',
  title: 'labelTitle',
  children: [
    {
      id: '1',
      name: 'HTML concept 1',
      title: 'label',
    },

    { 
      id: '2',
      name: 'HTML Concept 2',
      title: 'label'
    },
    
    {
      id: '3',
      name: 'HTML Concept 3',
      title: 'label'
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
      children: [
        {
          id: '4',
          name: 'Child - 4',
          title: 'label',
        },
      ],
    },
  ],
};

// a temp method for now.. lol
const string2map = {
  'htmldata' : htmldata,
  'cssdata' : cssdata, 
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
      backgroundColor: '#FEA993',
      fontFamily: 'monospace',
      fontSize: '15px',
      textAlign: 'center',
      color: 'black'
    },
    labelTitle: {
      backgroundColor: '#4A0100',
      fontFamily: 'monospace',
      fontSize: '2em',
      textAlign: 'center',
    },
    labelColor: {
      backgroundColor: 'white'
    }
  });

const TopicsTree = (props) => {
    const classes = useStyles();
    const renderTree = (nodes) => (
        <TreeItem classes={{ label: classes[nodes.title]}}
        key={nodes.id} 
        nodeId={nodes.id} 
        label={nodes.name}
        >
          {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
      );
        return (              
              <TreeView
              className={classes.root}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpanded={['root']}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {renderTree(string2map[props.data])}
            </TreeView>)
          }
        
export default TopicsTree   


