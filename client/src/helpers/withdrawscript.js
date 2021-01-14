


const withdraw = (amount, user) => {

  // Get number of bills from local storage
  const bills = JSON.parse(localStorage.getItem('bills'));

  // If ATM is out of bills, return outOfBills string
  if (bills['5'] === 0 && bills['10'] === 0 && bills['20'] == 0 ) {
    return 'Can not complete withdrawal: No avalible notes';
  }

  // Object to keep track of withdrawn notes
  const billsWithdrawn = {
    '20': 0,
    '10': 0,
    '5': 0,
    'currentSum': 0 // Current sum avalible to be withdrawn
  };
  const targetSum = Number(amount); // Sum requested to be withdrawn

  // Withdraw one note of each denomination until target is reached - as long as there are bills left
  while (billsWithdrawn.currentSum < targetSum && (bills['5'] != 0 || bills['10'] != 0 || bills['20'] != 0 )) {
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
  }


  // Check remaining balance after withdrawal
  const remainingBalance = user.currentBalance - billsWithdrawn.currentSum;

  // If user tries to overdraw account with more than £100
  if (remainingBalance < -100) {
    return 'Can not complete withdrawal: Overdraft exceeded';
  }

  // Update localStorage with new information
  const completeWithdrawal = remainingBalance => {
    const updatedUser = { currentBalance: remainingBalance };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    localStorage.setItem('bills', JSON.stringify(bills));
    return billsWithdrawn;
  };

  // Warn user if attempts to overdraw account by less than £100
  const overdraftProtection = rBalance => {
    if (0 > rBalance && rBalance > -101) {
      if (confirm(`Your new account balance will be £${rBalance}. You are allowed overdraft up to £100. Do you want to continue?`)) {
        return completeWithdrawal(rBalance);
      } else {
        return 'Can not complete withdrawal: Canceled by user';
      }
    } else return completeWithdrawal(rBalance);
  };


  // Procced with withdrawal - if ATM is low on notes, confirm that user accepts receiving a lower sum
  if (billsWithdrawn.currentSum != targetSum) {
    if (confirm(`The ATM is only capable of dispensing ${billsWithdrawn.currentSum}. Do you want to continue?`)) {
      return overdraftProtection(remainingBalance);
    } else {
      return 'Can not complete withdrawal: Canceled by user';
    }
  } else return overdraftProtection(remainingBalance);

};


export {
  withdraw
};



