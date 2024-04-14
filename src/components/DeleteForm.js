import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { getFirebase } from "../firebase";

import { useParams } from 'react-router-dom'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
    },

    redButton: {
        color: 'red',
        borderColor: 'red'
      },
      
    icon: {
        marginLeft: '79%',
        marginRight: 'auto',
        position: 'relative',
        display: 'flex',
        opacity: '1',

        '&:hover': {
            opacity: '1',
            color:'red'
        }
},
});

function deleteFromDB(param, key) {
    const dbRef = getFirebase().database().ref()

    dbRef.child('posts').child(param).child(key).remove()
  }

export default function FormDialog(props) {
    const classes = useStyles();
    let { slug } = useParams();
    const [openDelete, setOpenDelete] = React.useState(false);


  // DELETE BUTTON STUFF
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleSubmitDelete = (param, key) => {
    deleteFromDB(param, key);
    handleCloseDelete();
    window.location.reload();
  }
  return (
    <div className={classes.root}>
    <DeleteForeverOutlinedIcon className={classes.icon} onClick={handleClickOpenDelete} />
    <Dialog
        className={classes.dialog}
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete the post?"}</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>
            nah keep it
          </Button>
          <Button className={classes.redButton} onClick={()=>handleSubmitDelete(slug, props.deleteKey)}>
            get rid of it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

