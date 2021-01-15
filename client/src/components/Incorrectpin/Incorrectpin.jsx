

function Incorrectpin () {

  // Redirect user back to login page
  setTimeout(() => window.location.replace('/auth'), 2000);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '3rem',
      color: 'white',
      textShadow: '0px 5px 10px black',
    }}>
      <div>Incorrect PIN - redirecting you back...</div>
    </div>
  );
}

export default Incorrectpin;

