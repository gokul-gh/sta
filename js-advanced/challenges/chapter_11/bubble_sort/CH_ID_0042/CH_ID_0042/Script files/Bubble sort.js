/*            *************************************************************
 *  Name of the challenge  : Bubble Sort(Array)               *
 *  Developed for          : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer              :                                  *
 *  Creation date           :               Ticket No:        *
 ************************************************************* */

//Variables Declaration
let arrayInputId = document.getElementById("arrayItems");
let arrayOutputArea = document.getElementById("displayArray");
let nonArrayAscendingOutput = document.getElementById("orderId");
let nonArrayDescendingOutput = document.getElementById("descId");
let arrayAscendingOutput = document.getElementById("arrayorderId");
let arrayDescendingOutput = document.getElementById("arraydescId");
let arrayValues = [],
  bubbleArray = [];

//Function to add input to array
let addItems = () => {
  let arrayInput = parseInt(arrayInputId.value);
  arrayValues.push(arrayInput);
  arrayInputId.value = "";
  arrayOutputArea.value = "";
  arrayOutputArea.value = arrayValues;
  bubbleArray = arrayValues;
};

//Function to display array in ascending order and descending order using non-array method
let bubbleSort = () => {
  for (let outerIter = 0; outerIter < bubbleArray.length; outerIter++) {
    for (let innerIter = 0; innerIter < bubbleArray.length; innerIter++) {
      if (bubbleArray[outerIter] < bubbleArray[innerIter]) {
        bubbleArray[outerIter] =
          bubbleArray[outerIter] + bubbleArray[innerIter];
        bubbleArray[innerIter] =
          bubbleArray[outerIter] - bubbleArray[innerIter];
        bubbleArray[outerIter] =
          bubbleArray[outerIter] - bubbleArray[innerIter];
      }
    }
  }
  nonArrayAscendingOutput.value = bubbleArray;

  for (let outerIter = 0; outerIter < bubbleArray.length; outerIter++) {
    for (let innerIter = 0; innerIter < bubbleArray.length; innerIter++) {
      if (bubbleArray[outerIter] > bubbleArray[innerIter]) {
        bubbleArray[outerIter] =
          bubbleArray[outerIter] + bubbleArray[innerIter];
        bubbleArray[innerIter] =
          bubbleArray[outerIter] - bubbleArray[innerIter];
        bubbleArray[outerIter] =
          bubbleArray[outerIter] - bubbleArray[innerIter];
      }
    }
  }
  nonArrayDescendingOutput.value = bubbleArray;
};

//Function to sort array in ascending and descending order based on array method
let arraySort = () => {
  arrayValues.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
  arrayAscendingOutput.value = arrayValues;

  arrayValues.sort((firstNumber, secondNumber) => secondNumber - firstNumber);
  arrayDescendingOutput.value = arrayValues;
};

//Function to clear values
let reset = () => {
  arrayInputId.value = "";
  arrayOutputArea.value = "";
  nonArrayAscendingOutput.value = "";
  nonArrayDescendingOutput.value = "";
  arrayAscendingOutput.value = "";
  arrayDescendingOutput.value = "";
  arrayValues = [];
  bubbleArray = [];
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
