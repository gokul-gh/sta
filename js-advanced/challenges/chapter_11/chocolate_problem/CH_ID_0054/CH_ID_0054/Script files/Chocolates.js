/*            *************************************************************
 *   Name of the challenge: Chocolate Problem (Reduce Method)*
 *            Developed by:                                   *
 *           Programmed by:                                   *
 *     Maintenance history:                   Ticket No:      *
 *************************************************************  */

//Variables Declaration
let firstChocolateLengthId = document.getElementById("firstLength");
let firstChocolateWidthId = document.getElementById("firstWidth");
let secondChocolateLengthId = document.getElementById("secondLength");
let secondChocolateWidthId = document.getElementById("secondWidth");

let chocolateArrayOutput = document.getElementById("chocolateArray");
let isEqualOutput = document.getElementById("arrayId");

let getAllInputs = document.querySelectorAll("input");

let firstArray = [],
  secondArray = [];

//Function to add inputs to array
const addElements = () => {
  let firstChocolateLength = parseInt(firstChocolateLengthId.value);
  let firstChocolateWidth = parseInt(firstChocolateWidthId.value);
  let secondChocolateLength = parseInt(secondChocolateLengthId.value);
  let secondChocolateWidth = parseInt(secondChocolateWidthId.value);

  getAllInputs.forEach((element) => {
    if (element.type == "number") {
      element.value = "";
    }
  });

  if (
    !isNaN(firstChocolateLength) &&
    !isNaN(firstChocolateWidth) &&
    firstChocolateLength != 0 &&
    firstChocolateWidth != 0
  ) {
    firstArray.push([firstChocolateLength, firstChocolateWidth]);
  }
  if (
    !isNaN(secondChocolateLength) &&
    !isNaN(secondChocolateWidth) &&
    secondChocolateLength != 0 &&
    secondChocolateWidth != 0
  ) {
    secondArray.push([secondChocolateLength, secondChocolateWidth]);
  }

  chocolateArrayOutput.value = `First Sister:\n${JSON.stringify(firstArray)}\nSecond Sister:\n${JSON.stringify(secondArray)}`;
};

//Function to calculate if chocolate area is equal
const calculate = () => {
  let firstArea = firstArray.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue[0] * currentValue[1],
    0
  );

  let secondArea = secondArray.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue[0] * currentValue[1],
    0
  );

  if (firstArea == secondArea) {
    isEqualOutput.value = "True";
  } else if (firstArea != secondArea) {
    isEqualOutput.value = "Not true";
  }
};

//Reset function to clear values
const reset = () => {
  (firstArray = []), (secondArray = []);
  chocolateArrayOutput.value = "";
  getAllInputs.forEach((element) => {
    if (element.type) {
      element.value = "";
    }
  });
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
