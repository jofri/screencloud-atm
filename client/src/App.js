import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Pin from './components/Pin/Pin';
import Splashscreen from './components/Splashscreen/Splashscreen';
import Withdrawal from './components/Withdrawal/Withdrawal';
import Incorrectpin from './components/Incorrectpin/Incorrectpin';
import FourOFour from './helpers/FourOFour';


function App () {

  // User state
  const [user, setUser] = useState({});


  console.log('User: ', user);
  console.log('Bills: ', localStorage.getItem('bills'));


  // If authenticated, store localStore user in state and set number of bills ATM is carrying
  useEffect(()=>{
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
      const billObj = {
        '20': 7,
        '10': 15,
        '5': 4,
      };
      if (!localStorage.getItem('bills')) {
        localStorage.setItem('bills', JSON.stringify(billObj));
      }
    }
  },[]);

  // Authenticate user via API
  const authUser = (pin) => {
    return fetch('https://frontend-challenge.screencloud-michael.now.sh/api/pin/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({pin: pin}) // Send pin as JSON
    })
      .then(response => response.json())
      .then(data => {
        if (data.currentBalance) { // If user is returned
          localStorage.setItem('user', JSON.stringify(data)); // Save user in local storage
          window.location.replace('/'); // Redirect to root route
        } else window.location.replace('/incorrectpin'); // Else redirect to incorrectpin page
      })
      .catch(error => console.log('Can not get user: ', error));
  };





  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            {user.currentBalance ? <><Navbar/><Dashboard user={user}/></> : <><Navbar/><Splashscreen/></>}
          </Route>
          <Route exact path='/auth'>
            <Navbar/><Pin authUser={authUser}/>
          </Route>
          <Route exact path='/withdrawal'>
            {user.currentBalance  ? <><Navbar/><Withdrawal user={user}/></> : <FourOFour/>}
          </Route>
          <Route exact path='/incorrectpin'>
            <Incorrectpin/>
          </Route>
          <Route path='/'> {/* If user visits any page not specified, redirect to 404 */}
            <FourOFour/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
