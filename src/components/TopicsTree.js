import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { Link } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';
import TextField from '@material-ui/core/TextField';

import { getFirebase } from '../firebase';
import 'firebase/auth';
import { store } from '../store.js';
import { database } from 'firebase/database';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
		fontSize: '20px'
	},
	label: {
		backgroundColor: 'transparent',
		textAlign: 'center',
		fontSize: '20px',
		color: 'black',
		borderColor: 'black',
		borderStyle: 'solid',
		marginTop: '-0.5px',
		borderWidth: '0.5px',

		'&:hover': {
			border: '1px dotted black'
		},

		'&:hover $addSubTopic': {
      color: 'black',
      opacity: '1',
		},
		'&:hover $deleteButton': {
      color: 'black',
      opacity: '1'
		}
	},

	sublabel: {
		textAlign: 'center',
		fontSize: '20px',
		color: 'black',
		border: '1px solid transparent',

		'&:hover': {
			border: '1px dotted black',
			backgroundColor: 'palepink'
		},
		'&:hover $deleteButton': {
			color: 'black'
		}
	},

	subtopic: {
		backgroundColor: '#D8DCD6',
		textAlign: 'center'
	},

	labelTitle: {
		backgroundColor: '#D8DCD6!important',
		fontSize: '20px',
		//textShadow: '2px 2px',
		textAlign: 'center',
		color: 'black',
		borderColor: 'black',
		borderStyle: 'solid',
		borderSize: '1px',
		letterSpacing: '3px'
	},

	labelColor: {
		backgroundColor: 'white'
	},
	addButton: {
		textAlign: 'center',
		textDecoration: 'none',
		opacity: 0,
		color: '#D8DCD6',
		'&:hover': {
			opacity: 1
		}
	},
	textField: {
		textAlign: 'center',
		fontSize: '15px',
		textDecoration: 'none'
	},
	labelRoot: {
		textAlign: 'center',
		display: 'inline-block'
	},
	deleteButton: {
		float: 'right',
    marginRight: '-10%',
    marginTop: '2%',
    color: '#D8DCD6',
    opacity: '0',
		'&:hover ~ $labelText': {
			textDecoration: 'line-through',
			color: '#FE2C54'
		}
	},
	labelText: {
		display: 'inline-block',
		margin: '0 auto',
		textAlign: 'center'
	},
	addSubTopic: {
    marginTop: '2%',
		float: 'left',
    color: 'black',
    marginLeft: '-12%',
    opacity: '0'
	}
});

// ALL DB FUNCTIONS HERE
function addTopic(title, value) {
	if (value) {
		var dbRef = getFirebase().database().ref();
		dbRef.child(title).child(value).set({
			id: uuidv1(),
			title: 'label',
			children: false
		});
	}
	window.location.reload(true);
}

function deleteTopic(title, topic) {
	var dbRef = getFirebase().database().ref();
	dbRef.child(title).child(topic).remove();
	window.location.reload();
}

function deleteSubTopic(title, element, subelement) {
	var dbRef = getFirebase().database().ref();
	dbRef.child(title).child(element).child('children').child(subelement).remove();

	// also remove the actual post if somethign has already been made
	dbRef.child('posts').child(subelement).remove();

	window.location.reload();
}

// pass cssdata as a param to the component
function addChildTopic(title, subtopic, topic) {
	var dbRef = getFirebase().database().ref();
	dbRef
		.child(title)
		.child(topic)
		.child('children')
		.child(subtopic)
		.set({ id: uuidv1(), title: 'label', children: false });
	window.location.reload(true);
}

