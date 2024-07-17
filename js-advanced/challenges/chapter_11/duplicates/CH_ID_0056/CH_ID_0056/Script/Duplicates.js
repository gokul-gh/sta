/*            *************************************************************
 *   Name of the challenge: Find Duplicates                  *
 *            Developed by:                                  *
 *           Programmed by:                                  *
 *     Maintenance history:                  Ticket No:      *
 *************************************************************  */

//Varibales Declaration
let arrayInputItemId = document.getElementById("arrayItems");
let displayArray = document.getElementById("displayArray");
let displayDuplictesId = document.getElementById("orderId");
let arrayElements = [];

//Constant declaration
const ERR_MESSAGE = "Enter valid input";
const MAX_VALUE = 1000;
const MIN_VALUE = -1000;

//Function to get input elements
let addItems = () => {
  displayArray.value = "";
  let arrayInputItem = Number(arrayInputItemId.value);
  if (
    arrayInputItemId.value != "" &&
    arrayInputItem >= MIN_VALUE &&
    arrayInputItem <= MAX_VALUE
  ) {
    arrayElements.push(arrayInputItem);
  } else {
    alert(ERR_MESSAGE);
  }
  displayArray.value = arrayElements;
  arrayInputItemId.value = "";
};

//Function to display duplicate in a array
let duplicates = () => {
  displayDuplictesId.value = "";
  if (arrayElements.length != 0) {
    arrayElements.reduce(function (accumulator, currentValue, index, array) {
      if (array.indexOf(currentValue) != index) {
        displayDuplictesId.value += `${array[index]} `;
      }
    }, 0);
  } else {
    alert(ERR_MESSAGE);
  }
};

//Reset function to clear values
let reset = () => {
  arrayInputItemId.value = "";
  displayArray.value = "";
  displayDuplictesId.value = "";
  arrayElements = [];
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
