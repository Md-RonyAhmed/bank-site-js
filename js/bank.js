document.getElementById('deposit-btn').addEventListener('click', function () {
  const depositInput = document.getElementById('deposit-input');
  const depositAmount = parseFloat(depositInput.value);
  const depositText = document.getElementById('deposit-amount');

  const depositTotal = parseFloat(depositText.innerText);
 
  // update deposit amount
  const totalDeposit = depositAmount + depositTotal;
  depositText.innerText = totalDeposit;

  const balanceText = document.getElementById('balance-amount');
  const balanceAmount = parseFloat(balanceText.innerText);
  // update balance amount
  const totalBalance = depositAmount + balanceAmount;
  balanceText.innerText = totalBalance;

  depositInput.value = '';
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmount = parseFloat(withdrawInput.value);
  const withdrawText = document.getElementById('withdraw-amount');

  const withdrawTotal = parseFloat(withdrawText.innerText);

  // update withdraw amount
  const totalWithdraw = withdrawAmount + withdrawTotal;
  withdrawText.innerText = totalWithdraw;

  const balanceText = document.getElementById('balance-amount');
  const balanceAmount = parseFloat(balanceText.innerText);
  // update balance amount
  const totalBalance = balanceAmount - withdrawAmount;
  balanceText.innerText = totalBalance;

  withdrawInput.value = '';
});