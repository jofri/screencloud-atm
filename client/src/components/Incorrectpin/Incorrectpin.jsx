
import './Incorrectpin.css';

function Incorrectpin () {

  // Redirect user back to login page
  setTimeout(() => window.location.replace('/auth'), 2000);

  return (
    <>
    Incorrect PIN - redirecting you back...
    </>
  );
}

export default Incorrectpin;

