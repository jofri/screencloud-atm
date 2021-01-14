
import './Withdrawal.css';
import { useState } from 'react';
import { withdraw } from '../../helpers/withdrawscript';


function Withdrawal (props) {

  const [ amount, setAmount ]= useState('');


  // Alert withdrawal message and redirect to home
  const withdrawAmount = (amount, user) => {
    const withdrawState = withdraw(amount, user);
    if (typeof withdrawState === 'object') alert(`Withdrawal Amount: £${withdrawState['currentSum']} - £5: ${withdrawState['5']}x - £10: ${withdrawState['10']}x - £20: ${withdrawState['20']}x`);
    if (typeof withdrawState === 'string') alert(withdrawState);
    window.location.replace('/');
  };

  return (
    <>
    Withdrawal<br/>

      <form onSubmit={(e) => {
        e.preventDefault();
        if (amount === '') return;
        withdrawAmount(amount, props.user);
        setAmount('');
      }}>
        <input value={amount} onChange={(e) => {
          setAmount(e.target.value);
        }
        } type="text"/>
        <button type="submit">Confirm</button>
      </form>

    </>
  );
}

export default Withdrawal;

