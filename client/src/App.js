
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Pin from './components/Pin/Pin';
import Splashscreen from './components/Splashscreen/Splashscreen';
import Withdrawal from './components/Withdrawal/Withdrawal';
import Completed from './components/Completed/Completed';
import FourOFour from './helpers/FourOFour';


function App () {


  // User state
  const [user, setUser] = useState({});

  return (
    <>
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path='/'>
            {user ? <><Navbar/><Dashboard/></> : <Splashscreen/>}
          </Route>
          <Route exact path='/auth'>
            <Pin/>
          </Route>
          <Route exact path='/withdrawal'>
            {user ? <><Navbar/><Withdrawal/></> : <FourOFour/>}
          </Route>
          <Route exact path='/completed'>
            {user ? <><Navbar/><Completed/></> : <FourOFour/>}
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
