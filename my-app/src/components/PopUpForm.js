import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { getFirebase } from "../firebase";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useParams } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
// '#EFEFEF'
const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: 'black',
        flexDirection: 'row',
        textAlign: 'center',

    },
    dialogModal: {
        width: '80%'
    },
    buttonColor: {
        color: 'black'
    },
    textfield: {
      height: 'auto',
      width: '100%'

    } 


});

function addToDB(param, value, radioValue) {
  const dbRef = getFirebase().database().ref()
  dbRef.child('posts').child(param).push()
  .set({
      "content": value,
      "type": radioValue
  })
}




export default function FormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [radioValue, setRadioValue] = React.useState('blog');
  let { slug } = useParams();


  // ADD BUTTON STUFF
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value)
  }
  
  const handleSubmit  = (param) => (event) => {
    if(value) {
      event.preventDefault();
      addToDB(param, value, radioValue)
      handleClose()
      window.location.reload();
    } else {
    }
  };






  return (
    <div className={classes.root}>

    <Icon onClick={handleClickOpen} className={classes.icon}>add_circle </Icon>
    <Dialog className={classes.dialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
            className = {classes.textfield}
             />
          </label>
    </form>
    <FormControl size = "small" margin="dense" component="fieldset">
          <RadioGroup aria-label="type" name="gender1" value={radioValue} onChange={handleRadioChange}>
            <FormControlLabel value="blog" control={<Radio />} label="Blog" />
            <FormControlLabel value="code" control={<Radio />} label="Code" />
            <FormControlLabel value="title" control={<Radio />} label="Title" />
          </RadioGroup>
        </FormControl>
    </DialogContent>
    <DialogActions>
    <Button className={classes.buttonColor} onClick={handleClose} color="primary">
            Cancel
          </Button>
    <Button
    className={classes.buttonColor} 
    type="submit" 
    value="Submit"
    onClick={handleSubmit(slug)} 
     >Submit</Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}


