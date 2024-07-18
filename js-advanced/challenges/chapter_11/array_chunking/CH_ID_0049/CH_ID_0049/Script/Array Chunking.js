/*            *************************************************************
 *  Name of the challenge  : Array Chunking                   *
 *               Maintenance History                          *
 *  Developer              :                                  *
 *  Creation date          :               Ticket No:         *
 ************************************************************ */

// Write a funtion to retun Array Chunking.
// Example:
//  chunking([1,2,3,4,5,],2);
//  returns [[1,2],[3,4],[5]];"

// Declaration
let arrayInputId = document.getElementById("arrayItems");
let displayArrayArea = document.getElementById("displayArray");
let chunkSizeInputId = document.getElementById("pushItem");
let chunkedArrayOutput = document.getElementById("orderId");
let arrayValues = [],
  chunkedArray = [];

//Constant Declaration
const INPUT_ERR = "Enter valid input";
const MAX_VALUE = 1000;
const MIN_VALUE = -1000;

//Function to add elements to array
const addItems = () => {
  let arrayInput = Number(arrayInputId.value);
  if (
    arrayInputId.value != "" &&
    arrayInput >= MIN_VALUE &&
    arrayInput <= MAX_VALUE
  ) {
    arrayValues.push(arrayInput);
  } else {
    alert(INPUT_ERR);
  }
  arrayInputId.value = "";
  displayArrayArea.value = "";
  displayArrayArea.value += `${arrayValues} `;
};

//Function to do array chunk
const calculate = () => {
  chunkedArray = [];
  let chunkSizeInput = parseInt(chunkSizeInputId.value);
  if (
    chunkSizeInputId.value != "" &&
    chunkSizeInput > 0 &&
    chunkSizeInput == Number(chunkSizeInputId.value) &&
    arrayValues != ""
  ) {
    for (
      let iteration = 0;
      iteration < arrayValues.length;
      iteration += chunkSizeInput
    ) {
      chunkedArray.push(
        arrayValues.slice(iteration, iteration + chunkSizeInput)
      );
    }
    chunkSizeInputId.value = "";
    chunkedArrayOutput.value = "";
    chunkedArrayOutput.value += JSON.stringify(chunkedArray);
  } else {
    alert(INPUT_ERR);
  }
};

//Reset function to clear values
const reset = () => {
  arrayInputId.value = "";
  displayArrayArea.value = "";
  chunkSizeInputId.value = "";
  chunkedArrayOutput.value = "";
  arrayValues = [];
  chunkedArray = [];
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
