
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import eject from '../../assets/eject.svg';
import screencloud from '../../assets/screencloudlogo.svg';


function Navbar () {

  const classes = useStyles();

  // Clear localStorage of user
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('bills');
    window.location.replace('/');
  };

  return (
    <>
      <Button className={classes.logo} onClick={()=>{window.location.replace('/');}}><img className={classes.eject} src={screencloud} alt='Screencloud'/>ScreenCloud-ATM</Button>
      {/* If user is logged in, display eject card button */}
      {localStorage.getItem('user') ? <Button className={classes.button} onClick={logout}><img className={classes.eject} src={eject} alt='Eject'/>Eject Card</Button> : null}
    </>
  );
}


const useStyles = makeStyles(() => ({
  button: {
    height: '5vh',
    marginTop: '2vh',
    right: '2vw',
    position: 'absolute',
  },
  logo: {
    height: '5vh',
    marginTop: '2vh',
    left: '2vw',
    position: 'absolute',
  },
  eject: {
    width: '1rem',
    marginRight: '0.5vw',
  },
}));

export default Navbar;

