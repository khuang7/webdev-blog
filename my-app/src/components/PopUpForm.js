import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { getFirebase } from "../firebase";

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: 'black'
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
    dialogModal: {
        width: '50%'
    },
    buttonColor: {
        color: 'black'
    }

});


function addToDB(value) {
  const dbRef = getFirebase().database().ref()
  // TODO: change mui to fit whatever page we're on
  dbRef.child('posts').child('mui').push()
  .set({
      "content": value,
      "type": "type goes here"
  })
}


export default function FormDialog() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const handleSubmit = (event) => {
    if(value) {
      alert('An essay was submitted: ' + value);
      event.preventDefault();
      addToDB(value)
      handleClose()
    } else {
      alert("nothing entered!")
    }
  };

  return (
    <div className={classes.root}>
    <div  className={classes.addBar} onClick={handleClickOpen}/>  
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Enter Post</DialogTitle>
    <DialogContent>
    <form onSubmit={handleSubmit}>
          <label>
            <TextField 
            type="text" 
            value={value} 
            onChange={handleChange}
            autoFocus
            multiline
            margin="dense"
             />
          </label>
    </form>
    </DialogContent>
    <DialogActions>
    <Button className={classes.buttonColor} onClick={handleClose} color="primary">
            Cancel
          </Button>
    <Button
    className={classes.buttonColor} 
    type="submit" 
    value="Submit"
    onClick={handleSubmit} 
     >Submit</Button>
    </DialogActions>
    </Dialog>
    </div>

  );
}

