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

//Function to add input element to array
let addItems = () => {
  displayArrayId.value = "";
  inputElement = parseInt(inputElementId.value);
  arrayElement.push(inputElement);

  displayArrayId.value += `[${arrayElement}]`;
};

//Function to find sum of squares
let sumOfSquares = () => {
  arrayElement.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array,
  ) {
    sum += Math.pow(currentValue, 2);
  }, 0);

  displaySquaresSum.value = sum;
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
