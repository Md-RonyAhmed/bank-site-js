
function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const amount = parseFloat(input.value);
  input.value = '';
  return amount;
}

function updateTotalAmount(amountId,totalAmount) {
  const amount = document.getElementById(amountId);
  const total = parseFloat(amount.innerText);
  // update deposit amount
  amount.innerText = totalAmount + total;
}

function updateBalance(amountId,balance,isAdd) {
  const balanceText = document.getElementById(amountId);
  const balanceAmount = parseFloat(balanceText.innerText);
  // update balance amount
  if (isAdd === true) {
    balanceText.innerText = balance + balanceAmount;
  } else {
    balanceText.innerText = balanceAmount - balance;
  }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
  const depositAmount = getInputValue('deposit-input');
  const totalDeposit = updateTotalAmount('deposit-amount', depositAmount);
  const totalBalance = updateBalance('balance-amount',depositAmount,true);
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
  const withdrawAmount = getInputValue('withdraw-input');
  const totalDeposit = updateTotalAmount('withdraw-amount', withdrawAmount);
  const totalBalance = updateBalance('balance-amount', withdrawAmount, false);
});