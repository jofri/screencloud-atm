
import './Withdrawal.css';
import { useState, useEffect } from 'react';
import { withdraw } from '../../helpers/withdrawscript';

// Import Material UI components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Import alert components
import Alert from '../../helpers/Alerts/Alert';
import Billsalert from '../../helpers/Alerts/Billsalert';
import Choicealert from '../../helpers/Alerts/Choicealert';
import Overdraftalert from '../../helpers/Alerts/Overdraftalert';



function Withdrawal (props) {

  const classes = useStyles();

  const [ amount, setAmount ]= useState(''); // State to store inputed/requested amount to withdraw

  const [ withdrawCalcState, setWithdrawCalcState ] = useState([]); // State to hold reamining balance, bills & sum to withdraw and bills avalible
  const [ finalState, setFinalState ] = useState([]); // State to hold final withdrawal amount & bills

  // Open/closed state of standard dialogue box
  const [ alertOpen, setAlertOpen ] = useState(false);
  const [ alertText, setAlertText ] = useState('');

  // Open/closed state of dialogue box providing bills
  const [ billsalertOpen, setBillsalertOpen ] = useState(false);
  const [ billsalertText, setBillsalertText ] = useState([]);

  // Open/closed state of dialogue box providing choice to proceed or cancel transaction
  const [ choicealertOpen, setChoicealertOpen ] = useState(false);
  const [ choicealertText, setChoicealertText ] = useState('');

  // Open/closed state of dialogue warning providing choice to proceed or cancel with overdraft of account
  const [ overdraftalertOpen, setOverdraftalertOpen ] = useState(false);
  const [ overdraftalertText, setOverdraftalertText ] = useState('');

  // When transaction is finished, redirect to root
  const redirect = () => {
    setAlertOpen(false);
    setBillsalertOpen(false);
    setAlertText('');
    setBillsalertText('');
    window.location.replace('/');
  };

  // Open alert and display message
  const alertHandleOpen = message => {
    setAlertOpen(true);
    setAlertText(message);
  };

  // Open alert that shows withdrawn bills
  const billsalertHandleOpen = message => {
    setBillsalertOpen(true);
    setBillsalertText(message);
  };

  // Open user choice alert and display question
  const choicealertHandleOpen = message => {
    setChoicealertOpen(true);
    setChoicealertText(message);
  };

  // Open overdraft alert warning and display question
  const overdraftealertHandleOpen = message => {
    setOverdraftalertOpen(true);
    setOverdraftalertText(message);
  };

  // If user cancels transaction, set error message as final state
  const cancel = () => {
    setChoicealertOpen(false);
    setOverdraftalertOpen(false);
    setFinalState(['Can not complete withdrawal: Canceled by user']);
  };

  // If user accepts promt, continue to overdraft protection function
  const proceedChoice = () => {
    setChoicealertOpen(false);
    overdraftProtection(withdrawCalcState[0]);
  };

  // If user accepts overdraft promt, continue to complete withdrawal
  const proceedOverdraft = () => {
    setOverdraftalertOpen(false);
    completeWithdrawal(withdrawCalcState[0]);
  };

  // Complete withdrawal by updating localStorage with new information
  const completeWithdrawal = remainingBalance => {
    const updatedUser = { currentBalance: remainingBalance };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    localStorage.setItem('bills', JSON.stringify(withdrawCalcState[2]));
    setFinalState([withdrawCalcState[1]]);
  };

  // Warn user if attempts to overdraw account (by less than £100)
  const overdraftProtection = rBalance => {
    if (0 > rBalance && rBalance > -101) {
      overdraftealertHandleOpen(`Your new account balance will be £${rBalance}. You are allowed overdraft up to £100. Do you want to continue?`);
    } else completeWithdrawal(rBalance);
  };

  // Check that ATM has the notes avalible - if not, confirm that user accepts receiving a lower sum
  const checkAvalibleNotes = () => {
    if (withdrawCalcState[1].currentSum != amount) {
      choicealertHandleOpen(`The ATM is only capable of dispensing £${withdrawCalcState[1].currentSum}. Do you want to continue?`);
    } else overdraftProtection(withdrawCalcState[0]);
  };

  // If withdrawCalcState information updates and does not contain an error string, proceed to check if ATM has the avalible notes
  useEffect(() => {
    if (typeof withdrawCalcState[0] === 'string') alertHandleOpen(withdrawCalcState[0]);
    if (typeof withdrawCalcState[0] === 'number') checkAvalibleNotes();
  },[withdrawCalcState]);

  // If finalState updates and is not an error string, alert user of money withdrawn and bills recived
  useEffect(() => {
    if (typeof finalState[0] === 'object') billsalertHandleOpen([finalState[0]['currentSum'], finalState[0]['5'], finalState[0]['10'], finalState[0]['20']]);
    if (typeof finalState[0] === 'string') alertHandleOpen(finalState);
  },[finalState]);



  return (
    <div className={classes.inputContainer}>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => {
        e.preventDefault(); // Prevent page reloading
        if (amount === '') return; // Don't submit if input feild is empty
        setWithdrawCalcState(withdraw(amount, props.user)); // Input requested amount in withdraw helper function and set result as WithdrawCalcState
      }}>
        <TextField id="outlined-basic" type="number" label="Amount" variant="filled" inputProps={{style: {fontSize: 60, color: 'white'}}} InputLabelProps={{style: {fontSize: 18}}} onChange={(e) => {setAmount(e.target.value);}} />
        <Button className={classes.button} color="primary" variant="contained" type="submit">Confirm</Button>
        {/* Make dialogue / alert boxes avalible */}
        <Alert open={alertOpen} redirect={redirect} text={alertText}/>
        <Billsalert open={billsalertOpen} redirect={redirect} text={billsalertText}/>
        <Choicealert open={choicealertOpen} cancel={cancel} proceedChoice={proceedChoice} text={choicealertText}/>
        <Overdraftalert open={overdraftalertOpen} cancel={cancel} proceedOverdraft={proceedOverdraft} text={overdraftalertText}/>
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

