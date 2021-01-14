


function Bills (props) {
  return (
    <>
      <p>Dispensing:</p>
      <p>{props.bills['5']}x £5 bills</p>
      <p>{props.bills['10']}x £10 bills</p>
      <p>{props.bills['20']}x £20 bills</p>
    </>
  );
}

export default Bills;

