
import './Pin.css';
import { useState } from 'react';


function Pin (props) {

  const [ pin, setPin ]= useState('');

  return (
    <>
    Pin<br/>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (pin === '') return;
        props.authUser(pin);
        setPin('');
      }}>
        <input value={pin} onChange={(e) => {
          setPin(e.target.value);
        }
        } type="text"/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Pin;

