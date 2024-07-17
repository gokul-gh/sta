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

//Constant declaration
const ERROR_MESSAGE = "Enter valid input";
const MIN_VALUE = 0;
const MAX_VALUE = 1000;

//Function to add inputs to array
const addElements = () => {
  let firstChocolateLength = Number(firstChocolateLengthId.value);
  let firstChocolateWidth = Number(firstChocolateWidthId.value);
  let secondChocolateLength = Number(secondChocolateLengthId.value);
  let secondChocolateWidth = Number(secondChocolateWidthId.value);

  if (
    firstChocolateLengthId.value != "" &&
    firstChocolateWidthId.value != "" &&
    firstChocolateLength >= MIN_VALUE &&
    firstChocolateLength <= MAX_VALUE &&
    firstChocolateWidth >= MIN_VALUE &&
    firstChocolateWidth <= MAX_VALUE &&
    secondChocolateLengthId.value != "" &&
    secondChocolateWidthId.value != "" &&
    secondChocolateLength >= MIN_VALUE &&
    secondChocolateLength <= MAX_VALUE &&
    secondChocolateWidth >= MIN_VALUE &&
    secondChocolateWidth <= MAX_VALUE
  ) {
    firstArray.push([firstChocolateLength, firstChocolateWidth]);
    chocolateArrayOutput.value = `First Sister:\n${firstArray}\nSecond Sister:\n${secondArray}`;

    secondArray.push([secondChocolateLength, secondChocolateWidth]);
    chocolateArrayOutput.value = `First Sister:\n${firstArray}\nSecond Sister:\n${secondArray}`;
  } else {
    alert(ERROR_MESSAGE);
  }

  //Clear all inputs each time
  getAllInputs.forEach((element) => {
    if (element.type == "number") {
      element.value = "";
    }
  });
};

//Function to calculate if chocolate area is equal
const calculate = () => {
  if (firstArray != "" && secondArray != "") {
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

    //Did 1 and 2 because of cypress, originally was true and false
    if (firstArea == secondArea) {
      isEqualOutput.value = 1;
    } else if (firstArea != secondArea) {
      isEqualOutput.value = 2;
    }
  } else {
    alert(ERROR_MESSAGE);
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
