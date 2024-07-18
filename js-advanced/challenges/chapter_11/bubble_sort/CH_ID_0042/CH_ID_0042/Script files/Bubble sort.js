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

//Constant declaration
const ERR_INPUT = "Enter valid input";
const EMPTY_ARRAY = "Array is empty. Add values";
const MAX_VALUE = 1000;

//Function to add input to array
const addItems = () => {
  let arrayInput = Number(arrayInputId.value);
  if (arrayInputId.value != "" && arrayInput <= MAX_VALUE) {
    arrayValues.push(arrayInput);
  } else {
    alert(ERR_INPUT);
  }
  arrayInputId.value = "";
  arrayOutputArea.value = arrayValues;
  bubbleArray = arrayValues;
};

//Function to display array in ascending order and descending order using non-array method
const bubbleSort = () => {
  if (bubbleArray.length != 0) {
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
  } else {
    alert(EMPTY_ARRAY);
  }
};

//Function to sort array in ascending and descending order based on array method
const arraySort = () => {
  if (arrayValues.length != 0) {
    arrayValues.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
    arrayAscendingOutput.value = arrayValues;

    arrayValues.sort((firstNumber, secondNumber) => secondNumber - firstNumber);
    arrayDescendingOutput.value = arrayValues;
  } else {
    alert(EMPTY_ARRAY);
  }
};

//Function to clear values
const reset = () => {
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
