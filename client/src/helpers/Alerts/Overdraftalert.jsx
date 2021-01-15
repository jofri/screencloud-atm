
import { useState, useEffect, forwardRef } from 'react';

// Import Material UI components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


function Overdraftalert (props) {

  // Holds open/closed state and listen for changes
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (props.open === true) setOpen(true);
    if (props.open === false) setOpen(false);
  },[props]);


  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{''}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p>{props.text}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.cancel} color="primary">
            Cancel
          </Button>
          <Button onClick={props.proceedOverdraft} color="primary">
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const Transition = forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default Overdraftalert;