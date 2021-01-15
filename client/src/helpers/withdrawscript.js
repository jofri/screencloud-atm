


const withdraw = (amount, user) => {

  // Get number of bills from local storage
  const bills = JSON.parse(localStorage.getItem('bills'));

  // If ATM is out of bills, return 'No avalible notes' string
  if (bills['5'] === 0 && bills['10'] === 0 && bills['20'] == 0 ) {
    return ['Can not complete withdrawal: Notes not avalible'];
  }

  // If ATM is out of £5 notes and user request amount ending in 5
  if (amount % 10 === 5 && bills['5'] === 0) return ['Can not complete withdrawal: Notes not avalible'];

  // Confirm that amount match bills avalible
  if (amount % 10 != 5 && amount % 10 != 0) return ['Can not complete withdrawal: Please specify an amount ending in 5 or 0'];


  // Object to keep track of withdrawn notes
  const billsWithdrawn = {
    '20': 0,
    '10': 0,
    '5': 0,
    'currentSum': 0 // Current sum avalible to be withdrawn
  };
  const targetSum = Number(amount); // Sum requested to be withdrawn
  let loopGuard = 0;

  // Withdraw one note of each denomination until target is reached - as long as there are bills left
  while (billsWithdrawn.currentSum < targetSum && (bills['5'] != 0 || bills['10'] != 0 || bills['20'] != 0 ) && loopGuard < 100 ) {
    for (let key in bills) {
      if (billsWithdrawn.currentSum < targetSum) {
        if (bills[key] > 0) { // Only withdraw if note is avalible in ATM
          if ((billsWithdrawn.currentSum + Number(key)) <= targetSum) { // Only withdraw if note does not surpass target sum
            billsWithdrawn.currentSum += Number(key);
            bills[key]--;
            billsWithdrawn[key]++;
          }
        }
      }
    }
    loopGuard++;
  }


  // Check remaining balance after withdrawal
  const remainingBalance = user.currentBalance - billsWithdrawn.currentSum;

  // If user tries to overdraw account with more than £100
  if (remainingBalance < -100) {
    return ['Can not complete withdrawal: Overdraft exceeded'];
  }

  return [remainingBalance, billsWithdrawn, bills];


};


export {
  withdraw
};



