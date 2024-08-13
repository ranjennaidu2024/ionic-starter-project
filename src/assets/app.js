var reasonInput = document.querySelector("#input-reason");
var amountInput = document.querySelector("#input-amount");
var cancelBtn = document.querySelector("#btn-cancel");
var confirmBtn = document.querySelector("#btn-confirm");
var expensesList = document.querySelector("#expenses-list");

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
});
