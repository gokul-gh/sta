//DOM declaration
let firstDate = document.getElementById("firstDateId");
let secondDate = document.getElementById("secondDateId");
let dropDownValueId = document.getElementById("selectId");

let forReverseOutput = document.getElementById("reverseId");
let forLeapYearOutput = document.getElementById("leapId");
let forLeapCountOutput = document.getElementById("countLeap");

let whileReverseOutput = document.getElementById("whilereverseId");
let whileLeapYearOutput = document.getElementById("whileleapId");
let whileLeapCountOutput = document.getElementById("whilecountLeap");

let dowhileReverseOutput = document.getElementById("dowhilereverseId");
let dowhileLeapYearOutput = document.getElementById("dowhileleapId");
let dowhileLeapCountOutput = document.getElementById("dowhilecountLeap");

//Constant declaration
const MIN_YEAR = 1900;
const MAX_YEAR = 2500;

//Error message declaration
const ERR_MESSAGE =
  "Enter year value only from 1900 to 2500 or Enter valid inputs";

//Function to display year by the given requirement
function year() {
  let firstDateValue = new Date(firstDate.value);
  let secondDateValue = new Date(secondDate.value);
  let dropDownValue = dropDownValueId.value;
  let startYear = firstDateValue.getFullYear();
  let endYear = secondDateValue.getFullYear();
  let iteration,
    count = 0;

  //Clear previous outputs when selecting any loop choice from dropdown
  forReverseOutput.value = "";
  forLeapYearOutput.value = "";
  forLeapCountOutput.value = "";
  whileReverseOutput.value = "";
  whileLeapYearOutput.value = "";
  whileLeapCountOutput.value = "";
  dowhileReverseOutput.value = "";
  dowhileLeapYearOutput.value = "";
  dowhileLeapCountOutput.value = "";

  if (
    startYear >= MIN_YEAR &&
    endYear <= MAX_YEAR &&
    secondDateValue - firstDateValue >= 0
  ) {
    switch (dropDownValue) {
      case "forLoop":
        for (iteration = endYear; iteration >= startYear; iteration--) {
          forReverseOutput.value += `${iteration}\n`;
          if (
            (iteration % 4 == 0 && iteration % 100 != 0) ||
            iteration % 400 == 0
          ) {
            forLeapYearOutput.value += `${iteration}\n`;
            count++;
          }
        }
        forLeapCountOutput.value = count;
        break;

      case "whileLoop":
        iteration = endYear;
        while (iteration >= startYear) {
          whileReverseOutput.value += `${iteration}\n`;
          if (
            (iteration % 4 == 0 && iteration % 100 != 0) ||
            iteration % 400 == 0
          ) {
            whileLeapYearOutput.value += `${iteration}\n`;
            count++;
          }
          iteration--;
        }
        whileLeapCountOutput.value = count;
        break;

      case "dowhileLoop":
        iteration = endYear;
        do {
          dowhileReverseOutput.value += `${iteration}\n`;
          if (
            (iteration % 4 == 0 && iteration % 100 != 0) ||
            iteration % 400 == 0
          ) {
            dowhileLeapYearOutput.value += `${iteration}\n`;
            count++;
          }
          iteration--;
        } while (iteration >= startYear);
        dowhileLeapCountOutput.value = count;
        break;
    }
  }
  //Display error message if the input year is not between the range
  else {
    alert(ERR_MESSAGE);
    dropDownValueId.value = "";
  }
}

//Function to clear all values
function reset() {
  firstDate.value = "";
  secondDate.value = "";
  dropDownValueId.value = "";
  forReverseOutput.value = "";
  forLeapYearOutput.value = "";
  forLeapCountOutput.value = "";
  whileReverseOutput.value = "";
  whileLeapYearOutput.value = "";
  whileLeapCountOutput.value = "";
  dowhileReverseOutput.value = "";
  dowhileLeapYearOutput.value = "";
  dowhileLeapCountOutput.value = "";
}

//Code Logic
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});
