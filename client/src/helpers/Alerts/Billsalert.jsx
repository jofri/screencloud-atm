
import { useState, useEffect, forwardRef } from 'react';

// Import Material UI components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';



function Billsalert (props) {

  // Holds open/closed state and listen for changes
  const [open, setOpen] = useState(false); // Holds open/closed state and listen for changes
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
            Amount withdrawn: £{props.text[0]}<br/><br/>
            £5 bills: {props.text[1]}x<br/>
            £10 bills: {props.text[2]}x<br/>
            £20 bills: {props.text[3]}x<br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id="alertProceed" onClick={props.redirect} color="primary">
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

export default Billsalert;