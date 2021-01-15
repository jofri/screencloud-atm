

// Redirect user back to root
setTimeout(() => window.location.replace('/'), 2000);

function FourOFour () {
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
      <div>404</div>
    </div>
  );
}

export default FourOFour;

