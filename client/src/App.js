/* import { useState } from 'react'; */
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Pin from './components/Pin/Pin';
import Splashscreen from './components/Splashscreen/Splashscreen';
import Withdrawal from './components/Withdrawal/Withdrawal';
import Completed from './components/Completed/Completed';
import Incorrectpin from './components/Incorrectpin/Incorrectpin';
import FourOFour from './helpers/FourOFour';


function App () {

  /*   // User state
  const [user, setUser] = useState({});
  // Auth state
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); */


  // Authenticate user via API
  const authUser = (pin) => {
    return fetch('https://frontend-challenge.screencloud-michael.now.sh/api/pin/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({pin: pin})
    })
      .then(response => response.json())
      .then(data => {
        if (data.currentBalance) {
          console.log(data.currentBalance);
          localStorage.setItem('user', data);
          window.location.replace('/');
        } else window.location.replace('/incorrectpin');
      })
      .catch(error => console.log('Can not get user: ', error));
  };



  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            {localStorage.getItem('user') ? <><Navbar/><Dashboard/></> : <Splashscreen/>}
          </Route>
          <Route exact path='/auth'>
            <Pin authUser={authUser}/>
          </Route>
          <Route exact path='/withdrawal'>
            {localStorage.getItem('user') ? <><Navbar/><Withdrawal/></> : <FourOFour/>}
          </Route>
          <Route exact path='/completed'>
            {localStorage.getItem('user') ? <><Navbar/><Completed/></> : <FourOFour/>}
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
