
import './Withdrawal.css';
import { useState } from 'react';
import { withdraw } from '../../helpers/withdrawscript';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


function Withdrawal (props) {

  const [ amount, setAmount ]= useState('');

  const classes = useStyles();


  // Alert withdrawal message and redirect to home
  const withdrawAmount = (amount, user) => {
    const withdrawState = withdraw(amount, user);
    if (typeof withdrawState === 'object') alert(`Withdrawal Amount: £${withdrawState['currentSum']} - £5: ${withdrawState['5']}x - £10: ${withdrawState['10']}x - £20: ${withdrawState['20']}x`);
    if (typeof withdrawState === 'string') alert(withdrawState);
    window.location.replace('/');
  };

  return (
    <div className={classes.inputContainer}>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => {
        e.preventDefault();
        if (amount === '') return;
        withdrawAmount(amount, props.user);
        setAmount('');
      }}>
        <TextField id="outlined-basic" type="number" label="Amount" variant="filled" inputProps={{style: {fontSize: 60, color: 'white'}}} InputLabelProps={{style: {fontSize: 18}}} onChange={(e) => {setAmount(e.target.value);}} />
        <Button className={classes.button} color="primary" variant="contained" type="submit">Confirm</Button>
      </form>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  button: {
    height: '6.8rem',
    width: '30vh',
    fontSize: '1.5rem',
    marginTop: '0.5rem',
  },
  inputContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default Withdrawal;

