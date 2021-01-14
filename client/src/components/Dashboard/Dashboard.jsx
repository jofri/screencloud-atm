
import './Dashboard.css';

function Dashboard (props) {
  return (
    <>
    Dashboard<br/><br/><br/><br/>

      <p>Welcome: John Doe</p><br/><br/>
      <p>Balance: £{props.user.currentBalance}</p><br/><br/>
      <a href="/withdrawal">Get Cash</a>


    </>
  );
}

export default Dashboard;

