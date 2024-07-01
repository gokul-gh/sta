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

//Function to add inputs to array
let addItems = () => {
  let arrayInput = parseInt(arrayInputId.value);
  if (arrayValues.length < 10) {
    arrayValues.push(arrayInput);
  }
  arrayOutput.value = "";
  arrayInputId.value = "";
  arrayOutput.value = arrayValues;
};

//Function to push input to array
let pushItems = () => {
  let pushInput = parseInt(pushInputId.value);
  arrayValues.push(pushInput);
  pushInputId.value = "";
  afterPushOutput.value = "";
  afterPushOutput.value = arrayValues;
};

//Function to shift value from array
let shift = () => {
  arrayValues.shift();
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
