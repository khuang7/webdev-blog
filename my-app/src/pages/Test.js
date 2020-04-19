import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
      height: 'auto',
      flexGrow: 1,
    },

});




class Test extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }



    render() {
      
        return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <TextField type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <Button type="submit" value="Submit" />
        </form>
      );
    }
  }
export default Test

