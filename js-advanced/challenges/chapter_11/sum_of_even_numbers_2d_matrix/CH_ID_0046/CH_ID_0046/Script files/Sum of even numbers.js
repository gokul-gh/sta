/*
 *************************************************************
 *   Name of the challenge: Sum of the diagonals(2D Array)   *
 *            Challenge No: 23                               *
 *            Developed by: VHI tech                         *
 *           Programmed by: Kanagalakshmi                    *
 *     Maintenance history: Kanagalakshmi    Ticket No:      *
 *************************************************************  */
//Variables Declaration
let rowsColumnsInputId = document.getElementById("firstId");
let evenSumOutput = document.getElementById("orderId");
let gridId = document.getElementById("grid-container");
gridId.style.display = "grid";

let inputElement,
  rowsColumnsInput,
  evenSum = 0,
  matrixValues = [],
  finalMatrix = [];

//Function to create input fields
const getRow = (value) => {
  rowsColumnsInput = parseInt(rowsColumnsInputId.value);

  gridId.style.gridTemplateColumns = `repeat(${rowsColumnsInput}, 50px)`;
  while (gridId.firstChild) {
    gridId.removeChild(gridId.firstChild);
  }

  for (
    let iteration = 1;
    iteration <= rowsColumnsInput * rowsColumnsInput;
    iteration++
  ) {
    inputElement = document.createElement("input");
    inputElement.type = "number";

    gridId.appendChild(inputElement);
  }
  evenSumOutput.value = "";
};

//Function to find sum of all even numbers
const addItems = () => {
  matrixValues = [];
  finalMatrix = [];
  evenSum = 0;
  gridId.querySelectorAll("input").forEach((element) => {
    matrixValues.push(parseInt(element.value));
    if (element.value % 2 == 0) {
      evenSum += parseInt(element.value);
    }
  });

  for (
    let iteration = 0;
    iteration < matrixValues.length;
    iteration += rowsColumnsInput
  ) {
    finalMatrix.push(
      matrixValues.slice(iteration, iteration + rowsColumnsInput),
    );
  }

  evenSumOutput.value = evenSum;
};

//Reset function to clear values and input tags
const reset = () => {
  rowsColumnsInputId.value = "";

  while (gridId.firstChild) {
    gridId.removeChild(gridId.firstChild);
  }
  evenSumOutput.value = "";
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

// "Create a function that returns the sum of all even elements in a 2D matrix.

// Examples
// sumOfEvens([
//  [1, 0, 2],
//  [5, 5, 7],
//  [9, 4, 3]
// ]) ➞ 6

// // 2 + 4 = 6

// sumOfEvens([
//  [1, 1],
//  [1, 1]
// ]) ➞ 0
//Input declaration
