
import './Navbar.css';

function Navbar () {

  // Clear localStorage of user
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('bills');
    window.location.replace('/');
  };


  return (
    <>
    Navbar
      {localStorage.getItem('user') ? <button onClick={logout}>Logout</button> : null}
    </>
  );
}

export default Navbar;

