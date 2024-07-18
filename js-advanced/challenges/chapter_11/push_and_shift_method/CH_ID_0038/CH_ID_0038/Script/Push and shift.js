/*            *************************************************************
 *  Name of the challenge  : Push and Shift method            *
 *               Maintenance History                          *
 *  Developer              :                                  *
 *  Creation date           :               Ticket No:        *
 ************************************************************ */

//Input Declaration
let arrayInputId = document.getElementById("arrayItems");
let arrayOutput = document.getElementById("displayArray");
let pushInputId = document.getElementById("pushItem");
let afterPushOutput = document.getElementById("displayArrayitems");
let afterShiftOutput = document.getElementById("orderId");
let arrayValues = [];

//Constant declaration
const ERR_INPUT = "Enter valid input";
const MIN_VALUE = -1000;
const MAX_VALUE = 1000;

//Function to add inputs to array
let addItems = () => {
  let arrayInput = parseInt(arrayInputId.value);
  if (
    arrayValues.length < 10 &&
    arrayInputId.value != "" &&
    arrayInput >= MIN_VALUE &&
    arrayInput <= MAX_VALUE
  ) {
    arrayValues.push(arrayInput);
  } else {
    alert(ERR_INPUT);
  }
  arrayOutput.value = "";
  arrayInputId.value = "";
  arrayOutput.value = arrayValues;
};

//Function to push input to array
let pushItems = () => {
  let pushInput = parseInt(pushInputId.value);
  if (pushInputId.value != "") {
    arrayValues.push(pushInput);
  } else {
    alert(ERR_INPUT);
  }
  pushInputId.value = "";
  afterPushOutput.value = "";
  afterPushOutput.value = arrayValues;
};

//Function to shift value from array
let shift = () => {
  if (arrayValues != "") {
    arrayValues.shift();
  } else {
    alert(ERR_INPUT);
  }
  afterShiftOutput.value = "";
  afterShiftOutput.value = arrayValues;
};

//Reset function to clear values
let reset = () => {
  arrayInputId.value = "";
  arrayOutput.value = "";
  pushInputId.value = "";
  afterPushOutput.value = "";
  afterShiftOutput.value = "";
  arrayValues = [];
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
