/*            *************************************************************
 *   Name of the challenge:                                     *
 *            Developed by:                                     *
 *           Programmed by:                                     *
 *     Maintenance history:                     Ticket No:      *
 *************************************************************  */

//Variables Declaration
let inputElementId = document.getElementById("arrayItems");
let displayArrayId = document.getElementById("displayArray");
let displaySquaresSum = document.getElementById("orderId");
let inputElement,
  arrayElement = [],
  sum = 0;

//Constant declaration
const ERR_MESSAGE = "Enter valid input";
const MIN_VALUE = -1000;
const MAX_VALUE = 1000;

//Function to add input element to array
let addItems = () => {
  displayArrayId.value = "";
  inputElement = Number(inputElementId.value);
  if (
    inputElementId.value != "" &&
    inputElement >= MIN_VALUE &&
    inputElement <= MAX_VALUE
  ) {
    arrayElement.push(inputElement);
    inputElementId.value = "";
  } else {
    alert(ERR_MESSAGE);
  }
  displayArrayId.value = arrayElement;
};

//Function to find sum of squares
let sumOfSquares = () => {
  if (arrayElement.length != 0) {
    arrayElement.reduce(function (accumulator, currentValue) {
      sum += Math.pow(currentValue, 2);
    }, 0);

    displaySquaresSum.value = sum;
  } else {
    alert(ERR_MESSAGE);
  }
};

//Reset function to clear input values
let reset = () => {
  inputElementId.value = "";
  displayArrayId.value = "";
  displaySquaresSum.value = "";
  arrayElement = [];
  sum = 0;
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
