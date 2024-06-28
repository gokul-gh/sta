/*            *************************************************************
 *   Name of the challenge:                                  *
 *            Developed by:                                  *
 *           Programmed by:                                  *
 *     Maintenance history:                  Ticket No:      *
 *************************************************************  */

//Variables Declaration
let inputAmountId = document.getElementById("amountId");
let coinElementInputId = document.getElementById("arrayItems");
let coinsArrayDisplay = document.getElementById("displayArray");
let amountDisplay = document.getElementById("amountArray");

let coinArray = [],
  inputAmount;

//Function to add input elements into an array
let addItems = () => {
  inputAmount = parseInt(inputAmountId.value);
  let coinElementInput = parseInt(coinElementInputId.value);
  coinArray.push(coinElementInput);
  coinsArrayDisplay.value = coinArray;
};

//Function to calculate amount to coins
let amountToCoins = () => {
  amountDisplay.value = "";
  coinArray.forEach((element) => {
    amountDisplay.value += `${Math.floor(inputAmount / element)} `;
    inputAmount %= element;
  });
};

//Reset function to clear values
let reset = () => {
  inputAmountId.value = "";
  coinElementInputId.value = "";
  coinsArrayDisplay.value = "";
  amountDisplay.value = "";
  coinArray = [];
};

// Screen date and time declaration.
let displayDate = new Date();
//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});
