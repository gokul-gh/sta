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

let addItems = () => {
  let arrayInput = parseInt(arrayInputId.value);
  arrayValues.push(arrayInput);
  arrayInputId.value = "";
  displayArrayArea.value = "";
  displayArrayArea.value += `${arrayValues} `;
};

let calculate = () => {
  chunkedArray = [];
  let chunkSizeInput = parseInt(chunkSizeInputId.value);
  for (
    let iteration = 0;
    iteration < arrayValues.length;
    iteration += chunkSizeInput
  ) {
    chunkedArray.push(arrayValues.slice(iteration, iteration + chunkSizeInput));
  }
  chunkSizeInputId.value = "";
  chunkedArrayOutput.value = "";
  chunkedArrayOutput.value += JSON.stringify(chunkedArray);
};

let reset = () => {
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
