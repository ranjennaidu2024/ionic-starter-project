var reasonInput = document.querySelector("#input-reason");
var amountInput = document.querySelector("#input-amount");
var cancelBtn = document.querySelector("#btn-cancel");
var confirmBtn = document.querySelector("#btn-confirm");
var expensesList = document.querySelector("#expenses-list");
var totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

var clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
  console.log("it works!");

  var enteredReason = reasonInput.value;
  var enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;

  expensesList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;

  clear();
});

cancelBtn.addEventListener("click", clear);