const TopicsTree = (props) => {
	const classes = useStyles();
	const [ loading, setLoading ] = useState(true);
	const dbRef = getFirebase().database().ref();
	const [ topicPosts, setTopicPosts ] = useState([]);
	const [ value, setValue ] = useState('');
	const [ clicked, setClicked ] = useState(false);
	const [ subTopic, setSubTopic ] = useState('');
	const [ subTopicValue, setSubTopicValue ] = useState('');

	// LOGIN STUFF
	const globalState = useContext(store);
	var editMode = globalState.state.loggedIn;

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubChange = (event) => {
		setSubTopicValue(event.target.value);
	};

	const handleDelete = (param) => {
		deleteTopic(props.data, param);
	};

	const handleAddSubTopic = (e, subtopic) => {
		e.stopPropagation();
		setClicked(!clicked);
		setSubTopic(subtopic);
	};

	const handleSubDelete = (element, subelement) => {
		deleteSubTopic(props.data, element, subelement);
	};

	if (loading && !topicPosts.length) {
		dbRef.child(props.data).orderByChild('id').once('value').then((snapshot) => {
			let topics = [];
			snapshot.forEach(function(nodes) {
				topics.push([ nodes.val().id, nodes.val().title, nodes.val().children, nodes.key ]);
			});
			setTopicPosts(topics);
			setLoading(false);
		});
	}
	if (loading) {
		return <h1> loading.... </h1>;
	}

	// 1 Pushing the HEADER
	const topicItems = [];
	topicItems.push(
		<div>
			<TreeItem classes={{ label: classes['labelTitle'] }} key="root" nodeId="root" label={props.data} />
		</div>
	);

	// 2 Traverse through all topics, on the way traverse through subtopics if exist
	for (let element in topicPosts) {
		const subTopics = [];
		var sub = topicPosts[element][2];
		if (sub) {
			for (let subelement in sub) {
				subTopics.push(
					<Link to={'/concept/' + subelement} style={{ textDecoration: 'none', color: 'black' }}>
						<TreeItem
							classes={{ label: classes['sublabel'] }}
							key="1"
							nodeId="1"
							label={
								<div>
									{editMode ? (
										<div
											className={classes.deleteButton}
											onClick={() => handleSubDelete(topicPosts[element][3], subelement)}
										>
											<DeleteForeverIcon/>
										</div>
									) : null}
									<div className={classes.labelText}> {subelement}</div>
								</div>
							}
						/>{' '}
					</Link>
				);
			}
		}
		// PUT EVERYTHING INTO THE TOPICITEMS Array (Topics + subtopics)
		topicItems.push(
			// For each topic here, add subtopic, and if clicked we can reveal an add topic page
			<TreeItem
				classes={{ label: classes['label'] }}
				key={topicPosts[element][0]}
				nodeId={topicPosts[element][0]}
				label={
					<div>
						{editMode ? (
							<React.Fragment>
								<div
									className={classes.addSubTopic}
									onClick={(e) => handleAddSubTopic(e, topicPosts[element][3])}
								>
									<AddCircleIcon />
								</div>
								<div
									className={classes.deleteButton}
									onClick={() => handleDelete(topicPosts[element][3])}
								>
									<DeleteForeverIcon/>
								</div>
							</React.Fragment>
						) : null}

						<div className={classes.labelText}>{topicPosts[element][3]}</div>
					</div>
				}
			>
				{sub ? subTopics : null}
				{clicked && subTopic === topicPosts[element][3] && editMode ? (
					<TreeItem
						classes={{ label: classes['subtopic'] }}
						label={
							<TextField
								onKeyPress={(ev) => {
									if (ev.key === 'Enter') {
										addChildTopic(props.data, subTopicValue, topicPosts[element][3]);
										ev.preventDefault();
									}
								}}
								fullWidth
								placeholder="new subtopic"
								className={classes.textField}
								value={subTopicValue}
								InputProps={{ classes: { input: classes.textField }, disableUnderline: true }}
								onChange={handleSubChange}
							/>
						}
					/>
				) : null}
			</TreeItem>
		);
	}

	// Display the tree we made above.
	return (
		<div className={classes.root}>
			<TreeView
				className={classes.root}
				disableSelection
			>
				{topicItems}
				{editMode ? (
					<TreeItem
						classes={{ label: classes['addButton'] }}
						label={
							<TextField
								onKeyPress={(ev) => {
									if (ev.key === 'Enter') {
										addTopic(props.data, value);
										ev.preventDefault();
									}
								}}
								fullWidth
								placeholder="new topic"
								className={classes.textField}
								value={value}
								InputProps={{ classes: { input: classes.textField }, disableUnderline: true }}
								onChange={handleChange}
							/>
						}
					/>
				) : null}
			</TreeView>
		</div>
	);
};

export default TopicsTree;
